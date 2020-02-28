// Palette's specially-named colors:
const named = {
  balticSea: "#3d3d3d",
  brightLilac: "#cd84f1",
  dornYellow: "#fff200",
  electricBlue: "#7efff5",
  hammamBlue: "#67e6dc",
  lightIndigo: "#7158e2",
  lightPurple: "#c56cf0",
  lightRed: "#ff4d4d",
  lightSlateBlue: "#7d5fff",
  mandarinSorbet: "#ffaf40",
  neonBlue: "#18dcff",
  prettyPlease: "#ffcccc",
  radiantYellow: "#ff9f1a",
  redOrange: "#ff3838",
  shadowedSteel: "#4b4b4b",
  spiroDiscoBall: "#17c0eb",
  unmellowYellow: "#fffa65",
  weirdGreen: "#3ae374",
  wintergreen: "#32ff7e",
  youngSalmon: "#ffb8b8"
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.electricBlue,
  black: named.balticSea,
  blue: named.spiroDiscoBall,
  fuchsia: named.brightLilac,
  gray: null,
  green: named.weirdGreen,
  lime: named.wintergreen,
  maroon: named.redOrange,
  navy: named.lightIndigo,
  olive: named.radiantYellow,
  orange: named.mandarinSorbet,
  purple: named.lightPurple,
  red: named.lightRed,
  silver: null,
  teal: named.hammamBlue,
  white: null,
  yellow: named.unmellowYellow
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/turkish",
    description: "Flat UI Turkish Palette",
    author: "Tamer Köseli (http://dribbble.com/tamerkoseli)"
  }
});
