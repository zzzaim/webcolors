var assert   = require('assert');
var palettes = require('..');

var DEFAULT_COLORS = [
  'aqua',
  'blue',
  'lime',
  'navy',
  'teal',
  'olive',
  'green',
  'red',
  'maroon',
  'orange',
  'purple',
  'yellow',
  'fuchsia',
  'gray',
  'white',
  'black',
  'silver'
];

describe('palettes', function () {

  it('should have "mrmrs"', function () {
    assert.ok(palettes.mrmrs);
  });

  it('should have "flatui"', function () {
    assert.ok(palettes.flatui);
  });

  it('should have "material"', function () {
    assert.ok(palettes.material);
  });

  it('should have all default colors', function () {
    Object.keys(palettes).forEach(function (title) {
      DEFAULT_COLORS.forEach(function (name) {
        var value = palettes[title][name];
        assert.ok(
          value && value.length,
          'Palette "' + title + '" has no color named "' + name + '"'
        );
      });
    });
  });

});
