"use client";

import Image from "next/image";
import React from "react";

export default function PokemonImage({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <Image
      alt={"Picture of " + name}
      src={image}
      priority
      height={240}
      width={240}
      className="duration-[1s] opacity-0 transition-opacity"
      onLoad={(event) =>
        (event.target as HTMLImageElement).classList.remove("opacity-0")
      }
    />
  );
}
