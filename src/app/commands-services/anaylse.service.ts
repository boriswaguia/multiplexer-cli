import { readFileSync } from 'fs'
import { generateAST } from '../parser/03-syntactic-analysis/generate-ast.service';
import { generateTokens } from '../parser/02-lexical-analysis/generate-token.service';
import { preProcess } from '../parser/01-pre-processor/pre-processor.service';
import { quickSourceFile } from '../commons/source-file.util';
import { verifyAst } from '../verifier/verification.service';
import { VerificationModel } from '../verifier/verification.model';

export const analyseFile = (file: string): VerificationModel => analyseString(readFileSync(file, {encoding: 'UTF-8'}));

export const analyseString = (content: string): VerificationModel => {
  const input = generateTokens(preProcess(quickSourceFile(content)).body)
  const ast = generateAST(input);
  const verificationModel = verifyAst(ast);
  return verificationModel;
};
