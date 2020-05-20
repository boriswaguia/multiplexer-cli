import {VariableType} from '../api/data-structure'

export const isVariableType = (variable: string): boolean => {
  return Object.keys(VariableType).find(k => k === variable) !== undefined
}

export const getVariableType = (input: string): VariableType => {
  return input === VariableType.actors ? VariableType.actors : VariableType.data
}
