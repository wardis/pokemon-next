import PokemonImage from "@/components/pokemon-image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getPokemonByName } from "@/lib/pokemonAPI";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemon = await getPokemonByName(pokemonName);

  return (
    <div>
      <Card className="mx-auto border-4">
        <CardHeader>
          <CardTitle className="pb-4 text-center capitalize">
            {pokemon.name}
          </CardTitle>
          <div className="relative grid min-h-60 w-full place-items-center">
            <PokemonImage
              image={pokemon.sprites.other["official-artwork"]["front_default"]}
              name={pokemon.name}
            />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
