import { BaseDay } from '../day';

export function largestJoltage(bank: number[], numberOfBatteries=2): number {
  const  maxes = Array<number>(numberOfBatteries).fill(0);
  for(let i =0; i<bank.length; i++) {
    const battery = bank[i];
    for (let j = 0; j < maxes.length; j++) {
      if (battery > maxes[j] && i < bank.length - maxes.length + j + 1) {
          maxes[j] = battery;
          for (let k = j + 1; k < maxes.length; k++) {
              maxes[k] = 0;
          }
          break;
      }  
    }
  }
  return maxes.reduce((sum, battery) => sum * 10 + battery, 0);  
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
    const joltages = this.input.map(bank => largestJoltage(bank, 12));
    const sum = joltages.reduce((sum, joltage) => sum + joltage, 0);
    return sum;    
  }
}

export default Day;
