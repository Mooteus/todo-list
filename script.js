// contador de tarefas adicionadas
let countTasks = 0;

// adiciona tarefa a lista
function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const textTask = document.getElementById('texto-tarefa').value;

  // verifica se o valor do texto do input não está vazio
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
// recebe o clique no botão e chama a função para criar tarefa
const buttonTask = document.getElementById('criar-tarefa');
buttonTask.addEventListener('click', createTask);

function removeBackgroundColor() {
  for (let i = 0; i < countTasks; i += 1) {
    const taskColored = document.getElementById(`task${i}`);
    if (taskColored.style.backgroundColor === 'gray') {
      taskColored.style.backgroundColor = 'white';
    }
  }
}

// Muda a cor do fundo item da lista clicado
function changeBackgroundColor(id) {
  removeBackgroundColor();
  const idTask = document.getElementById(id);
  idTask.style.backgroundColor = 'gray';
}

// risca a tarefa
function completeTask(id) {
  const idTask = document.getElementById(id);
  idTask.classList.add('complete');
}

// recebe o clique na lista e recebe qual o id do item clicado
const taskClick = document.getElementById('lista-tarefas');

taskClick.addEventListener('click', (e) => {
  changeBackgroundColor(e.target.id);
});

taskClick.addEventListener('dblclick', (e) => {
  completeTask(e.target.id);
});
