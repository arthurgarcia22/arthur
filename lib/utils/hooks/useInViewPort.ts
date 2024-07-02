'use client'
import { MutableRefObject, useEffect, useMemo, useState } from 'react'

export const useInViewPort = (ref?: MutableRefObject<unknown>) => {
  if (!ref) return false
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      typeof window === 'undefined'
        ? null
        : new IntersectionObserver(([entry]) => {
            return setIsIntersecting(entry.isIntersecting)
          }),
    [],
  )

  useEffect(() => {
    if (!observer || !ref || !ref.current) return
    observer.observe(ref.current as unknown as Element)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
