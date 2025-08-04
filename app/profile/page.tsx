'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('artcircle_profile');
    if (stored) {
      const data = JSON.parse(stored);
      setName(data.name || '');
      setDiscipline(data.discipline || '');
      setLocation(data.location || '');
      setBio(data.bio || '');
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    const data = { name, discipline, location, bio };
    localStorage.setItem('artcircle_profile', JSON.stringify(data));
  }, [name, discipline, location, bio]);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🎨 Artist Profile</h1>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Discipline (e.g., Painter, Sculptor)"
          value={discipline}
          onChange={(e) => setDiscipline(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Short Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="border-t pt-4">
        <h2 className="font-semibold">🧑‍🎨 Preview</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Discipline:</strong> {discipline}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
    </div>
  );
}
