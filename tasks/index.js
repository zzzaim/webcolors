#!/usr/bin/env node

const Fs = require("fs");
const Path = require("path");
const palettes = Fs.readdirSync(
  Path.resolve(__dirname, "..", "packages")
).filter(p => p !== "webcolors");

module.exports = { palettes: toObjects(palettes) };

function toObjects(list) {
  return list.map(name => ({ name }));
}
