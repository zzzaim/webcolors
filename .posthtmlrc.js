const palettes = require(".");
const colors = require("./src/colors")
  .map(keys => keys[0])
  .filter(k => k != "black" && k != "white");

const locals = {
  colors,
  palettes,
  defaultPalette: "mrmrs"
};

module.exports = {
  plugins: {
    "posthtml-pug": { locals }
  }
};
