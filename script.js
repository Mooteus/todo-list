function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const textTask = document.getElementById('texto-tarefa').value;
  const task = document.createElement('li');

  task.innerText = textTask;
  taskList.appendChild(task);

  document.getElementById('texto-tarefa').value = '';
}

const buttonTask = document.getElementById('criar-tarefa');
buttonTask.addEventListener('click', createTask);
