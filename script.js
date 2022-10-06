
let todos = document.getElementById('todos');
let input = document.getElementById('input');
let classNum = 0;



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

        deleteBtn.textContent = "X";
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
            e.target.parentElement.remove();
        }) 

        
        li.appendChild(check); 
        li.appendChild(span); 
        li.appendChild(deleteBtn); 
        todos.appendChild(li);

        
        
        //let modif = document.createElement('button');
        //modif.setAttribute('class', 'li'+classNum);
        //modif.textContent = "Modfier"; 
        //modif.addEventListener('click', modifyTask);
        //li.appendChild(modif);
         
        classNum += 1;
    } else {
        console.log('No task is given!');
    }
    input.value = "";
}

function clearAll(){
    todos.innerHTML="";
}


function modifyTask(){
    
}
