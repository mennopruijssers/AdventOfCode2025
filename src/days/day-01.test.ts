import Day from './day-01';
import { dayRunner, dayVerifier } from './test-util';

const example = `
L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`.trim();

dayRunner(Day, example, 3, 6);

dayVerifier(1, 995, 5847);
