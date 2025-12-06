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
    return 42;
  }
}

export default Day;
