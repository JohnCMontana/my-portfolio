import Section from './ui/Section'
import { HiWrenchScrewdriver } from 'react-icons/hi2'

const projects = [
  'O o O o',
  'O o O o',
  'O o O o',
  'O o O o',
]

const Projects = () => {
  return (
    <Section id="projects" title="Builds & Experiments">
      <div className="relative">
        <div className="pointer-events-none select-none opacity-30 grayscale blur-xs">
          <ul className="space-y-2">
            {projects.map((p, i) => (
              <li
                key={p}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 text-sm"
              >
                <span className="flex items-center gap-3">
                  <span className="size-6 rounded bg-black/40" />
                  {p}
                </span>
                <span className="text-xs text-white/50">
                  {['. . / . . / . . . .'][i % 1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3 px-5 py-3">
            <HiWrenchScrewdriver className="size-6 text-white/70" aria-hidden="true" />
            <div className="text-left">
              <div className="font-medium text-white/50">Coming soon</div>
              <div className="text-sm text-white/30">Under construction</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Projects
