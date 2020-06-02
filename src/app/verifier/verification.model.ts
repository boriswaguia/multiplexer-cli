import { Step } from '../api/data-structure';
import { boolean } from '@oclif/command/lib/flags';

export interface VerificationModel {
  unspecified: Step[],
  decisionTables: DecisionTable[]
}

export interface DecisionTable {
  conditions: Condition[],
  rules: Rule[]
}

export interface Condition {
  designation: string,
  outcomes: boolean[]
}

export interface Test {
  designation: string,
  value: boolean,
}

export interface Rule {
  tests: Test[],
  action: Action
}

export const validateTests = (tests: Test[]) => {
  const buffer: Map<string, boolean> = new Map();
  tests.forEach(t => {
    if (buffer.has(t.designation) && buffer.get(t.designation) === t.value) {
      throw new Error(`Duplicated entries found ${JSON.stringify(t)}`);
    } else {
      buffer.set(t.designation, t.value);
    }
  });
}

export const createRule = (tests: Test[], action: Action): Rule => {
  validateTests(tests);
  return {tests, action};
}


export interface Action {
  value: string | boolean | undefined;
}
