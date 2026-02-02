import test from 'ava';
import {arrayToShuffled, arrayShuffle} from './index.js';

test('arrayToShuffled - main', t => {
	const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const expected = [...input.slice(1), input[0]];
	const randomNumberGenerator = () => 0;
	const output = arrayToShuffled(input, {randomNumberGenerator});

	t.deepEqual(output, expected);
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
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const expected = [...array.slice(1), array[0]];
	const randomNumberGenerator = () => 0;
	arrayShuffle(array, {randomNumberGenerator});

	t.deepEqual(array, expected);
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

test('arrayShuffle - throws on invalid randomNumberGenerator', t => {
	t.throws(() => arrayShuffle([1, 2, 3], {randomNumberGenerator: 123}), {message: 'Expected randomNumberGenerator to be a function, got number'});
});

test('arrayShuffle - throws on invalid options', t => {
	t.throws(() => arrayShuffle([1, 2, 3], 123), {message: 'Expected options to be an object, got number'});
	t.throws(() => arrayShuffle([1, 2, 3], null), {message: 'Expected options to be an object, got object'});
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
