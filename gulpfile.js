var color   = require('color');
var cssnext = require('cssnext');
var es      = require('event-stream');
var gulp    = require('gulp');
var rename  = require('gulp-rename');
var gm      = require('gm');
var jade    = require('jade');
var merge   = require('merge-stream');
var source  = require('vinyl-source-stream');


// Build a color info object for the template
function colorInfo (name, value) {
  var c = color(value);
  return {
    name: name,
    value: value,
    style: {
      'background-color': value,
      color: c.light() ? '#000000' : '#FFFFFF'
    }
  };
}


// All available palettes
var PALETTES = [
  {
    name: 'mrmrs',
    title: 'clrs.cc',
    subtitle: '<a href="https://github.com/mrmrs/colors">@mrmrs</a>',
    href: 'http://clrs.cc/'
  },
  {
    name: 'material',
    title: 'Material',
    subtitle: 'by <a href="http://www.google.com/design/">Google</a>',
    href: 'http://www.google.com/design/spec/style/color.html'
  },
  {
    name: 'flatui',
    title: 'FlatUI',
    subtitle: 'is flat',
    href: 'http://flatuicolors.co/'
  }
];

// Import the palettes...
PALETTES.forEach(function (info) {
  var name = info.name;
  var palette = require('./' + name + '/index.js');
  info.colors = Object.keys(palette).reduce(function (colors, key) {
    colors[key] = colorInfo(key, palette[key]);
    return colors;
  }, {});
});

// CSS color keywords
var CSS_COLORS = [
  'aqua',
  'blue',
  'fuchsia',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'orange',
  'purple',
  'red',
  'teal',
  'yellow',
  'black',
  'gray',
  'silver'
];

// Insert the default CSS2 palette
PALETTES.unshift({
  name: 'css',
  title: 'CSS2',
  subtitle: 'defaults',
  href: 'http://www.w3.org/wiki/CSS/Properties/color/keywords#Basic_Colors',
  colors: CSS_COLORS.reduce(function (colors, key) {
    colors[key] = colorInfo(key, key);
    return colors;
  }, {})
});

var ICON_SIZES = [192, 180, 152, 144, 120, 128, 114, 76, 72];


gulp.task('icons', function () {
  var bands = ['red', 'green', 'blue', 'yellow'].map(function (c) {
    return PALETTES[1].colors[c].value;
  });
  var icons = ICON_SIZES.map(function (size) {
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
  return merge.apply(null, icons).pipe(gulp.dest('assets/img/touch'));
});


gulp.task('index', function () {
  var options = {
    pretty: true,
    pkg: require('./package.json'),
    iconSizes: ICON_SIZES,
    palettes: PALETTES,
    cssColorKeywords: CSS_COLORS
  };
  return gulp.src('index.jade', { read: false })
    .pipe(es.map(function (file, callback) {
      file = file.clone();
      file.contents = new Buffer(jade.renderFile(file.path, options));
      callback(null, file);
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('.'));
});


gulp.task('style', function () {
  var options = {
    from: './index.css',
    features: {
      customProperties: {
        variables: {
          '--columns': '' + CSS_COLORS.length + 1
        }
      }
    }
  };
  return gulp.src('index.css')
    .pipe(es.map(function (file, callback) {
      var css = cssnext(file.contents.toString(), options);
      file = file.clone();
      file.contents = new Buffer(css);
      callback(null, file);
    }))
    .pipe(gulp.dest('assets/style'));
});


gulp.task('watch', function () {
  gulp.watch('index.css', ['style']);
  gulp.watch('index.jade', ['index']);
});


gulp.task('default', ['style', 'index']);
