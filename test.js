'use strict';
var assert = require('assert');
var arrayShuffle = require('./index');

it('should shuffle array', function () {
	assert.notDeepEqual(arrayShuffle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
});
