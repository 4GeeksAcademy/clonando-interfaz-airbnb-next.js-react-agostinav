import { Icon } from "@/components/Icon";
import type { Listing } from "@/types/listing";

interface ListingDetailsProps {
  listing: Listing;
}

export const ListingDetails = ({ listing }: ListingDetailsProps) => (
  <section className="border-b border-stone-200 pb-6">
    <h1 className="font-display text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">{listing.title}</h1>
    <p className="mt-3 text-stone-600">{listing.location}</p>
    <p className="mt-1 text-sm text-stone-600">Hasta {listing.maxGuests} huéspedes</p>
    <p className="mt-3 flex items-center gap-2 text-sm text-stone-800">
      <Icon name="star" className="size-4 fill-current" />
      <strong>{listing.rating.toFixed(2)}</strong>
      <span className="text-stone-500">· {listing.reviewCount} evaluaciones</span>
    </p>
  </section>
);