 let addToDoButton = document.getElementById('addToDo');
 let toDoContainer = document.getElementById('toDoContainer');
 let inputText = document.getElementById('inputText');
let clearToDoButton = document.getElementById('clearToDo');

 addToDoButton.addEventListener('click', function(){
     let li = document.createElement('li');
     li.classList.add('li-style')
     toDoContainer.appendChild(li);
     li.innerHTML = inputText.value;
     inputText.value = " ";

     li.addEventListener('click',function(){
         li.style.textDecoration = 'line-through'
     });
     li.addEventListener('dblclick',function(){
         toDoContainer.removeChild(li)
     })

     clearToDoButton.addEventListener('click',function(){
    toDoContainer.removeChild(li)
 })

 })

 