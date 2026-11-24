import type { ReactNode } from "react";

const shapes: Record<string, ReactNode> = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m16 16 4 4" /></>,
  home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-7h6v7" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  heart: <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.3 4.3 0 0 1 12 6.7a4.3 4.3 0 0 1 8.8 2.1Z" />,
  previous: <><path d="m15 18-6-6 6-6" /><path d="M20 12H9" /></>,
  next: <><path d="m9 18 6-6-6-6" /><path d="M4 12h11" /></>,
  settings: <><path d="M4 7h16M4 17h16" /><circle cx="9" cy="7" r="2" /><circle cx="15" cy="17" r="2" /></>,
  trees: <><path d="m12 3 6 9h-4l4 6H6l4-6H6l6-9ZM12 18v3" /></>,
  waves: <path d="M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />,
  buildings: <><path d="M4 21V5l8-2v18M12 9h8v12M8 7v1m0 4v1m0 4v1m8-2v1m0 3v1" /><path d="M2 21h20" /></>,
  mountain: <><path d="m3 20 7-13 4 7 3-5 5 11H3Z" /><path d="m8 11 2 2 2-1" /></>,
  sparkles: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
  wifi: <><path d="M5 9a11 11 0 0 1 14 0M8 12a6.5 6.5 0 0 1 8 0m-5 4a2 2 0 0 1 2 0" /><circle cx="12" cy="19" r="1" /></>,
  utensils: <><path d="M7 3v7m-3-7v4a3 3 0 0 0 6 0V3m-3 7v11m9-18v18m0-18c3 2 3 7 0 9" /></>,
  car: <><path d="m5 11 2-5h10l2 5 2 2v5H3v-5l2-2Z" /><path d="M5 11h14M6 16h.01M18 16h.01" /></>,
  desk: <><path d="M3 9h18v4H3zM6 13v8m12-8v8M9 9V5h6v4" /></>,
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15m6-12v15" /></>,
};

interface IconProps {
  name: string;
  className?: string;
}

export const Icon = ({ name, className = "" }: IconProps) => (
  <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {shapes[name] ?? shapes.sparkles}
  </svg>
);