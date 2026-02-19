import Section from './ui/Section'

const toolkit = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    items: ['Java', 'Python', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Trae', 'Vite', 'Figma'],
  },
  {
    title: 'Cybersecurity & Systems',
    items: ['Kali Linux', 'Linux', 'Wireshark'],
  },
]

const toolIcons = {
  React: '/images/logos/react.png',
  'Next.js': '/images/logos/nextjs.png',
  JavaScript: '/images/logos/javascript.png',
  'Tailwind CSS': '/images/logos/tailwind.png',
  Java: '/images/logos/java.png',
  Python: '/images/logos/python.png',
  MongoDB: '/images/logos/mongodb.png',
  MySQL: '/images/logos/mysql.png',
  Git: '/images/logos/git.png',
  GitHub: '/images/logos/github.png',
  Vite: '/images/logos/vite.png',
  Trae: '/images/logos/trae.png',
  Figma: '/images/logos/figma.png',
  'Kali Linux': '/images/logos/kalilinux.png',
  Linux: '/images/logos/linux.png',
  Wireshark: '/images/logos/wireshark.png',
}

const toolLinks = {
  React: 'https://react.dev/',
  'Next.js': 'https://nextjs.org/',
  JavaScript: 'https://developer.mozilla.org/docs/Web/JavaScript',
  'Tailwind CSS': 'https://tailwindcss.com/',
  Java: 'https://www.java.com/',
  Python: 'https://www.python.org/',
  MongoDB: 'https://www.mongodb.com/',
  MySQL: 'https://www.mysql.com/',
  Git: 'https://git-scm.com/',
  GitHub: 'https://github.com/',
  Trae: 'https://trae.ai/',
  Vite: 'https://vite.dev/',
  Figma: 'https://www.figma.com/',
  'Kali Linux': 'https://www.kali.org/',
  Linux: 'https://www.linux.org/',
  Wireshark: 'https://www.wireshark.org/',
}

const TechStack = () => {
  return (
    <Section id="tech" title="Tech Stack">
      <p className="text-sm text-white/40">
        The stack behind my daily workflow — powering the process from idea to production.
      </p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {toolkit.map((group) => (
          <div key={group.title}>
            <div className="text-sm font-semibold text-white/90">{group.title}</div>
            <div className="mt-3 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
            <ul className="relative mt-4 space-y-3 after:absolute after:inset-y-0 after:right-0 after:w-10 after:bg-gradient-to-l after:from-bg after:to-transparent after:content-['']">
              {group.items.map((item) => {
                const icon = toolIcons[item]
                const link = toolLinks[item]
                const initials = item
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)

                return (
                  <li key={item} className="text-sm text-white/40">
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 hover:text-white"
                    >
                      <span className="flex size-8 items-center justify-center">
                        {icon ? (
                          <img src={icon} alt="" className="size-8 transition-transform group-hover:scale-110" />
                        ) : (
                          initials
                        )}
                      </span>
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default TechStack
