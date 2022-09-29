
let todos = document.getElementById('todos');
let input = document.getElementById('input');


function addTask(){
    let li = document.createElement('li');
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    if (input.value !== ""){
        li.textContent = input.value;
        todos.appendChild(check); 
        todos.appendChild(li);
    } else {
        console.log('No task is given!');
    }
    input.value = "";
}

function clearAll(){
    let lis = document.querySelectorAll('li');
    for(i=0; i<lis.length; i++){
        lis[i].remove();
    }
    
}