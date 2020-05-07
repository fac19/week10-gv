const getPokemon = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then(getJSON)
    .then(obj => obj.results) 
    //gives array of pokemon objects, with name and url inside.
    //.then(arr => console.log(arr[0].name))
    .catch(console.error);
}


// function getPokemonIdByName(name){
//     const pokeArr = getPokemon();  //[{name: bulbasaur, url: somehtin}, ...]
//     const singleNameUrlArray = pokeArr.map(obj => {
//         return [obj.name, obj.url]
//     })  //[[bulbasaur, somehtin], ...]
//     .filter((arr) => arr[0] === name)
//     const url = singleNameUrlArray[1]; 

//     // fetch(url)
// }

const getJSON = (response) => {
  if (!response.ok) {
    throw new Error(`Error with request: ${response.status}`)
  }
  return response.json();
} 

export default getPokemon;
