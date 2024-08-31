export type TaskProgress = 'todo' | 'in_progress' | 'done'
export type Functionalities =
  | 'add'
  | 'update'
  | 'delete'
  | 'list'
  | 'mark_in_progress'
  | 'mark_done'
export type SearchFilters = 'done' | 'todo' | 'in_progress'
export interface Task {
  id: number
  description: string
}
