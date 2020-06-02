import {ProgramAST} from '../api/program-ast'
import {cartesianProducts, useCaseToConditions} from './verification.util'
import {DecisionTable, VerificationModel} from './verification.model'
import {createDecitionTable} from './decision-table.service'

export const verifyAst = (program: ProgramAST): VerificationModel => {
  const decisionTables = program.useCases.map(uc => {
    const conditions = useCaseToConditions(uc)
    return createDecitionTable(conditions, uc)
  })

  const result = {unspecified: [], decisionTables}
  return result
}
