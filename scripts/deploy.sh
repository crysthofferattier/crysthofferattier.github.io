#!/bin/bash

APP_VERSION=$(cat index.html | grep app-title | cut -d'.' -f 2)
APP_VERSION=$(($APP_VERSION + 1))

echo "App Version"
echo $APP_VERSION

ng build --prod --output-path docs --base-href="https://crysthofferattier.github.io/" \
&& echo "$ ng build FINISHED" \
&& cp docs/index.html docs/404.html \
&& echo "404.html file created" \
&& git add . && git commit -m "Production version `date +'%Y-%m-%d %H:%M:%S'`" && git push origin main