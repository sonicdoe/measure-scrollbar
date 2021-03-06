# measure-scrollbar

> Get the width of the browser scrollbar

[Demo](https://sonicdoe.github.io/measure-scrollbar/)

## Installation

```
$ npm install measure-scrollbar
```

## Usage

```js
import measureScrollbar from 'measure-scrollbar'

measureScrollbar()
// => 15
```

`measureScrollbar()` returns the width of the browser scrollbar in pixels.

### Module bundlers

measure-scrollbar is primarily distributed as an ES module. Therefore, it works out of the box with [webpack](https://webpack.js.org), [Parcel](https://parceljs.org), and [Rollup](https://rollupjs.org) (even without [rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs)).

[Browserify](http://browserify.org) does not support ES modules natively. To use measure-scrollbar with Browserify, you can require the CommonJS version using `require('measure-scrollbar/commonjs')`.

## Browser support

measure-scrollbar supports the latest releases of Chrome, Safari, Firefox, Microsoft Edge, and Opera.

If you require Internet Explorer support, use [Babel’s ES2015 arrow functions transform](https://babeljs.io/docs/plugins/transform-es2015-arrow-functions/).

## Acknowledgments

measure-scrollbar is based on David Walsh’s [Detect Scrollbar Width with JavaScript](https://davidwalsh.name/detect-scrollbar-width) article.

## Changelog

This project follows [Semantic Versioning 2](http://semver.org/).

- v1.1.0 (2018-06-09): Add CommonJS version
- v1.0.0 (2017-07-25):
  - Fully commit to Semantic Versioning
  - Document official browser support
- v0.1.0 (2017-06-20): Initial release
