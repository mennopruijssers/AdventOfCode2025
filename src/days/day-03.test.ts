import Day, { largestJoltage } from './day-03';
import { dayRunner, dayVerifier } from './test-util';
import { describe, expect, it } from '@jest/globals';

const example = `
987654321111111
811111111111119
234234234234278
818181911112111
`.trim();

dayRunner(Day, example, 357, 3121910778619);

dayVerifier(3, 16842, 167523425665348);


describe('largestJoltage', () => {
    describe.each([
        ['987654321111111', 98, 987654321111],
        ['811111111111119', 89, 811111111119],
        ['234234234234278', 78, 434234234278],
        ['818181911112111', 92, 888911112111],
        ['1234567890', 90, -1],
        ['98765432109', 99, -1],
        ['187654321099', 99, -1],
        ['187654321089', 89, -1],        
    ])('should return the largest joltage for %s', (input, expected, expectedB) => {
        it('with 2 batteries', () => {
            const bank = input.split('').map(Number);
            expect(largestJoltage(bank)).toBe(expected);
        })
        if (expectedB !== -1) {
            it('with 12 batteries', () => {
                const bank = input.split('').map(Number);
                expect(largestJoltage(bank, 12)).toBe(expectedB);
            })
        }
    })
})
