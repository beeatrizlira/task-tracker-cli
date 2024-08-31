import { TaskManagerService } from '../services/task-manager.js';
const taskManagerService = new TaskManagerService();
export const FUNCTIONALITIES_MAPPER = {
    add: (task_description) => taskManagerService.add(task_description),
    delete: (task_id) => {
        console.log(`delete: ${task_id}`);
    },
    update: (task_id, task_description) => {
        console.log(`update:  ${task_id} ${task_description}`);
    },
    list: (filter) => {
        console.log(`list ${filter}`);
    },
    mark_in_progress: (task_id) => {
        console.log(`mark_in_progress: ${task_id}`);
    },
    mark_done: (task_id) => {
        console.log(`mark_done: ${task_id}`);
    }
};
