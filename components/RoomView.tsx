"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AmenitiesList } from "@/components/AmenitiesList";
import { BookingCard } from "@/components/BookingCard";
import { Header } from "@/components/Header";
import { HostInfo } from "@/components/HostInfo";
import { ImageGallery } from "@/components/ImageGallery";
import { ListingDetails } from "@/components/ListingDetails";
import { LoadingState } from "@/components/LoadingState";
import type { Listing } from "@/types/listing";

interface RoomViewProps {
  id: string;
  listing: Listing | null;
}

export const RoomView = ({ id, listing }: RoomViewProps) => {
  const [loadState, setLoadState] = useState({ id: "", isLoading: true });

  useEffect(() => {
    const timer = setTimeout(() => setLoadState({ id, isLoading: false }), 650);
    return () => clearTimeout(timer);
  }, [id, listing]);

  const isLoading = loadState.id !== id || loadState.isLoading;

  return (
    <div className="min-h-screen bg-white text-stone-950">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-5 sm:px-8 sm:pt-8">
        <Link className="mb-5 inline-flex min-h-10 items-center text-sm font-medium underline underline-offset-4" href="/catalog">← Volver al catálogo</Link>
        {isLoading ? <LoadingState label="Cargando alojamiento" /> : listing ? (
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="min-w-0">
              <ImageGallery images={listing.images} title={listing.title} />
              <div className="mt-7"><ListingDetails listing={listing} /></div>
              <HostInfo host={listing.host} />
              <p className="whitespace-pre-line py-6 leading-relaxed text-stone-700">{listing.description}</p>
              <AmenitiesList amenities={listing.amenities} />
            </div>
            <BookingCard maxGuests={listing.maxGuests} pricePerNight={listing.pricePerNight} />
          </div>
        ) : (
          <section className="py-16 text-center" role="status">
            <h1 className="font-display text-2xl font-semibold">Alojamiento no disponible</h1>
            <p className="mt-2 text-stone-600">No encontramos el alojamiento “{id}”.</p>
            <Link className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-stone-950 px-5 font-semibold text-white" href="/catalog">Explorar alojamientos</Link>
          </section>
        )}
      </main>
    </div>
  );
};