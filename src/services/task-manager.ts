import { readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'
import { Task } from '../types/index.js'
import { v4 as uuidv4 } from 'uuid'

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
      return JSON.parse(data)
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

  async add(description: string) {
    if (!description) {
      throw new Error('To add a new task, it is necessary to provide a description.')
    }

    const tasks = await this.getTasks()

    const taskData: Task = {
      id: uuidv4(),
      description,
      status: 'todo',
      created_at: Date.now().toString()
    }

    tasks.push(taskData)

    try {
      await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' })
    } catch (error) {
      console.error(error)
      throw new Error(`An error occurred while adding the task. Please try again`)
    }
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
    try {
      await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' })
      console.log(`Task ${task_id} updated successfully`)
    } catch (error) {
      console.error(error)
      throw new Error(`An error occurred while updating the task. Please try again`)
    }
  }
}
