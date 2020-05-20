import {VariableType} from '../api/data-structure'
import {isVariableType, getVariableType} from './variable.util'

describe('variable-util', () => {
  it('should return true if is a variable_type', () => {
    const variables: VariableType[] = [
      VariableType.actors,
      VariableType.data,
    ]
    variables.forEach(variable => {
      const result = isVariableType(variable)
      expect(result).toBe(true)
    })
  })

  it('should return variable actor type', () => {
    const result = getVariableType('actors')
    expect(result).toBe('actors')
  })
  it('should return variable data type data', () => {
    const result = getVariableType('data')
    expect(result).toBe('data')
  })
})
