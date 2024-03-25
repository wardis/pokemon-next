import { Pokemon } from "@/types/pokemon";

const MAX_POKEMON_COUNT = 151;
const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonList(): Promise<Pokemon[]> {
  const response = await fetch(`${API_URL}?limit=${MAX_POKEMON_COUNT}`);
  const data = await response.json();
  return data.results;
}

export async function getPokemonByName(name: string) {
  const response = await fetch(`${API_URL}/${name}`);
  return response.json();
}
