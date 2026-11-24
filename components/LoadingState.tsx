interface LoadingStateProps {
  label?: string;
}

export const LoadingState = ({ label = "Cargando alojamientos" }: LoadingStateProps) => (
  <div aria-live="polite" className="flex min-h-64 flex-col items-center justify-center gap-4 text-stone-600" role="status">
    <span className="size-9 animate-spin rounded-full border-2 border-stone-200 border-t-rose-600" />
    <span className="text-sm">{label}</span>
  </div>
);