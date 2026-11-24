"use client";

import { Icon } from "@/components/Icon";
import type { Category } from "@/types/listing";

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelect: (id: string | null) => void;
}

export const CategoryFilters = ({ categories, selectedCategory, onSelect }: CategoryFiltersProps) => (
  <nav aria-label="Filtrar por categoría" className="flex gap-7 overflow-x-auto border-b border-stone-200 px-1 pb-3">
    <button aria-pressed={selectedCategory === null} className={`flex min-w-fit flex-col items-center gap-2 border-b-2 pb-2 text-xs ${selectedCategory === null ? "border-stone-900 text-stone-900" : "border-transparent text-stone-500"}`} onClick={() => onSelect(null)} type="button">
      <Icon className="size-6" name="home" /> Todo
    </button>
    {categories.map((category) => (
      <button aria-pressed={selectedCategory === category.id} className={`flex min-w-fit flex-col items-center gap-2 border-b-2 pb-2 text-xs ${selectedCategory === category.id ? "border-stone-900 text-stone-900" : "border-transparent text-stone-500"}`} key={category.id} onClick={() => onSelect(category.id)} type="button">
        <Icon className="size-6" name={category.icon} /> {category.name}
      </button>
    ))}
  </nav>
);