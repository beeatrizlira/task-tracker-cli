var _TaskManagerService_instances, _TaskManagerService_getTasks;
import { __classPrivateFieldGet } from "tslib";
import { readFile } from 'fs/promises';
export class TaskManagerService {
    constructor() {
        _TaskManagerService_instances.add(this);
        this.data_source = './data/tasks.json';
    }
    add(description) {
        console.log(description);
        __classPrivateFieldGet(this, _TaskManagerService_instances, "m", _TaskManagerService_getTasks).call(this);
    }
}
_TaskManagerService_instances = new WeakSet(), _TaskManagerService_getTasks = async function _TaskManagerService_getTasks() {
    try {
        const data = await readFile(this.data_source, { encoding: 'utf-8' });
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
};
