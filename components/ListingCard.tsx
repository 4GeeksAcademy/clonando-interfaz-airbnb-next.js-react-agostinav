import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getLocalImageSrc } from "@/components/local-image";
import type { Listing } from "@/types/listing";

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard = ({ listing }: ListingCardProps) => {
  const image = listing.images[0];

  return (
    <article className="min-w-0">
      <Link aria-label={`Ver ${listing.title}`} className="group block" href={`/rooms/${listing.id}`}>
        <div className="relative aspect-[1/0.92] overflow-hidden rounded-xl bg-stone-200">
          {image ? <Image alt={image.alt} className="object-cover transition duration-500 group-hover:scale-[1.03]" fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw" src={getLocalImageSrc(image.src)} unoptimized /> : <div aria-label="Fotografía pendiente" className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300" role="img" />}
          <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-stone-800">
            <Icon name="heart" className="size-5" />
          </span>
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <h2 className="truncate text-sm font-semibold text-stone-900">{listing.title}</h2>
          <span className="flex shrink-0 items-center gap-1 text-sm text-stone-800">
            <Icon name="star" className="size-3.5 fill-current" /> {listing.rating.toFixed(2)}
          </span>
        </div>
        <p className="mt-1 truncate text-sm text-stone-500">{listing.location}</p>
        <p className="mt-2 text-sm text-stone-800"><strong className="font-semibold">€{listing.pricePerNight}</strong> por noche</p>
      </Link>
    </article>
  );
};