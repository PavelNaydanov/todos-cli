# todo-cli

Client cmd tool, supporting commands to manage todo issue.

## Install

```npm i -g pn-todos-cli```

## Getting started

## Help
```todo -h```

```js
Commands:
  - list                 // List all the TODO tasks
  - add <task>           // Add a new TODO task
  - mark-done [options]  // Mark tasks done
  - clear [options]      // Clear tasks
  - help [command]       // display help for command
  ```

## Usage

1. To view the TODO list: ```todos list```

2. To add a TODO task: ```todos add <task>```

    For example:
    ```
    todos add "Make Dinner"
    ```
3. Mark tasks as done: ```todos mark-done```
    This will mark all tasks as done. To mark specific tasks as done by their indices, run: ```todos mark-done -t 1 2```, where `-t, --tasks` can take at least one value. Values are separated by spaces.

4. Clear tasks: ```todos clear``
    This will clear tasks. To clear specific tasks, run: ```todos cleat -t 1 2```, where `-t, --tasks` can take at least one value. Values are separated by spaces.