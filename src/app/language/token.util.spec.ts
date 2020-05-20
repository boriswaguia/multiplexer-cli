import {Token, TokenType, Keyword} from '../api/source-token'
import {isKeyword, valIsKeyword, isLetKeyword, isDataVariableType, isActorsVariableType} from './token.util'
import {VariableType} from '../api/data-structure'

describe('token.util', () => {
  it('should return true if token is a keyword', () => {
    const token: Token = {
      type: TokenType.Keyword,
      value: Keyword.let,
    }
    const result = isKeyword(token)
    expect(result).toBe(true)
  })

  it('should return true if value is a keyword', () => {
    const value = 'let'
    const result = valIsKeyword(value)
    expect(result).toBe(true)
  })
  it('should return false if value is a keyword', () => {
    const value = 'unknow'
    const result = valIsKeyword(value)
    expect(result).toBe(false)
  })

  describe('isLetKeyword', () => {
    it('should return  true if token is letkeyword', () => {
      const token: Token = {
        type: TokenType.Keyword,
        value: 'let',
      }
      const result = isLetKeyword(token)
      expect(result).toBe(true)
    })
    it('should return false if token is notletkeyword', () => {
      const token: Token = {
        type: TokenType.Identifier,
        value: '',
      }
      const result = isLetKeyword(token)
      expect(result).toBe(false)
    })
  })

  describe('isDataVariableType', () => {
    it('should return  true if token is dataVariableType', () => {
      const token: Token = {
        type: TokenType.Keyword,
        value: VariableType.data,
      }
      const result = isDataVariableType(token)
      expect(result).toBe(true)
    })
    it('should return false if token is notletkeyword', () => {
      const token: Token = {
        type: TokenType.Identifier,
        value: '',
      }
      const result = isDataVariableType(token)
      expect(result).toBe(false)
    })
  })

  describe('isActorsVariableType', () => {
    it('should return  true if token is letkeyword', () => {
      const token: Token = {
        type: TokenType.Keyword,
        value: VariableType.actors,
      }
      const result = isActorsVariableType(token)
      expect(result).toBe(true)
    })
    it('should return false if token is notletkeyword', () => {
      const token: Token = {
        type: TokenType.Identifier,
        value: VariableType.actors,
      }
      const result = isActorsVariableType(token)
      expect(result).toBe(false)
    })
  })
})
