import { useEffect, useMemo, useState } from 'react'
import { HiAcademicCap, HiFolder, HiHome, HiMap } from 'react-icons/hi2'

const links = [
  { href: '#home', label: 'Home', Icon: HiHome },
  { href: '#education', label: 'Education', Icon: HiAcademicCap },
  { href: '#journey', label: 'Journey', Icon: HiMap },
  { href: '#projects', label: 'Projects', Icon: HiFolder },
]

const Navbar = () => {
  const sectionIds = useMemo(() => links.map((link) => link.href.replace('#', '')), [])
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) setActiveId(hash)
    }

    setFromHash()
    window.addEventListener('hashchange', setFromHash)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => {
      window.removeEventListener('hashchange', setFromHash)
      observer.disconnect()
    }
  }, [sectionIds])

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <nav className="flex flex-wrap items-center justify-center gap-4 rounded-full border border-[#212121] bg-[#212121]/10 px-3 py-2 text-xs text-white backdrop-blur-md">
        {links.map((link) => {
          const isActive = activeId === link.href.replace('#', '')
          return (
          <a
            key={link.href}
            href={link.href}
            className={`group relative flex items-center justify-center rounded-full px-3 py-2 transition-colors hover:bg-white/10 hover:text-white ${
              isActive ? 'bg-white/15 text-white' : ''
            }`}
          >
            <link.Icon className="size-5" aria-hidden="true" />
            <span className="sr-only">{link.label}</span>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-2 py-1 text-[10px] text-white/80 opacity-0 transition-all duration-200 group-hover:-top-9 group-hover:opacity-100">
              {link.label}
            </span>
          </a>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar
