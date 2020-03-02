#!/usr/bin/env bash

for pkg in packages/*; do
  if [ ! -d "$pkg" ]; then
    continue;
  fi

  ( cd "$pkg" && npm publish "$@" )

  echo
done
