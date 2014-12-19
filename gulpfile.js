var gulp     = require('gulp');
var rename   = require('gulp-rename');
var template = require('gulp-template');
var merge    = require('merge-stream');
var palettes = require('./index');

gulp.task('default', function () {
  var streams = Object.keys(palettes).map(function (title) {
    return gulp
      .src('./templates/*.tpl')
      .pipe(template({
        colors: palettes[title]
      }))
      .pipe(rename(function (path) {
        path.dirname  = title;
        path.extname  = '.' + path.basename;
        path.basename = 'colors';
      }));
  });
  return merge.apply(null, streams).pipe(gulp.dest('dist'));
});
