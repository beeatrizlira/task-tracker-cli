export type TaskProgress = 'pending' | 'in_progress' | 'done'

export interface Task {
    id: number,
    description: string,
}