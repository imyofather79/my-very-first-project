const Url = 'www.thecocktaildb.com/api/json/v1/1'

fetch(Url)
.then(resp => resp.json())
.then(data => {
console.log(data)

});

