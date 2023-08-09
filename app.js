let inputBox = document.querySelector('#inputBox');
const buttonEl = document.querySelector('#buttonEl');
let listContainer = document.querySelector('#listContainer');
buttonEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputBox.value == '') {
        alert('You Must Write Something!');
    }
    else{
        let li_El = document.createElement('li');
        li_El.innerHTML = inputBox.value;
        listContainer.appendChild(li_El);
        let spanEl = document.createElement('span');
        spanEl.innerHTML = "\u00d7";
        li_El.appendChild(spanEl);
    }
    inputBox.value = '';
    addTodo();
})

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        addTodo();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        addTodo();
    }
}, false);


function addTodo() {
    localStorage.setItem('todo', listContainer.innerHTML);
}

function showAllData() {
    listContainer.innerHTML = localStorage.getItem('todo');
}
showAllData();

