import Conf from 'conf';
import chalk from 'chalk';

const conf = new Conf({projectName: 'todo'});

export function add(task) {
  let todoList = conf.get('todo-list');

  if (!todoList) {
    todoList = [];
  }

  todoList.push({
      text: task,
      done: false
  });

  conf.set('todo-list', todoList);

  console.log(chalk.green.bold('Task has been added successfully!'));
}