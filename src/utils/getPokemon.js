const getPokemon = (setPokemonData) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then(getJSON)    
    .then(obj => obj.results) //gives array of pokemon objects, with name and url inside.
    .then(arrOfPokeObj => {
      Promise.all(arrOfPokeObj.map(obj => getPokemonFromUrl(obj.url)))
      .then(arrOfPokemon => {
        setPokemonData(arrOfPokemon);
      })
       /* .then(getDataFromUrlArr)
        .then(arr => {
          pokemonArr = arr; 
        })
        .then(()=>console.log({ pokemonArr }))*/
    }) //gives only array of urls for new fetch request
  //  //fetches img, name and id of each pokemon
    .catch(console.error);
}
// console.log("getPokemon", getPokemon());

// const getDataFromUrlArr = (urlArr) =>{ 
//   return urlArr.map(url => getPokemonFromUrl(url))
// }

// const pickUrl = (arr) => {
//   return arr[0]; 
// }

const getPokemonFromUrl = (url) => {
  return fetch(url)
    .then(getJSON)
    .then(obj => {
     return {img: obj.sprites.front_default, name: obj.name, id: obj.id}
    })
    .catch(console.err)
}

const getJSON = (response) => {
  if (!response.ok) {
    throw new Error(`Error with request: ${response.status}`)
  }
  return response.json();
} 

export default getPokemon;
