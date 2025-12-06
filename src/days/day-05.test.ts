import Day from './day-05';
import { dayRunner, dayVerifier } from './test-util';

const example = `
3-5
10-14
16-20
12-18

1
5
8
11
17
32
`.trim();

dayRunner(Day, example, 3, 42);

dayVerifier(5, 756, 42);
