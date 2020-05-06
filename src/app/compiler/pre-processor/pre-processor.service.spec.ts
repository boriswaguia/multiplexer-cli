import {SourceFile} from '../../api/source-file'
import {preProcess} from './pre-processor.service'
import {sourceFile} from '../../commons/source-file.util'

describe('PreProcessor', () => {
  it('should remove comments', () => {
    const body = [
      '',
      '// begin',
      'let actor = user, browser',
      'let flow be',
      '  // start of the flow',
      '  user perform_action // user perform action',
      '// end',
      'end flow',
      '',
    ]

    const expectedBody = [
      'let actor = user, browser',
      'let flow be',
      'user perform_action',
      'end flow',
    ]
    const source: SourceFile = sourceFile('', '', '', body)
    const result = preProcess(source)
    expect(result).toEqual({...source, body: expectedBody})
  })
})
