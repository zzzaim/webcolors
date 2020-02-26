# webcolors

> All the colors of the web

## Palettes

- **bootstrap**: [getbootstrap.com](https://getbootstrap.com/)
- **bulma**: [bulma.io](https://bulma.io)
- **flatui**: [FlatUI colors](http://flatuicolors.com/)
- **material**: [Google Material Design](https://material.io/design/color/the-color-system.html)
- **mrmrs**: [clrs.cc](http://clrs.cc/) / [mrmrs-colors](https://github.com/mrmrs/colors)

## Formats

- [CSS (custom properties)](#with-css-custom-properties)
- [SCSS](#with-scss)
- [Less](#with-less)
- [Stylus](#with-stylus)
- [JavaScript/JSON](#with-javascript-or-json)

## Installation

```shell
$ npm install webcolors
```

### With CSS custom properties

Use a CSS preprocessor such ass [PostCSS](https://postcss.org) to handle
`@import` syntax.

```css
@import "webcolors/material/index.css";

body {
  color: --red;
  background: --yellow;
}
```

### With SCSS

Use [sass](https://sass-lang.com) to handle `@import` syntax. The format of
the import file path depends on your configuration.

```scss
@import "~webcolors/material/index.css";

body {
  color: $red;
  background: $yellow;
}
```

### With LESS

Install and configure [Less.js](http://lesscss.org/).

```less
@import "node_modules/webcolors/flatui/index";

body {
  color: @red;
  background: @blue;
}
```

### With Stylus

Install and configure [Stylus](https://stylus-lang.com/).

```styl
@import "node_modules/webcolors/mrmrs";

body {
  color: orange;
  background: white;
}
```

### With JavaScript or JSON

Colors can be imported directly from Node.js scripts or modules.

```javascript
// All palettes:
const webcolors = require("webcolors");

// Specific palettes:
const bootstrap = require("webcolors/bootstrap");
const material = require("webcolors/material");

console.log(`FlatUI yellow: ${webcolors.flatui.yellow}`);
console.log(`Bootstrap red: ${bootstrap.red}`);
console.log(`Material blue: ${material.blue}`);
```

Palettes pre-exported as JSON files can be found in the package's palette
directories.

## Changelog

**1.2.2** - Fix typo in Material palette for "olive" color.

**1.2.0** - Add plain, non-number-prefixed Material color aliases, e.g.
`cyan` => `cyan500`, `indigo` => `indigo500`, etc.

**1.1.0** - All color values are normalized as uppercase hex strings.

**1.0.0** - Breaking change to directory structure. No more `dist` folder,
individual palettes are available at root directory.

## Inspiration

Inspired by the [material-colors](https://github.com/shuhei/material-colors)
and [mrmrs-colors](https://github.com/mrmrs/colors) packages.

## License

MIT - see [LICENSE](LICENSE) file.
