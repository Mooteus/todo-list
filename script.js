let countTasks = 0;

function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const textTask = document.getElementById('texto-tarefa').value;

  if (textTask.trim() !== '') {
    const task = document.createElement('li');
    task.setAttribute('id', `task${countTasks}`);
    task.classList.add('taskClass');
    countTasks += 1;

    task.innerText = textTask;
    taskList.appendChild(task);

    document.getElementById('texto-tarefa').value = '';
  }
}

const buttonTask = document.getElementById('criar-tarefa');
buttonTask.addEventListener('click', createTask);

const taskClick = document.getElementById('lista-tarefas');
taskClick.addEventListener('click', (e) => {
  alert(e.target.id);
});
