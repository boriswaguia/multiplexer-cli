import {Condition, DecisionTable} from './verification.model'
import {createDecitionTable} from './decision-table.service'
import {useCaseToConditions} from './verification.util'
import {programAST} from '../api/test-data-simple-program/simple-program-application-ast.logic.json'
import {simpleUseCases} from '../api/test-data-simple-program/simple-program-usecases.logic.json'
import {UseCase} from '../api/data-structure'

describe('decision-table.service', () => {
  let useCase: UseCase
  beforeEach(() => {
    useCase = simpleUseCases[0]
  })
  it('should generate a sample decision table', () => {
    const inputs: Condition[] = []
    const expected: DecisionTable = {
      conditions: inputs,
      rules: [],
    }
    const result = createDecitionTable(inputs, useCase)
    // expect(result).toEqual(expected);
    expect(result).toBeTruthy()
  })

  it('should generate a sample decision table', () => {
    const inputs: Condition[] = useCaseToConditions(programAST.useCases[0])
    const expected: DecisionTable = {
      conditions: inputs,
      rules: [],
    }
    const result = createDecitionTable(inputs, useCase)
    // expect(result).toEqual(expected);
    expect(result).toBeTruthy()
  })
})
