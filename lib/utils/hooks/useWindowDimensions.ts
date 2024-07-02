'use client'
import { useEffect, useState } from 'react'

export function useWindowDimensions() {
  const [state, _state] = useState({ width: 0, height: 0, scrollHeight: 0 })

  if (typeof window != 'object') return state

  const getWindowData = () => {
    const {
      // offsetWidth: width,
      // offsetHeight: height,
    } = document.body
    const {
      scrollHeight,
      clientHeight: height,
      clientWidth: width,
    } = document.documentElement

    _state({ width, height, scrollHeight })
  }

  useEffect(() => {
    getWindowData()
    window.addEventListener('resize', getWindowData)

    return () => {
      window.removeEventListener('resize', getWindowData)
    }
  }, [window])

  return state
}
