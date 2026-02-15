import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((d) => !d)}
      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10"
    >
      Toggle theme
    </button>
  )
}

export default ThemeToggle
