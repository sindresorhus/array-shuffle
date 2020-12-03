const test = require('ava');
const arrayShuffle = require('.');

test('main', t => {
	t.notDeepEqual(arrayShuffle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
});
