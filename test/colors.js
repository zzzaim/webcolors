/* global describe, it */

const assert = require("chai").assert;
const palettes = require("..");
const { colors } = require("../src/colors");

var HEX = /#[0-9A-F]{3,6}/i;

Object.keys(palettes).forEach(title => {
  const palette = palettes[title];

  describe(title, () => {
    it("should export at least one CSS2 color", () => {
      assert.hasAnyKeys(palette, colors, palette);
    });

    it("should export #FFF hex colors", () => {
      Object.keys(palette).forEach(name => {
        assert.match(palette[name], HEX, `${title}.${name}`);
      });
    });
  });
});
