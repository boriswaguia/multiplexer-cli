import {Token, TokenType, KeywordType, Operator, Separator, Identifier} from '../../api/source-token'
import {valIsKeyword, valIsOperator, valIsSeparator} from '../../language/token.util'

export const mapToToken = (s: string): Token => {
  if (valIsKeyword(s)) {
    return {type: TokenType.Keyword, value: s}
  }
  if (valIsOperator(s)) {
    return {type: TokenType.Operator, value: s}
  }
  if (valIsSeparator(s)) {
    return {type: TokenType.Separator, value: s}
  }
  const value: Identifier = {value: s}
  return {type: TokenType.Identifier, value}
}

export const generateTokens = (source: string): Token[] => {
  const backToLine = source.split('\n')
  const spaceRemoved = backToLine.flatMap(s => s.split(' '))

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#Splitting_with_a_RegExp_to_include_parts_of_the_separator_in_the_result
  const commaRemoved = spaceRemoved.flatMap(s => s.split(/(,)/))
  const semiRemoved = commaRemoved.flatMap(s => s.split(/(;)/))
  const result: Token[] = semiRemoved.filter(s => Boolean(s)).map(s => mapToToken(s))

  console.log(JSON.stringify(result))
  return result
}

