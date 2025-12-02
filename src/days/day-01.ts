import { BaseDay } from '../day';

type Input = { direction: 'L' | 'R', steps: number }[];
export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    return input.split('\n').map(line => {
      line = line.trim();
      const direction = line[0] as 'L' | 'R';
      const steps = parseInt(line.slice(1).trim());
      return { direction, steps };
    });
  }

  partOne() {
    let current = 50;

    let zeroes = 0;
    for (const { direction, steps } of this.input) {
      if (direction === 'L') {
        current -= steps;
      } else {
        current += steps;
      }

      while (current < 0) {
        current += 100;
      }
      while (current >= 100) {
        current -= 100;
      }

      if (current === 0) {
        zeroes++;
      }

    }

    return zeroes;

  }

  partTwo() {
    let current = 50;
    
    let zeroes = 0;
    
    for (const { direction, steps } of this.input) {
      if (direction === 'L') {
        if(current ===0) {
          current+=100;
        }        
        current -= steps;
      } else {                
        current += steps;
      }

      if(current < 0) {
        while(current < 0){
          zeroes++;
          current += 100;
        }      
      } else if(current >= 100) {
        while(current >= 100){
          zeroes++;
          current -= 100;
        }
        if(current === 0) continue;
      }
      if(current === 0) {
        zeroes++;
      }
    }

    return zeroes;
  }
}

export default Day;
