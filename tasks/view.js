#!/usr/bin/env node

const Path = require("path");
const { keywords } = require("./util");

function main(file) {
  const palette = require(Path.resolve(process.cwd(), file));

  return {
    source: JSON.stringify(palette, null, 2),
    colors: Object.keys(palette)
      .map(name => ({
        name,
        value: palette[name] || (keywords.has(name) ? name : null)
      }))
      .filter(o => o.value)
  };
}

if (require.main === module) {
  console.log(JSON.stringify(main(process.argv[2])));
}
