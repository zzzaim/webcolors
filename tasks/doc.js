const Path = require("path");
const Proc = require("child_process");
const palettes = require("../packages/webcolors");
const { colors, keywords } = require("./util");

const docsDir = process.env.doc_dir || "docs";
const colorSkip = new Set(["black", "white"]);
const colorList = colors.map(keys => keys[0]).filter(k => !colorSkip.has(k));
const allPalettes = {};
const paletteInfo = {};

for (let key of Object.keys(palettes)) {
  allPalettes[key] = fillPalette(palettes[key]);
  paletteInfo[key] = require(`../packages/${key}/package.json`).webcolors;
}

module.exports = {
  colors: colorList,
  palettes: allPalettes,
  paletteInfo,
  uri
};

function fillPalette(object) {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = object[key] || (keywords.has(key) ? key : null);
    return acc;
  }, {});
}

function hash(path) {
  path = Path.join(docsDir, path);

  return Proc.execSync(
    `git rev-list --max-count=1 --abbrev-commit HEAD -- ${path}`
  )
    .toString()
    .trim();
}

function uri(path) {
  const gitHash = hash(path);
  const query = gitHash ? `?${gitHash}` : "";

  return `${path}${query}`;
}
