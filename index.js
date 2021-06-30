const Url = 'https://cocktailsapi.xyz/'

fetch('https://cocktailsapi.xyz/')
.then(resp => resp.json())
.then(data => {
console.log(data)

});

