/* global describe, it */

var assert = require("chai").assert;
var palettes = require("..");

var CSS2_COLORS = [
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

var HEX = /#[0-9A-F]{3,6}/i;

Object.keys(palettes).forEach(title => {
  const palette = palettes[title];

  describe(title, () => {
    it("should export at least one CSS2 color", () => {
      assert.hasAnyKeys(palette, CSS2_COLORS, palette);
    });

    it("should export #FFF hex colors", () => {
      Object.keys(palette).forEach(name => {
        assert.match(palette[name], HEX, `${title}.${name}`);
      });
    });
  });
});
