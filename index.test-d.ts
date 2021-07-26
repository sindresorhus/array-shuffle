import {expectType} from 'tsd';
import arrayShuffle from './index.js';

const fixture = [1, 2, 3, 4, 5];

expectType<number[]>(arrayShuffle(fixture));
