import { Functionalities } from '../types'

export const FUNCTIONALITIES_MAPPER: Record<
  Functionalities,
  (argument: string, additionalInfo: string) => void
> = {
  add: (task_description: string) => {
    console.log(`add: ${task_description}`)
  },
  delete: (task_id: string) => {
    console.log(`delete: ${task_id}`)
  },
  update: (task_id: string, task_description: string) => {
    console.log(`update:  ${task_id} ${task_description}`)
  },
  list: (filter: string) => {
    console.log(`list ${filter}`)
  },
  mark_in_progress: (task_id: string) => {
    console.log(`mark_in_progress: ${task_id}`)
  },
  mark_done: (task_id: string) => {
    console.log(`mark_done: ${task_id}`)
  }
}
