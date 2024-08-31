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
            if (error.code === 'ENOENT') {
                await writeFile(this.data_source, [], 'utf-8');
                console.log('File created successfully with initial content.');
                return [];
            }
            else {
                throw error;
            }
        }
    }
    async add(description) {
        if (!description) {
            throw new Error('To add a new task, it is necessary to provide a description.');
        }
        const tasks = await this.getTasks();
        const taskData = {
            id: uuidv4(),
            description,
            status: 'todo',
            created_at: Date.now().toString()
        };
        tasks.push(taskData);
        try {
            await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' });
        }
        catch (error) {
            console.error(`An error occurred while adding the task. Please try again`);
            throw error;
        }
    }
}
