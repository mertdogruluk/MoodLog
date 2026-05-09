import { getMood } from "../data/moods";

function formatDate(isoString) {
  const date = new Date(isoString);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isToday = date.toDateString() === today.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();

  const time = date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isToday) return `Bugün · ${time}`;
  if (isYesterday) return `Dün · ${time}`;

  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }) + ` · ${time}`;
}

function EntryCard({ entry, onDelete }) {
  const mood = getMood(entry.moodId);

  if (!mood) return null;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 hover:bg-white/[0.07] transition animate-slide-up">
      <div
        className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-linear-to-br ${mood.gradient} blur-3xl opacity-30 pointer-events-none`}
      />

      <div className="relative flex items-start gap-4">
        <div
          className={`shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br ${mood.gradient} flex items-center justify-center text-3xl shadow-lg`}
        >
          {mood.emoji}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="font-display font-bold text-white">
                {mood.label}
              </h3>
              <p className="text-xs text-ink-100/50">
                {formatDate(entry.date)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onDelete(entry.id)}
              aria-label="Kaydı sil"
              className="opacity-0 group-hover:opacity-100 transition w-8 h-8 rounded-xl bg-white/5 hover:bg-blaze-500/20 hover:text-blaze-400 text-ink-100/60 flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>

          {entry.note && (
            <p className="mt-3 text-ink-100/85 leading-relaxed whitespace-pre-wrap wrap-break-word">
              {entry.note}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default EntryCard;
