
const cocktailPTag = document.querySelector('#main');
const randomCocktailButton = document.querySelector('#random-button');
// const cocktailSubmit = document.querySelector('#cocktailList');
const removeIngredButton = document.querySelector('mix-shake-button');
const imageButton = document.querySelector('#serve-button');
const imageDrink = document.querySelector('#image');

const Url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';


function getCocktail(){
  return fetch(Url, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
      const data = JSON.stringify(result);
      
      const drinkData = data;
      cocktailPTag.innerText = drinkData;
})}


// function removeDrink(){
//   removeIngredButton.addEventListener("mix-shake-button",
//   newCocktailPTag = document.querySelector('#main')
//   removeIngred = newCocktailPTag.remove();
//   )
// }

// async function cocktailPic(){
//   const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//   const data = await res.json()
//   let picUrl = new Image()
//   picUrl.src = `${data.strDrinkThumb}`
    
// }

randomCocktailButton.addEventListener('click', getCocktail)

getCocktail();

// document.addEventListener('DOMContentLoaded', function(){
  
//   removeDrink();
//   cocktailPic();
// });

// function cocktailName(){
//   const inputForm = document.querySelector('form');
//     inputForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const input = document.querySelector('input#searchByID');
//       const URL = 'http://localhost:3000/drinks?idDrink='
//     fetch(URL + `${input.value}`)
//     .then(res => res.json())
//     .then(data => {
//       const drinkText = document.querySelector('section#cocktailList h4#Drink');
//       drinkText.innerText = json.strDrink
//         data = `${drinks.idDrink} ${drinks.strDrink}`
//         cocktailsName = data.innerText
//     })})}


// function getCocktail(){
//     const inputForm = document.querySelector('form');
//     inputForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const input = document.querySelector('input#searchByID');
//       const URL = 'http://localhost:3000/drinks?idDrink='
//     fetch(URL + `${input.value}` )
//     console.log(URL + `${input.value}`)
//     // fetch(`http://localhost:3000/drinks?idDrink=` + `${input.value}`)
//     .then(res => res.json())
//     .then(json => {
//       console.log(json)
//       // const drinkText = document.querySelector('section#cocktailList h4#Drink');
//       const ingredientsText = document.querySelector('section#cocktailList p#Ingedients');

//       // drinkText.innerText = json.strDrink;
//       ingredientsText.innerText = json.strIngredient;

//     })})}






// cocktailName.addEventListener('click', )
// cocktailPTag.addEventListener('click', getCocktail());


