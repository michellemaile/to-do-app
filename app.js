function onReady() {
    const addToDoForm = document.getElementById('addToDoForm'); //form
    const newToDoText =document.getElementById('newToDoText'); // text box
    const toDoList = document.getElementById('toDoList'); // unordered list
    
    
    //when you click the button defined as <button type='submit' id='button'>Add To-Do!</button>, all this should happen
    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
        
        //get the text -- why is it not TEXT because <input type="text" id= newToDoText> What is .value?
        let title = newToDoText.value;
        
        //create a new li defined by li
        let newLi = document.createElement('li');
        
        // create a checkbox defined by input
        let checkbox = document.createElement('input');
        
        //set the checkbox's input's type to checkbox
        checkbox.type = "checkbox";
        
        //create delete button defined by button
        let deleteButton = document.createElement('button');
            // create a text node
        let t = document.createTextNode("Delete");   
            // Append the text to <button>
        deleteButton.appendChild(t);                           
        
 ///////// tell the delete button to delete !!!!! This must be 'click,' not 'submit !!! Why?????? Is submit in reference to the fact that it takes input from somewhere whereas click is in reference to simply clicking on a button?
        deleteButton.addEventListener('click', () => {
            toDoList.removeChild(newLi);
            
            });
        
        //set the title: the new Li (created above) needs text from "title" (associated with the text (value) from the input of newToDoText)
        newLi.textContent = title;
        
        //attach the checkbox to the Li
        newLi.appendChild(checkbox);
        
         // attach <deleteButton> to <newLi>
        newLi.appendChild(deleteButton);  
        
        //attach the li to the ul
        toDoList.appendChild(newLi);
        
        //empty the input
        newToDoText.value ='';
    });
}

//////// if you wanted to give the buttons seperate CSS properties, you'd have to add them selerately in HTML, right?

window.onload = function() {
    onReady();
};