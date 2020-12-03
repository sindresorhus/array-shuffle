/**
Randomize the order of items in an array.

@param array - The array to shuffle.

@example
```
import arrayShuffle = require('array-shuffle');

const shuffled = arrayShuffle([1, 2, 3, 4, 5, 6]);
//=> [3, 5, 4, 1, 2, 6]
```
*/
declare function arrayShuffle<ElementType>(array: readonly ElementType[]): ElementType[];

export = arrayShuffle;
