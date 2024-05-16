import { listCategories } from './createCategories.js';

export function deleteCategory(data) {
    if(!confirm('Deseja realmente excluir essa categoria?')) {
        return;
    } else {
        const categoryList = JSON.parse(localStorage.getItem('categoryList')) || [];
        const index = categoryList.findIndex(category => category.name === data);
        if (index !== -1) {
            categoryList.splice(index, 1);
            localStorage.setItem('categoryList', JSON.stringify(categoryList));
            listCategories(); // Atualiza a lista de categorias na interface do usuário
        }
    }
}