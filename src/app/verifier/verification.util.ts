import { Step, UseCase } from '../api/data-structure';
import { Condition, Test, Rule, Action } from './verification.model';

export type TestSet = Test[][];

export const condition = (designation: string, outcomes: boolean[]): Condition => ({designation, outcomes})

export const stepToCondition = (step: Step): Condition => ({designation: `${step.actor.id} ${step.operation.id}`, outcomes: [true, false]})

export const useCaseToConditions = (useCase: UseCase): Condition[] => useCase.steps.map(step => stepToCondition(step))

export const conditionToTests = (condition: Condition): Test[] => condition.outcomes.map(outcome => ({designation: condition.designation, value: outcome}))

export const conditionsToTests = (conditions: Condition[]): TestSet  => conditions.map(c => conditionToTests(c));

export const cartesianProducts = (conditions: Condition[], useCase: UseCase): Rule[] => {
  const result: Rule[] = [];
  let falseCondition = conditions.length;
  const nbrConditions = conditions.length;

  while(falseCondition >= 0) {
    const tests: Test[] = [];
    for (let index = 0; index < conditions.length; index++) {
      const element = conditions[index];
      let test: Test;
      if(index < falseCondition) {
         test = {designation: element.designation, value: true};
      } else {
        test = {designation: element.designation, value: false};
      }
      tests.push(test);
    }

    const lastTrueEltIndex = tests.filter(t => t.value === true).length;
    let action: Action;
    if(lastTrueEltIndex === conditions.length) {
      action = {value: `${useCase.actor.id} ${useCase.id} is successful`}
    } else {
      const conditionIndex = lastTrueEltIndex > 0 ? lastTrueEltIndex -1: lastTrueEltIndex;
      action = {value: conditions[conditionIndex].designation}
    }
    const rule: Rule = {action, tests};
    result.push(rule);
    falseCondition = falseCondition - 1;
  }
  return result;
}
