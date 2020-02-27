const Fs = require("fs");
const postcss = require("postcss");
const sass = require("postcss-sass");
const getVariables = require("postcss-get-sass-variables");
const pkg = require("bulma/package.json");
const { colorKeysOnly } = require("../../util");

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
    .then(() => fixValues(colorKeysOnly(variables)));
};

// Remove SCSS syntax from values
function fixValue(str) {
  return str.replace(/\s*!default;?$/, "");
}

function fixValues(map) {
  for (let [k, v] of map) {
    map.set(k, fixValue(v));
  }
  return map;
}

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
