import {VariableType, Variable} from '../api/data-structure'

export const isVariableType = (variable: string): boolean => {
  return Object.keys(VariableType).find(k => k === variable) !== undefined
}

export const getVariableType = (input: string): VariableType => {
  return input === VariableType.actors ? VariableType.actors : VariableType.data
}

export const getVariable = (variables: Variable[], id: string): Variable | undefined => {
  return variables.find(variable => variable.id === id)
}

export const getActorVariable = (variables: Variable[], id: string): Variable | undefined => {
  return variables.find(variable => variable.id === id && variable.type === VariableType.actors)
}
