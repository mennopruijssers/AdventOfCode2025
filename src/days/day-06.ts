import { BaseDay } from '../day';

type Operator = '+' | '*';
interface Problem {operation: Operator, operands: number[]}
type Input = Problem[];


export function evaluate(problem: Problem): number {
  const {operation, operands} = problem;
  if(operation === '+') {
    return operands.reduce((sum, operand) => sum + operand, 0);
  }
  return operands.reduce((product, operand) => product * operand, 1);
}

export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    const lines = input.split('\n').map(line=>line.split(' ').filter(c => c.trim() !== ''));

    const problems: Problem[] = [];

    for(let p = 0; p < lines[0].length; p++) {
      const problem: Problem = {operation: lines[lines.length-1][p] as Operator, operands: []};
      for(let l = 0; l < lines.length-1; l++) {
        problem.operands.push(parseInt(lines[l][p]));
      }
      problems.push(problem);
    }

    return problems;
  }

  partOne() {
    return this.input.reduce((sum, problem) => sum + evaluate(problem), 0);
  }

  partTwo() {
    return 42;
  }
}

export default Day;
