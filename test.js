import test from 'ava';
import arrayShuffle from './index.js';

test('main', t => {
	t.notDeepEqual(arrayShuffle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
});
