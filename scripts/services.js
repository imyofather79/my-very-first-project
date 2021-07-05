const Url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

function getCocktail(){
  return fetch(Url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
      // cocktailsName = data
      // const drinkData = [`${data.strDrink}`, `${data.strIngredient1}`]
      drinkData = data
      cocktailPTag.innerText = drinkData
})}