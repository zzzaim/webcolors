// Palette's specially-named colors:
const named = {
  blackPearl: "#1e272e",
  chromeYellow: "#ffa801",
  darkPeriwinkle: "#575fcf",
  freeSpeechBlue: "#3c40c6",
  freshTurquoise: "#34e7e4",
  goodNight: "#485460",
  greenTeal: "#05c46b",
  highlighterPink: "#ef5777",
  hintOfElusiveBlue: "#d2dae2",
  jadeDust: "#00d8d6",
  londonSquare: "#808e9b",
  megaman: "#4bcffa",
  mintyGreen: "#0be881",
  narenjiOrange: "#ffc048",
  redOrange: "#ff3f34",
  sizzlingRed: "#f53b57",
  spiroDiscoBall: "#0fbcf9",
  sunsetOrange: "#ff5e57",
  vibrantYellow: "#ffd32a",
  yrielYellow: "#ffdd59"
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.megaman,
  black: named.blackPearl,
  blue: named.devilBlue,
  fuchsia: null,
  gray: named.londonSquare,
  green: named.greenTeal,
  lime: named.mintyGreen,
  maroon: named.red,
  navy: named.freeSpeechBlue,
  olive: named.chromeYellow,
  orange: named.narenjiOrange,
  purple: named.darkPeriwinkle,
  red: named.sunsetOrange,
  silver: named.hintOfElusiveBlue,
  teal: named.greenTeal,
  white: null,
  yellow: named.yrielYellow
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/swedish",
    description: "Flat UI Swedish Palette",
    author: "Jesper Dahlqvist (http://dribbble.com/yehsper)"
  }
});
