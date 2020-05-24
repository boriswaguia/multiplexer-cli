export interface Token {
  type: TokenType;
  value: string |  Identifier | KeywordType | Separator | Operator | Literal;
}

export enum TokenType {
  Identifier = 'Identifier',
  Keyword = 'Keyword',
  Separator = 'Separator',
  Operator = 'Operator',
  Literal = 'Literal'
}

export interface Identifier {
  value: string;
}

export enum KeywordType {
  let = 'let',
  flow = 'flow',
  end = 'end',
  when = 'when',
  then = 'then',
  actor = 'error',
  export = 'export',
  import = 'import',
  false = 'false',
  true = 'true',
}

export type BooleanType = KeywordType.false | KeywordType.true;

export const keywords = (): string[] => Object.keys(KeywordType)

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
