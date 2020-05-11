import {Token, TokenType, Keyword, Operator, Separator, Identifer} from '../../api/source-token'

export const mapToToken = (s: string): Token => {
  if (s in Keyword) {
    return {type: TokenType.Keyword, value: s}
  } else if (s in Operator){
    return {type: TokenType.Operator, value: s};
  } else if (s in Separator) {
    return {type: TokenType.Separator, value: s};
  } else {
    const value: Identifer = {value: s};
    return {type: TokenType.Identifier, value}
  }
}

export const generateTokens = (source: string): Token[] => {
  const spaceRemoved = source.split(' ');
  const commaRemoved = spaceRemoved.flatMap(s => s.split(/(,)/))
  const semiRemoved = commaRemoved.flatMap(s => s.split(/(;)/))
  const result: Token[] = semiRemoved.filter(s => !!s).map(s => mapToToken(s))
  return result
}
