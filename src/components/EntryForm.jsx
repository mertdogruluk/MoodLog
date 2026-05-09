import { useState } from "react";
import MoodSelector from "./MoodSelector";

function EntryForm({ onAdd }) {
  const [selectedMoodId, setSelectedMoodId] = useState(null);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const maxLength = 240;
  const remaining = maxLength - note.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMoodId) {
      setError("Önce bir ruh hali seçmelisin");
      return;
    }

    onAdd({
      moodId: selectedMoodId,
      note: note.trim(),
    });

    setSelectedMoodId(null);
    setNote("");
    setError("");
  };

  return (
    <section className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 mb-8 overflow-hidden">
      <div className="absolute -top-24 -left-20 w-64 h-64 rounded-full bg-teal-500/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-72 h-72 rounded-full bg-ocean-500/25 blur-3xl pointer-events-none" />

      <form onSubmit={handleSubmit} className="relative space-y-5">
        <MoodSelector
          selectedMoodId={selectedMoodId}
          onSelect={(id) => {
            setSelectedMoodId(id);
            setError("");
          }}
        />

        <div>
          <label
            htmlFor="note"
            className="block text-sm text-ink-100/60 mb-2"
          >
            Not (opsiyonel)
          </label>
          <textarea
            id="note"
            rows={3}
            maxLength={maxLength}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Bugün neler oldu? Kendine bir mesaj bırak..."
            className="w-full resize-none rounded-2xl bg-ink-950/40 border border-white/10 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40 px-4 py-3 text-white placeholder:text-ink-100/30 transition"
          />
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-xs text-blaze-400 h-4">{error}</span>
            <span
              className={`text-xs font-mono ${
                remaining < 30 ? "text-blaze-400" : "text-ink-100/40"
              }`}
            >
              {remaining}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-2xl font-display font-bold text-white bg-linear-to-r from-mint-500 via-teal-500 to-ocean-500 hover:brightness-110 active:scale-[0.99] transition shadow-lg shadow-teal-500/30"
        >
          Kayda Geç ✨
        </button>
      </form>
    </section>
  );
}

export default EntryForm;
