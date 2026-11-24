"use client";

import { Icon } from "@/components/Icon";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <label className="flex h-12 w-full items-center gap-3 rounded-full border border-stone-200 bg-white px-4 shadow-sm transition focus-within:border-rose-500">
    <Icon name="search" className="size-5 shrink-0 text-stone-700" />
    <span className="sr-only">Buscar alojamientos</span>
    <input
      aria-label="Buscar alojamientos"
      className="min-w-0 flex-1 bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-500"
      onChange={(event) => onChange(event.target.value)}
      placeholder="Empieza a buscar"
      type="search"
      value={value}
    />
  </label>
);