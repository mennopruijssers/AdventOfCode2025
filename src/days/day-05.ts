import { BaseDay } from '../day';

interface Input {ranges: [number, number][], ingredients: number[]}
export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    const [ranges, ingredients] = input.split('\n\n');
    return {
      ranges: ranges.split('\n').map(line => line.split('-').map(Number) as [number, number]),
      ingredients: ingredients.split('\n').map(line => parseInt(line.trim())),
    };
  }

 partOne() {
    const freshIngredients = this.input.ingredients.filter(ingredient => {
      return this.input.ranges.some(range => ingredient >= range[0] && ingredient <= range[1]);
    });
    return freshIngredients.length;
  }

  partTwo() {
    const sortedRanges = this.input.ranges.sort((a, b) => a[0] - b[0]);

    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    const mergedRanges:[number,number][] = [];

    
    while(sortedRanges.length > 0) {
      const currentRange = sortedRanges.shift()!;
      mergedRanges.push(currentRange);
      min = Math.min(min, currentRange[0]);
      max = Math.max(max, currentRange[1]);

      for(let i =0; i<sortedRanges.length; i++) {
        if(currentRange[1] >= sortedRanges[i][0] ) {
          currentRange[1] = Math.max(currentRange[1], sortedRanges[i][1]);
          sortedRanges.splice(i, 1);
          i--;
        } else {
          break;
        }
      }      
    }

    return mergedRanges.reduce((sum, range) => sum + (range[1] - range[0] + 1), 0);
  }
}

export default Day;
