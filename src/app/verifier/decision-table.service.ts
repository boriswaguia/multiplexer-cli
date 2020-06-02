import {Condition, DecisionTable, Rule} from './verification.model'
import {cartesianProducts} from './verification.util'
import {UseCase} from '../api/data-structure'

export const createDecitionTable = (conditions: Condition[], useCase: UseCase): DecisionTable => {
  const rules = cartesianProducts(conditions, useCase)
  const table: DecisionTable = {conditions, rules}
  return table
}
