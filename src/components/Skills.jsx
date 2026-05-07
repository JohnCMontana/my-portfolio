import Section from './ui/Section'
import { 
  HiShieldCheck, 
  HiMagnifyingGlass,
  HiServerStack,
  HiCommandLine
} from 'react-icons/hi2'

const skillGroups = [
  {
    title: 'Security Operations',
    icon: HiShieldCheck,
    skills: ['Security Monitoring & SIEM', 'Incident Detection & Response'],
    color: 'text-blue-400/80'
  },
  {
    title: 'Threat Analysis',
    icon: HiMagnifyingGlass,
    skills: ['Threat & Phishing Analysis', 'Firewalls & Network Security'],
    color: 'text-rose-400/80'
  },
  {
    title: 'System Administration',
    icon: HiServerStack,
    skills: ['Linux Administration', 'Networking Fundamentals'],
    color: 'text-emerald-400/80'
  },
  {
    title: 'Automation & Support',
    icon: HiCommandLine,
    skills: ['Scripting & Automation', 'Technical Support'],
    color: 'text-purple-400/80'
  }
]

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-0 md:grid-cols-2 border border-white/[0.06] rounded-xl overflow-hidden">
        {skillGroups.map((group, index) => (
          <div 
            key={group.title} 
            className={`p-4 bg-white/[0.02] backdrop-blur-sm ${
              index < 2 ? 'border-b border-white/[0.06]' : ''
            } ${
              index % 2 === 0 ? 'md:border-r border-white/[0.06]' : ''
            }`}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                <group.icon className={`size-4 ${group.color}`} />
              </div>
              <h3 className="text-[13px] font-semibold tracking-tight text-white/80">{group.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {group.skills.map((skill) => (
                <div 
                  key={skill}
                  className="px-2 py-0.5 text-[11px] font-medium text-white/50 bg-transparent border border-white/5 rounded-md hover:border-white/20 hover:text-white/90 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
