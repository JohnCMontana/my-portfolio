import Section from './ui/Section'

const projects = [
  {
    title: 'Higher Technical Diploma in Software Development',
    level: 'EQF Level 5',
    subtitle: '2024 - 2026',
    icon: '/dam-icon.png',
    bg: '/images/dam.jpg',
    tint: 'group-hover:bg-purple-500/5',
    borderTint: 'group-hover:border-purple-500/20',
  },
  {
    title: 'Technical Diploma in IT Systems & Networks',
    level: 'EQF Level 4',
    subtitle: '2022 - 2024',
    icon: '/smr-icon.png',
    bg: '/images/smr.jpg',
    tint: 'group-hover:bg-green-500/5',
    borderTint: 'group-hover:border-green-500/20',
  },
]

const Education = () => {
  return (
    <Section id="education" title="Academic Background">
      <div className="grid grid-cols-1 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="group">
            <div className={`relative mb-5 flex h-42 items-center justify-center rounded-xl border border-[#212121] overflow-hidden transition-colors duration-300 ${p.borderTint}`}>
              <img src={p.bg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover grayscale brightness-50 transition-transform duration-300 group-hover:scale-105" />
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${p.tint} group-hover:opacity-100 z-0`} />
              <div className="relative z-10">
                <img src={p.icon} alt={p.title} className="h-12 transition duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="mb-5 space-y-1">
              <div className="text-sm font-medium">{p.title}</div>
              <div className="text-sm font-medium">{p.level}</div>
              <div className="text-xs text-white/40">{p.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Education
