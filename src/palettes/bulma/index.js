const Fs = require("fs");
const postcss = require("postcss");
const sass = require("postcss-sass");
const getVariables = require("postcss-get-sass-variables");
const pkg = require("bulma/package.json");
const onlyColors = require("../../colors");

const bulma = require.resolve("bulma/sass/utilities/initial-variables.sass");
const css = Fs.readFileSync(bulma, "utf-8");

const options = {
  from: bulma,
  to: "bulma.css",
  syntax: sass
};

module.exports = function() {
  const variables = {};

  return postcss([
    getVariables(vars => {
      Object.assign(variables, vars);
    })
  ])
    .process(css, options)
    .then(() => onlyColors(variables));
};

// For debugging: run this script to output variables
if (require.main === module) {
  module
    .exports()
    .then(console.log)
    .catch(console.err);
}

// Add palette meta data
Object.defineProperty(module.exports, "meta", {
  value: {
    name: pkg.name,
    version: pkg.version,
    author: pkg.author
  }
});
