/** @jsx jsx */
import { AllWidgetProps, jsx } from 'jimu-core'
import { useState, useEffect, useRef } from 'react'
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
// import { defaultMessages as jimuUIMessages } from 'jimu-ui'
import { IMConfig } from '../config'
import reactiveUtils, {watch} from 'esri/core/reactiveUtils'

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const [view, setView] = useState<JimuMapView>(null)
  const [isUpdating, setIsUpdating] = useState(false)
  // const timeoutId = useRef(null) // no longer needed
  // const timeoutForMapUpdate = 30000 // no longer needed

  /* Esri SMG Code review: the following 3 reactiveUtils implementations replace the below useEffect
  and seem to be performing as necessary
  */
  reactiveUtils.watch(
    () => view?.view?.updating,
    (updating) => {
        if (updating === true) {
      // console.log("updating")
      setIsUpdating(updating)
      // setIsUpdating(updating)
        } else {
          // console.log("updating complete")
          setIsUpdating(updating)
        }
    }
  )

  // Handle widget instantiation updating condition
  reactiveUtils.whenOnce(
    () => view?.view?.updating)
    .then((status) => {
      setIsUpdating(status)
    });
  
  // Handle widget instantiation not updating condition
  reactiveUtils.whenOnce(
    () => !view?.view?.updating)
    .then((status) => {
      setIsUpdating(!status)
    });

  // useEffect(() => {
  //   if (!view) { return }

  //   function setMapUpdateTimeout () {
  //     timeoutId.current = setTimeout(overrideMapStatus, timeoutForMapUpdate)
  //   }

  //   function overrideMapStatus () {
  //     console.warn(`forcing MapView 'updating' status to 'false' after waiting for ${timeoutForMapUpdate / 1000} seconds`)
  //     setIsUpdating(false)
  //   }

  //   const mapView = view.view

  //   const updatingWatchHandle = mapView.watch(
  //     'updating',
  //     (newStatus) => {
  //       // don't allow isUpdating to remain true for > 30 secs
  //       if (newStatus) {
  //         setMapUpdateTimeout()
  //       } else {
  //         clearTimeout(timeoutId.current)
  //       }
  //       setIsUpdating(newStatus)
  //     })

  //   return () => {
  //     // remove at time componment is destroyed
  //     if (updatingWatchHandle) {
  //       updatingWatchHandle.remove()
  //     }
  //     if (timeoutId.current) { clearTimeout(timeoutId.current) }
  //   }
  // }, [view])

  // only called when widget first loaded
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (!jmv) { throw new Error('no MapView') }
    setView(jmv)
  }

  return (
    <div className="widget-use-map-view" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={activeViewChangeHandler}>
      </JimuMapViewComponent>

      <div style={{ overflowY: 'auto', height: '100%', paddingLeft: '5px' }}>
        {(!view)
          ? <div>
              <span>MapView must be configured</span>
            </div>
          : ''
        }
        {(!isUpdating)
          ? ''
          : <span style={{ fontSize: 'medium', color: 'red' }}>map is updating...</span>
        }
      </div>
    </div>
  )
}
