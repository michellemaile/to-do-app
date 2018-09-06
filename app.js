function onReady() {    
    
    // create new variable named toDos and make it an array//
    const toDos = [];

    // create a new variable named addToDoForm which is a form <form id="addToDoForm"> (event listner below) //
    const addToDoForm = document.getElementById('addToDoForm');

    
    //create new function called createNewToDo //
    function createNewToDo() {
    
        //create new variable named newToDoText that grabs the element <label id=newToDoText> //
        const newToDoText = document.getElementById('newToDoText');
        
//  //
        if (!newToDoText.value) { return; }
    
        // call toDos (array that was defined above), push information to it: assign the value of the text input <form id="addToDoForm"> <input id=newToDoText> to the key "title" and create another key "complete" and initialize it to false //
        toDos.push({
            title: newToDoText.value,
            complete: false
        });
    
        // clear the input (which HTML defined as text <input type="text") for the user by changing newToDoText to blank //
        newToDoText.value='';
        
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
            // create a new li defined by newLi //
            const newLi = document.createElement('li');
            // create a new input called checkbox //
            const checkbox = document.createElement('input');
            // checkbox is an input, set it's input type to checkbox //
            checkbox.type = "checkbox";
            
            // add the title text from toDo (defined when function was created) to newLi //
            newLi.textContent = toDo.title;
            
            // add newLi to the toDoList //
            toDoList.appendChild(newLi);
            // add checkbox to the newLi //
            newLi.appendChild(checkbox);
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