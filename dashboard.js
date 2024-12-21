document.getElementById('addTask').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task) {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
  