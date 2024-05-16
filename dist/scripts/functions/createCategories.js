export function createNewCategory() {
    const categoryList = JSON.parse(localStorage.getItem('categoryList')) || [];
    let categoryName = document.getElementById('new-category');
    
    if(categoryName.value === '') {
        alert('O campo deve ser preenchido');
    } else {
        let categoryDetails = {
            id: categoryList.length + 1,
            name: categoryName.value
        }

        categoryList.push(categoryDetails);

        /* Limpando Inputs */
        categoryName.value = '';

        localStorage.setItem('categoryList', JSON.stringify(categoryList));

        /* Fechando Modal */
        const modal = document.querySelector("#new-category-modal");
        modal.classList.add('hidden');
        modal.classList.remove('visible');
        
        listCategories();
    }
}

export function listCategories() {
    const categoryList = JSON.parse(localStorage.getItem('categoryList')) || [];
    const listCategory = document.querySelector('.categories-list');
    const selectCategory = document.querySelector('#category');
    const categoriesHome = document.querySelector('.categories')
    
    listCategory.innerHTML = '';
    categoriesHome.innerHTML = '';
    
    if(categoryList.length != 0) {
        selectCategory.innerHTML = '<option value="">Selecione uma categoria</option>';
        categoryList.forEach(category => {
            const newLi = document.createElement('li');
            newLi.innerHTML =  `<li class="delete-category" id="category-${category.id}">${category.name}<a id="${category.name}" class="category-item">Excluir</a></li>`
            listCategory.appendChild(newLi);

            const newOption = document.createElement('option');
            newOption.value = category.name;
            newOption.innerText = category.name;

            const newDivCategory = document.createElement('div');
            newDivCategory.id = `category-${category.id}`;
            newDivCategory.innerHTML = `<button id="cat-${category.name}">${category.name}</button>`;

            categoriesHome.appendChild(newDivCategory);
            selectCategory.appendChild(newOption);
        });
    } else {
        categoriesHome.innerHTML = '<h2 class="warning">Nenhuma categoria cadastrada</h2>';
        selectCategory.innerHTML = '<option value="">Nenhuma categoria cadastrada</option>';
        listCategory.innerHTML = '<li class="">Nenhuma categoria cadastrada</li>';
    }
}

