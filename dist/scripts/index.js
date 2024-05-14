import { modalNewTask, modalNewCategory, listCategoryModal } from './modal.js'
import { createNewTask, renderTasks } from './functions/createTask.js'
import { createNewCategory, listCategories } from './functions/createCategories.js'

const categoryList = document.getElementById('my-categories-button');
const newCategoryButton = document.getElementById('new-category-button');
const newTaskButton = document.getElementById('new-task-button');
const newCategoryOfList = document.getElementById('new-category-of-list')

const exitModal = document.getElementById('exit-modal');
const exitModalCategory = document.getElementById('exit-new-category');
const exitListCategory = document.getElementById('exit-list-category');

const addNewTaskButton = document.getElementById('addNewTask');
const addNewCategory = document.getElementById('addNewCategory');

exitModal.addEventListener('click', modalNewTask);
newTaskButton.addEventListener('click', modalNewTask);

newCategoryButton.addEventListener('click', modalNewCategory);
exitModalCategory.addEventListener('click', modalNewCategory);

categoryList.addEventListener('click', listCategoryModal);
exitListCategory.addEventListener('click', listCategoryModal);
newCategoryOfList.addEventListener('click', listCategoryModal);

addNewTaskButton.addEventListener('click', createNewTask);
addNewCategory.addEventListener('click', createNewCategory);

listCategories();
renderTasks();