import { TaskManagerService } from '../services/task-manager.js';
const taskManagerService = new TaskManagerService();
const progress_mapper = ['todo', 'in-progress', 'done'];
export const FUNCTIONALITIES_MAPPER = {
    add: (task_description) => taskManagerService.add(task_description),
    delete: (task_id) => taskManagerService.delete(task_id),
    update: (task_id, task_description) => taskManagerService.update(task_id, task_description),
    list: (filter) => taskManagerService.list(filter),
    'mark-in-progress': (task_id) => taskManagerService.updateStatus(task_id, progress_mapper[1]),
    'mark-done': (task_id) => taskManagerService.updateStatus(task_id, progress_mapper[2])
};
