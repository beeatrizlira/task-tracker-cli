import { Task, TaskStatus } from '../types/index.js';
export declare class TaskManagerService {
    data_source: string;
    constructor();
    getTasks(): Promise<Task[]>;
    add(description: string, status?: TaskStatus): Promise<string>;
    update(task_id: string, description: string): Promise<Task>;
    delete(task_id: string): Promise<string>;
    findTaskIndex(task_id: string, tasks: Task[]): {
        current_task: Task;
        index: number;
    };
    updateStatus(task_id: string, status: TaskStatus): Promise<Task>;
    list(filter?: string): Promise<void | Task[]>;
}
