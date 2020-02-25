#!/usr/bin/env node

const Fs = require("fs");
const Path = require("path");
const Mustache = require("mustache");
const parseColor = require("color-parse");
const stringifyColor = require("color-stringify");
const parseArgs = require("minimist");

function exit() {
  const prog = Path.basename(__filename);
  console.error(`Usage: ${prog} [--js|--json] <view.js> [template.mustache]`);
  process.exit(1);
}

// Main program function.
//
// Reads process.argv for render options.
// See usage string in `exit()` function above ^
//
// Options:
//   --js    Outputs a javascript module
//   --json  Outputs a JSON object
function render() {
  const args = parseArgs(process.argv.slice(2), {
    boolean: true
  });

  const viewFile = args._[0];
  const templateFile = args._[1];

  if (!viewFile) {
    exit();
  }

  const colorMap = loadColors(viewFile);

  const colorList = Object.keys(colorMap)
    .map(name => ({
      name,
      value: colorMap[name]
    }))
    .filter(o => o.value)
    .sort(sortByName);

  let output;

  if (args.json) {
    output = toJSON(colorMap) + "\n";
  } else if (args.js) {
    output = "module.exports = " + toJSON(colorMap) + ";\n";
  } else {
    if (!templateFile) {
      return exit();
    }

    output = Mustache.render(Fs.readFileSync(templateFile, "utf-8"), {
      colors: colorList
    });
  }

  process.stdout.write(output);
}

// Load the color palette module `viewFile`.
// Normalizes all color values to #FFFFFF or #FFF hex format.
function loadColors(viewFile) {
  const colors = require(Path.resolve(process.cwd(), viewFile));

  return Object.keys(colors).reduce((map, key) => {
    map[key] = normalizeColor(colors[key]);
    return map;
  }, {});
}

// Normalize any color value to #FFFFFF or #FFF hex format.
function normalizeColor(value) {
  return stringifyColor(parseColor(value), "hex");
}

function sortByName(a, b) {
  const aName = a.name.toUpperCase();
  const bName = b.name.toUpperCase();

  if (aName < bName) {
    return -1;
  }

  if (aName > bName) {
    return 1;
  }

  return 0;
}

function toJSON(obj) {
  return JSON.stringify(obj, null, 2);
}

if (require.main === module) {
  render();
}
