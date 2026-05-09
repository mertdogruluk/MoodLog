import EntryCard from "./EntryCard";

function EntryList({ entries, onDelete }) {
  return (
    <div className="space-y-3">
      {entries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default EntryList;
