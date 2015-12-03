'use strict';
var isObj = require('is-obj');
var numberIsInteger = require('number-is-integer');
var objectAssign = require('object-assign');

function filter(obj, lvl, cb) {
	var ret = {};
	var keys = Object.keys(obj);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

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
}

module.exports = function (obj, cb) {
	var o = objectAssign({}, obj);
	return filter(o, 0, cb);
};
