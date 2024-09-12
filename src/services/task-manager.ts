import * as process from 'process'
import { readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'
import { Task, TaskStatus } from '../types/index.js'
import { ERROR_MESSAGE } from 'errors/index.js'
import { progress_mapper } from '@helpers/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export class TaskManagerService {
  data_source: string
  constructor() {
    this.data_source = path.resolve(__dirname, '../data/tasks.json')
  }

  async getTasks(): Promise<Task[]> {
    try {
      const data = await readFile(this.data_source, { encoding: 'utf-8' })
      return data ? JSON.parse(data) : []
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        await writeFile(this.data_source, [], 'utf-8')
        console.log('File created successfully with initial content.')
        return []
      } else {
        throw error
      }
    }
  }

  async add(description: string, status = 'todo' as TaskStatus) {
    if (!description) {
      process.stderr.write('Error: To add a new task, it is necessary to provide a description.\n')
      return
    }

    const tasks = await this.getTasks()

    const taskData: Task = {
      id: String(tasks.length + 1),
      description,
      status,
      created_at: Date.now().toString()
    }

    tasks.push(taskData)

    await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' })
    console.log(`Task created successfully`)
    return taskData.id
  }

  async update(task_id: string, description: string) {
    const tasks = await this.getTasks()
    const currentTaskIndex = tasks.findIndex((task) => task.id === task_id)
    const currentTask = tasks[currentTaskIndex]
    if (currentTaskIndex <= -1 || !currentTask) {
      throw new Error('No task found for the provided ID. Try again with a valid ID.')
    }
    currentTask.description = description
    tasks[currentTaskIndex] = currentTask
    await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' })
    console.log(`Task ${task_id} updated successfully`)
    return currentTask
  }

  async delete(task_id: string) {
    const tasks = await this.getTasks()
    const taskToBeDeletedIndex = tasks.findIndex((task) => task.id === task_id)
    if (taskToBeDeletedIndex <= -1) {
      throw new Error('No task found for the provided ID. Try again with a valid ID.')
    }
    tasks.splice(taskToBeDeletedIndex, 1)
    await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' })
    console.log(`Task ${task_id} was deleted successfully.`)
    return task_id
  }

  findTaskIndex(task_id: string, tasks: Task[]) {
    const currentTaskIndex = tasks.findIndex((task) => task.id === task_id)
    const currentTask = tasks[currentTaskIndex]
    if (currentTaskIndex <= -1 || !currentTask) {
      process.stderr.write(ERROR_MESSAGE.TASK_NOT_FOUND)
      return {
        index: -1,
        current_task: null
      }
    }

    return {
      current_task: currentTask,
      index: currentTaskIndex
    }
  }

  async updateStatus(task_id: string, status: TaskStatus) {
    const tasks = await this.getTasks()
    const { current_task, index: currentTaskIndex } = this.findTaskIndex(task_id, tasks)
    const isValidStatus = progress_mapper.includes(status)
    
    if (!isValidStatus) {
      process.stderr.write(ERROR_MESSAGE.INVALID_STATUS)
      return
    }

    if (!current_task || currentTaskIndex === -1) {
      return
    }

    current_task.status = status
    tasks[currentTaskIndex] = current_task

    await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' })
    console.log(`Task ${task_id} updated successfully`)
    return current_task
  }

  async list(filter?: TaskStatus) {
    const tasks = await this.getTasks()

    if (!filter) {
      console.log(tasks)
      return tasks
    }

    const isValidFilter = progress_mapper.includes(filter)

    if (!isValidFilter) {
       process.stderr.write(ERROR_MESSAGE.INVALID_FILTER)
       return []
    }

    const filteredTasks = tasks.filter((task) => task.status === filter)
    console.log(filteredTasks)
    return filteredTasks
  }
}
