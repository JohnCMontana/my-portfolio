import Section from './ui/Section'
import Badge from './ui/Badge'

const projects = [
  'Animated Empty States',
  'Drawer Component',
  'Dynamic Island',
  'Background Indicator',
  'Countdown Timers',
  'Progressive Blur',
  'Scrollbar Behavior',
]

const Projects = () => {
  return (
    <Section id="projects" title="Builds & Experiments">
      <div className="mb-3 flex flex-wrap gap-2">
        <Badge>All</Badge>
        <Badge>Writing</Badge>
        <Badge>Components</Badge>
        <Badge>Projects</Badge>
      </div>
      <ul className="space-y-2">
        {projects.map((p, i) => (
          <li key={p} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 text-sm">
            <span className="flex items-center gap-3">
              <span className="size-6 rounded bg-black/40" />
              {p}
            </span>
            <span className="text-xs text-white/50">{['January','December','November','October'][i % 4]} 2025</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
