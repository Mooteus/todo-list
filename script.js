// contador de tarefas adicionadas
let countTasks = 0;
let countCompleteTasks = 0;

const localCountTasks = localStorage.getItem('countTasks');
const localCountCompleteTasks = localStorage.getItem('countCompleteTasks');
const localList = localStorage.getItem('lista');
const listaTarefas = document.getElementById('lista-tarefas');

if (localCountTasks !== null) {
  countTasks = localCountTasks;
}
if (localCountCompleteTasks !== null) {
  countCompleteTasks = localCountCompleteTasks;
}

if (localList !== null) {
  listaTarefas.innerHTML = localList;
}

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
// recebe o clique no botão #criar-tarefa e chama a função para criar tarefa
const buttonTask = document.getElementById('criar-tarefa');
buttonTask.addEventListener('click', createTask);

function removeBackgroundColor() {
  const taskList = document.getElementsByClassName('taskClass');
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].style.backgroundColor === 'gray') {
      taskList[i].style.backgroundColor = 'white';
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
function taskChangeStatus(id) {
  const idTask = document.getElementById(id);
  if (!idTask.classList.contains('completed')) {
    idTask.classList.add('completed');
    countCompleteTasks += 1;
  } else {
    idTask.classList.remove('completed');
    countCompleteTasks -= 1;
  }
}

// recebe o clique na lista e recebe qual o id do item clicado
const taskClick = listaTarefas;

taskClick.addEventListener('click', (e) => {
  changeBackgroundColor(e.target.id);
});

taskClick.addEventListener('dblclick', (e) => {
  taskChangeStatus(e.target.id);
});

// limpa lista de tarefas
function clearTaskList() {
  for (let i = 0; i < countTasks; i += 1) {
    const lista = document.querySelector('.taskClass');
    lista.parentNode.removeChild(lista);
  }
  countTasks = 0;
  countCompleteTasks = 0;
}

// recebe o clique do botão apagar-tarefa e retorna a function
const clearClick = document.getElementById('apaga-tudo');
clearClick.addEventListener('click', () => {
  clearTaskList();
});

function clearTaskMarked() {
  for (let i = 0; i < countCompleteTasks; i += 1) {
    const completedTask = document.querySelector('.completed');
    completedTask.parentNode.removeChild(completedTask);
    countTasks -= 1;
  }
  countCompleteTasks = 0;
}

// recebe clique do botão remover-finalizados
const clearMarked = document.getElementById('remover-finalizados');
clearMarked.addEventListener('click', () => {
  clearTaskMarked();
});

function saveTasks() {
  localStorage.setItem('countTasks', countTasks);
  localStorage.setItem('countCompleteTasks', countCompleteTasks);
  localStorage.setItem('lista', listaTarefas.innerHTML);
}

const saveClick = document.getElementById('salvar-tarefas');
saveClick.addEventListener('click', () => {
  saveTasks();
});
