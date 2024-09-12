#! /usr/bin/env node
import * as process from 'process'
import { FUNCTIONALITIES_MAPPER } from '../helpers/index.js'
import { Functionalities } from 'types/index.js'
import { ERROR_MESSAGE } from 'errors/index.js'

function callFunctionalities() {
  const parameters = process.argv
  const functionality = parameters[2] as Functionalities
  const first_argument = parameters[3] as string
  const second_argument = parameters[4] as string

  if (!functionality) {
    process.stderr.write(ERROR_MESSAGE.WRONG_USAGE)
    return
  }

  if (
    !['add', 'list', 'update', 'delete', 'list', 'mark-done', 'mark-in-progress'].includes(
      functionality
    )
  ) {
    process.stderr.write(ERROR_MESSAGE.INVALID_COMMAND)
    return
  }

  FUNCTIONALITIES_MAPPER[functionality](first_argument, second_argument)
}

callFunctionalities()
