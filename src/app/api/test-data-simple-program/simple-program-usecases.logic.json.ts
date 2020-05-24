import {UseCase, VariableType} from '../data-structure'

export const simpleUseCases: UseCase[] = [
  {
    id: 'enter_form_data',
    actor: {id: 'user', type: VariableType.actors},
    steps: [
      {
        actor: {id: 'browser', type: VariableType.actors},
        operation: {id: 'validate_user_data', type: VariableType.operation},
      },
      {
        actor: {id: 'browser', type: VariableType.actors},
        operation: {id: 'post_user_data', type: VariableType.operation},
      },
      {
        actor: {id: 'server', type: VariableType.actors},
        operation: {id: 'validate_user_data', type: VariableType.operation},
      },
      {
        actor: {id: 'server', type: VariableType.actors},
        operation: {id: 'save_user_data', type: VariableType.operation},
      },
      {
        actor: {id: 'database', type: VariableType.actors},
        operation: {id: 'persist_user_data', type: VariableType.operation},
      },
    ],
    counterSteps: [],
    isCounterCase: false,
  },
  {
    id: 'delete_user_data',
    actor: {id: 'admin', type: VariableType.actors},
    steps: [
      {
        actor: {id: 'browser', type: VariableType.actors},
        operation: {
          id: 'post_delete_user_data',
          type: VariableType.operation,
        },
      },
      {
        actor: {id: 'server', type: VariableType.actors},
        operation: {
          id: 'validate_delete_user_data',
          type: VariableType.operation,
        },
      },
      {
        actor: {id: 'server', type: VariableType.actors},
        operation: {id: 'delete_user_data', type: VariableType.operation},
      },
      {
        actor: {id: 'database', type: VariableType.actors},
        operation: {id: 'delete_user_data', type: VariableType.operation},
      },
    ],
    counterSteps: [],
    isCounterCase: false,
  },
  {
    actor: {
      id: 'database',
      type: VariableType.actors,
    },
    counterSteps: [],
    id: 'get_user_data',
    isCounterCase: false,
    steps: [],
  },
  {
    actor: {
      id: 'database',
      type: VariableType.actors,
    },
    counterSteps: [],
    id: 'delete_user_data',
    isCounterCase: false,
    steps: [],
  },
]
