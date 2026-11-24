"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SearchBar } from "@/components/SearchBar";

interface HeaderProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export const Header = ({ searchValue = "", onSearchChange }: HeaderProps) => (
  <header className="border-b border-stone-200 bg-white">
    <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
      <Link aria-label="Airbnb, inicio" className="flex items-center gap-2 text-rose-600" href="/">
        <Icon name="home" className="size-7" />
        <span className="hidden text-xl font-bold sm:inline">airbnb</span>
      </Link>
      {onSearchChange ? (
        <div className="order-3 w-full sm:order-none sm:w-[min(42vw,420px)]">
          <SearchBar value={searchValue} onChange={onSearchChange} />
        </div>
      ) : <nav aria-label="Navegación principal" className="flex gap-5 text-sm font-medium">
        <Link className="hover:text-rose-600" href="/">Explorar</Link>
        <Link className="hover:text-rose-600" href="/catalog">Alojamientos</Link>
      </nav>}
      <div aria-label="Menú de usuario" className="flex items-center gap-3 text-stone-700">
        <span className="hidden text-sm font-medium md:inline">Conviértete en anfitrión</span>
        <Link aria-label="Ver catálogo de alojamientos" className="flex size-10 items-center justify-center rounded-full hover:bg-stone-100" href="/catalog" title="Alojamientos">
          <Icon name="map" className="size-5" />
        </Link>
        <button aria-label="Abrir menú de usuario" className="flex size-10 items-center justify-center gap-2 rounded-full border border-stone-300" type="button">
          <Icon name="menu" className="size-4" />
          <Icon name="user" className="size-5" />
        </button>
      </div>
    </div>
  </header>
);