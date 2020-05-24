import {Token} from '../../api/source-token'
import {Variable} from '../../api/data-structure'
import {generateUseCases} from './generate-use-cases.service'

export const generateCounterCases = (tokens: Token[], variables: Variable[]) => {
  const result = generateUseCases(tokens, variables, true)
  return result
}
