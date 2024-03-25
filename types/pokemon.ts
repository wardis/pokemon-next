export type Pokemon = {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string; url: string } }[];
  moves: { move: { name: string; url: string } }[];
  [k: string]: any;
};

export type PokemonPreview = {
  name: string;
  image: string;
};
