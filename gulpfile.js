var gulp     = require('gulp');
var rename   = require('gulp-rename');
var template = require('gulp-template');
var merge    = require('merge-stream');
var cameled  = require('camel-case');
var dashed   = require('param-case');
var color    = require('color');

// All available palettes
var PALETTES = ['mrmrs', 'material', 'flatui'];

// Default palette for missing colors: mrmrs
var DEFAULT_PALETTE = 'mrmrs';

// Fix palette values to full hex string
function parsePalette (palette) {
  var vars = {
    camelCased : {},
    paramCased : {}
  };
  Object.keys(palette).forEach(function (key) {
    var hex = color(palette[key]).hexString();
    vars.camelCased[cameled(key)] = hex;
    vars.paramCased[dashed(key)] = hex;
  });
  return vars;
}

// Fix missing values
function fixMissing (obj, defaults) {
  Object.keys(defaults).forEach(function (key) {
    obj[key] = obj[key] || defaults[key];
  });
}

// Default task: build palette files
gulp.task('default', function () {
  var streams;
  var vars = {};

  // Load palette source files
  // TODO: maybe auto-require these using gulp.src('*/source.js') somehow?
  PALETTES.forEach(function (name) {
    vars[name] = parsePalette(require('./' + name + '/source'));
  });

  // Set missing colors
  PALETTES.forEach(function (name) {
    if (name === DEFAULT_PALETTE) {
      return;
    }
    fixMissing(vars[name].camelCased, vars[DEFAULT_PALETTE].camelCased);
    fixMissing(vars[name].paramCased, vars[DEFAULT_PALETTE].paramCased);
  });

  streams = Object.keys(vars).map(function (name) {
    return gulp
      .src('./templates/*.tpl')
      .pipe(template(vars[name]))
      .pipe(rename(function (path) {
        path.dirname  = name;
        path.extname  = '.' + path.basename;
        path.basename = 'index';
      }));
  });

  return merge.apply(null, streams).pipe(gulp.dest('.'));
});
