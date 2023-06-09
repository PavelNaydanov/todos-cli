import Conf from 'conf';
import chalk from 'chalk';

const conf = new Conf({projectName: 'todo'});

export function markDone({tasks}) {
  let todoList = conf.get('todo-list');

  if (todoList) {
    todoList = todoList.map((task, index) => {
        if (tasks) {
          if (tasks.indexOf(index.toString()) !== -1) {
            task.done = true;
          }
        } else {
            task.done = true;
        }

        return task;
    });

    conf.set('todo-list', todoList);
  }

  console.log(chalk.green.bold('Tasks have been marked as done successfully'));
}