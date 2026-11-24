"use client";

import { useEffect, useState } from "react";
import { CategoryFilters } from "@/components/CategoryFilters";
import { Header } from "@/components/Header";
import { ListingGrid } from "@/components/ListingGrid";
import { LoadingState } from "@/components/LoadingState";
import type { Category, Listing } from "@/types/listing";

interface HomeViewProps {
  listings: Listing[];
  categories: Category[];
}

export const HomeView = ({ listings: sourceListings, categories }: HomeViewProps) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(sourceListings);
      setIsLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, [sourceListings]);

  const filteredListings = listings.filter((listing) => {
    const matchesText = `${listing.title} ${listing.location}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesText && (!selectedCategory || listing.categoryId === selectedCategory);
  });

  return (
    <div className="min-h-screen bg-white text-stone-950">
      <Header onSearchChange={setQuery} searchValue={query} />
      <main className="mx-auto max-w-[1440px] px-4 pb-16 pt-5 sm:px-8 sm:pt-8">
        <CategoryFilters categories={categories} onSelect={setSelectedCategory} selectedCategory={selectedCategory} />
        <section aria-label="Alojamientos" className="pt-6">
          {isLoading ? <LoadingState /> : <ListingGrid listings={filteredListings} />}
        </section>
      </main>
    </div>
  );
};