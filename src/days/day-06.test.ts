import Day from './day-06';
import { dayRunner, dayVerifier } from './test-util';

const example = `
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
`.trim();

dayRunner(Day, example, 4277556, 42);

dayVerifier(6, 4693419406682, 42);
