import { useEffect, useRef, useState } from 'react'

type ISearchFn = (_text: string) => void

export const useSearch = (debounce: number, searchFn: ISearchFn) => {
  const timer = useRef<NodeJS.Timeout | null>(null)
  const [text, setText] = useState<string | undefined>()

  useEffect(() => {
    const _debounce = text ? debounce : 0
    if (text !== null && text !== undefined) {
      timer.current = setTimeout(() => {
        searchFn(text)
      }, _debounce)
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [text, searchFn, debounce])

  return {
    text,
    onChangeText: (val: string) => setText(val),
  }
}
