const MAX_POKEMON_COUNT = 151;
const API_URL = "https://pokeapi.co/api/v2/pokemon";

type Pokemon = {
  name: string;
  [k: string]: any;
};

export async function getPokemonList(): Promise<Pokemon[]> {
  const response = await fetch(`${API_URL}?limit=${MAX_POKEMON_COUNT}`);
  const data = await response.json();
  return data.results;
}