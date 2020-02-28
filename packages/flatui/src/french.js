// Palette's specially-named colors:
const named = {
  auroraGreen: "#78e08f",
  azraqBlue: "#4a69bd",
  carrotOrange: "#e58e26",
  darkSapphire: "#0c2461",
  dupain: "#60a3bc",
  flatFresh: "#fad390",
  forestBlues: "#0a3d62",
  goodSamaritan: "#3c6382",
  icelandPoppy: "#fa983a",
  jalapenoRed: "#b71540",
  livid: "#6a89cc",
  mandarinRed: "#e55039",
  melonMelody: "#f8c291",
  paradiseGreen: "#b8e994",
  reefEncounter: "#079992",
  spray: "#82ccdd",
  squashBlossom: "#f6b93b",
  tomatoRed: "#eb2f06",
  waterfall: "#38ada9",
  yueGuangLanBlue: "#1e3799"
};

// Map of the above specially-named colors to its equivalent CSS2:
const css = {
  aqua: named.spray,
  black: null,
  blue: named.yueGuangLanBlue,
  fuchsia: null,
  gray: null,
  green: named.auroraGreen,
  lime: named.paradiseGreen,
  maroon: named.jalapenoRed,
  navy: named.darkSapphire,
  olive: named.carrotOrange,
  orange: named.icelandPoppy,
  purple: null,
  red: named.tomatoRed,
  silver: null,
  teal: named.reefEncounter,
  white: null,
  yellow: named.squashBlossom
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/french",
    description: "Flat UI French Palette",
    author: "Léa Poisson (http://dribbble.com/goldfishlife)"
  }
});
