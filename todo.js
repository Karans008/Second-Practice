// ... previous code remains unchanged

function completeTask(index) {
  const tasks = loadData();
  if (index <= 0 || index > tasks.length) {
    console.log('Invalid task number');
    return;
  }
  tasks[index - 1].done = true;
  saveData(tasks);
  console.log(`Marked task ${index} as complete.`);
}

module.exports = { addTask, listTasks, completeTask };
