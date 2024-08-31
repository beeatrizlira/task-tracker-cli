#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
function callFunctionalities() {
    const parameters = process.argv;
    const functionality = parameters[2];
    const argument = parameters[3];
    if (!functionality || !argument) {
        console.error('Usage: task-cli functionality task-id task-description');
        return 1;
    }
    if (!['add', 'list', 'update', 'list', 'mark-done', 'mark_in_progress'].includes(functionality)) {
        console.error('Error: Invalid command.');
        return 1;
    }
    helpers_1.FUNCTIONALITIES_MAPPER[functionality](argument);
}
callFunctionalities();
