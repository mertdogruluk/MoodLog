function EmptyState({ filterActive }) {
  if (filterActive) {
    return (
      <div className="text-center py-12 rounded-3xl border border-dashed border-white/10">
        <div className="text-5xl mb-3">🔎</div>
        <p className="text-ink-100/70 font-medium">Bu filtrede henüz kayıt yok</p>
        <p className="text-sm text-ink-100/40 mt-1">
          Başka bir ruh hali seç veya filtreyi kaldır.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-16 rounded-3xl border border-dashed border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-teal-500/15 via-transparent to-ocean-500/15" />
      <div className="relative">
        <div className="text-6xl mb-4 animate-float inline-block">🌱</div>
        <p className="font-display text-xl font-bold text-white">
          Günlüğün bomboş
        </p>
        <p className="text-sm text-ink-100/50 mt-2 max-w-sm mx-auto">
          Yukarıdan bir ruh hali seçip ilk kaydını oluştur. Küçük notlar büyük
          fark yaratır ✨
        </p>
      </div>
    </div>
  );
}

export default EmptyState;
