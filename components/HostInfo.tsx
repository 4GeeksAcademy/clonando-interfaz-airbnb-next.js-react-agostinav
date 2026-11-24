import Image from "next/image";
import type { Host } from "@/types/listing";

interface HostInfoProps {
  host: Host;
}

export const HostInfo = ({ host }: HostInfoProps) => (
  <section className="flex items-center gap-4 border-b border-stone-200 py-6">
    <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-rose-100">
      <Image alt={host.avatar.alt} className="object-cover" fill sizes="56px" src={host.avatar.src} unoptimized />
    </div>
    <div>
      <h2 className="font-semibold text-stone-950">Anfitrión: {host.name}</h2>
      <p className="mt-1 text-sm text-stone-600">{host.yearsHosting} años como anfitrión</p>
    </div>
  </section>
);