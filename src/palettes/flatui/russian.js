// Palette's specially-named colors:
const named = {
  appleValley: "#ea8685",
  biscay: "#303952",
  blueCuracao: "#3dc1d3",
  brewedMustard: "#e77f67",
  cornflower: "#546de5",
  creamyPeach: "#f3a683",
  deepRose: "#c44569",
  flamingoPink: "#f78fb3",
  oldGeranium: "#cf6a87",
  pencilLead: "#596275",
  porcelainRose: "#e66767",
  purpleCorallite: "#574b90",
  purpleMountainMajesty: "#786fa6",
  roguePink: "#f8a5c2",
  rosyHighlight: "#f7d794",
  sawtoothAak: "#f19066",
  softBlue: "#778beb",
  squeaky: "#63cdda",
  summertime: "#f5cd79",
  tigerlily: "#e15f41"
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
    name: "flatui/russian",
    description: "Flat UI Russian Palette",
    author: "Alexander Zaytsev (http://dribbble.com/anwaltzzz)"
  }
});
