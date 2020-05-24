import {Variable, UseCase, Operation} from './data-structure'

export interface ProgramAST {
  variables: Variable[];
  useCases: UseCase[];
  counterCases: UseCase[];
  operations: Operation[];
}

