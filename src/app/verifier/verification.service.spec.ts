import { ProgramAST } from '../api/program-ast';
import { programAST } from '../api/test-data-simple-program/simple-program-application-ast.logic.json';
import { verifyAst } from './verification.service';
import { VerificationModel } from './verification.model';
import { verificationModelTestJson } from './program-verification.spec.json';

describe('verification.service', () => {

  it('should create verification result', () => {
    const input: ProgramAST = programAST;
    const expected: VerificationModel = verificationModelTestJson;
    const result = verifyAst(input);
    expect(result).toBe(expected);
  });
});
