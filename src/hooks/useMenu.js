import { useState, useEffect } from 'react'

const useMenu = (menu, ref) => {
  const [section, setSection] = useState('#')
  const [entryObserver, setEntryObserver] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setSection(menu)
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0.5
      }
    )
    observer.observe(ref.current)
  }, [entryObserver])

  console.log(section)
}

export default useMenu
