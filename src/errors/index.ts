export const ERROR_MESSAGE = {
    INVALID_COMMAND: 'Invalid command. Available commands: add, update, list, delete, mark-in-progress, mark-done',
    INVALID_FILTER: 'Invalid filter. Available filters: done, todo, in-progress.',
    INVALID_STATUS: 'Invalid task status. Available status: done, todo, in-progress',
    MISSING_DESCRIPTION: 'To add a new task, it is necessary to provide a description.\n',
    TASK_NOT_FOUND: 'No task found for the provided ID. Try again with a valid ID.',
    WRONG_USAGE: 'Usage: task-cli <functionality> <task-id> <task-description>',
}