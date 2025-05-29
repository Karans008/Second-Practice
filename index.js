const { addTask, listTasks } = require('./todo');

const command = process.argv[2];
const input = process.argv[3];

if (command === 'add') {
  addTask(input);
} else if (command === 'list') {
  listTasks();
} else {
  console.log('Use "add <task>" or "list"');
}
