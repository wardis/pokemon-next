"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

export default function PokemonImage({
  image,
  name,
  size = 240,
}: {
  image: string;
  name: string;
  size?: number;
}) {
  return (
    <Image
      alt={"Picture of " + name}
      src={image}
      priority
      height={size}
      width={size}
      className="duration-[1s] opacity-0 transition-opacity"
      onLoad={(event) =>
        (event.target as HTMLImageElement).classList.remove("opacity-0")
      }
    />
  );
}
