const Fs = require("fs");
const Path = require("path");
const Crypto = require("crypto");
const rc = require("../docs/.docsrc");
const palettes = require("../packages/webcolors");
const { colors, keywords } = require("./util");

const docsDir = process.env.doc_dir || "docs";
const docsEnv = process.env.doc_env || "dev";
const config = rc[docsEnv] || {};
const baseURL = config.baseURL || "";

const colorSkip = new Set(["black", "white"]);
const colorList = colors.map(keys => keys[0]).filter(k => !colorSkip.has(k));
const allPalettes = {};
const paletteInfo = {};

for (let key of Object.keys(palettes)) {
  allPalettes[key] = fillPalette(palettes[key]);
  paletteInfo[key] = require(`../packages/${key}/package.json`).webcolors;
}

function fillPalette(object) {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = object[key] || (keywords.has(key) ? key : null);
    return acc;
  }, {});
}

function hash(path) {
  path = Path.join(docsDir, path);

  const sha = Crypto.createHash("sha256");
  const content = Fs.readFileSync(path, "utf-8");

  sha.update(content);

  return sha.digest("hex").substring(0, 7);
}

function uri(path) {
  const gitHash = hash(path);
  const query = gitHash ? `?${gitHash}` : "";

  return `${baseURL}${path}${query}`;
}

module.exports = {
  colors: colorList,
  palettes: allPalettes,
  paletteInfo,
  uri
};
