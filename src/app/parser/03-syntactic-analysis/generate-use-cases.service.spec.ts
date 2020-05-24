import {Token} from '../../api/source-token'
import {UseCase, Variable} from '../../api/data-structure'
import {generateUseCases} from './generate-use-cases.service'
import {generateVariables} from './variable.service'
import {simpleUseCases} from '../../api/test-data-simple-program/simple-program-usecases.logic.json'
import {generateTokens} from '../02-lexical-analysis/generate-token.service'
import {preProcess} from '../01-pre-processor/pre-processor.service'
import {quickSourceFile} from '../../commons/source-file.util'
import {simpleProgramm} from '../../api/test-data-simple-program/simple-program'

describe('generate-use-cases-service', () => {
  it('should generate empty use cases arrays', () => {
    const input: Token[] = []
    const expected: UseCase[] = []
    const variables: Variable[] = []
    const result = generateUseCases(input, variables)
    expect(result).toEqual(expected)
  })

  it('should generate use cases arrays', () => {
    const input: Token[] = generateTokens(preProcess(quickSourceFile(simpleProgramm)).body)
    const variables: Variable[] = generateVariables([...input])
    const result = generateUseCases(input, variables)
    expect(result).toEqual(simpleUseCases)
  })
})
