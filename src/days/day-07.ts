import { BaseDay } from '../day';

type Input = string[];
export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    return input.split('\n');
  }

  partOne() {
    let beams: number[] = [this.input[0].indexOf('S')];
    let splits = 0;

    for (let y = 1; y < this.input.length; y++) {
      beams = beams.flatMap<number>((x: number) => {
        if (this.input[y][x] === '^') {
          splits++;
          return [x - 1, x + 1]
        }
        return [x];
      }).filter((x, index, array) => {
        if (index === 0) return true;
        return array[index - 1] !== x;
      });
    }

    return splits;
  }

  partTwo() {
    let beams: [number, number][] = [[this.input[0].indexOf('S'), 1]];

    for (let y = 1; y < this.input.length; y++) {
      beams = beams.flatMap<[number, number]>(([x,count]) => {
        if (this.input[y][x] === '^') {
          return [[x - 1,count], [x + 1,count]]
        }
        return [[x,count]];
      }).reduce((acc, [x,count]) => {
        if(acc.length ===0) {
          return [[x,count]];          
        }
        if(acc[acc.length - 1][0] === x) {
          acc[acc.length - 1][1] += count;
          return acc;
        } else {
          acc.push([x,count]);
          return acc;
        }
      }, [] as [number, number][]);
    }

    return beams.reduce((sum, [_x, count])=>sum+count, 0)
  }
}

export default Day;
