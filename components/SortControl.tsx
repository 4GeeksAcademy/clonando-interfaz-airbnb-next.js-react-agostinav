interface SortControlProps {
  value: "asc" | "desc";
  onChange: (value: "asc" | "desc") => void;
}

export const SortControl = ({ value, onChange }: SortControlProps) => (
  <label className="flex items-center gap-2 text-sm font-medium text-stone-700">
    Ordenar por precio
    <select
      aria-label="Ordenar por precio"
      className="rounded-lg border border-stone-300 bg-white px-3 py-2"
      onChange={(event) => onChange(event.target.value as "asc" | "desc")}
      value={value}
    >
      <option value="asc">Menor a mayor</option>
      <option value="desc">Mayor a menor</option>
    </select>
  </label>
);