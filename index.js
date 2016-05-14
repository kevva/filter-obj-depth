'use strict';
const isObj = require('is-obj');
const numberIsInteger = require('number-is-integer');
const objectAssign = require('object-assign');

const filter = (obj, lvl, cb) => {
	const ret = {};

	for (const key of Object.keys(obj)) {
		const val = obj[key];

		if (isObj(val)) {
			lvl++;

			if (numberIsInteger(cb) ? lvl <= cb : cb(key, val, lvl, obj)) {
				ret[key] = filter(val, lvl, cb);
			}
		} else if (numberIsInteger(cb) ? lvl <= cb : cb(key, val, lvl, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};

module.exports = (obj, cb) => filter(objectAssign({}, obj), 0, cb);
