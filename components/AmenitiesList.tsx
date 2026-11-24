import { Icon } from "@/components/Icon";
import type { Amenity } from "@/types/listing";

interface AmenitiesListProps {
  amenities: Amenity[];
}

export const AmenitiesList = ({ amenities }: AmenitiesListProps) => (
  <section className="py-6">
    <h2 className="font-display text-2xl font-semibold text-stone-950">Qué ofrece este alojamiento</h2>
    <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <li className="flex items-center gap-3 text-stone-700" key={amenity.id}>
          <Icon className="size-5 shrink-0" name={amenity.icon} />
          <span>{amenity.label}</span>
        </li>
      ))}
    </ul>
  </section>
);