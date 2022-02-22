// contador de tarefas adicionadas
let countTasks = 0;
let countCompleteTasks = 0;

const localCountTasks = localStorage.getItem('countTasks');
const localCountCompleteTasks = localStorage.getItem('countCompleteTasks');
const localList = localStorage.getItem('lista');
const listaTarefas = document.getElementById('lista-tarefas');

if (localCountTasks !== null) {
  countTasks = parseInt(localCountTasks, 10);
}
if (localCountCompleteTasks !== null) {
  countCompleteTasks = parseInt(localCountCompleteTasks, 10);
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
    task.setAttribute('id', `task-${countTasks}`);
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
  const taskList = document.querySelector('.selected');
  if (taskList) {
    taskList.classList.remove('selected');
  }
}

// Muda a cor do fundo item da lista clicado
function changeBackgroundColor(id) {
  removeBackgroundColor();
  const idTask = document.getElementById(id);
  idTask.classList.add('selected');
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

// salva lista de tarefas no localStorage
function saveTasks() {
  localStorage.setItem('countTasks', countTasks);
  localStorage.setItem('countCompleteTasks', countCompleteTasks);
  localStorage.setItem('lista', listaTarefas.innerHTML);
}

const saveClick = document.getElementById('salvar-tarefas');
saveClick.addEventListener('click', () => {
  saveTasks();
});

// move o item da lista para cima ou para baixo
function moveListUp() {
  const selectedTask = document.querySelector('.selected');
  const idSelectedTaskNum = selectedTask.id.split('-');
  let numIdUpTask = parseInt(idSelectedTaskNum[1], 10) - 1;

  while (!document.getElementById(`task-${numIdUpTask}`)) {
    numIdUpTask -= 1;
    if (numIdUpTask < 0) {
      break;
    }
  }
  if (numIdUpTask >= 0) {
    const upTask = document.getElementById(`task-${numIdUpTask}`).innerHTML;
    const downTask = document.getElementById(selectedTask.id).innerHTML;
    document.getElementById(`task-${numIdUpTask}`).innerHTML = downTask;
    document.getElementById(selectedTask.id).innerHTML = upTask;
    removeBackgroundColor();
    changeBackgroundColor(`task-${numIdUpTask}`);
  }
}

const moveUpClick = document.getElementById('mover-cima');
moveUpClick.addEventListener('click', () => {
  moveListUp();
});
