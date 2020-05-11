export interface Token {
  type: TokenType;
  value: string |  Identifer | Keyword | Separator | Operator | Literal;
}
// identifier	x, color, UP
// keyword	if, while, return
// separator	}, (, ;
// operator	+, <, =
// literal	true, 6.02e23, "music"

export enum TokenType {
  Identifier = 'Identifier',
  Keyword = 'Keyword',
  Separator = 'Separator',
  Operator = 'Operator',
  Literal = 'Literal'
}

export interface Identifer {
  value: string;
}

export enum Keyword {
  let = 'let',
  flow = 'flow',
  end = 'end',
  do = 'do',
  when = 'when',
  actor = 'error',
  export = 'export',
  import = 'import',
}
export const keywords = (): string[] => Object.keys(Keyword)

export enum Operator {
  '+' = '+',
  '-' = '-',
  '%' = '%',
  'head' = 'head',
  'tail' = 'tail',
  'append' = 'append',
  '=' = '=',
  'be' = 'be'
}

export const operators = (): string[] => Object.keys(Operator)

export enum Separator {
  '{'= '{',
  '}'= '}',
  ';'= ';',
  ','= ','
}

export const separators = (): string[] => Object.keys(Separator)

export interface Literal {
  value: number | boolean | string;
}

// export type Tokens = Token[];

// export type TokenType =
//   | Identitfier
//   | Keyword
//   | Separator
//   | Operator
//   | Litteral
//   | UserComment;

// export interface Token {
//   type: TokenType;
//   value: KeywordType |
// }

// export interface Identitfier {
//   value: string;
// }

// export interface UserComment {
//   value: string
// }

// export interface Node {
//   type: Token;
//   start: number;
//   end: number;
// }
