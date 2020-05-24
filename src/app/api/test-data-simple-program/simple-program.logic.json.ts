import {Token, TokenType} from '../source-token'

export const simpleProgramJson: Token[] = [
  {
    type: TokenType.Keyword,
    value: 'let',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'data',
    },
  },
  {
    type: TokenType.Operator,
    value: '=',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'fe_validation_message',
    },
  },
  {
    type: TokenType.Separator,
    value: ',',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'be_validation_message',
    },
  },
  {
    type: TokenType.Separator,
    value: ',',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'user_data',
    },
  },
  {
    type: TokenType.Separator,
    value: ';',
  },
  {
    type: TokenType.Keyword,
    value: 'let',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'actors',
    },
  },
  {
    type: TokenType.Operator,
    value: '=',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'user',
    },
  },
  {
    type: TokenType.Separator,
    value: ',',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Separator,
    value: ',',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'admin',
    },
  },
  {
    type: TokenType.Separator,
    value: ',',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'server',
    },
  },
  {
    type: TokenType.Separator,
    value: ',',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'database',
    },
  },
  {
    type: TokenType.Separator,
    value: ';',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'user',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'enter_form_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'validate_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'post_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'server',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'validate_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'server',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'save_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'database',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'persist_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'validate_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'false',
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'display_fe_validation_message',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'post_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'false',
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'display',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'server',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'validate_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'false',
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'server',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'return_be_validation_error',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'admin',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'delete_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'post_delete_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'server',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'validate_delete_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'server',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'delete_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'database',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'delete_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'user',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'or',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'admin',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'get_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'browser',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'get_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'server',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'get_user_data',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'database',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'get_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'database',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'get_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'ele',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'database',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'persist_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'inc',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
  {
    type: TokenType.Keyword,
    value: 'when',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'database',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'delete_user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'then',
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'dec',
    },
  },
  {
    type: TokenType.Identifier,
    value: {
      value: 'user_data',
    },
  },
  {
    type: TokenType.Keyword,
    value: 'end',
  },
]
