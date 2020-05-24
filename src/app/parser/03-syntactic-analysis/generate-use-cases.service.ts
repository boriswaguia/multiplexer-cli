import {Token, Identifier} from '../../api/source-token'
import {
  UseCase,
  Step,
  Variable,
  VariableType,
} from '../../api/data-structure'
import {
  isWhenKeyword,
  isIdentifier,
  getIdentifierValue,
  isThenKeyword,
  isEndKeyword,
  isFalseKeyword,
} from '../../language/token.util'
import {getActorVariable} from '../../language/variable.util'

export const generateUseCases = (
  tokens: Token[],
  variables: Variable[],
  counterCaseOnly = false
): UseCase[] => {
  if (tokens.length === 0) return []

  const results: UseCase[] = []

  let whenKeyword: Token | undefined
  let actor: Variable | undefined
  let useCaseId: string | undefined
  let falseKeyword: Token | undefined
  let thenKeyword: Token | undefined

  let steps: Step[] = []
  const counterSteps: Step[] = []

  while (tokens.length > 0) {
    const token00 = tokens.shift()!
    if (isWhenKeyword(token00)) {
      whenKeyword = token00

      const token01 = tokens.shift()
      if (token01 && isIdentifier(token01)) {
        actor = getActorVariable(variables, getIdentifierValue(token01))

        const token03 = tokens.shift()

        if (token03 && isIdentifier(token03)) {
          useCaseId = getIdentifierValue(token03)

          const token04 = tokens.shift()

          if (counterCaseOnly) {
            if (token04 && isFalseKeyword(token04)) {
              falseKeyword = token04

              const token05 = tokens.shift()
              if (token05 && isThenKeyword(token05)) {
                thenKeyword = token05
              }
            }
          } else if (token04 && isThenKeyword(token04)) {
            thenKeyword = token04
          }
        }
      }
    } else if (
      readingUsecase(counterCaseOnly, whenKeyword, actor, useCaseId, thenKeyword) ||
      readingCounterCaseOnly(counterCaseOnly, whenKeyword, actor, useCaseId, falseKeyword, thenKeyword)
    ) {
      const stepToken01 = token00
      const stepToken02 = tokens.shift()
      if (isStep(stepToken01, stepToken02)) {
        const stepActor = getActorVariable(
          variables,
          getIdentifierValue(stepToken01!)
        )
        const stepOperation: Variable = {
          id: (stepToken02!.value as Identifier).value,
          type: VariableType.operation,
        }
        if (stepActor && stepOperation) {
          const step: Step = {actor: stepActor, operation: stepOperation}
          steps.push(step)
        } else {
          throw new Error(`
            Step:
              counterCaseOnly: ${counterCaseOnly},
              whenKeyword: ${JSON.stringify(whenKeyword)},
              actor: ${JSON.stringify(actor)},
              useCaseId: ${useCaseId},
              falseKeyword: ${JSON.stringify(falseKeyword)},
              thenKeyword: ${JSON.stringify(thenKeyword)}
            Error:
              one of these variables is not declared ${JSON.stringify(stepToken01)}, ${JSON.stringify(stepToken02)}
          `
          )
        }
      }

      if (isEndKeyword(token00)) {
        const useCase: UseCase = {id: useCaseId!, actor: actor!, steps, counterSteps, isCounterCase: counterCaseOnly}
        results.push(useCase)
        whenKeyword = undefined
        actor = undefined
        useCaseId = undefined
        falseKeyword = undefined
        thenKeyword = undefined
        steps = []
      }
    } else {
      whenKeyword = undefined
      actor = undefined
      useCaseId = undefined
      falseKeyword = undefined
      thenKeyword = undefined
      steps = []
    }
  }
  return results
}

const isStep = (token01: Token | undefined, token02: Token | undefined) => {
  return token01 && token02 && isIdentifier(token01) && isIdentifier(token02)
}
const readingCounterCaseOnly = (counterCaseOnly: boolean, whenKeyword: Token | undefined, actor: Variable | undefined, useCaseId: string | undefined, falseKeyword: Token | undefined, thenKeyword: Token | undefined): boolean => {
  const result: boolean = (counterCaseOnly === true) &&
    Boolean(whenKeyword) &&
    Boolean(actor) &&
    Boolean(useCaseId) &&
    Boolean(falseKeyword) &&
    Boolean(thenKeyword)
  return result
}

const readingUsecase = (counterCaseOnly: boolean, whenKeyword: Token | undefined, actor: Variable | undefined, useCaseId: string | undefined, thenKeyword: Token | undefined): boolean => {
  const result: boolean = !counterCaseOnly && Boolean(whenKeyword) && Boolean(actor) && Boolean(useCaseId) && Boolean(thenKeyword)
  return result
}
