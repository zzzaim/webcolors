const Fs = require("fs");
const Path = require("path");

const root = Path.resolve(__dirname, "..");
const palettes = Fs.readdirSync(Path.join(root, "build/palettes"));
const source = process.env.PALETTE;
const colors = source ? require(Path.join(root, source)) : {};

module.exports = {
  palettes: toObjects(palettes),
  colors: toList(colors)
};

function toObjects(list) {
  return list.map(name => ({ name }));
}

function toList(obj) {
  return Object.keys(obj)
    .map(name => ({ name, value: obj[name] }))
    .filter(o => o.value);
}

if (require.main === module) {
  console.log(JSON.stringify(module.exports, null, 2));
}
