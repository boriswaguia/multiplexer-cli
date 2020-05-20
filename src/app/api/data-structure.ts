// program
//   - variables
//     - actors
//     - data
//   - use_cases
//     - steps
//       - usecase_call
//       - arithmetic_operation_call
//     - counter_steps
//   - arithmetic_operation
//     - steps
//       - arithmetic_operation
//       - arithmetic_operation_call
//     - counter steps
//   - operations
//     - find_un_specified_path
//     - create_decision_table
//     - create_uml_flow_diagram

export interface Program {
  variables: Variable[];
  useCases: UseCase[];
  operations: Operation[];
  arithmeticOperations: ArithmeticOperation[];
}

export enum VariableType {
  actors = 'actors',
  data = 'data'
}

export interface Variable {
  type: VariableType;
  id: string;
  value?: Value[];
}

export interface Value {
  content: string | number | boolean;
}

export interface UseCase {
  actor: Variable;
  steps: Step[];
  counterSteps: Step[];
}

export interface Step {
  actor: Variable;
  operations: Operation[];
}

type OperationCall = Operation | ArithmeticOperation | UseCase;

export interface Operation {
  type: OperationType;
  actor: Variable;
  name: string;
  call: OperationCall[];
}

enum OperationType {
  USE_CASE = 'USE_CASE',
  ARITHMETIC_OPERATION = 'ARITHMETIC_OPERATION',
  OPERATION = 'OPERATION'
}

export interface ArithmeticOperation {
  type: ArithmeticOperationType;
  data: Variable;
  name: string;
  actor: Variable;
}

enum ArithmeticOperationType {
  ADDITION = 'ADDITION',
  INC = 'INC',
  SUB = 'SUB',
  HEAD = 'HEAD',
  TAIL = 'TAIL',
  DIFF = 'DIFF',
  MODULO = 'MODULO'
}

export interface Import {
  identifer: string;
  path: string;
}
