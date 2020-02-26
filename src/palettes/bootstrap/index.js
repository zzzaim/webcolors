const sass = require("sass");
const exportVariables = require("postcss-export-custom-variables");
const bootstrapPkg = require("bootstrap/package.json");
const onlyColors = require("../../colors");

const options = {
  from: require.resolve("bootstrap/scss/bootstrap.scss"),
  to: "bootstrap.css"
};

module.exports = function() {
  const result = sass.renderSync({
    file: options.from
  });

  const variables = {};

  return exportVariables
    .process(result.css.toString(), options, { exporter, variables })
    .then(() => onlyColors(variables));
};

function exporter() {
  return Promise.resolve();
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
    name: bootstrapPkg.name,
    version: bootstrapPkg.version,
    author: bootstrapPkg.author
  }
});
