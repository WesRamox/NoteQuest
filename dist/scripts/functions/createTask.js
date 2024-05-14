export function createNewTask() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    
    let taskDescription = document.getElementById('description');
    let taskCategory = document.getElementById('category');
    let taskEspecify = document.getElementById('sub-category');
    let taskPriority = document.querySelector('input[name="radio-priority"]:checked')
    
    if(taskDescription.value === '' || taskCategory.value === '' || taskEspecify.value === '' || taskPriority === null) {
        alert('Todos os campos devem ser preenchidos');
    } else {
        let taskDetails = {
            id: taskList.length + 1,
            description: taskDescription.value,
            category: taskCategory.value,
            especify: taskEspecify.value,
            priority: taskPriority.value,
        }

        taskList.push(taskDetails);

        /* Limpando Inputs */
        taskCategory.value = '';
        taskDescription.value = '';
        taskEspecify.value = '';
        taskPriority.checked = false;

        localStorage.setItem('taskList', JSON.stringify(taskList));

        /* Fechando Modal */
        const modal = document.querySelector("#new-task-modal");
        modal.classList.add('hidden');
        modal.classList.remove('visible');

        renderTasks();
    }
}

export function renderTasks() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const listTask = document.getElementById('task-list');
    
    listTask.innerHTML = '';   
    if(taskList.length != 0) {
        taskList.forEach(task => {
            const newLi = document.createElement('li');
            newLi.innerHTML =  `<p>${task.description} </p>
                                <p class="tags"><span id="categoryHome">${task.category}</span><span class="especify">${task.especify}</span></p>
                                <p class="priorityText"><span class="priorityP">Prioridade:</span><span id="priorityBall" class="${task.priority.toLowerCase()}">${task.priority}</span></p>`
            listTask.appendChild(newLi);
        });
    } else {
        listTask.innerHTML = '<h2 class="warning">Nenhuma tarefa cadastrada</h2>';
    }
}
