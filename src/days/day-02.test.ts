import Day, { findInvalidIdsPart1, findInvalidIdsPart2 } from './day-02';
import { dayRunner, dayVerifier } from './test-util';
import { describe, expect, it } from '@jest/globals';

const example = `
11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124
`.trim();

dayRunner(Day, example, 1227775554, undefined);

dayVerifier(2, 23534117921, undefined);



describe('findInvalidIdsPart1', () => {
    it.each([
        ['11', '22', ['11', '22']],
        ['95', '115', ['99']],
        ['998', '1012', ['1010']],
        ['1188511880', '1188511890', ['1188511885']],
        ['222220', '222224', ['222222']],
        ['1698522', '1698528', []],
        ['446443','446449', ['446446']],
        ['38593856','38593862', ['38593859']],
    ])('should return the invalid IDs for %s and %s', (from, to, expected) => {
        expect(findInvalidIdsPart1(from, to)).toEqual(expected);
    });
});


describe.skip('findInvalidIdsPart2', () => {
    it.each([
        ['11', '22', ['11', '22']],
        ['95', '115', ['99', '111']],
        ['998', '1012', ['999','1010']],
        ['1188511880', '1188511890', ['1188511885']],
        ['222220', '222224', ['222222']],
        ['1698522', '1698528', []],
        ['446443','446449', ['446446']],
        ['38593856','38593862', ['38593859']],
        ['565653','565659', ['565656']],
        ['824824821','824824827', ['824824824']],
        ['2121212118','2121212124', ['2121212121']],
    ])('should return the invalid IDs for %s and %s', (from, to, expected) => {
        expect(findInvalidIdsPart2(from, to)).toEqual(expected);
    });
});

