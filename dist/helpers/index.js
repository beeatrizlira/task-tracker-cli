"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FUNCTIONALITIES_MAPPER = void 0;
exports.FUNCTIONALITIES_MAPPER = {
    add: (task_description) => { console.log('add'); },
    delete: (task_id) => { console.log('delete'); },
    update: (task_description) => { console.log('update'); },
    list: (filter) => { console.log('list'); },
    mark_in_progress: (task_id) => { console.log('mark_in_progress'); },
    mark_done: (task_id) => { console.log('mark_done'); }
};
