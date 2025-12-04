import { BaseDay } from '../day';

type Input = [string, string][];

export function findInvalidIdsPart1(from: string, to: string): string[] {
  const invalidIDs: string[] = [];
  function detectInvalidIds(part: string) {
    while (parseInt(part + part) <= parseInt(to)) {
      if (parseInt(part + part) >= parseInt(from)) {
        invalidIDs.push(part + part);
      }
      part = String(parseInt(part) + 1);
    }
  }
  detectInvalidIds((from.substring(0, Math.floor(from.length / 2))));
  if (from.length % 2 === 1) {
    detectInvalidIds((from.substring(0, Math.floor(from.length / 2) + 1)));
  }
  return invalidIDs;
}

/* istanbul ignore next */
export function findInvalidIdsPart2(from: string, to: string): string[] {
  //TODO:
  return findInvalidIdsPart1(from, to);
}

export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    return input.split(',').map(range => range.split('-') as [string, string]);
  }

  partOne() {
    const ranges = this.input;


    const invalidIds = ranges.map(([from, to]) => {
      return findInvalidIdsPart1(from, to);
    });

    const sum = invalidIds.flat().reduce((sum, id) => sum + parseInt(id), 0);

    return sum;
  }

  /* istanbul ignore next */
  partTwo() {
    const ranges = this.input;

    const invalidIds = ranges.map(([from, to]) => {
      return findInvalidIdsPart2(from, to);
    });

    const sum = invalidIds.flat().reduce((sum, id) => sum + parseInt(id), 0);

    return sum;
  }
}

export default Day;
