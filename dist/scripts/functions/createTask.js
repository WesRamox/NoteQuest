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
            taskId: taskList.length + 1,
            taskDescription: taskDescription.value,
            taskCategory: taskCategory.value,
            taskEspecify: taskEspecify.value,
            taskPriority: taskPriority.value,
        }

        taskList.push(taskDetails);

        /* Limpando Inputs */
        taskCategory.value = '';
        taskDescription.value = '';
        taskDetails.value = '';
        taskPriority.checked = false;

        localStorage.setItem('taskList', JSON.stringify(taskList));

        /* Fechando Modal */
        const modal = document.querySelector("#new-task-modal");
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    }
}