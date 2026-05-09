import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import EntryForm from "./components/EntryForm";
import FilterBar from "./components/FilterBar";
import EntryList from "./components/EntryList";
import EmptyState from "./components/EmptyState";

const STORAGE_KEY = "moodlog.entries.v1";

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function App() {
  const [entries, setEntries] = useState(loadEntries);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleAdd = ({ moodId, note }) => {
    const newEntry = {
      id: crypto.randomUUID(),
      moodId,
      note,
      date: new Date().toISOString(),
    };
    setEntries((prev) => [newEntry, ...prev]);
  };

  const handleDelete = (id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const totalByMood = useMemo(
    () =>
      entries.reduce((acc, e) => {
        acc[e.moodId] = (acc[e.moodId] || 0) + 1;
        return acc;
      }, {}),
    [entries]
  );

  const visibleEntries = useMemo(
    () =>
      filter === "all"
        ? entries
        : entries.filter((e) => e.moodId === filter),
    [entries, filter]
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 pb-20">
        <Header totalEntries={entries.length} />

        <Stats entries={entries} />

        <EntryForm onAdd={handleAdd} />

        {entries.length > 0 && (
          <FilterBar
            activeFilter={filter}
            onChange={setFilter}
            totalByMood={totalByMood}
          />
        )}

        {visibleEntries.length === 0 ? (
          <EmptyState filterActive={filter !== "all"} />
        ) : (
          <EntryList entries={visibleEntries} onDelete={handleDelete} />
        )}

        <footer className="mt-16 text-center text-xs text-ink-100/30">
          MoodLog · React öğrenme projesi · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

export default App;
