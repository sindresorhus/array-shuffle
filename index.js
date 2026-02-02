export function arrayShuffle(array, options) {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`);
	}

	if (options !== undefined && (options === null || typeof options !== 'object')) {
		throw new TypeError(`Expected options to be an object, got ${typeof options}`);
	}

	const {randomNumberGenerator = Math.random} = options ?? {};

	// eslint-disable-next-line no-warning-comments
	// TODO: Consider a seed option when the TC39 seeded random proposal lands.
	if (typeof randomNumberGenerator !== 'function') {
		throw new TypeError(`Expected randomNumberGenerator to be a function, got ${typeof randomNumberGenerator}`);
	}

	for (let index = array.length - 1; index > 0; index--) {
		const newIndex = Math.floor(randomNumberGenerator() * (index + 1));
		[array[index], array[newIndex]] = [array[newIndex], array[index]];
	}

	return array;
}

export function arrayToShuffled(array, options) {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`);
	}

	return arrayShuffle([...array], options);
}

// eslint-disable-next-line no-warning-comments
// TODO: Remove at some point.
export default arrayToShuffled;
