var cssnext = require('cssnext');
var es      = require('event-stream');
var gulp    = require('gulp');
var rename  = require('gulp-rename');
var gm      = require('gm');
var jade    = require('jade');
var source  = require('vinyl-source-stream');
var site    = require('./site');

site.pretty = '\t';
site.iconSizes = [192, 180, 152, 144, 120, 128, 114, 76, 72];
site.icons = site.iconSizes.map(function (size) {
  return {
    sizes: size + 'x' + size,
    href: '/assets/img/touch/icon-' + size + '.png'
  };
});


gulp.task('icons', function () {
  var bands = ['red', 'green', 'blue', 'yellow'].map(function (c) {
    return site.palettes[1].colors[c].value;
  });
  var icons = site.iconSizes.map(function (size) {
    var band  = size / bands.length;
    var image = gm(size, size, bands[bands.length - 1]);
    bands.forEach(function (c, i) {
      var x = i * band;
      var y = 0;
      image = image.fill(c).drawRectangle(x, y, x + band, size);
    });
    return image
      .stream('png')
      .pipe(source('icon-' + size + '.png'));
  });
  return es.merge(icons).pipe(gulp.dest('assets/img/touch'));
});


gulp.task('index', function () {
  return gulp.src('site/index.jade', { read: false })
    .pipe(es.map(function (file, callback) {
      file = file.clone();
      file.contents = new Buffer(jade.renderFile(file.path, site));
      callback(null, file);
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('.'));
});


gulp.task('style', function () {
  var options = {
    from: './site/style/index.css',
    features: {
      customProperties: {
        variables: {
          '--columns': '' + (site.cssColorKeywords.length + 1)
        }
      }
    }
  };
  return gulp.src(options.from)
    .pipe(es.map(function (file, callback) {
      var css = cssnext(file.contents.toString(), options);
      file = file.clone();
      file.contents = new Buffer(css);
      callback(null, file);
    }))
    .pipe(gulp.dest('assets/css'));
});


gulp.task('js', function () {
  var head = ';(function(){\n';
  var tail = '\n}());\n';
  var buffers = [];
  var concat = function (file) { buffers.push(file.contents); };
  return gulp.src('site/js/*.js')
    .pipe(es.through(concat, function () {
      var contents = buffers.map(function (buff) {
        return head + buff.toString() + tail;
      }).join('\n');
      this.emit('data', new Buffer(contents));
      this.emit('end');
    }))
    .pipe(source('main.js'))
    .pipe(gulp.dest('assets/js'));
});


gulp.task('watch', function () {
  gulp.watch('site/style/**/*.css', ['style']);
  gulp.watch('site/**/*.jade', ['index']);
});


gulp.task('default', ['style', 'js', 'index']);
