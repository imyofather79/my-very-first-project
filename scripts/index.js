
const cocktailPTag = document.querySelector('#main');
const randomCocktailButton = document.querySelector('#random-button');
const removeIngredButton = document.querySelector('mix-shake-button');
const imageButton = document.querySelector('#serve-button');
const imageDrink = document.querySelector('#image');

const Url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

let currentImg;


function getCocktail(){
  return fetch(Url, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
      const ul = document.querySelector('#text')
      ul.innerHTML = "";
      const data = result.drinks[0]
      const drinkData = [`${data.strDrink}`, `${data.strIngredient1}`,
       `${data.strIngredient2}`, `${data.strIngredient3}`,
        `${data.strIngredient4}`, `${data.strIngredient5}`,
         `${data.strIngredient6}`, `${data.strIngredient7}`,
       `${data.strIngredient8}`, `${data.strIngredient9}`]
      const li = document.createElement('li')
      li.textContent = drinkData;
      ul.append(li);
      currentImg = data.strDrinkThumb;
      // need this drinkData to become 
      
      // also need the pull all the strIngredient1-n out
      
      // cocktailPTag.innerText = drinkData;
})}


function removeDrink() {
  
  const removeDrink = document.querySelector('#text');
 removeDrink.parentElement.removeChild(removeDrink);
}
/* I can only get it to delete the whole id
*/

function cocktailPic(){
  return fetch(Url, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    const createUl = document.createElement('ul')
    
    const data = JSON.stringify(result);
    // let picUrl = new Image()
    picUrl.src = `${data.strDrinkThumb}`
    ul.setAttribute('id', 'text');
    document.getElementById('main').appendChild(ul);
})
}
/*
// Need ths strDrinkThumb to be the same as the one rendered from the Random cocktail
I will need to recreate the <ul id='text'></ul> under the p#main tag, 
as I have just removed the whole tag from removeDrink()

I will also need to make this "Serve" button as my reset button as well,
so everything will loop back to the start
*/

randomCocktailButton.addEventListener('click', getCocktail)

removeIngredButton.addEventListener('click', removeDrink)

// imageButton.addEventListener('click', cocktailPic)

document.addEventListener('DOMContentLoaded', function(){
  removeDrink();
  cocktailPic();
});

// --------------------------------------------------------------------


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


