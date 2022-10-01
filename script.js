
let todos = document.getElementById('todos');
let input = document.getElementById('input');
let lis = document.querySelectorAll('li');
let classNum = 0;



function addTask(){
    if (input.value !== ""){
        let li = document.createElement('li');
        let span = document.createElement('span');
        let check = document.createElement('input');
        //let modif = document.createElement('button');
        let supp = document.createElement('button');

        li.setAttribute('class', 'li'+classNum);
        span.setAttribute('class', 'li'+classNum);
        check.setAttribute('class', 'li'+classNum);
        //modif.setAttribute('class', 'li'+classNum);
        supp.setAttribute('class', 'li'+classNum+' supp');

        //modif.textContent = "Modfier";
        supp.textContent = "X";
        span.textContent = input.value;

        check.setAttribute('type', 'checkbox')
        check.addEventListener('change', function() {
            if (this.checked) {
              span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
          });

        //modif.addEventListener('click', modifyTask);
        

        
        li.appendChild(check); 
        li.appendChild(span); 
        //li.appendChild(modif); 
        li.appendChild(supp); 
        todos.appendChild(li);

        
        classNum += 1;
    } else {
        console.log('No task is given!');
    }
    input.value = "";
}

function clearAll(){
    
    for(i=0; i<lis.length; i++){
        lis[i].remove();
    }
    
}


let supp = document.querySelectorAll('button.supp');
for (let i in supp){
    supp[i].addEventListener('click', deleteTask(supp[i].parentNode));
}

function deleteTask(row){
    console.log(row);
    // row.remove();
}

function modifyTask(){
    
}
