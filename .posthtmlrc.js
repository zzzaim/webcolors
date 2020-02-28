const palettes = require(".");
const { colors } = require("./src/util");

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
