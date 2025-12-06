import { BaseDay } from '../day';

export function largestJoltage(bank: number[]): number {
  const max = bank.slice(-2);
  for(let i = bank.length - 3; i >= 0; i--) {
    const battery = bank[i];
    if(battery >= max[0]) {
      if(max[0] > max[1]) {
        max[1] = max[0];
      }      
      max[0] = battery;            
    }
  }

  return max[0] * 10 + max[1];
}
type Input = number[][];
export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    return input.split('\n').map(line => line.split('').map(Number));
  }

  partOne() {
    const joltages = this.input.map(bank => largestJoltage(bank));
    const sum = joltages.reduce((sum, joltage) => sum + joltage, 0);
    return sum;    
  }

  partTwo() {
    return 42;
  }
}

export default Day;
