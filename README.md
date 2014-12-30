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

```
$ npm install webcolors
```

You can then access the colors by `require`-ing webcolors. Or by using
a CSS post-processor like [postcss](https://github.com/postcss/postcss), you
can directly use the variables in your stylesheets.

### As a node module

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

### Using PostCSS

Using the [postcss-import](https://github.com/postcss/postcss-import) and
[postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
plugins (or better yet, just use [cssnext](httpw//cssnext.github.io), a CSS4
transpiler), you can access the palette as CSS variables directly by importing
webcolors. For example:

```
$ npm install postcss postcss-import postcss-custom-properties
```

```javascript
// dependencies
var fs = require('fs');
var postcss = require('postcss');
var atImport = require('postcss-import');
var customProperties = require('postcss-custom-properties');

// css to be processed
var css = fs.readFileSync('input.css', 'utf8');

// process it
var output = postcss()
  .use(atImport())
  .use(customProperties())
  .process(css)
  .css;
```

Using this `input.css`:

```css
@import 'webcolors/material';

body {
  color: var(--color-lime-a100);
  background: var(--color-indigo);
}
```

Will give you:

```css
body {
  color: #F4FF81;
  background: #3F51B5;
}
```

### Direct Download

Download whichever format you like from the [mrmrs](mrmrs),
[material](material) or [flatui](flatui) directories on GitHub.

### Bower

```
$ bower install webcolors
```

And use what you like from `bower_components/webcolors/{mrmrs,material,flatui}`
directory.

## Changelog

**1.1.0** - All color values are normalized as uppercase hex strings.

**1.0.0** - Breaking change to directory structure. No more `dist` folder,
individual palettes are available at root directory.

## License

MIT - see [LICENSE](LICENSE) file.
