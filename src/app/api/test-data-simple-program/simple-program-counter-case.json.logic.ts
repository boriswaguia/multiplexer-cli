import {VariableType, UseCase} from '../data-structure'

export const simpleCounterCases: UseCase[] = [
  {
    id: 'validate_user_data',
    actor: {
      id: 'browser',
      type: VariableType.actors,
    },
    steps: [
      {
        actor: {
          id: 'browser',
          type: VariableType.actors,
        },
        operation: {
          id: 'display_fe_validation_message',
          type: VariableType.operation,
        },
      },
    ],
    counterSteps: [],
    isCounterCase: true,
  },
  {
    id: 'validate_user_data',
    actor: {
      id: 'server',
      type: VariableType.actors,
    },
    steps: [
      {
        actor: {
          id: 'server',
          type: VariableType.actors,
        },
        operation: {
          id: 'return_be_validation_error',
          type: VariableType.operation,
        },
      },
    ],
    counterSteps: [],
    isCounterCase: true,
  },
]
