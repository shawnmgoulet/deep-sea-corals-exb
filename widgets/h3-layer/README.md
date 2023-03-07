# h3-layer

## widget which constructs a client-side layer based on H3 tiles

Each tile has an attribute for the H3 index and a count of the points within that tile. Tiles are updated when the DataSource filter is changed
by another widget. Each change triggers a query to the hosted feature layer which includes the filter definition and returns a CSV list of index
id and count. These values update the client-side layer, populate the popup content, and are used in the symbology. Clicking on a tile triggers a
series of requests back to the server to aggregate stats for that particular tile like depth distribution, relative percentages of corals/sponges,
and a breakdown by taxon. This reporting may be delegated to a separate widget instead.

Listens to framework events for filter changes and widgets which modify the layer definition must be configured to publish messages to it.

This widget includes dependencies on [h3-js](https://www.npmjs.com/package/h3-js) and [d3](https://www.npmjs.com/package/@observablehq/plot) so 'npm install' must be run in the widget directory. It also depends on  [buckets-js](https://www.npmjs.com/package/buckets-js) but due to a packaging problem with that module, the source is included in the widget and not referenced in the package.json.
