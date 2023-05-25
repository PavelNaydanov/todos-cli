import Conf from 'conf';
import chalk from 'chalk';

const conf = new Conf({projectName: 'todo'});

export function clear({tasks}) {
  let todoList = conf.get('todo-list');

  if (todoList) {
    if (tasks) {
      tasks.forEach(task => {
        const index = todoList.indexOf(task);

        if (index != -1) {
          todoList.splice(index, 1);
        } else {
          console.log(chalk.red.bold(`Task ${task} not found`));
          process.exit();
        }
      });
    } else {
      todoList = [];
    }

    conf.set('todo-list', todoList);
  }

  console.log(chalk.green.bold('Task has been cleared successfully!'));
}