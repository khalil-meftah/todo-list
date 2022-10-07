
let todos = document.getElementById('todos');
let input = document.getElementById('input');
let classNum = 0;

window.addEventListener('keypress', function(e){
    if (e.key == 'Enter') {
      addTask();
    }
})

function addTask(){
    if (input.value !== ""){
        let li = document.createElement('li');
        let span = document.createElement('span');
        let check = document.createElement('input');
        let deleteBtn = document.createElement('button');

        li.setAttribute('class', 'li'+classNum);
        span.setAttribute('class', 'li'+classNum);
        check.setAttribute('class', 'li'+classNum);
        deleteBtn.setAttribute('class', 'li'+classNum+' delete-btn');

        deleteBtn.innerHTML = '<img src="./images/trash.png" alt="trash icon inside delete button" width="17px">';
        span.textContent = input.value;

        check.setAttribute('type', 'checkbox')
        check.addEventListener('change', function() {
            if (this.checked) {
              span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
          });

     
    
        deleteBtn.addEventListener('click', function(e){
            li.remove();
        }) 

        
        li.appendChild(check); 
        li.appendChild(span); 
        li.appendChild(deleteBtn); 
        todos.appendChild(li);

        classNum += 1;
    } else {
        console.log('No task is given!');
    }
    input.value = "";
}

function clearAll(){
    todos.innerHTML="";
}

function clearChecked(){
    let lis = document.querySelectorAll('#todos li');
    let checkbox = document.querySelectorAll('#todos li input');
    for(let i=0; i<checkbox.length; i++){
       if(checkbox[i].checked) {
        lis[i].remove();
       }
    }
}

function modifyTask(){
    
}
