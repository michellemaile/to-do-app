function onReady() {    
    // create new variable named toDos and make it an array//
    const toDos = [];

    // create a new variable named addToDoForm which is a form <form id="addToDoForm"> (event listner below) //
    const addToDoForm = document.getElementById('addToDoForm');
    
    // (1) create a new variable that can be reassigned and set its value to zero -- what is this variable for?//
    let id = 0;

    
    //create new function called createNewToDo //
    function createNewToDo() {
    
        //create new variable named newToDoText that grabs the element <label id=newToDoText> //
        const newToDoText = document.getElementById('newToDoText');
        
        // if there is not a value in newToDoText (which is the input box), return nothing //
        if (!newToDoText.value) {return; }
    
        // call toDos (array that was defined above), push information to it: assign the value of the text input <form id="addToDoForm"> <input id=newToDoText> to the key "title" and create another key "complete" and initialize it to false //
        toDos.push({
            title: newToDoText.value,
            // what does this refer to? //
            complete: false,
            // (2) create a new property called id and store the value of the id variable which will go up each time this function runs (incremented)//
            id: id++
        });
    
        // clear the input (which HTML defined as text <input type="text") for the user by changing newToDoText to blank //
        newToDoText.value='';
        
        // needed for the filter method //
        console.log(id);
        
        // call this function each time the state changes //
        renderTheUI();
    }
    
    // takes current state (toDos array) and render the UI
    function renderTheUI() {
        // create new variable called toDoList that grabs the element <ul id="toDoList"> //
        const toDoList = document.getElementById('toDoList');
        
        // set newLi to empty string //
        toDoList.textContent = '';
        
        //toDos is our array defined above. forEach() takes a function and applies it to each item in the array. In this case, render each to-do as a li in the ul //
        toDos.forEach(function(toDo){
            
            // create a new li defined by newLi  -- why don't we have to assign the type to newLi like we do for checkbox and button//
            const newLi = document.createElement('li');
            
            // create a new input called checkbox //
            const checkbox = document.createElement('input');
            
            // (4) create a new button called deleteButton, append it to newLi, register an event listener - to add//
            const deleteButton = document.createElement('button');
            
            
            // checkbox is an input, set it's input type to checkbox //
            checkbox.type = "checkbox";
            // why are these here and not in other version? - to add//
            deleteButton.type = "button";
            // change the text of the element - to add//
            deleteButton.textContent = "Delete";
            
            // add the title text from toDo (defined when function was created) to newLi //
            newLi.textContent = toDo.title;
            
            // add newLi to the toDoList //
            toDoList.appendChild(newLi);
            // add checkbox to the newLi //
            newLi.appendChild(checkbox);
            // add deleteButton to newLi -to add//
            newLi.appendChild(deleteButton);
            
            deleteButton.addEventListener ("click", event => {
                event.preventDefault();
                
                
            let updated = toDos.filter(val => {
//               for (var i = 0; i < toDos.length; i++){
                if (toDo.id < i && id == i){
                return true;
//               }else{
//                    event.target.parentElement.remove()
//                    toDo.removeChild(newLi); 
//                }
                    }
                 console.log(updated); 
                });
              
                
                // create a new function called removeItem //
//                function removeItem() {
                    // set the variable before the loop starts to 0, keep running this loop for the length of the toDos (condition for executing the code block), increase a value each time the code block in the loop has been executed (executed each time the code block has been executed) 
 //                   for (var i = 0; i < toDos.length; i++ ){
                    // instructions say: use the .filter() array method, comparing toD0.id with the id of each item in the to-do list -- aren't they the same? i is the loop number correct?  //
//                      if( toDo.id < i && id == i){
//                            return true;
                        // if it is false, remove the parentElement which is the li //
//                        }else{
//                            event.target.parentElement.remove()
//                        }
//                    }
//                }
               // console.log(removeItem());
              //  console.log(toDo.id);
              //  console.log(toDos.filter(removeItem));
                
                // print the items in the toDo list array that remain after the filter titled removeItem //
//                return toDos.filter(removeItem);
                
                renderTheUI()
                });
        });
    }
    
    //add event listener to the submit event <button type="submit"> of the form element <form id="addToDoForm"> When the button which was defined as a submit form button is pushed, this happens: //
    addToDoForm.addEventListener('submit', event => {
        // don't do the default reloading the page //              
        event.preventDefault();
        // do the function "createNewToDo" defined above //
        createNewToDo();                        
    }); 
    
// why is this here twice? //    
    renderTheUI();
}

window.onload = function() {
  onReady();
};

// the four lines that have - to add are the 4 lines needed to add a button (not functional yet) //