#!/usr/bin/env sh

help="Usage: $(basename "$0") <palette.js> <template.mustache>"

src=${1?$help}
tpl=${2?$help}

export PALETTE=$src

npx mustache build/view.js "$tpl"
