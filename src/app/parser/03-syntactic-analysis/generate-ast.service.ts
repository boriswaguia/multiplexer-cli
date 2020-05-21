import {Token} from '../../api/source-token'
import {ProgramAST} from '../../api/program-ast'
import {generateVariables} from './variable.service'

export const generateAST = (tokens: Token[]): ProgramAST => {
  const variables = generateVariables(tokens)
  const useCases = generateUseCases(tokens)
  const steps = generateSteps(tokens)
  const operations = generateOperations(tokens)

  return {variables, useCases, steps, operations}
}

