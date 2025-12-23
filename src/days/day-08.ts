import { BaseDay } from '../day';

type Point = [number, number, number];
type Input = Point[];

const getDistance = (p1: Point, p2: Point) => {
  return Math.sqrt(p1.reduce((sum, coordinate, index) => sum + Math.pow(p2[index] - coordinate, 2), 0));
}

export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    return input.split('\n')
      .map((line) => line.split(',').map(Number) as [number, number, number]);
  }

  partOne() {
    const distances: { p1: Point, p2: Point, distance: number }[] = [];
    for (let i = 0; i < this.input.length; i++) {
      for (let j = i + 1; j < this.input.length; j++) {
        distances.push({ p1: this.input[i], p2: this.input[j], distance: getDistance(this.input[i], this.input[j]) });
      }
    }

    distances.sort((a, b) => a.distance - b.distance);

    let circuits = this.input.map(point => [point]);

    for (let i = 0; i < (this.input.length === 20 ? 10 : 1000); i++) {
      const { p1, p2 } = distances[i];

      const [matching, nonMatching] = circuits.reduce<[Point[][], Point[][]]>(([matching, nonMatching], circuit) => {
        if (circuit.includes(p1) || circuit.includes(p2)) {
          matching.push(circuit);
        } else {
          nonMatching.push(circuit);
        }
        return [matching, nonMatching];
      }, [[], []]);
      const joinedCircuit = matching.flatMap(circuit => circuit);
      circuits = [joinedCircuit, ...nonMatching];
    }

    const sortedCircuitsByLength = circuits.sort((a, b) => b.length - a.length);
    const max3 = sortedCircuitsByLength.slice(0, 3);
    return max3.reduce((multiple, circuit) => multiple * circuit.length, 1);
  }

  partTwo() {
    return 42;
  }
}

export default Day;
