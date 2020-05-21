import {Token, Identifier} from '../../api/source-token'
import {UseCase, Step, Variable, VariableType} from '../../api/data-structure'
import {isWhenKeyword, isIdentifier, getIdentifierValue, isThenKeyword, isSemiColon, isEndKeyword} from '../../language/token.util'
import {getActorVariable} from '../../language/variable.util'

export const generateUseCases = (tokens: Token[], variables: Variable[]): UseCase[] => {
  if (!tokens.length) return []

  const results: UseCase[] = []

  const shouldStop = false
  let whenKeyword: Token | undefined
  let actor: Variable | undefined
  let useCaseId: string | undefined
  let thenKeyword: Token | undefined

  let useCase: UseCase | undefined
  let steps: Step[] = []
  const counterSteps: Step[] = []

  while (tokens.length && !shouldStop) {
    const token00 = tokens.shift()!
    if (isWhenKeyword(token00)) {
      whenKeyword = token00

      const token01 = tokens.shift()
      if (token01 &&  isIdentifier(token01)) {
        actor = getActorVariable(variables, getIdentifierValue(token01))

        const token03 = tokens.shift()

        if (token03 && isIdentifier(token03)) {
          useCaseId = getIdentifierValue(token03)

          const token04 = tokens.shift()

          if (token04 && isThenKeyword(token04)) {
            thenKeyword = token04
          }
        }
      }
    } else if (whenKeyword && actor && useCaseId && thenKeyword) {
      const stepToken01 = token00
      const stepToken02 = tokens.shift()
      if (isStep2(stepToken01, stepToken02)) {
        const stepActor = getActorVariable(variables, getIdentifierValue(stepToken01!))
        const stepOperation: Variable = {id: (stepToken02!.value as Identifier).value, type: VariableType.operation}
        if (stepActor && stepOperation) {
          const step: Step = {actor: stepActor, operation: stepOperation}
          steps.push(step)
        } else {
          throw new Error(`one of these variables is not declared ${stepToken01?.value}, ${stepToken02?.value}`)
        }
      }

      if (isEndKeyword(token00)) {
        const useCase: UseCase = {id: useCaseId, actor, steps, counterSteps}
        results.push(useCase)
        whenKeyword = undefined
        actor = undefined
        useCaseId = undefined
        thenKeyword = undefined
        steps = []
      }
    } else {
      whenKeyword = undefined
      actor = undefined
      useCaseId = undefined
      thenKeyword = undefined
      steps = []
    }
  }
  return results
}

const isStep2 = (token01: Token| undefined, token02: Token| undefined) => {
  return token01 && token02 && isIdentifier(token01) && isIdentifier(token02)
}
