'use strict';
const isObj = require('is-obj');
const numberIsInteger = require('number-is-integer');

const filter = (obj, lvl, cb) => {
	const ret = {};

	for (const x of Object.keys(obj)) {
		const val = obj[x];

		if (isObj(val)) {
			lvl++;

			if (numberIsInteger(cb) ? lvl <= cb : cb(x, val, lvl, obj)) {
				ret[x] = filter(val, lvl, cb);
			}
		} else if (numberIsInteger(cb) ? lvl <= cb : cb(x, val, lvl, obj)) {
			ret[x] = val;
		}
	}

	return ret;
};

module.exports = (obj, cb) => filter(Object.assign({}, obj), 0, cb);
