import { Icon } from "@/components/Icon";

export const MapPlaceholder = () => (
  <aside aria-label="Vista previa del mapa" className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl bg-emerald-50 text-emerald-950 md:sticky md:top-6 md:h-[calc(100vh-3rem)]">
    <Icon name="map" className="size-10" />
    <p className="text-sm font-semibold">Mapa de alojamientos</p>
    <p className="text-xs text-emerald-800">Vista previa no interactiva</p>
  </aside>
);