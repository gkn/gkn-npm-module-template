# module-template [![Build Status](https://travis-ci.org/gkn/gkn-npm-module-template.svg?branch=master)](https://travis-ci.org/gkn/gkn-npm-module-template)

> Simple Node.js [npm](https://en.wikipedia.org/wiki/Npm_(software)) module template.


## Install

```
$ npm install --save gkn-npm-module-template
```


## Usage

```js
var moduleTemplate = require('gkn-npm-module-template');

moduleTemplate(1);
//=> true

moduleTemplate(0);
//=> false

```

## Test

```
$ npm install -g mocha
$ npm test
```

CI via Travis

## License

MIT © [Geir Seierstad](http://axezz.com)
