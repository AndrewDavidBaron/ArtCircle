'use client'

import { useState, useEffect } from 'react'

export default function Timestamp() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
  }, [])

  return <p>{now ?? '...'}</p>
}
