/* global describe, it */

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

var HEX = /#([0-9A-F]{2}){3}/;


describe('palettes', function () {

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

  it('should have full hex values', function () {
    Object.keys(palettes).forEach(function (title) {
      Object.keys(palettes[title]).forEach(function (name) {
        assert.ok(
          HEX.test(palettes[title][name]),
          'Palette color ' + title + '.' + name + ' is not a hex value ' +
          '(' + palettes[title][name] + ')'
        );
      });
    });
  });

});
