// Palette's specially-named colors:
const named = {
  bluebell: "#3B3B98",
  brightUbe: "#D6A2E8",
  clearChill: "#1B9CFC",
  endingNavyBlue: "#182C61",
  fallingStar: "#CAD3C8",
  fieryFuchsia: "#B33771",
  georgiaPeach: "#FD7272",
  highlighterLavender: "#82589F",
  honeyGlow: "#25CCF7",
  keppel: "#58B19F",
  magentaPurple: "#6D214F",
  oasisStream: "#9AECDB",
  orchidOrange: "#FEA47F",
  pineGlade: "#BDC581",
  richGardenia: "#F97F51",
  sarawakWhitePepper: "#F8EFBA",
  sasquatchSocks: "#FC427B",
  shipsOfficer: "#2C3A47",
  spiroDiscoBall: "#25CCF7",
  sweetGarden: "#55E6C1"
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.spiroDiscoBall,
  black: named.shipsOfficer,
  blue: named.clearChill,
  fuchsia: named.fieryFuchsia,
  gray: named.fallingStar,
  green: named.keppel,
  lime: named.sweetGarden,
  maroon: named.desire,
  navy: named.endingNavyBlue,
  olive: named.honeyGlow,
  orange: named.richGardenia,
  purple: named.magentaPurple,
  red: named.sasquatchSocks,
  silver: named.fallingStar,
  teal: named.keppel,
  white: null,
  yellow: null
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/indian",
    description: "Flat UI Indian Palette",
    author: "Ranganath Krishnamani (http://dribbble.com/rkrishnamani)"
  }
});
