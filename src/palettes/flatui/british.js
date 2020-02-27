// Palette's specially-named colors:
const named = {
  blueNights: "#273c75",
  blueberrySoda: "#f5f6fa",
  chainGangGrey: "#dcdde1",
  downloadProgress: "#fbc531",
  electromagnetic: "#192a56",
  harleyDavidsonOrange: "#353b48",
  hintOfPensive: "#c23616",
  lynxWhite: "#e84118",
  mattPurple: "#0097e6",
  mazarineBlue: "#7f8fa6",
  nanohanachaGold: "#8c7ae6",
  nasturcianFlower: "#40739e",
  naval: "#44bd32",
  periwinkle: "#9c88ff",
  picoVoid: "#718093",
  protossPylon: "#00a8ff",
  riseNShine: "#9c88ff",
  seabrook: "#4cd137",
  skirretGreen: "#e1b12c",
  vanadylBlue: "#487eb0"
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.protossPylon,
  black: named.electromagnetic,
  blue: named.vanadylBlue,
  fuchsia: named.heliotrope,
  gray: named.chainGangGrey,
  green: named.skirretGreen,
  lime: named.downloadProgress,
  maroon: named.harleyDavidsonOrange,
  navy: named.mazarineBlue,
  olive: null,
  orange: named.nanohanachaGold,
  purple: named.mattPurple,
  red: named.nasturcianFlower,
  silver: named.hintOfPensive,
  teal: named.skirretGreen,
  white: named.lynxWhite,
  yellow: named.riseNShine
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/british",
    description: "Flat UI British Palette",
    author: "Jan Losert (http://dribbble.com/janlosert)"
  }
});
