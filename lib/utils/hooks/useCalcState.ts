'use client'
import { useEffect, useRef, useState } from 'react'

export const useCalcState = <T, as extends boolean & false>(
  fn: <args extends [T]>(...args: args) => T,
  dep: unknown[] = [],
  params: { async?: boolean; preventFirstLoad?: boolean } = {
    async: false,
    preventFirstLoad: false,
  },
): [as extends true ? Awaited<T> : T, (...args: [T] | undefined[]) => void] => {
  const [value, setValue] = useState(params.async ? null : fn)

  const firstLoad = useRef(true)

  useEffect(() => {
    if (firstLoad.current && params.preventFirstLoad) {
      firstLoad.current = false
      return
    }
    if (params.async) {
      const asyncFn = async () => {
        // eslint-disable-next-line @typescript-eslint/await-thenable
        const result = await fn(value as T)
        setValue(result)
      }
      void asyncFn()
      return
    }
    setValueFn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep)

  const setValueFn = () => setValue(fn(value as T))

  return [value as Awaited<T>, setValueFn]
}
