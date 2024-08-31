#! /usr/bin/env node
import * as process from 'process';
import { FUNCTIONALITIES_MAPPER } from "../helpers";
import { Functionalities } from "../types";

function callFunctionalities() {
    const parameters = process.argv
    const functionality = parameters[2] as Functionalities
    const fisrt_argument = parameters[3] as string
    const second_argument = parameters[4] as string

    if (!functionality) {
        console.error('Usage: task-cli functionality task-id task-description')
        return
    }

    if (!['add', 'list', 'update', 'list', 'mark-done', 'mark_in_progress'].includes(functionality)) {
        console.error('Error: Invalid command.')
        return
    }

    FUNCTIONALITIES_MAPPER[functionality](fisrt_argument, second_argument)   
}

callFunctionalities()

