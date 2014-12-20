var gulp     = require('gulp');
var rename   = require('gulp-rename');
var template = require('gulp-template');
var merge    = require('merge-stream');
var palettes = require('./index');

function camelToDash (str) {
  return str
    .replace(/[_\s]+/g, '-')        // '_' and spaces to single dash
    .replace(/([A-Z])/g, '-$1')     // 'A' -> '-A'
    .replace(/(\d)(\d*)/, '-$1$2')  // '500' -> '-500'
    .replace(/-+/g, '-')            // '---' -> '-'
    .replace(/([A-Z])-/, '$1')      // 'orange-A-500' -> 'orange-A500'
    .toLowerCase();
}

function camelToDashKeys (obj) {
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    newObj[camelToDash(key)] = obj[key];
  });
  return newObj;
}

gulp.task('default', function () {
  var streams = Object.keys(palettes).map(function (title) {
    return gulp
      .src('./templates/*.tpl')
      .pipe(template({
        colors: camelToDashKeys(palettes[title])
      }))
      .pipe(rename(function (path) {
        path.dirname  = title;
        path.extname  = '.' + path.basename;
        path.basename = 'colors';
      }));
  });
  return merge.apply(null, streams).pipe(gulp.dest('dist'));
});
