const Url = 'http://localhost:3000/cocktails';

// function getCocktails() {
//   return fetch(Url, {
//     headers: {
//       'Accept': 'application/json'
//     }
//   })
fetch(Url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const ul = document.querySelector('')

  })


// function postCocktails(body) {
//     return fetch(Url, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(body)
//     })
//     .then(res => res.json())
//   }
// // + "/search.php"