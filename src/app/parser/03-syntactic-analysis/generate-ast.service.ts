import {Token} from '../../api/source-token'
import {ProgramAST} from '../../api/program-ast'
import {generateVariables} from './variable.service'
import {generateUseCases} from './generate-use-cases.service'
import {generateCounterCases} from './generate-counter-cases.service'

export const generateAST = (tokens: Token[]): ProgramAST => {
  const variables = generateVariables([...tokens])
  const useCases = generateUseCases([...tokens], variables)
  const counterCases = generateCounterCases([...tokens], variables)
  const result: ProgramAST = {variables, useCases, counterCases, operations: []}
  return result
}
