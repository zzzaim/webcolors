// Palette's specially-named colors:
const named = {
  algalFuel: "#20bf6b",
  beniukonBronze: "#fa8231",
  blueGrey: "#778ca3",
  blueHorizon: "#4b6584",
  boyzone: "#2d98da",
  c64NTSC: "#4b7bec",
  desire: "#eb3b5a",
  flirtatious: "#fed330",
  fusionRed: "#fc5c65",
  gloomyPurple: "#8854d0",
  highBlue: "#45aaf2",
  innuendo: "#a5b1c2",
  lighterPurple: "#a55eea",
  maximumBlueGreen: "#2bcbba",
  nycTaxi: "#f7b731",
  orangeHibiscus: "#fd9644",
  reptileGreen: "#26de81",
  royalBlue: "#3867d6",
  turquoiseTopaz: "#0fb9b1",
  twinkleBlue: "#d1d8e0"
};

// Map of the above specially-named colors to its equivalent CSS2:
const css = {
  aqua: named.highBlue,
  black: null,
  blue: named.c64NTSC,
  fuchsia: named.lighterPurple,
  gray: named.blueGrey,
  green: named.algalFuel,
  lime: named.reptileGreen,
  maroon: named.desire,
  navy: named.royalBlue,
  olive: named.beniukonBronze,
  orange: named.orangeHibiscus,
  purple: named.gloomyPurple,
  red: named.fusionRed,
  silver: named.innuendo,
  teal: named.turquoiseTopaz,
  white: null,
  yellow: named.flirtatious
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/german",
    description: "Flat UI German Palette",
    author: "Martin David (http://dribbble.com/srioz)"
  }
});
