#! /usr/bin/env node

import { Command } from 'commander';
import {
  add,
  clear,
  list,
  markDone
} from './commands/index.js';

const program = new Command();

program
  .command('list')
  .description('List all the TODO tasks')
  .action(list);

program
  .command('add <task>')
  .description('Add a new TODO task')
  .action(add);

program
  .command('mark-done')
  .description('Mark tasks done')
  .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
  .action(markDone);

program
  .command('clear')
  .description('Clear tasks')
  .option('-t, --tasks <tasks...>', 'The tasks to clear. If not specified, all tasks will be cleared.')
  .action(clear)

program.parse();