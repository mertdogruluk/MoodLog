import { moods } from "../data/moods";

function MoodButton({ mood, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(mood.id)}
      className={`group relative flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-2xl border transition-all duration-200 ${
        isSelected
          ? `border-white/30 bg-linear-to-br ${mood.gradient} shadow-lg scale-105`
          : "border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105"
      }`}
    >
      <span
        className={`text-3xl sm:text-4xl transition-transform ${
          isSelected ? "" : "grayscale-20 group-hover:grayscale-0"
        }`}
      >
        {mood.emoji}
      </span>
      <span
        className={`text-xs font-semibold ${
          isSelected ? "text-white" : "text-ink-100/60"
        }`}
      >
        {mood.label}
      </span>
    </button>
  );
}

function MoodSelector({ selectedMoodId, onSelect }) {
  return (
    <div>
      <p className="text-sm text-ink-100/60 mb-3">
        Şu an nasıl hissediyorsun?
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {moods.map((mood) => (
          <MoodButton
            key={mood.id}
            mood={mood}
            isSelected={selectedMoodId === mood.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
