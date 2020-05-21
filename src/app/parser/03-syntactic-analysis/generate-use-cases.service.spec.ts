import {Token} from '../../api/source-token'
import {UseCase, Variable} from '../../api/data-structure'
import {generateUseCases} from './generate-use-cases.service'
import {simpleProgramJson} from '../../api/simple-program.logic.json'
import {generateVariables} from './variable.service'
import {simpleUseCases} from '../../api/use-cases.spec.json'

describe('generate-use-cases-service', () => {
  it('should generate empty use cases arrays', () => {
    const input: Token[] = []
    const expected: UseCase[] = []
    const variables: Variable[] = []
    const result = generateUseCases(input, variables)
    expect(result).toEqual(expected)
  })

  it('should generate use cases arrays', () => {
    const input: Token[] = [...simpleProgramJson]
    const variables: Variable[] = generateVariables([...simpleProgramJson])
    const expected: UseCase[] = [...simpleUseCases]
    const result = generateUseCases(input, variables)
    expect(result).toEqual(expected)
  })
})
