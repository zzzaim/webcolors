#!/usr/bin/env bash

trap "kill 0" EXIT

npx='npx --no-install'

$npx onchange \
  'src/docs/**/*.pug' \
  'src/docs/**/*.svg' \
  'src/docs/**/*.css' \
  'src/docs/**/*.js' \
  '.*rc.js' \
  --initial \
  --delay 250 \
  -- make --no-print-directory docs &

$npx reload -d docs -e html,svg,css,js
