import { Condition, DecisionTable } from './verification.model';
import { createDecitionTable } from './decision-table.service';
import { useCaseToConditions } from './verification.util';
import { programAST } from '../api/test-data-simple-program/simple-program-application-ast.logic.json';

describe('decision-table.service', () => {

  it('should generate a sample decision table', () => {
    const inputs: Condition[] = [];
    const expected: DecisionTable = {
      conditions: inputs,
      rules: []
    };
    const result = createDecitionTable(inputs);
    expect(result).toEqual(expected);
  });


  it('should generate a sample decision table', () => {
    const inputs: Condition[] = useCaseToConditions(programAST.useCases[0]);
    const expected: DecisionTable = {
      conditions: inputs,
      rules: []
    };
    const result = createDecitionTable(inputs);
    expect(result).toEqual(expected);
  });
});
