// Palette's specially-named colors:
const named = {
  androidGreen: "#A3CB38",
  baraRed: "#ED4C67",
  blueMartina: "#12CBC4",
  circumorbitalRign: "#5758BB",
  energos: "#C4E538",
  forgottenPurple: "#9980FA",
  hollyhock: "#833471",
  lavenderRose: "#FDA7DF",
  lavenderTea: "#D980FA",
  magentaPurple: "#5758BB",
  mediterraneanSea: "#1289A7",
  merchantMarineBlue: "#0652DD",
  pixelatedGrass: "#009432",
  puffinsBill: "#EE5A24",
  radiantYellow: "#F79F1F",
  redPigment: "#EA2027",
  sunflower: "#FFC312",
  turkishAqua: "#006266",
  twentyThousandLeaguesUnderTheSea: "#1B1464",
  veryBerry: "#B53471"
};

// Map of the above specially-named colors to its equivalent CSS2:
const css = {
  aqua: named.blueMartina,
  black: null,
  blue: named.merchantMarineBlue,
  fuchsia: named.lavenderTea,
  gray: null,
  green: named.pixelatedGrass,
  lime: named.androidGreen,
  maroon: named.magentaPurple,
  navy: named.twentyThousandLeaguesUnderTheSea,
  olive: null,
  orange: named.puffinsBill,
  purple: named.veryBerry,
  red: named.redPigment,
  silver: null,
  teal: named.turkishAqua,
  white: null,
  yellow: named.sunflower
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/dutch",
    description: "Flat UI Dutch Palette",
    author: "Jeroen Van Eerden (http://dribbble.com/jeroenvaneerden)"
  }
});
