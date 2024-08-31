#! /usr/bin/env node

import { FUNCTIONALITIES_MAPPER } from "../helpers";
import { Functionalities } from "../types";

function callFunctionalities() {
    const parameters = process.argv
    const functionality = parameters[2] as Functionalities
    const argument = parameters[3] as string

    if (!functionality) {
        console.error('Usage: task-cli functionality task-id task-description')
        return 1
    }

    if (!['add', 'list', 'update', 'list', 'mark-done', 'mark_in_progress'].includes(functionality)) {
        console.error('Error: Invalid command.')
        return 1
    }

    FUNCTIONALITIES_MAPPER[functionality](argument)
}

callFunctionalities()

