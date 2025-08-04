'use client'

import Timestamp from '../components/Timestamp'

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto text-center p-8">
      <h1 className="text-4xl font-bold mb-4">🎨 ArtCircle</h1>
      <p className="text-lg mb-6">Build your network of 12. Manage your creative career.</p>
      
      {/* Add timestamp here */}
      <div className="text-sm text-gray-500 mb-6">
        <Timestamp />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Get Started
      </button>
    </main>
  )
}
