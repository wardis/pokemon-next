import PokemonGrid from "@/components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemons = await getPokemonList();

  return <PokemonGrid pokemons={pokemons} />;
}
