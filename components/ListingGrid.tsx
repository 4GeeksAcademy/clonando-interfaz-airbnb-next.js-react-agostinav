import { ListingCard } from "@/components/ListingCard";
import type { Listing } from "@/types/listing";

interface ListingGridProps {
  listings: Listing[];
}

export const ListingGrid = ({ listings }: ListingGridProps) => (
  listings.length ? (
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
    </div>
  ) : (
    <p className="py-16 text-center text-sm text-stone-600" role="status">
      No encontramos alojamientos con esos criterios.
    </p>
  )
);