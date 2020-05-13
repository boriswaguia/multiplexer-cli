import {Identifier, Literal} from './source-token'

export type ExpressionType = 'VariableDeclaration' | 'ActionDeclaration' | 'ActionCallExpression';
export type Root = 'root'
export type Unspecified = undefined | null;

export interface Expression {
  start: number;
  end: number;
  type: ExpressionType;
  nodes: Expression[];
  parent: Expression | Root | Unspecified;
}

// Declaration

export interface Start {
  keyword: 'start';
  node: Node;
}

export interface Begin {
  keyword: 'begin';
  node: Node;
}
export interface End {
  keyword: 'end';
  node: Node;
}
export type VariableKeyword = 'let'
/**
 * let data = fe_validation_message, be_validation_message, user_data
 * let actors = user, browser
 * let actors be user, browser
 */
export interface VariableDeclaration {
  keyword: VariableKeyword;
  identifier: Identifier;
  value: Literal;
}

/**
 * when user enter_form_data then
 *   browser validate_user_data
 *   browser post_user_data
 *   server validate_user_data
 *   server save_user_data
 *   database persist_user_data
 * end
 *
 * when browser validate_user_data false then inc fe_validation_message end
 * when browser post_user_data false then inc fe_validation_message end
 * when server validate_user_data false then action
 */
export interface ActionDeclaration {
  start: Start;
  actor: Identifier;
  action: Identifier;
  begin: Begin;
  end: End;
  body: ActionCallExpression[];
}

// browser validate_data
export interface ActionCallExpression {
  actor: Identifier;
  operation: Identifier;
}

interface Node {
  line: number;
  column: number;
}
