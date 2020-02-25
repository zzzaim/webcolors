// Palette's specially-named colors:
const named = {
  alamedaOchre: "#cc8e35",
  c84Purple: "#706fd3",
  celestialGreen: "#33d9b2",
  chleanFire: "#cd6133",
  crocodileTooth: "#d1ccc0",
  desert: "#ccae62",
  devilBlue: "#227093",
  eyeOfNewt: "#b33939",
  fluorescentRed: "#ff5252",
  greyPorcelain: "#84817a",
  hotStone: "#aaa69d",
  jacksonsPurple: "#40407a",
  liberty: "#474787",
  luckyPoint: "#2c2c54",
  mandarinSorbet: "#ffb142",
  palmSpringsSplash: "#218c74",
  spicedButternut: "#ffda79",
  summerSky: "#34ace0",
  swanWhite: "#f7f1e3",
  syntheticPumpkin: "#ff793f"
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.summerSky,
  black: null,
  blue: named.devilBlue,
  fuchsia: null,
  gray: named.greyPorcelain,
  green: named.palmSpringsSplash,
  lime: named.celestialGreen,
  maroon: named.eyeOfNewt,
  navy: named.luckyPoint,
  olive: named.alamedaOchre,
  orange: named.syntheticPumpkin,
  purple: named.jacksonsPurple,
  red: named.fluorescentRed,
  silver: named.crocodileTooth,
  teal: named.palmSpringsSplash,
  white: named.swanWhite,
  yellow: named.spicedButternut
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/spanish",
    description: "Flat UI Spanish Palette",
    author: "Miguel Camacho (http://dribbble.com/miguelcm)"
  }
});
