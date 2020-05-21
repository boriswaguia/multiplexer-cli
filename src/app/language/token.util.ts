import {Token, TokenType, KeywordType, Separator, Identifier, Operator} from '../api/source-token'
import {VariableType} from '../api/data-structure'
import {isVariableType} from './variable.util'

export const isKeyword = (token: Token): boolean => {
  return token.type === TokenType.Keyword
}

export const valIsKeyword = (value: string) => {
  return Object.keys(KeywordType).find(k => k === value) !== undefined
}
export const valIsOperator = (value: string) => {
  return Object.keys(Operator).find(k => k === value) !== undefined
}
export const valIsSeparator = (value: string) => {
  return Object.keys(Separator).find(k => k === value) !== undefined
}

export const isLetKeyword = (token: Token): boolean => {
  return token.type === TokenType.Keyword && token.value === KeywordType.let
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

export const isWhenKeyword = (token: Token): boolean => {
  return token.type === TokenType.Keyword && (token.value as string) === KeywordType.when
}

export const getIdentifierValue = (token: Token): string => {
  return (token.value as Identifier).value
}

export const createIdentifier = (input: string): Token => {
  return {type: TokenType.Identifier, value: {value: input}}
}

export const isIdentifier = (token: Token) => {
  return token.type === TokenType.Identifier
}

export const isTokenVariableType = (token: Token): boolean => {
  return isIdentifier(token) && isVariableType((token.value as Identifier).value)
}

export const isThenKeyword = (token: Token): boolean => {
  return isKeyword(token) && token.value === KeywordType.then
}

export const isEndKeyword = (token: Token): boolean => {
  return isKeyword(token) && token.value === KeywordType.end
}
