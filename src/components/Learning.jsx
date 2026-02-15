import Section from './ui/Section'

const exploring = [
  'Linux hardening',
  'Network analysis (Wireshark)',
  'Secure coding practices',
  'OWASP fundamentals',
  'Docker basics',
]

const Learning = () => {
  return (
    <Section id="learning" title="Currently Exploring">
      <ul className="space-y-2">
        {exploring.map((item) => (
          <li key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm">
            <span className="size-1.5 rounded-full bg-white/50" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Learning
