const material = require("material-ui-colors");

// Default shade
const shade = 500;

// Palette's specially-named colors:
const colors = {};

// Automatically assign material colors
for (let color in material) {
  // Ignore 'common' palette
  if (color === "common") {
    continue;
  }

  // Set default shade
  if (material[color][shade]) {
    colors[color] = material[color][shade];
  }

  // Set colorXXX names
  for (let s in material[color]) {
    colors[`${color}${s}`] = material[color][s];
  }
}

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: colors.cyan,
  black: material.common.black,
  blue: colors.blue,
  fuchsia: material.purple.A400,
  gray: colors.grey,
  green: colors.green,
  lime: colors.lime,
  maroon: colors.pink,
  navy: colors.indigo,
  olive: colors.amber,
  purple: colors.purple,
  red: colors.red,
  silver: material.grey[300],
  teal: colors.teal,
  white: material.common.white,
  yellow: colors.yellow
};

module.exports = {
  ...colors,
  ...css
};

// For debugging: run this script to output variables
if (require.main === module) {
  console.log(module.exports);
}
