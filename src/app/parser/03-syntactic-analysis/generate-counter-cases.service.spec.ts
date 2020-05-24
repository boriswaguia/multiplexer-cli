import {generateTokens} from '../02-lexical-analysis/generate-token.service'
import {simpleProgramm} from '../../api/test-data-simple-program/simple-program'
import {generateVariables} from './variable.service'
import {UseCase} from '../../api/data-structure'
import {generateCounterCases} from './generate-counter-cases.service'
import {simpleCounterCases} from '../../api/test-data-simple-program/simple-program-counter-case.json.logic'

describe('generate counter case service', () => {
  it('should generate counter cases', () => {
    const tokens = generateTokens(simpleProgramm)
    const variables = generateVariables(tokens)
    const expected: UseCase[] = [...simpleCounterCases]
    const result = generateCounterCases(tokens, variables)
    expect(result).toEqual(expected)
  })
})
