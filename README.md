# webcolors

> Various color palettes bundled into one package

Inspired by the [material-colors](https://github.com/shuhei/material-colors)
and [mrmrs-colors](https://github.com/mrmrs/colors) packages.

## Available palettes

- `mrmrs`: [clrs.cc](http://clrs.cc/) / [mrmrs-colors](https://github.com/mrmrs/colors)
- `flatui`: [FlatUI colors](http://flatuicolors.co/)
- `material`: [Google Material Design](http://www.google.com/design/spec/style/color.html)

## Available formats

- CSS variables
- Sass, Scss
- Less
- Stylus
- JSON
- JavaScript

## Installation and Usage

1. [Via npm module](#via-npm-module)
2. [Via CSS `@import`](#via-css-import)
3. [Via Bower](#via-bower)
4. [Direct download](#direct-download)

### Via npm module

Install `webcolors` using `npm`:

```sh
$ npm install webcolors
```

Then, you can then access the webcolors by `require`-ing webcolors:

```javascript
var palettes = require('webcolors');
var flatui   = require('webcolors/flatui');

var aqua   = palettes.mrmrs.aqua;
var lime   = palettes.mrmrs.lime;
var red    = palettes.material.red;
var red100 = palettes.material.red100;
var clouds = palettes.flatui.clouds;
var green  = flatui.green;
var carrot = flatui.carrot;
```

### Via CSS `@import`

By using a CSS processor with support of `@import`-ing npm modules like
[postcss](https://github.com/postcss/postcss) or
[rework](https://github.com/reworkcss/rework), you can directly import
`webcolors` and use the variables in your stylesheets, like so:

```css
@import 'webcolors/material';

body {
  color: var(--color-lime-a100);
  background: var(--color-indigo);
}
```

First off, install `webcolors` using `npm`:

```sh
$ npm install webcolors
```

#### PostCSS example

Requires the [postcss-import](https://www.npmjs.com/package/postcss-import)
and [postcss-custom-properties](https://www.npmjs.com/package/postcss-custom-properties)
plugins:

```sh
$ npm install postcss postcss-import postcss-custom-properties
```

```javascript
var fs = require('fs');
var postcss = require('postcss');
var atImport = require('postcss-import');
var customProperties = require('postcss-custom-properties');

var css = fs.readFileSync('input.css', 'utf8');

var output = postcss()
  .use(atImport())
  .use(customProperties())
  .process(css)
  .css;
```

#### Rework example

Requires the [rework-npm](https://www.npmjs.com/package/rework-npm) and
[rework-vars](https://www.npmjs.com/package/rework-vars) plugins:

```sh
$ npm install rework rework-npm rework-vars
```

```javascript
var fs = require('fs');
var rework = require('rework');
var reworkNPM = require('rework-npm');
var reworkVars = require('rework-vars');

var css = fs.readFileSync('input.css', 'utf8');

var output = rework(css)
  .use(reworkNPM())
  .use(reworkVars())
  .toString();
```

### Via Bower

```
$ bower install webcolors
```

And use what you like from `bower_components/webcolors/{mrmrs,material,flatui}`
directory.

### Direct Download

Download whichever format you like from the [mrmrs](./mrmrs),
[material](./material) or [flatui](./flatui) directories on GitHub.

## Changelog

**1.2.2** - Fix typo in Material palette for "olive" color.

**1.2.0** - Add plain, non-number-prefixed Material color aliases, e.g.
`cyan` => `cyan500`, `indigo` => `indigo500`, etc.

**1.1.0** - All color values are normalized as uppercase hex strings.

**1.0.0** - Breaking change to directory structure. No more `dist` folder,
individual palettes are available at root directory.

## License

MIT - see [LICENSE](LICENSE) file.
