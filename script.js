function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const task = document.createElement('li');
  taskList.appendChild(task);
}

const buttonTask = document.getElementById('criar-tarefa');
buttonTask.addEventListener('click', createTask);
