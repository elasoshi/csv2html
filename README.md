<p align="center"><img src="docs/logo.png" height="128" alt="csv2html"></p>
<h3 align="center">csv2html</h3>
<p align="center"><i>Easy and fast Node.JS package / cli for CSV to HTML conversion</i><p>

<p align="center">
  <a href="https://github.com/Leafgard/csv2html/issues">
    <img src="https://img.shields.io/github/issues/Leafgard/csv2html.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/Leafgard/csv2html/stargazers">
    <img src="https://img.shields.io/github/stars/Leafgard/csv2html.svg?style=for-the-badge">
  </a>
  <a href="https://paypal.me/Leafgard">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=for-the-badge">
  </a>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#license">License</a>
</p>

## Features

* Converts CSV to HTML as Node.JS package or CLI
* Ability to choose the delimiter
* Ability to add title to HTML document
* Converts CSV to HTML fast (± 1s / 200000 lines) - Average on Macbook Pro 2018 w/ i7

## Installation

```bash
# CLI
$ npm i -g @leafgard/csv2html
OR
$ yarn global add @leafgard/csv2html

# Package
$ npm i @leafgard/csv2html
OR
$ yarn add @leafgard/csv2html
```

## Usage

### CLI

Here is a basic CLI usage example:

```bash
$ csv2html -i input.csv -o output.html
```

You can provide options like:

- `-d` CSV parsing delimiter, f.e: `-d ';'`
- `-t` Provides title to HTML document: `-t 'My document'`

### Package

Here is a basic usage example as a Node.JS package:

```js
const { CSVToHTML } = require('@leafgard/csv2html')
const converter = new CSVToHTML()

converter
  .setOptions({
    delimiter: ';',
    documentTitle: 'My document'
  }) // (Optional)

  .setInputFile('data.csv')
  .setOutputFile('output.html')

  // You can also turn this into async/await expression
  .convert()
  .then(() => {
    // Do something
  }).catch((err) => {
    // Catch error
  })

```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
