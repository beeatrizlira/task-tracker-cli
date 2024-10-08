#! /usr/bin/env node
import * as process from 'process';
import { FUNCTIONALITIES_MAPPER } from '../helpers/index.js';
function callFunctionalities() {
    const parameters = process.argv;
    const functionality = parameters[2];
    const first_argument = parameters[3];
    const second_argument = parameters[4];
    if (!functionality) {
        console.error('Usage: task-cli functionality task-id task-description');
        return;
    }
    if (!['add', 'list', 'update', 'delete', 'list', 'mark-done', 'mark-in-progress'].includes(functionality)) {
        console.error('Error: Invalid command. Available commands: add, update, list, delete, mark-in-progress, mark-done');
        return;
    }
    FUNCTIONALITIES_MAPPER[functionality](first_argument, second_argument);
}
callFunctionalities();
