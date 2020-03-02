const palettes = require("../packages/webcolors");
const { colors, keywords } = require("./util");

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
  paletteInfo
};

function fillPalette(object) {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = object[key] || (keywords.has(key) ? key : null);
    return acc;
  }, {});
}
