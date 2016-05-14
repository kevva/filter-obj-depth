# filter-obj-depth [![Build Status](https://travis-ci.org/kevva/filter-obj-depth.svg?branch=master)](https://travis-ci.org/kevva/filter-obj-depth)

> Filter object keys and values by depth into a new object


## Install

```
$ npm install --save filter-obj-depth
```


## Usage

```js
const filterObjDepth = require('filter-obj-depth');

const obj = {
	a: {
		a: 'foo',
		b: {
			a: 'foo'
		}
	}
};

filterObjDepth(obj, 1);
//=> {a: {a: 'foo'}}

filterObjDepth(obj, (key, val, level, object) => level <= 1);
//=> {a: {a: 'foo'}}
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
