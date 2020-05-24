import {generateAST} from './generate-ast.service'
import {Token} from '../../api/source-token'
import {ProgramAST} from '../../api/program-ast'

describe('generate-ast-service', () => {
  it('should generate a simple AST', () => {
    const tokens: Token[] = []
    const expected: ProgramAST = {
      variables: [],
      useCases: [],
      counterCases: [],
      operations: [],
    }
    const result = generateAST(tokens)
    expect(result).toEqual(expected)
  })
})
