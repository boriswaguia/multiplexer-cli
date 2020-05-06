import {removeComments} from './remove-comment.service'
import {sourceFile} from '../../commons/source-file.util'

describe('remove-comment-service', () => {
  it('should remove comment on a given file', () => {
    const input = [
      '//                sdsds',
      ' // comment 1',
      ' let a = b; // comment 2       //comment 3',
      ' let c = d',
      ' ',
      '//',
    ]
    const expected = [' let a = b; ', ' let c = d', ' ']
    const source = sourceFile('', '', '', input)
    const result = removeComments(source)
    expect(result).toEqual({...source, body: expected})
  })
})
