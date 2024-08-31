import { Task } from '../types/index.js';
export declare class TaskManagerService {
    data_source: string;
    constructor();
    getTasks(): Promise<Task[]>;
    add(description: string): Promise<void>;
}
//# sourceMappingURL=task-manager.d.ts.map