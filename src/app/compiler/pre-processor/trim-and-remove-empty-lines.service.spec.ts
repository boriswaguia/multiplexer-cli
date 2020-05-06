import {trimAndRemoveEmptyLines} from './trim-and-remove-empty-lines.service'
import {SourceFile} from '../../api/source-file'

describe('trim-and-remove-empty-lines', () => {
  it('should remove empty line from file', () => {
    const body = [
      '                    ',
      '    let a = 0',
      '',
    ]
    const expected = 'let a = 0'
    const source: SourceFile = {body, fullPath: '', name: '', relativePath: ''}
    const result = trimAndRemoveEmptyLines(source)
    expect(result).toEqual({...source, body: [expected]})
  })
})

