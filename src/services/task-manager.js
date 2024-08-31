import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export class TaskManagerService {
    constructor() {
        this.data_source = path.resolve(__dirname, '../data/tasks.json');
    }
    async getTasks() {
        try {
            const data = await readFile(this.data_source, { encoding: 'utf-8' });
            return JSON.parse(data);
        }
        catch (error) {
            console.error(`An error occurred while reading the file '${this.data_source}'. Please check the file path and try again.`);
            throw error;
        }
    }
    async add(description) {
        let tasks = await this.getTasks();
        console.log(typeof tasks);
        const taskData = {
            id: uuidv4(),
            description,
            status: 'todo',
            created_at: Date.now().toString(),
            updated_at: Date.now().toString()
        };
        tasks.push(taskData);
        await writeFile(this.data_source, JSON.stringify(tasks));
    }
}
