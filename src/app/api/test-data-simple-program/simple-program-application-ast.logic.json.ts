import {ProgramAST} from '../program-ast'
import {VariableType} from '../data-structure'

export const programAST: ProgramAST = {
  variables: [
    {
      id: 'fe_validation_message',
      type: VariableType.data,
    },
    {
      id: 'be_validation_message',
      type: VariableType.data,
    },
    {
      id: 'user_data',
      type: VariableType.data,
    },
    {
      id: 'user',
      type: VariableType.actors,
    },
    {
      id: 'browser',
      type: VariableType.actors,
    },
    {
      id: 'admin',
      type: VariableType.actors,
    },
    {
      id: 'server',
      type: VariableType.actors,
    },
    {
      id: 'database',
      type: VariableType.actors,
    },
  ],
  useCases: [
    {
      id: 'enter_form_data',
      actor: {
        id: 'user',
        type: VariableType.actors,
      },
      steps: [
        {
          actor: {
            id: 'browser',
            type: VariableType.actors,
          },
          operation: {
            id: 'validate_user_data',
            type: VariableType.operation,
          },
        },
        {
          actor: {
            id: 'browser',
            type: VariableType.actors,
          },
          operation: {
            id: 'post_user_data',
            type: VariableType.operation,
          },
        },
        {
          actor: {
            id: 'server',
            type: VariableType.actors,
          },
          operation: {
            id: 'validate_user_data',
            type: VariableType.operation,
          },
        },
        {
          actor: {
            id: 'server',
            type: VariableType.actors,
          },
          operation: {
            id: 'save_user_data',
            type: VariableType.operation,
          },
        },
        {
          actor: {
            id: 'database',
            type: VariableType.actors,
          },
          operation: {
            id: 'persist_user_data',
            type: VariableType.operation,
          },
        },
      ],
      counterSteps: [],
      isCounterCase: false,
    },
    {
      id: 'delete_user_data',
      actor: {
        id: 'admin',
        type: VariableType.actors,
      },
      steps: [
        {
          actor: {
            id: 'browser',
            type: VariableType.actors,
          },
          operation: {
            id: 'post_delete_user_data',
            type: VariableType.operation,
          },
        },
        {
          actor: {
            id: 'server',
            type: VariableType.actors,
          },
          operation: {
            id: 'validate_delete_user_data',
            type: VariableType.operation,
          },
        },
        {
          actor: {
            id: 'server',
            type: VariableType.actors,
          },
          operation: {
            id: 'delete_user_data',
            type: VariableType.operation,
          },
        },
        {
          actor: {
            id: 'database',
            type: VariableType.actors,
          },
          operation: {
            id: 'delete_user_data',
            type: VariableType.operation,
          },
        },
      ],
      counterSteps: [],
      isCounterCase: false,
    },
    {
      id: 'get_user_data',
      actor: {
        id: 'database',
        type: VariableType.actors,
      },
      steps: [],
      counterSteps: [],
      isCounterCase: false,
    },
    {
      id: 'delete_user_data',
      actor: {
        id: 'database',
        type: VariableType.actors,
      },
      steps: [],
      counterSteps: [],
      isCounterCase: false,
    },
  ],
  counterCases: [
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
  ],
  operations: [],
}
