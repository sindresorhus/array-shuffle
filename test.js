import test from 'ava';
import {arrayToShuffled, arrayShuffle} from './index.js';

test('arrayToShuffled - main', t => {
	// Test with a larger array to reduce probability of random failure
	const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	t.notDeepEqual(arrayToShuffled(input), input);
});

test('arrayToShuffled - does not mutate input', t => {
	const input = [1, 2, 3];
	const inputCopy = [...input];
	const output = arrayToShuffled(input);

	t.deepEqual(input, inputCopy);
	t.not(input, output);
});

test('arrayToShuffled - handles empty array', t => {
	const result = arrayToShuffled([]);
	t.deepEqual(result, []);
});

test('arrayToShuffled - handles single element', t => {
	const result = arrayToShuffled([1]);
	t.deepEqual(result, [1]);
});

test('arrayToShuffled - throws on non-array', t => {
	t.throws(() => arrayToShuffled('string'), {message: 'Expected an array, got string'});
	t.throws(() => arrayToShuffled(123), {message: 'Expected an array, got number'});
	t.throws(() => arrayToShuffled(null), {message: 'Expected an array, got object'});
	t.throws(() => arrayToShuffled(undefined), {message: 'Expected an array, got undefined'});
});

test('arrayToShuffled - maintains all elements', t => {
	const input = [1, 2, 3, 4, 5];
	const output = arrayToShuffled(input);

	t.is(output.length, input.length);
	for (const element of input) {
		t.true(output.includes(element));
	}
});

test('arrayShuffle - mutates in place', t => {
	const array = [1, 2, 3, 4, 5, 6];
	const original = array;
	const result = arrayShuffle(array);

	t.is(result, original);
	t.is(result, array);
});

test('arrayShuffle - shuffles array', t => {
	// Test with a larger array to reduce probability of random failure
	// With 10 elements, probability of same order is 1/3,628,800
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const originalOrder = [...array];
	arrayShuffle(array);

	t.notDeepEqual(array, originalOrder);
});

test('arrayShuffle - handles empty array', t => {
	const array = [];
	const result = arrayShuffle(array);
	t.deepEqual(result, []);
	t.is(result, array);
});

test('arrayShuffle - handles single element', t => {
	const array = [1];
	const result = arrayShuffle(array);
	t.deepEqual(result, [1]);
	t.is(result, array);
});

test('arrayShuffle - throws on non-array', t => {
	t.throws(() => arrayShuffle('string'), {message: 'Expected an array, got string'});
	t.throws(() => arrayShuffle(123), {message: 'Expected an array, got number'});
	t.throws(() => arrayShuffle(null), {message: 'Expected an array, got object'});
	t.throws(() => arrayShuffle(undefined), {message: 'Expected an array, got undefined'});
});

test('arrayShuffle - maintains all elements', t => {
	const array = [1, 2, 3, 4, 5];
	const originalElements = [...array];
	arrayShuffle(array);

	t.is(array.length, originalElements.length);
	for (const element of originalElements) {
		t.true(array.includes(element));
	}
});
