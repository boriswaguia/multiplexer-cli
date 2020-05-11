
import {mapToToken, generateTokens} from './generate-token.service'
import {Token, TokenType, Identifer} from '../../api/source-token'

describe('generate-token-service', () => {
  it('should generate keyword token from string', () => {
    const input = 'let'
    const expected: Token = {type: TokenType.Keyword, value: input}
    const result = mapToToken(input)
    expect(result).toEqual(expected)
  })

  it('should generate operator token from string', () => {
    const input = '+'
    const expected: Token = {type: TokenType.Operator, value: input}
    const result = mapToToken(input)
    expect(result).toEqual(expected)
  })

  it('should generate separator token from string', () => {
    const input = ';'
    const expected: Token = {type: TokenType.Separator, value: input}
    const result = mapToToken(input)
    expect(result).toEqual(expected)
  })

  it('should generate identifier token from string', () => {
    const input = 'echo'
    const expected: Token = {type: TokenType.Identifier, value: {value: input}}
    const result = mapToToken(input)
    expect(result).toEqual(expected)
  })
  it('should generate token from source', () => {
    const line = 'let actors = user, browser, server, database;'
    const letkeyword = 'let'
    const actors: Identifer = {value: 'actors'}
    const operator = '='
    const comma  = ','
    const semicolon = ';'
    const user: Identifer = {value: 'user'}
    const browser: Identifer = {value: 'browser'}
    const server: Identifer = {value: 'server'}
    const database: Identifer = {value: 'database'}

    const expected: Token[] = [
      {type: TokenType.Keyword, value: letkeyword},
      {type: TokenType.Identifier, value: actors},
      {type: TokenType.Operator, value: operator},
      {type: TokenType.Identifier, value: user},
      {type: TokenType.Separator, value: comma},
      {type: TokenType.Identifier, value: browser},
      {type: TokenType.Separator, value: comma},
      {type: TokenType.Identifier, value: server},
      {type: TokenType.Separator, value: comma},
      {type: TokenType.Identifier, value: database},
      {type: TokenType.Separator, value: semicolon},
    ]

    const result = generateTokens(line)
    expect(result).toEqual(expected)
  })
})
