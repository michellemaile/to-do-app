function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    //var toDos = [];

    
    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
        
        //get the text
        let title = newToDoText.value;
        
        //create a new li
        let newLi = document.createElement('li');
        
        //create a new input
        let checkbox = document.createElement('input');
        
        //create delete button
       // let deleteButton =document.createElement('button');
        
        //set the input's type to checkbox
        checkbox.type = "checkbox";
        
        //set the title
        newLi.textContent = title;
        
        //set delete button
       // deleteButton.innerHTML="delete";
        
        //attach the checkbox to the Li
        newLi.appendChild(checkbox);
        
        //attach the delete button to the li
      //  newLi.appendChild(delete)
        
        //add delete event listener
        deleteButton.addEventListener("click", (){
            toDoList.removeChild(newLi);
        
        //attach the li to the ul
        toDoList.appendChild(newLi);
        
        //empty the input
        newToDoText.value ='';
        
    });
    
}
    // deleteForm.addEventListener('submit', () => {
     //   for (1 = 0; i < newLi; 1++) {
        //   if (checkbox[i].checked === true) {
           //    newLi.remove
         //  }
     //   }
   //  }
       
        
       // $("#deleteAcc").on("click", function() { $(".checkbox input:checked").parent().remove();});
        
      //  if (input.type==='checkbox'&&input.checked) {parentNode.removeChild};
    


window.onload = function() {
    onReady();
};