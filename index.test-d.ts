import {expectType} from 'tsd';
import arrayShuffle = require('.');

const fixture = [1, 2, 3, 4, 5];

expectType<number[]>(arrayShuffle(fixture));
