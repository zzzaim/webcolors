var qs = require('querystring');
var color = require('color');
var webcolors = require('./index');
var pkg = require('./package.json');


function buildColorInfo (palette) {
  var colors = {};
  Object.keys(palette).forEach(function (key) {
    var val = palette[key];
    var col = color(val);
    colors[key] = {
      name: key,
      value: val,
      style: {
        'background-color': val,
        color: col.light() ? '#000000' : '#FFFFFF'
      }
    };
  });
  return colors;
}


var cssColors = {
  aqua: 'aqua',
  blue: 'blue',
  fuchsia: 'fuchsia',
  green: 'green',
  lime: 'lime',
  maroon: 'maroon',
  navy: 'navy',
  olive: 'olive',
  orange: 'orange',
  purple: 'purple',
  red: 'red',
  teal: 'teal',
  yellow: 'yellow',
  black: 'black',
  gray: 'gray',
  silver: 'silver'
};


var palettes = [
  {
    name: 'css',
    title: 'CSS2',
    subtitle: 'defaults',
    href: 'http://www.w3.org/wiki/CSS/Properties/color/keywords#Basic_Colors',
    colors: buildColorInfo(cssColors)
  },
  {
    name: 'mrmrs',
    title: 'clrs.cc',
    subtitle: '<a href="https://github.com/mrmrs/colors">@mrmrs</a>',
    href: 'http://clrs.cc/',
    colors: buildColorInfo(webcolors.mrmrs)
  },
  {
    name: 'material',
    title: 'Material',
    subtitle: 'by <a href="http://www.google.com/design/">Google</a>',
    href: 'http://www.google.com/design/spec/style/color.html',
    colors: buildColorInfo(webcolors.material)
  },
  {
    name: 'flatui',
    title: 'FlatUI',
    subtitle: 'is flat',
    href: 'http://flatuicolors.co/',
    colors: buildColorInfo(webcolors.flatui)
  }
];


var siteURL = 'https://zaim.github.io/webcolors/';

var fb = {
  appId: '1644488129118520'
};

var twt = {
  text: 'Check out ' + pkg.name + ': modern color palettes bundled into ' +
    'one package via npm and bower',
  url: siteURL,
  via: 'zzzaim'
};

var len = twt.text.length + twt.url.length + twt.via.length + 8;

if (len > 140) {
  throw new Error('Twitter share text > 140 characters');
}

twt.shareURL = 'https://twitter.com/intent/tweet?' + qs.stringify(twt);


module.exports = {
  fb: fb,
  twt: twt,
  pkg: pkg,
  palettes: palettes,
  cssColorKeywords: Object.keys(cssColors),
  installations: [
    {
      name: 'npm',
      code: 'npm install webcolors',
      href: 'https://www.npmjs.com/package/webcolors'
    },
    {
      name: 'bower',
      code: 'bower install webcolors',
      href: 'https://github.com/zaim/webcolors#via-bower'
    },
    {
      name: 'git',
      code: 'git clone &hellip;/zaim/webcolors',
      href: 'https://github.com/zaim/webcolors'
    }
  ],
  metas: [
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@' + twt.user
    },
    {
      property: 'og:url',
      content: siteURL,
    },
    {
      property: 'og:title',
      content: pkg.name
    },
    {
      property: 'og:description',
      content: pkg.description
    },
    {
      property: 'og:site_name',
      content: pkg.name
    },
    {
      property: 'fb:app_id',
      content: fb.appId
    }
  ]
};
