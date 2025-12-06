import Day from './day-04';
import { dayRunner, dayVerifier } from './test-util';

const example = `
..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`.trim();

dayRunner(Day, example, 13, 43);

dayVerifier(4, 1547, 8948);
