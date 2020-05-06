const getPokemon = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then(getJSON)
    .catch(console.error);
}

const getJSON = (response) => {
  if (!response.ok) {
    throw new Error(`Error with request: ${response.status}`)
  }
  return response.json();
} 

export default getPokemon;