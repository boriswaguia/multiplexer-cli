import {Token, TokenType, Keyword, Separator} from '../api/source-token'
import {VariableType} from '../api/data-structure'

export const isKeyword = (token: Token): boolean => {
  return token.type === TokenType.Keyword
}

export const valIsKeyword = (value: string) => {
  return Object.keys(Keyword).find(k => k === value) !== undefined
}

export const isLetKeyword = (token: Token): boolean => {
  return token.type === TokenType.Keyword && token.value === Keyword.let
}

export const isDataVariableType = (token: Token): boolean => {
  return token.type === TokenType.Keyword && token.value === VariableType.data
}

export const isActorsVariableType = (token: Token): boolean => {
  return token.type === TokenType.Keyword && token.value === VariableType.actors
}

export const isSemiColon = (token: Token): boolean => {
  return token.type === TokenType.Separator && (token.value as string) === Separator[';']
}
