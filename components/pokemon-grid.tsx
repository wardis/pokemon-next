"use client";

import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

import { PokemonPreview } from "@/types/pokemon";

import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function PokemonGrid({
  pokemons,
}: {
  pokemons: PokemonPreview[];
}) {
  const [searchText, setSearchText] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon?.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <>
      <div className="flex items-center justify-start gap-4  p-4">
        <Label htmlFor="pokemonName">Search a Pokemon</Label>
        <div className="relative w-full max-w-sm items-center">
          <Input
            className="pl-10"
            placeholder="Pickachu"
            autoComplete="off"
            type="text"
            value={searchText}
            id="pokemonName"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="absolute inset-y-0 start-0 flex items-center justify-center px-2">
            <BiSearch className="size-6 text-muted-foreground" />
          </span>
        </div>
      </div>
      <div className="my-4 grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
        {filteredPokemons.map((pokemon) => (
          <Link key={pokemon.name} href={`/${pokemon.name}`}>
            <div className="w-full bg-slate-200 text-center dark:bg-slate-900">
              <p className="py-2 text-xl capitalize">{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
