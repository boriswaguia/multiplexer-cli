import {COMMENT_INDICATOR} from './constant'
import {SourceFile} from '../../api/source-file'

const removeComments = (source: SourceFile): SourceFile => {
  const filtered = source.body
  .filter(l => !l.trim().startsWith(COMMENT_INDICATOR))
  .map(l => !l.includes(COMMENT_INDICATOR) ? l : l.substring(0, l.indexOf(COMMENT_INDICATOR)))
  return {...source, body: filtered}
}

export {removeComments}
