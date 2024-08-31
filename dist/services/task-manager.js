import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export class TaskManagerService {
  constructor() {
    this.data_source = path.resolve(__dirname, '../data/tasks.json')
  }
  async getTasks() {
    try {
      const data = await readFile(this.data_source, { encoding: 'utf-8' })
      return data
    } catch (error) {
      console.error(
        `An error occurred while reading the file '${this.data_source}'. Please check the file path and try again.`
      )
      throw error
    }
  }
  async add(description) {
    const tasks = await this.getTasks()
    console.log(typeof tasks, description)
  }
}
