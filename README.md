# Color Me Web

Various color palettes packaged into one, made available to coders as
JavaScript, JSON, CSS, Less, Sass, SCSS and Stylus.

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
- JavaScript (via NPM)

## Installation and Usage

### Download

Download whichever format you like from the `mrmrs`, `material` or
`flatui` directory.

### Bower

```
bower install webcolors
```

And use what you like from `bower_components/webcolors/{mrmrs,material,flatui}`
directory.

### NPM

```
npm install webcolors
```

You can then access the colors by `require`-ing webcolors. For example:

```javascript
var palettes = require('webcolors');

var aqua   = palettes.mrmrs.aqua;
var lime   = palettes.mrmrs.lime;
var red    = palettes.material.red;
var red100 = palettes.material.red100;
var clouds = palettes.flatui.clouds;
```

## Changelog

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
