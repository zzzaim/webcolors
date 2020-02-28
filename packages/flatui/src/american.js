// Palette's specially-named colors:
const named = {
  americanRiver: `#636e72`,
  brightYarrow: `#fdcb6e`,
  chiGong: `#d63031`,
  cityLights: `#dfe6e9`,
  draculaOrchid: `#2d3436`,
  electronBlue: `#0984e3`,
  exodusFruit: `#6c5ce7`,
  fadedPoster: `#81ecec`,
  firstDate: `#fab1a0`,
  greenDarnerTail: `#74b9ff`,
  lightGreenishBlue: `#55efc4`,
  mintLeaf: `#00b894`,
  orangeVille: `#e17055`,
  pico8Pink: `#fd79a8`,
  pinkGlamour: `#ff7675`,
  prunusAvium: `#e84393`,
  robinsEggBlue: `#00cec9`,
  shyMoment: `#a29bfe`,
  soothingBreeze: `#b2bec3`,
  sourLemon: `#ffeaa7`
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.fadedPoster,
  black: named.draculaOrchid,
  blue: named.greenDarnerTail,
  fuchsia: named.prunusAvium,
  gray: named.americanRiver,
  green: named.mintLeaf,
  lime: named.robinsEggBlue,
  maroon: named.chiGong,
  navy: named.electronBlue,
  olive: named.brightYarrow,
  orange: named.orangeVille,
  purple: named.exodusFruit,
  red: named.pinkGlamour,
  silver: named.soothingBreeze,
  teal: named.lightGreenishBlue,
  white: named.cityLights,
  yellow: named.sourLemon
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/american",
    description: "Flat UI American Palette",
    author: "Kevin Yang (http://dribbble.com/eatsleepvector)"
  }
});
