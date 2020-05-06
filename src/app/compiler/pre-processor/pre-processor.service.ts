import {removeComments} from './remove-comment.service'
import {SourceFile} from '../../api/source-file'
import {trimAndRemoveEmptyLines} from './trim-and-remove-empty-lines.service'

export const preProcess = (source: SourceFile): SourceFile => {
  const result = trimAndRemoveEmptyLines(
    removeComments(source)
  )
  return result
}
