# map-update-status

watches the configured map's MapView 'updating' property. When it is true, it displays a message. This update can be triggered by layer definition change or pan/zoom operation.

Known issue: sometimes the 'updating' property does not change to false despite the drawing (apparently) being complete. To work around this, there is a timer that will force the state to be false regardless of what's reported by the MapView property.