import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element = Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setInView(entry.isIntersecting)
    }, options)

    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current])

  return { ref, inView }
}
