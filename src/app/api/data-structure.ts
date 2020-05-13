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

interface Program {
  variables: Variable[];
  useCases: UseCase[];
  operations: Operation[];
  arithmeticOperations: ArithmeticOperation[];
}

type VariableType = 'actors' | 'data';

interface Variable {
  type: VariableType;
  name: string;
  values: Value[];
}

interface Value {
  content: string | number | boolean;
}

interface UseCase {
  actor: Variable;
  steps: Step[];
  counterSteps: Step[];
}

interface Step {
  actor: Variable;
  operations: Operation[];
}

type OperationCall = Operation | ArithmeticOperation | UseCase;

interface Operation {
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

interface ArithmeticOperation {
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
