#! /usr/bin/env node
import * as process from 'process'
import { FUNCTIONALITIES_MAPPER } from '../helpers/index.js'
import { Functionalities } from 'types/index.js'

function callFunctionalities() {
  const parameters = process.argv
  const functionality = parameters[2] as Functionalities
  const first_argument = parameters[3] as string
  const second_argument = parameters[4] as string

  if (!functionality) {
    console.error('Usage: task-cli functionality task-id task-description')
    return
  }

  if (!['add', 'list', 'update', 'list', 'mark-done', 'mark_in_progress'].includes(functionality)) {
    console.error('Error: Invalid command.')
    return
  }

  FUNCTIONALITIES_MAPPER[functionality](first_argument, second_argument)
}

callFunctionalities()
