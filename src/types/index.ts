export type TaskProgress = 'pending' | 'in_progress' | 'done'
export type Functionalities = 'add' | 'update' | 'delete' | 'list' | 'mark-in-progress' | 'mark-done'
export interface Task {
    id: number,
    description: string,
}