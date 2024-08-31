export type TaskProgress = 'todo' | 'in_progress' | 'done';
export type Functionalities = 'add' | 'update' | 'delete' | 'list' | 'mark_in_progress' | 'mark_done';
export interface Task {
    id: number;
    description: string;
    status: TaskProgress;
    created_at: string;
    updated_at: string;
}
//# sourceMappingURL=index.d.ts.map