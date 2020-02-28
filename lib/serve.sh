#!/usr/bin/env bash

trap "kill 0" EXIT

npx='npx --no-install'

$npx onchange \
  'docs/src/**/*.pug' \
  'docs/src/**/*.svg' \
  'docs/src/**/*.css' \
  'docs/src/**/*.js' \
  '.*rc.js' \
  --initial \
  --delay 250 \
  -- make --no-print-directory docs &

$npx reload -d docs -e html,svg,css,js
