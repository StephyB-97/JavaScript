//Store in form will select the first element in the 
const Form = document.querySelector('form');

//here I store the result of the product
const product = document.querySelector('#product');
//Here i store the quantity of the product.
const quantity = document.querySelector('#qty');

//here i'll store all the elements that will go to the frocery shopping list.
const groceryList = document.querySelector('#list');

//now I'll create the function thatits going to print and store the elements from the grocery shopping list
Form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevents the dafault behavior 

    //creates the new list with the elements input 
    const newList = document.createElement('li');
    newList.innerHTML = `${quantity.value} ${product.value}`;
    groceryList.appendChild(newList);
    quantity.value = '';
    product.value = '';
})
