const title = document.querySelector('.task-input-title');
const description = document.querySelector('.task-description-textarea');
const btnSave = document.querySelector('.btn-save');
const taskManager = document.querySelector('.task-manager');

function addNewTask() {
    // Criando elementos da nova tarefa

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskItemTitle = document.createElement('h2');
    const taskItemDescription = document.createElement('p');

    // Atribuindo valores para os elementos

    taskItemTitle.innerText = title.value;
    taskItemDescription.innerText = description.value;

    // Juntando elementos na tag pai

    taskItem.appendChild(taskItemTitle);
    taskItem.appendChild(taskItemDescription);

    // Verifica se é o primeiro item, se não, adiciona borda superior

    const taskList = document.querySelectorAll(".task-item")
    
    if (taskList.length > 0) {
        taskItem.classList.add("add-border-top")
    }

    // Adicionando a nova tarefa às demais

    taskManager.appendChild(taskItem)

   
}

btnSave.onclick = addNewTask;