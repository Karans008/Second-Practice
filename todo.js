const fs = require('fs');

const FILE = 'data.json';

function loadData() {
  if (!fs.existsSync(FILE)) return [];
  const data = fs.readFileSync(FILE);
  return JSON.parse(data);
}

function saveData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function addTask(task) {
  const tasks = loadData();
  tasks.push({ task, done: false });
  saveData(tasks);
  console.log(`Added: "${task}"`);
}

function listTasks() {
  const tasks = loadData();
  tasks.forEach((t, i) => {
    console.log(`${i + 1}. ${t.task} [${t.done ? 'x' : ' '}]`);
  });
}

module.exports = { addTask, listTasks };
