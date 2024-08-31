import { readFile } from 'fs/promises'

export class TaskManagerService {
  data_source: string
  constructor() {
    this.data_source = './data/tasks.json'
  }

  async getTasks() {
    try {
      const data = await readFile(this.data_source, { encoding: 'utf-8' })
      console.log(data)
    } catch (error) {
        console.error(error)
    }
  }

  add(description: string) {
    console.log(description)
    this.getTasks()
  }
}
