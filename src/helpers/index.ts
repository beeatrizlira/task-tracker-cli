import { Functionalities } from "../types";

export const FUNCTIONALITIES_MAPPER: Record<Functionalities, (argument: string) => void> = {
    add: (task_description: string) => { console.log('add')},
    delete: (task_id: string) => {console.log('delete')},
    update: (task_description: string) => {console.log('update')},
    list: (filter: string) => {console.log('list')},
    mark_in_progress: (task_id: string) => {console.log('mark_in_progress')},
    mark_done: (task_id: string) => {console.log('mark_done')}
}