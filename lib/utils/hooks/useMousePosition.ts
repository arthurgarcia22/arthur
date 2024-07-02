'use client'
// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
import { useEffect, useState } from 'react'

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  })

  const updateMousePosition = (ev: MouseEvent) => {
    setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}
