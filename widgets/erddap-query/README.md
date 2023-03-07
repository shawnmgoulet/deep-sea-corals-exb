# erddap-query

constructs a URL to link to ERDDAP [Data Access Form](https://www.ncei.noaa.gov/erddap/tabledap/deep_sea_corals.html) based on the current map extent and and filters that are applied. Since ERDDAP does not support spatial queries which cross the antimeridian,
this option is only available when the current map extent does not cross the antimeridian.

Listens to the framework's DATA_SOURCE_FILTER_CHANGE and EXTENT_CHANGE message types to update the ERDDAP URL. Note the widgets which modify the map's extent or layer definition query must be configured in the builder environment to publish the events to this widget.