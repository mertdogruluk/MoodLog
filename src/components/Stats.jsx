import { getMood } from "../data/moods";

function StatCard({ label, value, hint, accent }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-40 ${accent}`}
      />
      <div className="relative">
        <p className="text-xs uppercase tracking-widest text-ink-100/50">
          {label}
        </p>
        <p className="mt-2 font-display text-3xl font-bold text-white">
          {value}
        </p>
        {hint && <p className="mt-1 text-sm text-ink-100/60">{hint}</p>}
      </div>
    </div>
  );
}

function Stats({ entries }) {
  const total = entries.length;

  const moodCounts = entries.reduce((acc, entry) => {
    acc[entry.moodId] = (acc[entry.moodId] || 0) + 1;
    return acc;
  }, {});

  const topMoodId = Object.keys(moodCounts).sort(
    (a, b) => moodCounts[b] - moodCounts[a]
  )[0];
  const topMood = topMoodId ? getMood(topMoodId) : null;

  const today = new Date().toDateString();
  const todayCount = entries.filter(
    (e) => new Date(e.date).toDateString() === today
  ).length;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
      <StatCard
        label="Bugün"
        value={todayCount}
        hint={todayCount === 0 ? "Henüz giriş yok" : "kayıt eklendi"}
        accent="bg-teal-500"
      />
      <StatCard
        label="Toplam"
        value={total}
        hint="zamanın boyunca"
        accent="bg-ocean-500"
      />
      <StatCard
        label="En Sık"
        value={topMood ? topMood.emoji : "—"}
        hint={topMood ? topMood.label : "henüz veri yok"}
        accent="bg-mint-500"
      />
    </section>
  );
}

export default Stats;
