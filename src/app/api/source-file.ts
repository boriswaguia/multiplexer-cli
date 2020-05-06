export type SourceBody = string[]

export interface SourceFile {
  name: string;
  relativePath: string;
  fullPath: string;
  body: SourceBody;
}
