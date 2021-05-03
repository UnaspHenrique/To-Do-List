const init = () => {
    const inputUser = document.getElementById('inputUser');
    const addButton = document.getElementById('addButton');
    const listUl = document.getElementById('list');
    const listArray = [];

     function createList() {
    
        listUl.innerHTML = '';

        for(listItem of listArray) {
            const listLi = document.createElement('li');
            listUl.appendChild(listLi);

            const textList = document.createTextNode(listItem);
            listLi.appendChild(textList);

            const deleteTask = document.createElement('i')
            listLi.appendChild(deleteTask);
            deleteTask.setAttribute('class', 'fas fa-trash');

            const indexArray = listArray.indexOf(listItem);

            deleteTask.addEventListener('click', () =>{
                listArray.splice(indexArray, 1);
                createList();
            });
        }
    }

    addButton.addEventListener('click', () =>{
        if(inputUser.value.length === 0) {
            alert('Can not add an empyt text!')
        }
        else {
            listArray.push(inputUser.value);
            inputUser.value = '';
            createList();
        }
    });
}

window.onload = init;