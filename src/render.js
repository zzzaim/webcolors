#!/usr/bin/env node

const Fs = require("fs");
const Path = require("path");
const Mustache = require("mustache");
const parseArgs = require("minimist");
const { normalizePalette, mapToObject } = require("./util");

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
async function render() {
  const args = parseArgs(process.argv.slice(2), {
    boolean: true
  });

  const viewFile = args._[0];
  const templateFile = args._[1];

  if (!viewFile) {
    exit();
  }

  const palette = await loadPalette(viewFile);

  let output;

  if (args.json || args.js) {
    const json = toJSON(palette);
    output = args.js ? `module.exports = ${json};\n` : `${json}\n`;
  } else {
    if (!templateFile) {
      return exit();
    }

    const colors = Array.from(palette)
      .map(([name, value]) => ({ name, value }))
      .filter(o => o.value)
      .sort(sortByName);

    output = Mustache.render(Fs.readFileSync(templateFile, "utf-8"), {
      colors
    });
  }

  process.stdout.write(output);
}

// Load the color palette module `viewFile`.
// Normalizes all color values to #FFFFFF or #FFF hex format.
async function loadPalette(viewFile) {
  let palette = require(Path.resolve(process.cwd(), viewFile));

  if (typeof palette === "function") {
    palette = await palette();
  }

  return normalizePalette(palette);
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

function toJSON(map) {
  return JSON.stringify(mapToObject(map), null, 2);
}

if (require.main === module) {
  render().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
