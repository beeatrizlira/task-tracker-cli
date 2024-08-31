export type TaskStatus = 'todo' | 'in-progress' | 'done'
export type Functionalities =
  | 'add'
  | 'update'
  | 'delete'
  | 'list'
  | 'mark-in-progress'
  | 'mark-done'

export interface Task {
  id: string
  description: string
  status: TaskStatus
  created_at: string
  updated_at?: string
}
