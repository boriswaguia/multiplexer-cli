import {COMMENT_INDICATOR} from '../../commons/constant'
import {SourceFile} from '../../api/source-file'

const removeComments = (source: SourceFile): SourceFile => {
  const filtered = source.body
  .split('\n')
  .filter(l => !l.trim().startsWith(COMMENT_INDICATOR))
  .map(l => l.includes(COMMENT_INDICATOR) ? l.substring(0, l.indexOf(COMMENT_INDICATOR)) : l)
  .join('\n')
  return {...source, body: filtered}
}

export {removeComments}
