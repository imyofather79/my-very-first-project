
const cocktailPTag = document.querySelector('#main');
const randomCocktailButton = document.querySelector('#random-button');
const removeIngredButton = document.querySelector('#mix-shake-button');
const imageButton = document.querySelector('#serve-button');
const resetBtn = document.querySelector('#reset-button');
const cocktailImg = document.querySelector('#image');

const Url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

let drinkName;
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
      drinkName = cocktailPTag.innerText;

      const drinkIngred = [`${data.strIngredient1}`,
        `${data.strIngredient2}`, `${data.strIngredient3}`,
        `${data.strIngredient4}`, `${data.strIngredient5}`,
        `${data.strIngredient6}`]
      
      const li = document.createElement('li')
      li.textContent = drinkIngred;
      ul.append(li);
      currentImg = data.strDrinkThumb;

      const removePic = document.querySelector('#image');
      removePic.innerHTML = "";
})}

function removeDrink() {
  const removeDrink = document.querySelector('#text');
  removeDrink.innerHTML = "";
}

function cocktailPic(){
    cocktailImg.innerText = drinkName + "\n";
    const img = document.createElement("img");
    img.src = currentImg;
    cocktailImg.appendChild(img);
    alert("HERE IS YOUR DRINK");
}

function resetAll(){
  const removeName = document.querySelector('#main');
  removeName.innerHTML = "Cocktail";
  const removePic = document.querySelector('#image');
  removePic.innerHTML = "";
  const removeDrink = document.querySelector('#text');
  removeDrink.innerHTML = "";
  currentImg = "";
  drinkName = "";
  alert("GO HOME! YOU ARE DRUNK");
}


randomCocktailButton.addEventListener('click', getCocktail);

removeIngredButton.addEventListener('click', removeDrink);

imageButton.addEventListener('click');

resetBtn.addEventListener('click', resetAll);

document.addEventListener('DOMContentLoaded', function(){
  removeDrink();
  cocktailPic();
  resetAll();
});