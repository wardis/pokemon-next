import { getPokemonList } from "@/lib/pokemonAPI";
import Link from "next/link";

export default async function Home() {
  const pokemons = await getPokemonList();

  return (
    <div className="my-4 grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
      {pokemons.map((pokemon) => (
        <Link key={pokemon.name} href={`/${pokemon.name}`}>
          <div className="w-full bg-slate-200 text-center dark:bg-slate-900">
            <p className="py-2 text-xl capitalize">{pokemon.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
