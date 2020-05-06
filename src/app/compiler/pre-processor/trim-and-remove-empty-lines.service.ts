import {SourceFile} from '../../api/source-file'

export const trimAndRemoveEmptyLines = (source: SourceFile): SourceFile => {
  const body = source.body
  const lines = body.filter(line => Boolean(line) && line.trim().length > 0).map(line => line.trim())
  return {...source, body: lines}
}
