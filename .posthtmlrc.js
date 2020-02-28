const palettes = require("./packages/webcolors");
const { colors } = require("./lib/util");

const locals = {
  colors: colors.map(keys => keys[0]).filter(k => k != "black" && k != "white"),
  palettes,
  defaultPalette: "mrmrs"
};

module.exports = {
  plugins: {
    "posthtml-pug": { locals }
  }
};
