function Header({ totalEntries }) {
  return (
    <header className="relative pt-10 pb-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-teal-500 to-ocean-500 blur-xl opacity-60" />
            <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-teal-500 to-ocean-500 flex items-center justify-center text-2xl shadow-lg shadow-teal-500/40 animate-float">
              🍃
            </div>
          </div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              MoodLog
            </h1>
            <p className="text-sm text-ink-100/60">
              Ruh halini kayda al, kendini takip et
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-ink-100/50">
            Toplam
          </span>
          <span className="px-3 py-1 rounded-full font-display font-bold text-lg bg-white/5 border border-white/10 text-white">
            {totalEntries}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
