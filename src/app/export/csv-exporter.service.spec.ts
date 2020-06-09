import {verificationModelTestJson} from '../verifier/program-verification.spec.json'
import {decitionModelToCsvContents, csvModelToString, decisionModelToCsvString} from './csv-exporter.service'
import {csvModelExample, csvModelsExample} from './csv-model'

describe('csvv-exporter.service', () => {
  it('should export program analysis', () => {
    const expected = csvModelsExample
    const result = decitionModelToCsvContents(verificationModelTestJson)
    expect(result).toStrictEqual(expected)
  })

  it('should converst csv model to string', () => {
    const expected = ` browser post_delete_user_data, true, true, true, true, false 
 server validate_delete_user_data, true, true, true, false, false 
 server delete_user_data, true, true, false, false, false 
 database delete_user_data, true, false, false, false, false 
 Actions, admin delete_user_data is successful, Display error occured on database delete_user_data, Display error occured on server delete_user_data, Display error occured on server validate_delete_user_data, Display error occured on browser post_delete_user_data 
`
    const result = csvModelToString(csvModelExample)
    expect(result.toString()).toBe(expected.toString())
  })

  it('should create csv tables from decision model', () => {
    const expected = ` 
 
  browser validate_user_data, true, true, true, true, true, false 
 browser post_user_data, true, true, true, true, false, false 
 server validate_user_data, true, true, true, false, false, false 
 server save_user_data, true, true, false, false, false, false 
 database persist_user_data, true, false, false, false, false, false 
 Actions, user enter_form_data is successful, Display error occured on database persist_user_data, Display error occured on server save_user_data, Display error occured on server validate_user_data, Display error occured on browser post_user_data, Display error occured on browser validate_user_data 
 
 
  browser post_delete_user_data, true, true, true, true, false 
 server validate_delete_user_data, true, true, true, false, false 
 server delete_user_data, true, true, false, false, false 
 database delete_user_data, true, false, false, false, false 
 Actions, admin delete_user_data is successful, Display error occured on database delete_user_data, Display error occured on server delete_user_data, Display error occured on server validate_delete_user_data, Display error occured on browser post_delete_user_data 
 
 
  Actions, database get_user_data is successful 
 
 
  Actions, database delete_user_data is successful 
`
    const result = decisionModelToCsvString(verificationModelTestJson)
    expect(result).toBe(expected)
  })
})
