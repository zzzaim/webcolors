#!/usr/bin/env node

const Path = require("path");
const { mapToObject, normalizePalette } = require("./util");

async function main(file) {
  let palette = require(Path.resolve(process.cwd(), file));

  if (typeof palette === "function") {
    palette = await palette();
  }

  return mapToObject(normalizePalette(palette));
}

main(process.argv[2])
  .then(o => console.log(JSON.stringify(o, null, 2)))
  .catch(console.error);
