/**
Randomize the order of items in an array, mutating the array in-place.

@param array - The array to shuffle.
@param options - Options for randomization. Use `options.randomNumberGenerator` to provide a custom random number generator that returns a float between 0 (inclusive) and 1 (exclusive). This is useful for deterministic shuffling when you use a seeded generator.
@returns Returns the input array shuffled.

@example
```
import {arrayShuffle} from 'array-shuffle';

const array = [1, 2, 3, 4, 5, 6];
arrayShuffle(array);
console.log(array);
//=> [3, 5, 4, 1, 2, 6]
```
*/
export function arrayShuffle<ElementType>(array: ElementType[], options?: {randomNumberGenerator?: () => number}): ElementType[];

/**
Create a new array with the items randomized (does not mutate the original array).

@param array - The array to shuffle.
@param options - Options for randomization. Use `options.randomNumberGenerator` to provide a custom random number generator that returns a float between 0 (inclusive) and 1 (exclusive). This is useful for deterministic shuffling when you use a seeded generator.
@returns Returns a new array with the items randomized.

@example
```
import {arrayToShuffled} from 'array-shuffle';

const shuffled = arrayToShuffled([1, 2, 3, 4, 5, 6]);
//=> [3, 5, 4, 1, 2, 6]
```

@example
```
import {arrayToShuffled} from 'array-shuffle';

const randomNumberGenerator = () => 0;
const deterministic = arrayToShuffled([1, 2, 3, 4, 5, 6], {randomNumberGenerator});
//=> [2, 3, 4, 5, 6, 1]
```
*/
export function arrayToShuffled<ElementType>(array: readonly ElementType[], options?: {randomNumberGenerator?: () => number}): ElementType[];

/**
@deprecated Use the named export `arrayToShuffled` instead.
*/
export default function arrayToShuffled<ElementType>(array: readonly ElementType[], options?: {randomNumberGenerator?: () => number}): ElementType[];
