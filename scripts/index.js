
const cocktailList = document.querySelector('#main')
const cocktailPTag = document.querySelector('#cocktails')
const removeIngredButton = document.querySelector('mix-shake-button')
const imageButton = document.querySelector('#serve-button')

const Url = 'http://localhost:3000/cocktails/';

let cocktailsName = [];

function cocktailName(){
    fetch(Url)
    .then(res => res.json())
    .then(data => {
        data = `${cocktails.id} ${cocktails.drink}`
        cocktailsName = data.innerText
    });
}


function getCocktail(){
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('input#searchByID');
     
    fetch(Url + `${input.value}`)
    .then(res => res.json())
    .then(data => {
      const drink = document.querySelector('section#cocktailList h4');
      const ingredients = document.querySelector('section#cocktailList p');

      drink.innerText = data.drink;
      ingredients.innerText = data.ingredients;

    })})}

function removeIngredient(e) {
const removeIngred = document.getElementsByName("ingredient");
removeIngred.remove();
}

cocktailPTag.addEventListener('click', getCocktail());
document.addEventListener('DOMContentLoaded', function(){
    cocktailName();
});
