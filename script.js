function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const textTask = document.getElementById('texto-tarefa').value;

  if (textTask.trim() !== '') {
    const task = document.createElement('li');
    task.classList.add('task');

    task.innerText = textTask;
    taskList.appendChild(task);

    document.getElementById('texto-tarefa').value = '';
  }
}

const buttonTask = document.getElementById('criar-tarefa');
buttonTask.addEventListener('click', createTask);

const listClick = document.getElementsByClassName('');