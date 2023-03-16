/** @jsx jsx */

/*
 * there are two runtime events which impact this widget:
 *
 * 1) mapClick
 * this only requires that the hexbin summary be updated
 *
 * 2) filter changes (i.e. DataSource queryParams)
 * this requires that the graphics layer be updated (both boundaries and symbology)
 *
 * Both are handled (indirectly) via respective useEffect hooks, i.e.
 * event changes state -> triggers re-render -> useEffect runs
 *
 * Note that if a individual hexbin was selected at the time the queryParams
 * change, it will be deselected and the summary cleared. This is necessary
 * since a change in queryParams may cause a hexbin which was formerly displayed
 * to no longer be drawn
 */
import {
  AllWidgetProps,
  jsx,
  IMState,
  ReactRedux,
  appActions,
  getAppStore,
  jimuHistory
} from 'jimu-core'
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import FeatureLayer from 'esri/layers/FeatureLayer'
import Graphic from 'esri/Graphic'
import MapView from 'esri/views/MapView'
import PopupTemplate from 'esri/PopupTemplate'
// import TileLayer from 'esri/layers/TileLayer'
import * as reactiveUtils from 'esri/core/reactiveUtils'
import { useState, useEffect, useRef } from 'react'
import PhylumChart from './PhylumChart'
import { IMConfig } from '../config'
import defaultMessages from './translations/default'
import {
  getGraphics,
  getDepthRange,
  getPhylumCounts,
  getScientificNameCounts,
  toggleOutlineColor,
  getHighlightedGraphic,
  getEnvironmentalVariables
} from '../h3-utils'

const { useSelector } = ReactRedux

interface HexbinSummary {
  minDepth: number
  maxDepth: number
  phylumCounts: PhylumCount[]
  speciesCount: SpeciesCount
  scientificNameCounts: ScientificNameCount[]
  environmentalVariables?: EnvironmentalVariables
}

interface EnvironmentalVariables {
  salinity?: number
  min_salinity?: number
  max_salinity?: number
  oxygen?: number
  min_oxygen?: number
  max_oxygen?: number
  temperature?: number
  min_temperature?: number
  max_temperature?: number
}
interface PhylumCount {
  Count: number
  Phylum: string
}
interface ScientificNameCount {
  Count: number
  ScientificName: string
}

interface SpeciesCount {
  rawCount: number
  normalizedCount?: number
}

export default function H3Layer (props: AllWidgetProps<IMConfig>) {
  const graphicsLayerRef = useRef<GraphicsLayer>()
  const [selectedGraphic, setSelectedGraphic] = useState<Graphic|null>(null)
  const [hexbinSummary, setHexbinSummary] = useState<HexbinSummary>()
  const [serverError, setServerError] = useState(false)
  const queryParamsRef = useRef(null)
  const mapViewRef = useRef<MapView>(null)

  // for convenience in JSX. cannot destruct from object because selectedGraphic may be null
  const h3 = selectedGraphic?.attributes.h3
  const pointCount = selectedGraphic?.attributes.count

  // get state for this widget
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })
  queryParamsRef.current = widgetState?.queryParams

  // console.log(`re-rendering H3Layer. h3 = ${h3}; queryParams = ${widgetState?.queryParams}`)

  // Get the widget state - because the sidebar state may change in the runtime, via Redux's useSelector hook
  const sidebarWidgetState = useSelector((state: IMState) => {
    const widgetState = state.widgetsState[props.config.sidePanelId]
    return widgetState
  })

  const handleExpandSidebar = (sectionId: string, viewId: string): void => {
    if (!sidebarWidgetState) {
      console.warn(`Sidebar ${props.config.sidePanelId} not available`)
      return
    }
    // counterintuitive naming convention: "collapse=true" means panel is expanded
    getAppStore().dispatch(appActions.widgetStatePropChange(
      props.config.sidePanelId,
      'collapse',
      true
    ))
    jimuHistory.changeView(sectionId, viewId)
  }

  useEffect(() => {
    // console.log('queryParams changed, updating graphics layer: ', widgetState?.queryParams)
    resetHexbinSummary()
    if (!graphicsLayerRef.current) {
      // console.warn('GraphicsLayer not yet available')
      return
    }

    getGraphics(widgetState?.queryParams).then(graphics => {
      graphicsLayerRef.current.removeAll()
      graphicsLayerRef.current.graphics.addMany(graphics)
    })
  }, [widgetState?.queryParams])

  useEffect(() => {
    if (selectedGraphic) {
      const h3 = selectedGraphic.attributes.h3
      // console.log('selected hexbin changed: ', h3)
      deselectPreviousHexbin()
      toggleOutlineColor(selectedGraphic)

      // reset hexbin summary
      setHexbinSummary(null)
      setServerError(null)

      // use queryParamsRef to avoid having to add widgetState.queryParams to dependency array
      const whereClause = queryParamsRef.current || '1=1'

      Promise.all([
        getDepthRange(h3, whereClause),
        getPhylumCounts(h3, whereClause),
        getScientificNameCounts(h3, whereClause),
        getEnvironmentalVariables(h3)
        // getSpeciesCount(h3, whereClause)
      ]).then(([depthRange, phylumCounts, scientificNameCounts, environmentalVariables]) => {
        setHexbinSummary({
          minDepth: depthRange.MinDepth,
          maxDepth: depthRange.MaxDepth,
          phylumCounts,
          scientificNameCounts,
          speciesCount: { rawCount: scientificNameCounts.length },
          environmentalVariables
        })
        // console.log('promises completed: ', depthRange, phylumCounts, scientificNameCounts, environmentalVariables)
      }).catch((reason) => {
        console.error('Error getting HexbinSummary. ', reason)
        setServerError(reason)
      })
    } else {
      // console.log('no selected hexbin...')
      resetHexbinSummary()
      deselectPreviousHexbin()
    }
  }, [selectedGraphic])

  function mapClickHandler (hitTestResult: __esri.HitTestResult) {
    // console.log('inside mapClickHandler with : ', hitTestResult)

    // hitTest options ensure that only Corals layer and Graphics layer tested
    const featureHits = hitTestResult.results?.filter(hitResult =>
      hitResult.type === 'graphic' && hitResult.layer.type === 'feature'
    ) as __esri.GraphicHit[]
    const graphicHits = hitTestResult.results?.filter(hitResult =>
      hitResult.type === 'graphic' && hitResult.layer.type === 'graphics'
    ) as __esri.GraphicHit[]
    console.log(`${featureHits?.length || 0} features; ${graphicHits?.length || 0} hexbins`)

    if (graphicHits?.length === 1) {
      // console.log('hexbin clicked: ', graphicHits[0].graphic.attributes.h3)
      setSelectedGraphic(graphicHits[0].graphic)
    } else if (graphicHits?.length === 0) {
      // console.log('outside hexbin')
      setSelectedGraphic(null)
    } else {
      // when click lands on hexbin boundary, arbitrarily use the first element in array
      setSelectedGraphic(graphicHits[0].graphic)
    }
    // open side panel and select view. featureHits takes priority
    if (featureHits.length) {
      handleExpandSidebar(props.config.sectionId, props.config.detailsViewId)
      mapViewRef.current.popup.visible = true
    } else if (graphicHits.length) {
      handleExpandSidebar(props.config.sectionId, props.config.summaryViewId)
      mapViewRef.current.popup.visible = false
    } else {
      // no hits - leave sidepanel in current state
      mapViewRef.current.popup.visible = false
    }
  }

  function deselectPreviousHexbin () {
    // finds only the *first* highlighted graphic but there should never be > 1
    const highlightedGraphic = getHighlightedGraphic(graphicsLayerRef.current)
    if (highlightedGraphic) {
      toggleOutlineColor(highlightedGraphic)
    }
  }

  function resetHexbinSummary () {
    setSelectedGraphic(null)
    setHexbinSummary(null)
  }

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (!jmv) {
      console.warn('no MapView')
      return
    }
    mapViewRef.current = jmv.view as MapView

    const graphicsLayer = new GraphicsLayer({
      title: 'Hexbins',
      listMode: 'show'
    })
    graphicsLayerRef.current = graphicsLayer

    jmv.view.when(() => {
      const coralsLayer = jmv.view.map.allLayers.filter(lyr => lyr.title === props.config.layerName).at(0) as FeatureLayer

      // define new simple popupTemplate to override one provided via WebMap
      // construct an explicit instance to make TypeScript happy
      const popupTemplate = new PopupTemplate({
        title: '{ScientificName}',
        content: 'Catalog Number: {CatalogNumber}'
      })
      coralsLayer.popupTemplate = popupTemplate

      jmv.view.map.add(graphicsLayer)
      // queryParams not needed since initial draw is for all features
      getGraphics().then(graphics => {
        graphicsLayerRef.current.removeAll()
        graphicsLayerRef.current.graphics.addMany(graphics)
      })

      const hitTestOptions = {
        include: [coralsLayer, graphicsLayer]
      }

      jmv.view.on('click', (evt) => {
        console.log('mapclick detected: ', evt)
        const startTimeForPopup = new Date()
        // TODO this is where flow stops when it fails to handle map click
        jmv.view
        .hitTest(evt, hitTestOptions)
        .then((response) => mapClickHandler(response))
        .finally(() => {
          const elapsedMillisecsForPopup = new Date().getTime() - startTimeForPopup.getTime()
          console.log(`popup completed in ${elapsedMillisecsForPopup / 1000} seconds`)
        })
/*
        // attempt to delay execution of hitTest on points, hexbin layers until webmap popup completes
        jmv.view.popup.fetchFeatures(evt).then((response) => {
          // default to empty array to keep TypeScript happy
          const layerViewPromises = response.promisesPerLayerView || []
          Promise.allSettled(layerViewPromises).then(() => {
            // popup should be complete at this point
            const elapsedMillisecsForPopup = new Date().getTime() - startTimeForPopup.getTime()
            console.log(`popup completed in ${elapsedMillisecsForPopup / 1000} seconds`)
            const startTimeForHitTest = new Date()
            jmv.view
              .hitTest(evt, hitTestOptions)
              .then((response) => mapClickHandler(response))
              .catch((error) => console.error('Error in hitTest: ', error))
              .finally(() => {
                const elapsedMillisecsForHitTest = new Date().getTime() - startTimeForHitTest.getTime()
                console.log(`hitTest completed in ${elapsedMillisecsForHitTest / 1000} seconds`)
              })
          }) // end promisesPerLayerView
          .finally(() => console.log('end promisesPerLayerView'))
        })
        .finally(() => console.log('end popup.fetchFeatures')) // end popup.fetchFeatures
  */
      }) // end view on click
    }) // end MapView#when
  } // end activeViewChangeHandler

  function formatHexbinSummary () {
    const totalNumberOfSpecies = hexbinSummary?.scientificNameCounts.reduce(
      (accumulator: number, currentValue: ScientificNameCount) => accumulator + currentValue.Count,
      0
    )

    const calcSpeciesPercentage = (count: number) => {
      const pct = Math.round((count / totalNumberOfSpecies) * 100)
      return (pct || '<1')
    }

    let textAreaContent = ''
    // list of scientificNameCounts guaranteed to have unique 'ScientificName'
    // hexbinSummary?.scientificNameCounts.sort((a, b) => a.ScientificName > b.ScientificName ? 1 : -1).forEach(it => {
    hexbinSummary?.scientificNameCounts.forEach(it => {
      textAreaContent += `${it.ScientificName}: ${it.Count} (${calcSpeciesPercentage(it.Count)}%)\n`
    })

    function salinity (environmentalVariables) {
      if (environmentalVariables?.salinity) {
        const str = `${environmentalVariables.min_salinity} / ${hexbinSummary.environmentalVariables.salinity} / ${environmentalVariables.max_salinity}`
        return (
          <li>salinity(PSU): {str}</li>
        )
      } else {
        return (<li>salinity: not available</li>)
      }
    }
    function temperature (environmentalVariables) {
      if (environmentalVariables?.temperature) {
        const str = `${environmentalVariables.min_temperature} / ${hexbinSummary.environmentalVariables.temperature} / ${environmentalVariables.max_temperature}`
        return (
          <li>temperature(&#8451;): {str}</li>
        )
      } else {
        return (<li>temperature: not available</li>)
      }
    }
    function oxygen (environmentalVariables) {
      if (environmentalVariables?.oxygen) {
        const str = `${environmentalVariables.min_oxygen} / ${hexbinSummary.environmentalVariables.oxygen} / ${environmentalVariables.max_oxygen}`
        return (
          <li>oxygen(mL/L): {str}</li>
        )
      } else {
        return (<li>oxygen: not available</li>)
      }
    }

    if (serverError) {
      return (
        <div>
          <p>Hexbin {h3} has {pointCount.toLocaleString()} sample(s)</p>
          <span>Server Error - currently unable to collect statistics, please try again</span>
        </div>
      )
    } else {
      return (
      <div>
        {/* <p>Extent: {widgetState?.extent ? convertAndFormatCoordinates(widgetState.extent, 3) : ''}</p> */}
        {/* <p>Filter: {widgetState?.queryParams ? widgetState.queryParams : 'none'}</p> */}
        <p style={{ fontSize: 'medium' }}> Hexbin {h3} has <span style={{ fontSize: 'large', fontWeight: 'bold' }}>{pointCount.toLocaleString()}</span> sample(s)</p>

        {hexbinSummary
          ? <div>
              <p style={{ fontSize: 'medium' }}>depths range from <span style={{ fontSize: 'large', fontWeight: 'bold' }}>{hexbinSummary.minDepth}</span> to <span style={{ fontSize: 'large', fontWeight: 'bold' }}>{hexbinSummary.maxDepth}</span> m</p>
              <div>
                <p style={{ fontSize: 'medium' }}>Phylum Counts:</p>
                {/* <ul>
                  {hexbinSummary.phylumCounts.map(el => { return <li>{el.Phylum}: {el.Count}</li> })}
                </ul> */}
                <PhylumChart data={hexbinSummary.phylumCounts}/>
              </div>
              <br/>
              <p style={{ fontSize: 'medium' }}><span style={{ fontSize: 'large', fontWeight: 'bold' }}>{hexbinSummary.speciesCount.rawCount}</span> unique scientific name(s)</p>
              {/* <ul>
              {hexbinSummary.scientificNameCounts.map(it => {
                return <li>{it.ScientificName}: {it.Count} ({calcSpeciesPercentage(it.Count)}%)</li>
              })}
              </ul> */}
              <textarea readOnly rows={5} style={{ width: '90%', marginLeft: '10px', marginRight: '15px' }}>
              {textAreaContent}
              </textarea>
              <div style={{ marginTop: '5px' }}>
                <span style={{ fontWeight: 'bold' }}>Environmental Variables</span> (min / median / max):
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  {salinity(hexbinSummary.environmentalVariables)}
                  {temperature(hexbinSummary.environmentalVariables)}
                  {oxygen(hexbinSummary.environmentalVariables)}
                </ul>
              </div>
            </div>
          : 'gathering summary information...'
        }
      </div>
      )
    }
  }

  return (
    <div>
      {h3 ? formatHexbinSummary() : <p>Please select a hexbin...</p>}
      {/* Esri SMG Code review: An alternative approach could be to set a jimuMapView variable that uses state.
      Then use the usEffect hook to run the hitTest code that's currenly within the activeViewChangeHandler function.
      Has this approach already been explored and discarded for some reason(s)?  */}
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={activeViewChangeHandler}
      />
    </div>

  )
}
