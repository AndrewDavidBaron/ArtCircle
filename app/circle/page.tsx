'use client';

import { useEffect, useState } from 'react';

type Role = 'dealers' | 'critics' | 'curators' | 'collectors';

export default function CirclePage() {
  const [circle, setCircle] = useState<Record<Role, string[]>>({
    dealers: [],
    critics: [],
    curators: [],
    collectors: [],
  });

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('artcircle_circle');
    if (stored) {
      setCircle(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('artcircle_circle', JSON.stringify(circle));
  }, [circle]);

  const addPerson = (role: Role) => {
    const name = prompt(`Add a ${role.slice(0, -1)}:`); // remove 's' from role
    if (name) {
      setCircle((prev) => ({
        ...prev,
        [role]: [...prev[role], name],
      }));
    }
  };

  const removePerson = (role: Role, index: number) => {
    setCircle((prev) => {
      const updated = [...prev[role]];
      updated.splice(index, 1);
      return {
        ...prev,
        [role]: updated,
      };
    });
  };

  const totalUsed = Object.values(circle).reduce((sum, list) => sum + list.length, 0);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🧑‍🤝‍🧑 Your Circle of 12</h1>
      <p className="text-gray-600">Build your trusted artist network.</p>
      <p>Slots used: <strong>{totalUsed} / 12</strong></p>

      {(['dealers', 'critics', 'curators', 'collectors'] as Role[]).map((role) => (
        <div key={role} className="border-t pt-4">
          <h2 className="font-semibold capitalize">{role}</h2>
          {circle[role].map((person, i) => (
            <div key={i} className="flex items-center justify-between">
              <span>{person}</span>
              <button
                onClick={() => removePerson(role, i)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          {totalUsed < 12 && (
            <button
              onClick={() => addPerson(role)}
              className="mt-2 text-blue-600 hover:underline"
            >
              ➕ Add {role.slice(0, -1).charAt(0).toUpperCase() + role.slice(1, -1)}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
