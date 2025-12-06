import { BaseDay } from '../day';
import { Grid } from '../utils/grid';

type Input = Grid<string>
export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    return new Grid<string>(input.split('\n').map(line => line.split('')));
  }

  partOne() {
    let count = 0;
    for (let y = 0; y < this.input.grid.length; y++) {
      for (let x = 0; x < this.input.grid[y].length; x++) {
        if (this.input.get({ x, y }) === '.') continue;
        const neighbors = this.input.getNeighbors({ x, y }, true).map(n => this.input.get(n));
        if (neighbors.filter(n => n !== '.').length < 4) {
          this.input.set({ x, y }, 'x');
          count++;
        }
      }
    }    
    return count;
  }

  partTwo() {
    let count = 0;

    while (true) {
      const removed = this.partOne();
      if (removed === 0) break;
      count += removed;

      this.input = new Grid<string>(this.input.grid.map(line => line.map(c => c === 'x' ? '.' : c)));

    }

    return count;
  }
}

export default Day;
