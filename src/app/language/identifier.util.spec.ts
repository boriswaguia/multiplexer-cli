// import {Token, TokenType} from '../api/source-token'
// import {VariableType} from '../api/data-structure'
// import { identifierUtil } from './identifier.util'

// describe('variable-util', () => {
//   it('should create an identifier', () => {
//     const input = 'data'
//     const expected: Token = {
//       type: TokenType.Identifier,
//       value: {
//         value: 'data',
//       },
//     }
//     const result = identifierUtil.createIdentifier(input)
//     expect(result).toEqual(expected)
//   })
//   it('should return true if token is Identifier', () => {
//     const token: Token = {
//       type: TokenType.Identifier,
//       value: {value: 'any-val'},
//     }
//     const result = identifierUtil.isIdentifier(token)
//     expect(result).toBe(true)
//   })
//   describe('isTokenVariableType', () => {
//     it('should return true if identifier is variable_type', () => {
//       const token: Token = {
//         type: TokenType.Identifier,
//         value: {
//           value: VariableType.data,
//         },
//       }
//       const result = identifierUtil.isTokenVariableType(token)
//       expect(result).toBe(true)
//     })

//     it('should return false if token is not an identifier', () => {
//       const token: Token = {
//         type: TokenType.Keyword,
//         value: {
//           value: VariableType.data,
//         },
//       }
//       const result = identifierUtil.isTokenVariableType(token)
//       expect(result).toBe(false)
//     })

//     it('should return false if token an identifier and not a variable type', () => {
//       const token: Token = {
//         type: TokenType.Identifier,
//         value: {
//           value: 'echo',
//         },
//       }
//       const result = identifierUtil.isTokenVariableType(token)
//       expect(result).toBe(false)
//     })
//     it('should return false if token an identifier and not a variable type', () => {
//       const tokens: Token[] = [
//         {
//           type: TokenType.Identifier,
//           value: {
//             value: 'echo',
//           },
//         },
//         {
//           type: TokenType.Identifier,
//           value: '',
//         },
//       ]
//       tokens.forEach(token => {
//         const result = identifierUtil.isTokenVariableType(token)
//         expect(result).toBe(false)
//       })
//     })
//   })
// })
