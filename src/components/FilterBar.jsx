import { moods } from "../data/moods";

function FilterChip({ label, emoji, isActive, onClick, accent }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium transition ${
        isActive
          ? accent
          : "bg-white/5 border-white/10 text-ink-100/60 hover:bg-white/10 hover:text-white"
      }`}
    >
      {emoji && <span>{emoji}</span>}
      <span>{label}</span>
    </button>
  );
}

function FilterBar({ activeFilter, onChange, totalByMood }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1">
      <FilterChip
        label={`Hepsi · ${Object.values(totalByMood).reduce(
          (a, b) => a + b,
          0
        )}`}
        isActive={activeFilter === "all"}
        onClick={() => onChange("all")}
        accent="bg-white text-ink-950 border-white"
      />
      {moods.map((mood) => {
        const count = totalByMood[mood.id] || 0;
        if (count === 0) return null;
        return (
          <FilterChip
            key={mood.id}
            label={`${mood.label} · ${count}`}
            emoji={mood.emoji}
            isActive={activeFilter === mood.id}
            onClick={() => onChange(mood.id)}
            accent={mood.chip}
          />
        );
      })}
    </div>
  );
}

export default FilterBar;
