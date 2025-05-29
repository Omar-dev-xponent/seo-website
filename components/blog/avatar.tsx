import React from "react";
import Image from "next/image";

interface Avatar {
  url: string;
}

interface Author {
  avatar: Avatar;
  name: string;
}

interface AvatarProps {
  author: Author;
}

export default function Avatar({ author }: AvatarProps) {
  return (
    <Image
      src={author.avatar.url}
      alt={author.name}
      className="max-w-[45px] w-[45px] h-[auto] rounded-full"
      width={0}
      height={0}
      sizes="100vw"
      priority={true}
    />
  );
}
