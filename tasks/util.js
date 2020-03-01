const Color = require("color");

const colors = [
  ["aqua"],
  ["blue"],
  ["fuchsia"],
  ["gray", "grey"],
  ["green"],
  ["lime"],
  ["maroon"],
  ["navy"],
  ["olive"],
  ["orange"],
  ["purple"],
  ["red"],
  ["silver"],
  ["teal"],
  ["yellow"],
  ["black"],
  ["white"]
];

const keywords = new Set(colors.flat());

function mapToObject(map) {
  const object = {};

  for (let [k, v] of map) {
    object[k] = v;
  }

  return object;
}

function objectToMap(object) {
  return new Map(Object.keys(object).map(k => [k, object[k]]));
}

function colorKeysOnly(map) {
  if (!(map instanceof Map)) {
    map = objectToMap(map);
  }

  for (let k of map.keys()) {
    if (!keywords.has(k)) {
      map.delete(k);
    }
  }

  return map;
}

function normalizePalette(map) {
  if (!(map instanceof Map)) {
    map = objectToMap(map);
  }

  for (let [k, v] of map) {
    map.set(k, Color(v).hex());
  }

  for (let keys of colors) {
    const useKey = keys[0];
    const keyInMap = keys.find(k => map.has(k));
    map.set(useKey, keyInMap ? map.get(keyInMap) : null);
  }

  return map;
}

module.exports = exports = {
  colors,
  keywords,
  mapToObject,
  objectToMap,
  colorKeysOnly,
  normalizePalette
};
