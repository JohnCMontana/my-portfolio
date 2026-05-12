import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [index, setIndex] = useState(0)
  
  const currentPair = [
    skillGroups[index],
    skillGroups[(index + 1) % skillGroups.length]
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skillGroups.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Section id="skills" title="Skills">
      <div className="relative h-[280px] md:h-[180px] w-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ 
              duration: 0.6, 
              ease: [0.32, 0.72, 0, 1]
            }}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-2"
          >
            {currentPair.map((group, i) => (
              <div key={`${index}-${i}`} className="px-2 py-4 md:p-6 flex flex-col justify-start md:justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 shrink-0">
                    <group.icon className={`size-4 ${group.color}`} />
                  </div>
                  <h3 className="text-[13px] font-semibold tracking-tight text-white/80">{group.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-medium text-white/50 bg-transparent border border-white/5 rounded-md hover:border-white/20 hover:text-white/90 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {skillGroups.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white/40' : 'w-2 bg-white/10'
            }`}
          />
        ))}
      </div>
    </Section>
  )
}

export default Skills
