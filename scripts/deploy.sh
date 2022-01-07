#!/bin/bash

ng build --prod --output-path docs --base-href="https://crysthofferattier.github.io/" \
&& echo "$ ng build FINISHED" \
&& cp docs/index.html docs/404.html \
&& echo "404.html file created" \
&& git add . && git commit -m "Production version `date +'%Y-%m-%d %H:%M:%S'`" && git push origin main