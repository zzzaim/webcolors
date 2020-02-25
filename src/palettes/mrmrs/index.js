const pkg = require("colors.css/package.json");
const colors = require("colors.css");

// Export palette metadata
Object.defineProperty(colors, "meta", {
  value: {
    name: pkg.name,
    author: pkg.author,
    version: pkg.version
  }
});

module.exports = colors;
