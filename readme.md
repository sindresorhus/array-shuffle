# array-shuffle

> Randomize the order of items in an array

Uses the [Durstenfeld algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm) based on the [Fisher–Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

## Install

```
$ npm install array-shuffle
```

## Usage

```js
const shuffled = arrayShuffle([1, 2, 3, 4, 5, 6]);
//=> [3, 5, 4, 1, 2, 6]
```

## API

### arrayShuffle(array)

#### array

Type: `array`

The array to shuffle.
