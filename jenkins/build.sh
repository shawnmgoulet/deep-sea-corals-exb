#!/bin/bash

# "npm audit fix" returns a non-0 exit code if any vulnerability cannot be addressed automatically
# "set -e" caused build to fail in this case 
#set -ex

# BUILD_NUMBER variable causes Esri webpack problems
export BUILD_NUMBER=

# install Node.js
NODE_VERSION=node-v16.19.0-linux-x64
DOWNLOAD_URL=https://nodejs.org/dist/latest-v16.x/${NODE_VERSION}.tar.gz
wget --quiet -O - $DOWNLOAD_URL | tar xz
export PATH="$WORKSPACE/$NODE_VERSION/bin":$PATH
echo installed `node --version`

# download ArcGIS Experience Builder Developer Edition
EXB_VERSION=1.9
# ARCGIS_LIB_DOWNLOADER_USERNAME, ARCGIS_LIB_DOWNLOADER_PASSWORD env vars set via Jenkins credentials
npx arcgis-lib-downloader -p arcgis-experience-builder -v $EXB_VERSION
# unzip not on CI-CMG Jenkins instance by default. "--quiet" option not working
apt-get --quiet install unzip
unzip -q arcgis-experience-builder-${EXB_VERSION}.zip -d arcgis-experience-builder-${EXB_VERSION}

# Copy Custom Widgets
cp -r widgets/* arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/client/your-extensions/widgets

# Create App directory
mkdir -p arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/server/public/apps
cp -r apps/* arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/server/public/apps
  
# NPM install client folder
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/client
npm ci
npm audit fix
cd $WORKSPACE

# NPM install in server folder
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/server
npm ci
npm audit fix
cd $WORKSPACE

# install any widget dependencies
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/client/your-extensions/widgets
for d in `find . -mindepth 1 -maxdepth 1 -type d`; do
  cd $d
  if test -f package.json; then
    echo "installing dependencies for `pwd`..."
    npm i
    npm audit fix
  fi
  cd ..
done
cd $WORKSPACE

# Build widgets
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/client
npm run build:dev
cd $WORKSPACE

# Run download script
cd arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder
node -e "require('./server/src/middlewares/dev/apps/app-download.js').zipApp('0', 'app.zip')"

cd $WORKSPACE
mkdir dist
mv -i arcgis-experience-builder-${EXB_VERSION}/ArcGISExperienceBuilder/app.zip dist
echo "unzip app.zip and grant o+rx to directories and o+r to files" > dist/README
if [ -f dist/app.zip ]; then
  # TODO deploy app.zip?
  echo "successfully built artifact app.zip"
else
  echo "ERROR: artifact app.zip not found"
  exit 1
fi
