var color = require('color');

var PALETTES = ['mrmrs', 'flatui', 'material'];
var DEFAULTS = 'mrmrs';

// Require and re-export all palette modules
PALETTES.forEach(function (title) {
  exports[title] = require('./' + title);
});

PALETTES.forEach(function (title) {
  // Normalize color strings to full hex values
  Object.keys(exports[title]).forEach(function (name) {
    var c = color(exports[title][name]);
    exports[title][name] = c.hexString();
  });

  // Set undefined colors to use the default 'mrmrs'
  if (title !== DEFAULTS) {
    Object.keys(exports[DEFAULTS]).forEach(function (name) {
      exports[title][name] = exports[title][name] || exports[DEFAULTS][name];
    });
  }
});
