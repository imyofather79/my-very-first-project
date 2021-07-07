
const cocktailPTag = document.querySelector('#main');
const randomCocktailButton = document.querySelector('#random-button');
const removeIngredButton = document.querySelector('mix-shake-button');
const imageButton = document.querySelector('#serve-button');
const resetBtn = document.querySelector('#reset-button');

const Url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

let currentImg;
let drinkIngred;


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
      const drinkData = [`${data.strDrink}`]
      cocktailPTag.innerText = drinkData;
      drinkIngred = [`${data.strIngredient1}`,
        `${data.strIngredient2}`, `${data.strIngredient3}`,
        `${data.strIngredient4}`, `${data.strIngredient5}`,
        `${data.strIngredient6}`, `${data.strIngredient7}`,
        `${data.strIngredient8}`, `${data.strIngredient9}`]
      const li = document.createElement('li')
      li.textContent = drinkIngred;
      ul.append(li);
      currentImg = data.strDrinkThumb;
})}


function removeDrink() {
    const removeDrink = document.querySelector('#text');
    const li = document.querySelector('li');
    li.innerHTML = "";
    removeDrink.innerHTML = "";
 
}


function cocktailPic(){
    const newUl = document.createElement("ul");
    newUl.setAttribute('id', 'text');

    // const element = document.getElementById("main");
    cocktailPTag.appendChild(newUl);


    const img = document.createElement("img");
    img.src = currentImg;
    const src = document.getElementById("image");
    src.appendChild(img);
    // img.innerHTML = "";
    

}

function resetAll(){
  // inputForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  const removeDrink = document.querySelector('#text');
  const li = document.querySelector('li');
  li.innerHTML = "";
  removeDrink.innerHTML = "";

}


randomCocktailButton.addEventListener('click', getCocktail);

removeIngredButton.addEventListener('click', removeDrink);

imageButton.addEventListener('click', cocktailPic);

resetBtn.addEventListener('click', resetAll);

document.addEventListener('DOMContentLoaded', function(){
  removeDrink();
  cocktailPic();
  resetAll();
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


