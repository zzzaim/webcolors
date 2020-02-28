// Palette's specially-named colors:
const named = {
  antiFlashWhite: "#f1f2f6",
  bayWharf: "#747d8c",
  brightGreek: "#3742fa",
  bruschettaTomato: "#ff6348",
  cityLights: "#dfe4ea",
  clearChill: "#1e90ff",
  coral: "#ff7f50",
  frenchSkyBlue: "#70a1ff",
  goldenSand: "#eccc68",
  grisaille: "#57606f",
  limeSoap: "#7bed9f",
  orange: "#ffa502",
  peace: "#a4b0be",
  prestigeBlue: "#2f3542",
  saturatedSky: "#5352ed",
  twinkleBlue: "#ced6e0",
  ufoGreen: "#2ed573",
  watermelon: "#ff4757",
  white: "#ffffff",
  wildWatermelon: "#ff6b81"
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.clearChill,
  black: named.prestigeBlue,
  blue: named.frenchSkyBlue,
  fuchsia: null,
  gray: named.bayWharf,
  green: named.ufoGreen,
  lime: named.limeSoap,
  maroon: named.watermelon,
  navy: named.brightGreek,
  olive: null,
  orange: named.orange,
  purple: named.saturatedSky,
  red: named.wildWatermelon,
  silver: named.peace,
  teal: named.ufoGreen,
  white: named.white,
  yellow: named.goldenSand
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/chinese",
    description: "Flat UI Chinese Palette",
    author: "Wenjun (http://dribbble.com/wenjunliao)"
  }
});
