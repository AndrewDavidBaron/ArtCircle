'use client';

import { useEffect, useState } from 'react';

export default function VoicePage() {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState<string[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('artcircle_voice_posts');
    if (stored) {
      setPosts(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('artcircle_voice_posts', JSON.stringify(posts));
  }, [posts]);

  const handlePost = () => {
    if (!post.trim()) return;
    setPosts((prev) => [post.trim(), ...prev]);
    setPost('');
  };

  const handleClear = () => {
    setPosts([]);
    localStorage.removeItem('artcircle_voice_posts');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🎤 Voice</h1>
      <p className="text-gray-600">What’s on your mind?</p>

      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Share your thoughts..."
        rows={4}
      />

      <div className="flex gap-2">
        <button
          onClick={handlePost}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Clear All
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="font-semibold">Your Posts:</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          posts.map((p, i) => <p key={i} className="border-b pb-2">{p}</p>)
        )}
      </div>
    </div>
  );
}
