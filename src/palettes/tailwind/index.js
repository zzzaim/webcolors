const tailwind = require("tailwindcss/defaultTheme").colors;

// Default shade
const shade = 500;

// Default "lighter" shade
const lighter = 200;

// Default "darker" shade
const darker = 800;

// Palette's specially-named colors:
const colors = {};

// Automatically assign Tailwind colors
for (let color in tailwind) {
  if (typeof tailwind[color][shade] === "string") {
    colors[color] = tailwind[color][shade];
  }
}

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: tailwind.teal[lighter],
  black: tailwind.black,
  blue: colors.blue,
  gray: colors.gray,
  green: colors.green,
  lime: tailwind.green[lighter],
  maroon: tailwind.pink[darker],
  navy: tailwind.blue[darker],
  olive: tailwind.yellow[darker],
  purple: colors.purple,
  red: colors.red,
  silver: tailwind.gray[lighter],
  teal: colors.teal,
  white: tailwind.white,
  yellow: colors.yellow
};

module.exports = {
  ...colors,
  ...css
};
