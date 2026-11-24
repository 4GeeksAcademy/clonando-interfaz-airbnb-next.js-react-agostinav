"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { ListingGrid } from "@/components/ListingGrid";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { SortControl } from "@/components/SortControl";
import type { Listing } from "@/types/listing";

interface CatalogViewProps {
  listings: Listing[];
}

export const CatalogView = ({ listings }: CatalogViewProps) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const sortedListings = [...listings].sort((first, second) => sortOrder === "asc"
    ? first.pricePerNight - second.pricePerNight
    : second.pricePerNight - first.pricePerNight);

  return (
    <div className="min-h-screen bg-white text-stone-950">
      <Header />
      <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-xl font-semibold">{sortedListings.length} alojamientos</h1>
          <SortControl onChange={setSortOrder} value={sortOrder} />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <ListingGrid listings={sortedListings} />
          <MapPlaceholder />
        </div>
      </main>
    </div>
  );
};