"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { getLocalImageSrc } from "@/components/local-image";
import type { ListingImage } from "@/types/listing";

interface ImageGalleryProps {
  images: ListingImage[];
  title: string;
}

export const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const image = images[activeIndex];

  const move = (offset: number) => {
    setActiveIndex((index) => Math.min(Math.max(index + offset, 0), images.length - 1));
  };

  return (
    <section aria-label="Galería del alojamiento" className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200 sm:aspect-[16/8]">
        {image ? <Image alt={image.alt} className="object-cover" fill priority sizes="100vw" src={getLocalImageSrc(image.src)} unoptimized /> : <div aria-label="Fotografía pendiente" className="absolute inset-0 bg-stone-200" role="img" />}
      </div>
      <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
        <button aria-label="Imagen anterior" className="flex size-10 items-center justify-center rounded-full bg-white/90 shadow" disabled={activeIndex === 0} onClick={() => move(-1)} type="button">
          <Icon name="previous" className="size-5" />
        </button>
        <button aria-label="Imagen siguiente" className="flex size-10 items-center justify-center rounded-full bg-white/90 shadow" disabled={activeIndex >= images.length - 1} onClick={() => move(1)} type="button">
          <Icon name="next" className="size-5" />
        </button>
      </div>
      <span aria-live="polite" className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs text-white">
        {images.length ? `${activeIndex + 1} / ${images.length}` : `${title}: sin fotografías`}
      </span>
    </section>
  );
};