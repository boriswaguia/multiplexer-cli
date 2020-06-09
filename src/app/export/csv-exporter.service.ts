import {VerificationModel} from '../verifier/verification.model'

export type CsvContent = string[][];
export type CsvString = string;

export const CSV_SWITCH = '\''

export const decitionModelToCsvContents = (verificationModel: VerificationModel): CsvContent[] => {
  const decisionTables  = verificationModel.decisionTables

  const result: CsvContent[] = []
  decisionTables.forEach((dt, _) => {
    const output: CsvContent = []
    dt.conditions.forEach((condition, index) => {
      output[index] = []
      output[index][0] = condition.designation
    })
    const outputIndex = dt.conditions.length
    output[outputIndex] = []
    output[outputIndex][0] = 'Actions'

    dt.rules.forEach((rule, r_index) => {
      rule.tests.forEach((test, t_index) => {
        output[t_index].push(`${test.value}`)
      })
      const action = rule.action.value
      output[outputIndex].push(`${action}`)
    })
    result.push(output)
  })
  return result
}

export const csvModelToString = (csvModel: CsvContent): CsvString  => {
  let result = ''
  csvModel.forEach(values => {
    let row = ''
    values.forEach(v => {
      row = row.trim().length === 0 ? `${v}` : `${row}, ${v}`
    })
    row = `${row} \n`
    result = `${result} ${row}`
  })
  return result
}

export const csvModelsToString = (csvModels: CsvContent[]): CsvString => {
  let result = ''

  csvModels.forEach(model => {
    result = `${result} \n \n`
    const converted = csvModelToString(model)
    result = `${result} ${converted}`
  })
  return result
}

export const decisionModelToCsvString = (model: VerificationModel): CsvString => {
  return csvModelsToString(decitionModelToCsvContents(model))
}
