# scientific-name-autocomplete

widget which uses Material UI autocomplete widget to provide a selector to choose a single scientific name to filter the map.
The list is populated from an external [configuration file](https://www.ncei.noaa.gov/waf/dsc-data/config/DeepSeaCorals/scientific_names.json) so the list of available selections does not change based on map extent or other filters.

This widget must be configured to publish framework filter change event to other interested widgets.

Due to the mui dependency, 'npm install' must be run in the widget's directory before use.