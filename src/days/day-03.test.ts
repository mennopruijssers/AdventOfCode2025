import Day, { largestJoltage } from './day-03';
import { dayRunner, dayVerifier } from './test-util';
import { describe, expect, it } from '@jest/globals';

const example = `
987654321111111
811111111111119
234234234234278
818181911112111
`.trim();

dayRunner(Day, example, 357, 42);

dayVerifier(3, 16842, 42);


describe('largestJoltage', () => {
    it.each([
        ['987654321111111', 98],
        ['811111111111119', 89],
        ['234234234234278', 78],
        ['818181911112111', 92],
        ['1234567890', 90],
        ['98765432109', 99],
        ['187654321099', 99],
        ['187654321089', 89],
        ['187654321089', 89],
    ])('should return the largest joltage for %s', (input, expected) => {
        expect(largestJoltage(input.split('').map(Number))).toBe(expected);
    })
})
