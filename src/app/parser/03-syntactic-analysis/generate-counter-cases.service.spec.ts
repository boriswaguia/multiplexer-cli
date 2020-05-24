import {generateTokens} from '../02-lexical-analysis/generate-token.service'
import {simpleProgramm} from '../../api/test-data-simple-program/simple-program'
import {generateVariables} from './variable.service'
import {UseCase} from '../../api/data-structure'
import {generateCounterCases} from './generate-counter-cases.service'
import {simpleCounterCases} from '../../api/test-data-simple-program/simple-program-counter-case.json.logic'
import {Token} from '../../api/source-token'
import {preProcess} from '../01-pre-processor/pre-processor.service'
import {quickSourceFile} from '../../commons/source-file.util'

describe('generate-counter-cases-service', () => {
  it('should generate counter cases', () => {
    const input: Token[] = generateTokens(preProcess(quickSourceFile(simpleProgramm)).body)
    const variables = generateVariables(input)
    const expected: UseCase[] = [...simpleCounterCases]
    const result = generateCounterCases(input, variables)
    expect(result).toEqual(expected)
  })
})
