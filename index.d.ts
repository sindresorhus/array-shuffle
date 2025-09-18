/**
Randomize the order of items in an array, mutating the array in-place.

@param array - The array to shuffle.
@returns The input array shuffled.

@example
```
import {arrayShuffle} from 'array-shuffle';

const array = [1, 2, 3, 4, 5, 6];
arrayShuffle(array);
console.log(array);
//=> [3, 5, 4, 1, 2, 6]
```
*/
export function arrayShuffle<ElementType>(array: ElementType[]): ElementType[];

/**
Create a new array with the items randomized (does not mutate the original array).

@param array - The array to shuffle.
@returns A new array with the items randomized.

@example
```
import {arrayShuffle} from 'array-shuffle';

const shuffled = arrayToShuffled([1, 2, 3, 4, 5, 6]);
//=> [3, 5, 4, 1, 2, 6]
```
*/
export function arrayToShuffled<ElementType>(array: readonly ElementType[]): ElementType[];

/**
@deprecated Use the named export `arrayToShuffled` instead.
*/
export default function arrayToShuffled<ElementType>(array: readonly ElementType[]): ElementType[];
