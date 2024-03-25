import PokemonImage from "@/components/pokemon-image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getPokemonByName } from "@/lib/pokemonAPI";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { TbWeight } from "react-icons/tb";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemon = await getPokemonByName(pokemonName);

  const statNameMap = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
  };

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

        <CardContent>
          <div>
            <div className="mb-4 flex justify-center gap-2">
              {pokemon.types.map((type) => (
                <Badge
                  key={type.type.name}
                  className="px-4 py-2 font-bold capitalize"
                >
                  {type.type.name}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-3 divide-x-2 py-4">
              <div className="flex flex-col items-center justify-between gap-1">
                <p className="flex h-full items-center">
                  <TbWeight /> {pokemon.weight / 10} kg
                </p>
                <p className="text-xs">Weight</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-1">
                <p className="flex h-full items-center">
                  <LiaRulerVerticalSolid />
                  {pokemon.height / 10} m
                </p>
                <p className="text-xs">Height</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-1 text-center">
                <div>
                  {pokemon.moves.slice(0, 2).map((move: any) => (
                    <p className="text-sm" key={move.move.name}>
                      {move.move.name}
                    </p>
                  ))}
                </div>

                <p className="text-xs">Moves</p>
              </div>
            </div>

            <div>{pokemon.description}</div>
            <h3 className="mt-4 text-center">Base Stats</h3>
            <div>
              {pokemon.stats.map((stat: any) => (
                <div
                  className="grid grid-cols-[50px_50px_1fr] items-center"
                  key={stat.stat.name}
                >
                  <p>
                    {statNameMap[stat.stat.name as keyof typeof statNameMap]}
                  </p>
                  <p>{stat.base_stat}</p>
                  <Progress value={stat["base_stat"]} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
