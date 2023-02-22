# data processing utilities
 used in preparing new releases of DSCRTP database to used with the application

## clean_database.py
generates a new CSV file from the raw CSV file suitable for uploading to ArcGIS Online to update (overwrite) the [feature layer](https://noaa.maps.arcgis.com/home/item.html?id=b664c55c156b4b7ea9e03d72eacfee74). Depends on the [h3 python module](https://pypi.org/project/h3/) as well as pandas, numpy.

## get_unique_scientific_names.py
outputs a JSON-formatted list of all the unique scientific names in the provided CSV file. This output is uploaded to [WAF](https://www.ncei.noaa.gov/waf/dsc-data/config/DeepSeaCorals/) and used by one of the widgets within the Deep Sea Corals viewer. Depends on the as pandas, numpy.

## h3_summary.py
generates a new CSV file from the raw CSV file summarizing selected environmental variables per unqiue H3 index value (i.e. hexbin). Depends on the [h3 python module](https://pypi.org/project/h3/) as well as pandas, numpy.
