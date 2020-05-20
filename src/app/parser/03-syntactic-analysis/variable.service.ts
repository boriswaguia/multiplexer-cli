import {Token, TokenType, Identifier} from '../../api/source-token'
import {Variable, VariableType} from '../../api/data-structure'
import {identifierUtil} from '../../language/identifier.util'
import {isLetKeyword, isSemiColon, isKeyword} from '../../language/token.util'
import {getVariableType} from '../../language/variable.util'

export const generateVariables = (tokens: Token[]): Variable[] => {
  const result: Variable[] = []
  if (tokens.length === 0) {
    return result
  }
  let letKeyword: Token | undefined
  let variableTypeKeyword: {type: TokenType.Identifier; value: VariableType} | undefined
  let shouldStop = false
  let token: Token

  while (tokens.length && !shouldStop) {
    token = tokens.shift()!
    if (isLetKeyword(token)) {
      letKeyword = token
    }
    if (letKeyword && identifierUtil.isTokenVariableType(token)) {
      variableTypeKeyword =  {type: TokenType.Identifier, value: getVariableType((token.value as Identifier).value)}
    }
    if (letKeyword && variableTypeKeyword && identifierUtil.isIdentifier(token) &&  !identifierUtil.isTokenVariableType(token)) {
      const variable: Variable = {id: (token.value as Identifier).value, type: variableTypeKeyword.value}
      result.push(variable)
    }
    if (isKeyword(token) && !isLetKeyword(token)) {
      shouldStop = true
      letKeyword = undefined
      variableTypeKeyword = undefined
    }
    if (isSemiColon(token)) {
      letKeyword = undefined
      variableTypeKeyword = undefined
    }
  }
  return result
}
