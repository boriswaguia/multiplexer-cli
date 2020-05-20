import {Token, TokenType, Identifier} from '../api/source-token'
import {isVariableType} from './variable.util'

const createIdentifier = (input: string): Token => {
  return {type: TokenType.Identifier, value: {value: input}}
}

const isIdentifier = (token: Token) => {
  return token.type === TokenType.Identifier
}

const isTokenVariableType = (token: Token): boolean => {
  return isIdentifier(token) && isVariableType((token.value as Identifier).value)
}

export const identifierUtil = {createIdentifier, isIdentifier, isTokenVariableType}
