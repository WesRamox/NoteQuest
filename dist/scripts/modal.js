export function modalNewTask() {
    const modal = document.querySelector("#new-task-modal");
    if(modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    }
}

export function modalNewCategory() {
    const modal = document.querySelector("#new-category-modal");
    if(modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    }
}

export function listCategoryModal() {
    const modal = document.querySelector("#list-category-modal");
    if(modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    }
}
