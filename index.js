const { addTask, listTasks, completeTask } = require('./todo');

const command = process.argv[2];
const input = process.argv[3];

if (command === 'add') {
  addTask(input);
} else if (command === 'list') {
  listTasks();
} else if (command === 'done') {
  completeTask(parseInt(input));
} else {
  console.log('Use "add <task>", "list", or "done <task-number>"');
}
