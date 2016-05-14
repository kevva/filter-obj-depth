import test from 'ava';
import fn from './';

test(t => {
	const obj = {
		a: {
			a: 'foo',
			b: {
				a: 'foo',
				b: {
					a: 'foo'
				}
			}
		}
	};

	t.deepEqual(fn(obj, 1), {a: {a: 'foo'}});
	t.deepEqual(fn(obj, 2), {a: {a: 'foo', b: {a: 'foo'}}});
	t.deepEqual(fn(obj, (key, val, lvl) => lvl <= 1), {a: {a: 'foo'}});
});
