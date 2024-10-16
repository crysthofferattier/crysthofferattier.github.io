#!/bin/bash

# POOR App Version Management
APP_VERSION_OLD=$(cat src/index.html | grep app-title | cut -d'.' -f 2)
APP_VERSION=$(($APP_VERSION_OLD + 1))
echo "App Version $APP_VERSION"

sed -i "s/v0.$APP_VERSION_OLD/v0.$APP_VERSION/" src/index.html \
&& ng build --verbose --output-path docs --base-href="/" \
&& echo "$ ng build FINISHED" \
&& git add . && git commit -m "Production version `date +'%Y-%m-%d %H:%M:%S'`" && git push -u origin main