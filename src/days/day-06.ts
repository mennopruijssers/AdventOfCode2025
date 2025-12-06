import { BaseDay } from '../day';

type Operator = '+' | '*';
interface Problem { operation: Operator, operands: number[] }
type Input = string;


export function evaluate(problem: Problem): number {
  const { operation, operands } = problem;
  if (operation === '+') {
    return operands.reduce((sum, operand) => sum + operand, 0);
  }
  return operands.reduce((product, operand) => product * operand, 1);
}

export class Day extends BaseDay<Input, number, number> {
  parse(input: string): Input {
    return input;
  }

  partOne() {
    const lines = this.input.split('\n').map(line => line.split(' ').filter(c => c.trim() !== ''));

    const problems: Problem[] = [];

    for (let p = 0; p < lines[0].length; p++) {
      const problem: Problem = { operation: lines[lines.length - 1][p] as Operator, operands: [] };
      for (let l = 0; l < lines.length - 1; l++) {
        problem.operands.push(parseInt(lines[l][p]));
      }
      problems.push(problem);
    }

    return problems.reduce((sum, problem) => sum + evaluate(problem), 0);
  }

  partTwo() {
    const lines = this.input.split('\n');
    const problems: Problem[] = [];
    let currentOperands: number[] = [];
    const operators = lines.pop()!;
    
    for (let x = lines[0].length - 1; x >= 0; x--) {
      const number = parseInt(lines.map(line => line[x]).filter(c => c !== ' ').join(''));
      
      currentOperands.push(number);
      // if last line contains operator:
      if (['+', '*'].includes(operators[x])) {
        const operation = operators[x] as Operator;
        problems.push({ operation, operands: currentOperands });
        currentOperands = [];
        x--
        continue;
      }
    }

    return problems.reduce((sum, problem) => sum + evaluate(problem), 0);
  }
}

export default Day;
