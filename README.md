# Deep Sea Corals

webapp to discover and access data from [NOAA's National Database for Deep-Sea Corals and Sponges](https://deepseacoraldata.noaa.gov/data). Built using Esri's [ArcGIS Experience Builder](https://developers.arcgis.com/experience-builder/)

This repo contains the configuration used by the Experience Builder platform as well as the src for the [custom widgets](widgets) specific to this project.

Note that some of the custom widgets have their own dependencies that must be install via ```npm ci```.

There is a [utils](utils) directory containing scripts used to prepare the DSCRTP database for use with the application

## CI/CD

Repository includes GitHub [action](.github/workflows/build-app.yml) to automatically build and deploy to GitHub Pages based on [example](https://github.com/gavinr/experience-builder-devops-example) by [gavinr](https://github.com/gavinr).

Preview the automatically updated application via [GitHub Pages](https://ci-cmg.github.io/deep-sea-corals-exb/).

There is also a [jenkins](jenkins) directory containing a bash script that can be used in configuring a Jenkins job to automatically build the project

## developer setup

In order to modify the application itself (vs the WebMap or Feature Layer), one needs to [install](https://developers.arcgis.com/experience-builder/guide/install-guide/) ArcGIS Experience Builder Developer Edition. After that, this repo can be added:

### recommended steps

* clone this repo directly into the &lt;install&gt;/client directory
* mkdir -p &lt;install&gt;/server/public/apps
* ln -s &lt;install&gt;/client/deep-sea-corals-exb/apps/0 &lt;install&gt;/server/public/apps/0
* modify &lt;install&gt;/client/tsconfig.json adding "deep-sea-corals-exb" to the "include" list
