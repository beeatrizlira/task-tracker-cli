import { TaskManagerService } from '../services/task-manager.js'
import { Functionalities, TaskStatus } from '../types/index.js'

const taskManagerService = new TaskManagerService()

const progress_mapper: ['todo', 'in-progress', 'done'] = ['todo', 'in-progress', 'done'];

export const FUNCTIONALITIES_MAPPER: Record<
  Functionalities,
  (argument: string, additionalInfo: string) => void
> = {
  add: (task_description: string, status?: string) => taskManagerService.add(task_description, status as TaskStatus | undefined),
  delete: (task_id: string) =>  taskManagerService.delete(task_id),
  update: (task_id: string, task_description: string) => taskManagerService.update(task_id, task_description),
  list: (filter?: string) => taskManagerService.list(filter),
  'mark-in-progress': (task_id: string) => taskManagerService.updateStatus(task_id, progress_mapper[1] as TaskStatus),
  'mark-done': (task_id: string) => taskManagerService.updateStatus(task_id, progress_mapper[2] as TaskStatus)
}
