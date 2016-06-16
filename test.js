import test from 'ava';
import m from './';

test(t => {
	t.notDeepEqual(m([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
});
