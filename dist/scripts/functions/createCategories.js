export function createNewCategory() {
    const categoryList = JSON.parse(localStorage.getItem('categoryList')) || [];
    let categoryName = document.getElementById('new-category');
    
    if(categoryName.value === '') {
        alert('O campo deve ser preenchido');
    } else {
        let categoryDetails = {
            id: categoryList.length + 1,
            name: categoryName.value,
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
    
    listCategory.innerHTML = '';
    if(categoryList.length != 0) {
        selectCategory.innerHTML = '<option value="">Selecione uma categoria</option>';
        categoryList.forEach(category => {
            const newLi = document.createElement('li');
            newLi.innerHTML =  `<li id="category-${category.id}">${category.name}<a href="#" id="delete-${category.id}"> Del</a></li>`
            listCategory.appendChild(newLi);

            const newOption = document.createElement('option');
            newOption.value = category.name;
            newOption.innerText = category.name;

            selectCategory.appendChild(newOption);
        });
    } else {
        selectCategory.innerHTML = '<option value="">Nenhuma categoria cadastrada</option>';
        listCategory.innerHTML = '<li>Nenhuma categoria cadastrada</li>';
    }
}

