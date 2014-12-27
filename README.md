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

### Download

Download whichever format you like from the `mrmrs`, `material` or
`flatui` directory.

### Bower

```
$ bower install webcolors
```

And use what you like from `bower_components/webcolors/{mrmrs,material,flatui}`
directory.

### NPM

```
$ npm install webcolors
```

You can then access the colors by `require`-ing webcolors. For example:

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

## PostCSS

Using the [postcss-import](https://github.com/postcss/postcss-import) and
[postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
plugins, you can access the palette as CSS variables directly by importing
webcolors. For example:

```
$ npm install webcolors postcss postcss-import postcss-custom-properties
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

Alternatively, the plugin,
[postcss-color-palette](https://github.com/zaim/postcss-color-palette) uses
webcolors to transform standard CSS color keywords into any of the available
color palettes.

## Changelog

**1.1.0** - All color values are normalized as uppercase hex strings.

**1.0.0** - Breaking change to directory structure. No more `dist` folder,
individual palettes are available at root directory.

## License

The MIT License (MIT)

Copyright (c) 2014 Zaim Bakar

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
