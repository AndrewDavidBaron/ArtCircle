'use client';

import { useEffect, useState } from 'react';

export default function IntelPage() {
  const [insight, setInsight] = useState('');
  const [insights, setInsights] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false); // NEW LINE

  const STORAGE_KEY = 'artcircle_intel_insights';

  useEffect(() => {
    setIsClient(true); // ✅ Only render on client
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setInsights(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse insights:', err);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(insights));
    }
  }, [insights, isClient]);

  const handleAdd = () => {
    if (!insight.trim()) return;
    setInsights((prev) => [insight.trim(), ...prev]);
    setInsight('');
  };

  const handleClear = () => {
    setInsights([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (!isClient) return null; // ✅ Prevent SSR hydration mismatch

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">🧠 Intel</h1>
      <textarea
        placeholder="Write your insight here..."
        value={insight}
        onChange={(e) => setInsight(e.target.value)}
        className="w-full border rounded p-2"
        rows={3}
      />
      <div className="flex gap-2">
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Save Insight
        </button>
        <button onClick={handleClear} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
          Clear All
        </button>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4">Saved Insights:</h2>
        {insights.length === 0 ? (
          <p className="text-gray-500">No insights yet.</p>
        ) : (
          <ul className="space-y-2 mt-2">
            {insights.map((i, idx) => (
              <li key={idx} className="bg-white border p-2 rounded shadow-sm">{i}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
