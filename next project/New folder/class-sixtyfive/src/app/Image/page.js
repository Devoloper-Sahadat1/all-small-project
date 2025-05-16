"use client";

import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function Page() {
  return (
    <Image
      loader={imageLoader}
      src="//src/asset/IMG202408091820181-01.jpeg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
