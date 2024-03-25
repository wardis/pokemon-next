import { Pokemon, PokemonPreview } from "@/types/pokemon";

const MAX_POKEMON_COUNT = 151;
const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonList(): Promise<PokemonPreview[]> {
  const response = await fetch(`${API_URL}?limit=${MAX_POKEMON_COUNT}`);
  const data = await response.json();
  const pokemonList = data.results;

  const pokemons = await Promise.all(
    pokemonList.map(async ({ name }: { name: string }) => {
      const pokemon = await getPokemonByName(name);
      return {
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      };
    }),
  );

  return pokemons;
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const response = await fetch(`${API_URL}/${name}`);
  return response.json();
}
