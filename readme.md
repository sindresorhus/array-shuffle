# array-shuffle

> Randomize the order of items in an array

Uses the [Durstenfeld algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm) which is based on the [Fisher–Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

## Install

```sh
npm install array-shuffle
```

## Usage

```js
import {arrayToShuffled, arrayShuffle} from 'array-shuffle';

// Create a new shuffled array
const shuffled = arrayToShuffled([1, 2, 3, 4, 5, 6]);
//=> [3, 5, 4, 1, 2, 6]

// Shuffle in-place
const array = [1, 2, 3, 4, 5, 6];
arrayShuffle(array);
console.log(array);
//=> [3, 5, 4, 1, 2, 6]
```

## API

### arrayToShuffled(array)

Create a new array with the items randomized (does not mutate the original array).

Return a new array with the items randomized.

#### array

Type: `Array`

The array to shuffle.

### arrayShuffle(array)

Randomize the order of items in an array, mutating the array in-place.

Returns the input array shuffled.

#### array

Type: `Array`

The array to shuffle.
