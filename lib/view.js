#!/usr/bin/env node

const Path = require("path");
const { keywords } = require("./util");

const palette = require(Path.resolve(process.cwd(), process.argv[2]));

const colors = Object.keys(palette)
  .map(name => ({
    name,
    value: palette[name] || (keywords.has(name) ? name : null)
  }))
  .filter(o => o.value);

console.log(
  JSON.stringify({
    source: JSON.stringify(palette, null, 2),
    colors
  })
);
