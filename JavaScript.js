/***************************************************************************************
 * Name: Stephanie Bernades                                                            *
 * Code purpose:   To do list that lets add and delete things from a list program      *
 *Date: September 7, 2021                                                              *
 ***************************************************************************************/



//parseInt converts whatever is entered into an integer or NAN
//promt generates the user for the num


//ask the user for a task 
let input = prompt("What would you like to do?")

//Array that will collect the to dos 
const todos = [];

//Validation loop that ends the programs if quit is entered or continues the program otherwise 
while (input !== 'quit' && input != 'q') {

    //menu option LIST 
    if (input === 'list' || input === 'List') {

        console.log('*************************************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************************************')

        //menu option NEW
    } else if (input === 'new') {
        const newTodo = prompt('Ok, What is the new to do?');
        //code to add new elements to the todo array 
        todos.push(newTodo);
        //code to display the new task on the list 
        console.log(`${newTodo} added to the list!`)
    }

    //menu option DELETE 
    else if (input == 'delete' || input == 'Delete') {
        const index = parseInt(prompt('Ok, What to do do you want to delete?:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`)
        } else {
            console.log('Unknown index')
        }
    }

    input = prompt("What would you like to do?")
}
console.log("OK QUIT THE APP");