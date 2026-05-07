import Section from './ui/Section'

const toolkit = [
  {
    title: 'Core Security',
    items: ['Wazuh', 'Suricata', 'Watchguard', 'Linux'],
  },
  {
    title: 'Automation & Lab',
    items: ['GitHub', 'Docker', 'Python', 'n8n'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Gemini', 'Claude', 'Trae', 'Figma'],
  },
]

const toolIcons = {
  Python: '/images/logos/python.png',
  GitHub: '/images/logos/github.png',
  Trae: '/images/logos/trae.png',
  Figma: '/images/logos/figma.png',
  Claude: '/images/logos/claude.png',
  Gemini: '/images/logos/gemini.png',
  Docker: '/images/logos/docker.png',
  VirusTotal: '/images/logos/virustotal.png',
  n8n: '/images/logos/n8n.png',
  Linux: '/images/logos/linux.png',
  Wireshark: '/images/logos/wireshark.png',
  Wazuh: '/images/logos/wazuh.png',
  Suricata: '/images/logos/suricata.png',
  Watchguard: '/images/logos/watchguard.png',
}

const toolLinks = {
  Python: 'https://www.python.org/',
  GitHub: 'https://github.com/',
  Trae: 'https://trae.ai/',
  Figma: 'https://www.figma.com/',
  Claude: 'https://claude.ai/',
  Gemini: 'https://gemini.google/about/',
  Docker: 'https://docker.com/',
  VirusTotal: 'https://www.virustotal.com/',
  n8n: 'https://n8n.io/',
  Linux: 'https://www.linux.org/',
  Wireshark: 'https://www.wireshark.org/',
  Wazuh: 'https://www.wazuh.com/',
  Suricata: 'https://suricata.io',
  Watchguard: 'https://www.watchguard.com/',
}

const TechStack = () => {
  return (
    <Section id="tech" title="Tech Stack">
      <p className="text-sm text-white/40">
        The stack behind my daily workflow—powering the cycle from threat detection to active mitigation.
      </p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {toolkit.map((group) => (
          <div key={group.title}>
            <div className="text-sm font-semibold text-white/90">{group.title}</div>
            <div className="mt-3 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
            <ul className="mt-4 space-y-3">
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
