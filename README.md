## variable-name

Return a variable name from given string

See also: [to-class-name](http://github.com/azer/to-class-name)

## Install

```bash
$ npm install variable-name
```

## Usage

```js
variableName = require('variable-name')

variableName('hello world')
// => helloWorld
```

It [anglicizes](http://github.com/azer/anglicize) special characters automatically;

```js
variableName('testing âçığöşüñ and ÂÇİĞÖŞÜÑ');
// => testingAcigosunAndAcigosun
```
