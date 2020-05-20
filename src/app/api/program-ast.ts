import {Variable, UseCase, Step, Operation} from './data-structure'

export interface ProgramAST {
  variables: Variable[];
  useCases: UseCase[];
  steps: Step[];
  operations: Operation[];
}

