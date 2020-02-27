/* global describe, it */

const assert = require("chai").assert;
const palettes = require("..");
const { keywords } = require("../src/util");

var HEX = /#[0-9A-F]{3,6}/i;

Object.keys(palettes).forEach(title => {
  const palette = palettes[title];

  describe(title, () => {
    it("should export at least one CSS2 color", () => {
      assert.hasAnyKeys(palette, Array.from(keywords), palette);
    });

    it("should export #FFF hex colors or null", () => {
      Object.keys(palette).forEach(name => {
        if (palette[name]) {
          assert.match(palette[name], HEX, `${title}.${name}`);
        } else {
          assert.isNull(palette[name], `${title}.${name}`);
        }
      });
    });
  });
});
