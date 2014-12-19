var PALETTES = ['mrmrs', 'flatui', 'material'];
var DEFAULTS = 'mrmrs';

// Require and re-export all palette modules
PALETTES.forEach(function (title) {
  exports[title] = require('./palettes/' + title);
});

// Set undefined colors to use the default 'mrmrs'
PALETTES.forEach(function (title) {
  if (title !== DEFAULTS) {
    Object.keys(exports[DEFAULTS]).forEach(function (name) {
      exports[title][name] = exports[title][name] || exports[DEFAULTS][name];
    });
  }
});
