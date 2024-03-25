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
      data-loaded={false}
      alt={"Picture of " + name}
      src={image}
      priority
      height={size}
      width={size}
      className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10"
      onLoad={(event) =>
        (event.target as HTMLImageElement).setAttribute("data-loaded", "true")
      }
    />
  );
}
