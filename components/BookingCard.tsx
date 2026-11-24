"use client";

import { useState } from "react";

interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

export const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);

  return (
    <aside className="h-fit rounded-xl border border-stone-200 bg-white p-5 shadow-lg lg:sticky lg:top-6">
      <p className="text-xl text-stone-950"><strong>€{pricePerNight}</strong><span className="text-sm font-normal text-stone-600"> por noche</span></p>
      <div className="mt-5 flex items-center justify-between rounded-lg border border-stone-300 p-3">
        <div>
          <p className="text-sm font-semibold text-stone-900">Huéspedes</p>
          <p aria-live="polite" className="text-sm text-stone-600">{guests}</p>
        </div>
        <div className="flex gap-2">
          <button aria-label="Quitar huésped" className="size-9 rounded-full border border-stone-300 disabled:opacity-40" disabled={guests <= 1} onClick={() => setGuests((count) => Math.max(1, count - 1))} type="button">−</button>
          <button aria-label="Añadir huésped" className="size-9 rounded-full border border-stone-300 disabled:opacity-40" disabled={guests >= maxGuests} onClick={() => setGuests((count) => Math.min(maxGuests, count + 1))} type="button">+</button>
        </div>
      </div>
      <button className="mt-5 min-h-12 w-full rounded-lg bg-rose-600 px-4 font-semibold text-white transition hover:bg-rose-700" type="button">Consultar disponibilidad</button>
      <p className="mt-3 text-center text-xs text-stone-500">No se realizará ninguna reserva.</p>
    </aside>
  );
};