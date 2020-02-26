const keywords = [
  "aqua",
  "blue",
  "lime",
  "navy",
  "teal",
  "olive",
  "green",
  "red",
  "maroon",
  "orange",
  "purple",
  "yellow",
  "fuchsia",
  "gray",
  "grey",
  "white",
  "black",
  "silver"
];

module.exports = function onlyColors(vars) {
  return Object.keys(vars).reduce((acc, key) => {
    if (keywords.includes(key)) {
      acc[key] = vars[key];
    }
    return acc;
  }, {});
};

Object.defineProperty(module.exports, "colors", {
  value: keywords
});
