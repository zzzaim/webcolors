var es     = require('event-stream');
var gulp   = require('gulp');
var rename = require('gulp-rename');
var gm     = require('gm');
var jade   = require('jade');
var merge  = require('merge-stream');
var source = require('vinyl-source-stream');

// All available palettes
var PALETTES = [
  {
    name: 'mrmrs',
    title: 'mrmrs',
    href: 'http://clrs.cc/'
  },
  {
    name: 'material',
    title: 'Material',
    href: 'http://www.google.com/design/spec/style/color.html'
  },
  {
    name: 'flatui',
    title: 'FlatUI',
    href: 'http://flatuicolors.co/'
  }
];

// Import the palettes...
PALETTES.forEach(function (info) {
  var name = info.name;
  var palette = require('./' + name + '/index.js');
  info.colors = Object.keys(palette).reduce(function (colors, key) {
    colors[key] = {
      name: key,
      value: palette[key],
      style: {
        'background-color': palette[key],
        color: '#FFFFFF'
      }
    };
    return colors;
  }, {});
});

// CSS color keywords
var CSS_COLORS = [
  'aqua',
  'black',
  'blue',
  'fuchsia',
  'gray',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'orange',
  'purple',
  'red',
  'silver',
  'teal',
  'white',
  'yellow'
];

// Insert the default CSS2 palette
PALETTES.unshift({
  name: 'css',
  title: 'CSS2',
  href: 'http://www.w3.org/wiki/CSS/Properties/color/keywords#Basic_Colors',
  colors: CSS_COLORS.reduce(function (colors, key) {
    colors[key] = {
      name: key,
      value: key,
      style: {
        'background-color': key,
        color: '#FFFFFF'
      }
    };
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


gulp.task('default', ['icons', 'index']);
