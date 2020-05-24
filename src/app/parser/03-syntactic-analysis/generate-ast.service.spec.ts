import {generateAST} from './generate-ast.service'
import {Token} from '../../api/source-token'
import {generateTokens} from '../02-lexical-analysis/generate-token.service'
import {simpleProgramm} from '../../api/test-data-simple-program/simple-program'
import {preProcess} from '../01-pre-processor/pre-processor.service'
import {quickSourceFile} from '../../commons/source-file.util'
import {programAST} from '../../api/test-data-simple-program/simple-program-application-ast.logic.json'

describe('generate-ast-service', () => {
  it('should generate a simple AST', () => {
    const input: Token[] = generateTokens(preProcess(quickSourceFile(simpleProgramm)).body)
    const result = generateAST(input)
    expect(result).toEqual(programAST)
  })
})
