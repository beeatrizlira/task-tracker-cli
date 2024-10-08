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
            return JSON.parse(data !== null && data !== void 0 ? data : []);
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
    async add(description, status = 'todo') {
        if (!description) {
            throw new Error('To add a new task, it is necessary to provide a description.');
        }
        const tasks = await this.getTasks();
        const taskData = {
            id: uuidv4(),
            description,
            status,
            created_at: Date.now().toString()
        };
        tasks.push(taskData);
        await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' });
        console.log(`Task created successfully`);
        return taskData.id;
    }
    async update(task_id, description) {
        const tasks = await this.getTasks();
        const currentTaskIndex = tasks.findIndex((task) => task.id === task_id);
        const currentTask = tasks[currentTaskIndex];
        if (currentTaskIndex <= -1 || !currentTask) {
            throw new Error('No task found for the provided ID. Try again with a valid ID.');
        }
        currentTask.description = description;
        tasks[currentTaskIndex] = currentTask;
        await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' });
        console.log(`Task ${task_id} updated successfully`);
        return currentTask;
    }
    async delete(task_id) {
        const tasks = await this.getTasks();
        const taskToBeDeletedIndex = tasks.findIndex((task) => task.id === task_id);
        if (taskToBeDeletedIndex <= -1) {
            throw new Error('No task found for the provided ID. Try again with a valid ID.');
        }
        tasks.splice(taskToBeDeletedIndex, 1);
        await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' });
        console.log(`Task ${task_id} was deleted successfully.`);
        return task_id;
    }
    findTaskIndex(task_id, tasks) {
        const currentTaskIndex = tasks.findIndex((task) => task.id === task_id);
        const currentTask = tasks[currentTaskIndex];
        if (currentTaskIndex <= -1 || !currentTask) {
            throw new Error('No task found for the provided ID. Try again with a valid ID.');
        }
        return {
            current_task: currentTask,
            index: currentTaskIndex
        };
    }
    async updateStatus(task_id, status) {
        const tasks = await this.getTasks();
        const { current_task, index: currentTaskIndex } = this.findTaskIndex(task_id, tasks);
        if (!['done', 'todo', 'in-progress'].includes(status)) {
            throw new Error('Invalid task status. Available status: done, todo, in-progress');
        }
        current_task.status = status;
        tasks[currentTaskIndex] = current_task;
        await writeFile(this.data_source, JSON.stringify(tasks), { encoding: 'utf-8' });
        console.log(`Task ${task_id} updated successfully`);
        return current_task;
    }
    async list(filter) {
        const tasks = await this.getTasks();
        if (!filter) {
            return console.log(tasks);
        }
        if (!['done', 'todo', 'in-progress'].includes(filter)) {
            throw new Error('Invalid filter. Available filters: done, todo, in-progress.');
        }
        const filteredTasks = tasks.filter(task => task.status === filter);
        console.log(filteredTasks);
        return filteredTasks;
    }
}
