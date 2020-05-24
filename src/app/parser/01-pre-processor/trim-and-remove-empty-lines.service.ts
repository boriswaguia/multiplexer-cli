import {SourceFile} from '../../api/source-file'

export const trimAndRemoveEmptyLines = (source: SourceFile): SourceFile => {
  const body = source.body
  const splitted = body.split('\n')
  const lines = splitted.filter(line => Boolean(line) && line.trim().length > 0).map(line => line.trim())
  const result = lines.join('\n')
  return {...source, body: result}
}
