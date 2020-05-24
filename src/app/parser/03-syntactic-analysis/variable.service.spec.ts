import {Token} from '../../api/source-token'
import {Variable, VariableType} from '../../api/data-structure'
import {generateVariables} from './variable.service'
import {simpleProgramJson} from '../../api/test-data-simple-program/simple-program.logic.json'

describe('variable-service', () => {
  it('should return a list of variables', () => {
    const tokens: Token[] = simpleProgramJson
    const expected: Variable[] = [
      {
        id: 'fe_validation_message',
        type: VariableType.data,
      },
      {
        id: 'be_validation_message',
        type: VariableType.data,
      },
      {
        id: 'user_data',
        type: VariableType.data,
      },
      {
        id: 'user',
        type: VariableType.actors,
      },
      {
        id: 'browser',
        type: VariableType.actors,
      },
      {
        id: 'admin',
        type: VariableType.actors,
      },
      {
        id: 'server',
        type: VariableType.actors,
      },
      {
        id: 'database',
        type: VariableType.actors,
      },
    ]
    const result = generateVariables(tokens)
    expect(result).toEqual(expected)
  })
})
