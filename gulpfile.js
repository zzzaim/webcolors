var gulp     = require('gulp');
var rename   = require('gulp-rename');
var template = require('gulp-template');
var merge    = require('merge-stream');
var dashed   = require('param-case');
var palettes = require('./index');

function dashedKeys (obj) {
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    newObj[dashed(key)] = obj[key];
  });
  return newObj;
}

gulp.task('default', function () {
  var streams = Object.keys(palettes).map(function (title) {
    return gulp
      .src('./templates/*.tpl')
      .pipe(template({
        colors: dashedKeys(palettes[title])
      }))
      .pipe(rename(function (path) {
        path.dirname  = title;
        path.extname  = '.' + path.basename;
        path.basename = 'colors';
      }));
  });
  return merge.apply(null, streams).pipe(gulp.dest('dist'));
});
