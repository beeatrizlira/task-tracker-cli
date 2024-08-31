
# Task Tracker CLI

Task Tracker CLI is a simple and efficient task manager accessed directly from the terminal. This project allows you to add, list, and manage your daily tasks using quick and easy CLI commands.

## Features

- **Add Tasks**: Create new tasks with a description and an initial status.
- **List Tasks**: View all your tasks or filter them by status (todo, in-progress, done).
- **Update Tasks**: Change the status or description of a specific task.
- **Delete Tasks**: Remove completed or unwanted tasks.

## Requirements

- Node.js v14 or higher
- npm or yarn
- TypeScript

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/task-tracker-cli.git
cd task-tracker-cli
npm install
```

### Build

After installation, you can build the project using:

```bash
npm run build
```

### Usage

The `task-cli` command is the main tool you will use to manage your tasks. Here are some examples of how to use it:

#### Add a Task

```bash
task-cli add "My new task"
or
task-cli add "My new task" <task_status>
```

#### List All Tasks

```bash
task-cli list
```

#### Filter Tasks by Status

```bash
task-cli list <status>
```

#### Update the Status of a Task

```bash
task-cli mark-in-progress <task_id>
```

#### Delete a Task

```bash
task-cli delete <task_id>
```

### Development

During development, you can use the following command to start the project in development mode:

```bash
npm start
```

To ensure code quality, use:

- **Lint**: To analyze and find problems in the code:
  ```bash
  npm run precommit
  ```

- **Formatting**: To ensure the code follows a consistent style:
  ```bash
  npm run format
  ```

### Contribution

Contributions are welcome! Feel free to open issues and pull requests to improve the project.

### License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.
