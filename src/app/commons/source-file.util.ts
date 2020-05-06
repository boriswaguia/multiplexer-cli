import {SourceFile, SourceBody} from '../api/source-file'

export const sourceFile = (name: string, relativePath: string, fullPath: string, body: SourceBody): SourceFile => ({name, body, fullPath, relativePath})
