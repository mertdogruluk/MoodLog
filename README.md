# MoodLog 🌈

Ruh halini ve düşüncelerini günü gününe kaydedebileceğin küçük, estetik bir günlük uygulaması. React temellerini gerçek bir projede pekiştirmek için hazırlandı.

> Bu repo bir **öğrenme projesidir.** Kod sade tutuldu, her parça React'in temel kavramlarından birini ön plana çıkarıyor.

## Özellikler

- 6 farklı ruh hali ile hızlı kayıt
- Opsiyonel kısa not (240 karakter)
- Geçmiş kayıtları kart şeklinde görme, tek tıkla silme
- Ruh haline göre filtreleme
- Bugün / toplam / en sık ruh hali istatistikleri
- Tüm veri tarayıcının `localStorage`'ında durur — sunucu/DB yok
- Cesur renkler, glassmorphism kartlar, yumuşak animasyonlar

## Kullanılan Teknolojiler

- **React 19**
- **Vite** (build & dev server)
- **Tailwind CSS v4**
- **localStorage** (kalıcı veri)
- **pnpm**

## Kurulum

```bash
pnpm install
pnpm dev
```

Tarayıcıda açılan adrese git (varsayılan: `http://localhost:5173`).

Production build için:

```bash
pnpm build
pnpm preview
```

## Klasör Yapısı

```
src/
├── components/
│   ├── Header.jsx        → uygulama başlığı + toplam göstergesi
│   ├── Stats.jsx         → bugün / toplam / en sık mood
│   ├── MoodSelector.jsx  → 6 mood butonu
│   ├── EntryForm.jsx     → mood + not + kaydet
│   ├── FilterBar.jsx     → mood'a göre filtreleme chip'leri
│   ├── EntryList.jsx     → kart listesi
│   ├── EntryCard.jsx     → tek bir kayıt kartı
│   └── EmptyState.jsx    → kayıt yokken görünen
├── data/
│   └── moods.js          → mood seçenekleri (sabit veri)
├── App.jsx               → ana uygulama, state burada
├── main.jsx              → React giriş noktası
└── index.css             → Tailwind import + global stil
```

## Kapsanan React Konuları

| Konu | Nerede? |
|------|--------|
| Functional components | `src/components/*` |
| JSX | her `.jsx` dosyası |
| Props (parent → child) | `Header`, `Stats`, `EntryCard`, `MoodSelector` vs. |
| `useState` | `App.jsx`, `EntryForm.jsx` |
| `useEffect` | `App.jsx` (localStorage senkronu) |
| `useMemo` | `App.jsx` (filtreleme, sayım) |
| Event handling | `onClick`, `onChange`, `onSubmit` her yerde |
| Controlled inputs | `EntryForm.jsx` (textarea) |
| Lists & keys | `MoodSelector`, `EntryList`, `FilterBar` |
| Conditional rendering | `App.jsx`, `EntryCard`, `EmptyState` |
| Component composition | `App` → `EntryForm` → `MoodSelector` |

## Lisans

MIT
