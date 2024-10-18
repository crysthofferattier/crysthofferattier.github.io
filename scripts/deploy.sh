#!/bin/bash

# POOR App Version Management
APP_VERSION_OLD=$(cat src/index.html | grep app-title | cut -d'.' -f 2)
APP_VERSION=$(($APP_VERSION_OLD + 1))
echo "App Version $APP_VERSION"

sed -i "s/v0.$APP_VERSION_OLD/v0.$APP_VERSION/" src/index.html \
&& ng build --verbose --output-path=docs/ --base-href="crysthofferattier.github.io" \
&& echo "$ ng build FINISHED" \
&& cp ../src/index.html docs/404.html \
&& git add . && git commit -m "Production version `date +'%Y-%m-%d %H:%M:%S'`" && git push -u origin main

# ng deploy --repo=https://github.com/crysthofferattier/crysthofferattier.github.io.git --base-href=https://crysthofferattier.github.io/crysthofferattier.github.io``