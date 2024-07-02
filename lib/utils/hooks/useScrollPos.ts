'use client'
import { useEffect, useState } from 'react'

export const useScrollPos = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollTime, setScrollTime] = useState(0)

  useEffect(() => {
    if (!window) return
    const handleScroll = (e: Event) => {
      const position = window.scrollY
      setScrollTime(e.timeStamp)
      setScrollPosition(position)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [scrollPosition, scrollTime] as const
}
