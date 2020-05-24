
import {mapToToken, generateTokens} from './generate-token.service'
import {Token, TokenType, Identifier} from '../../api/source-token'
import {simpleProgramm} from '../../api/test-data-simple-program/simple-program'
import {simpleProgramJson} from '../../api/test-data-simple-program/simple-program.logic.json'

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
    const actors: Identifier = {value: 'actors'}
    const operator = '='
    const comma  = ','
    const semicolon = ';'
    const user: Identifier = {value: 'user'}
    const browser: Identifier = {value: 'browser'}
    const server: Identifier = {value: 'server'}
    const database: Identifier = {value: 'database'}

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

  it('should token from multile source', () => {
    expect(generateTokens(simpleProgramm)).toEqual(simpleProgramJson)
  })
})
