import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiAcademicCap,
  HiGlobeAlt,
  HiTrophy,
  HiLanguage,
  HiSparkles
} from 'react-icons/hi2'
import Section from './ui/Section'

const learningItems = [
  {
    category: 'Currently Studying',
    title: 'German',
    icon: HiLanguage,
    tags: ['A1–A2', 'Speaking', 'Reading'],
    desc: 'Currently learning German to improve communication and open more opportunities in the European tech market.',
    color: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    category: 'Cybersecurity Training',
    title: 'SOC Analyst Path – LetsDefend',
    icon: HiAcademicCap,
    tags: ['SOC', 'Blue Team', 'SIEM'],
    desc: 'Working through the LetsDefend SOC Analyst learning path: analyzing alerts, investigating incidents, and understanding real-world security operations.',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    category: 'Cybersecurity',
    title: 'Ethical Hacking & Pentesting',
    icon: HiTrophy,
    tags: ['Kali Linux', 'Networking', 'Recon'],
    desc: 'Learning the fundamentals of ethical hacking: reconnaissance, vulnerability scanning, and penetration testing techniques.',
    color: 'from-red-500/20 to-orange-500/20'
  },
  {
    category: 'Development',
    title: 'Java & Multiplatform Apps',
    icon: HiGlobeAlt,
    tags: ['Java', 'OOP', 'Backend'],
    desc: 'Studying Java and object-oriented programming while building multiplatform applications as part of my DAM degree.',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
  category: 'Future Goal',
  title: 'Pentesting & Ethical Hacking',
  icon: HiTrophy,
  tags: ['Penetration Testing', 'Red Team', 'Security'],
  desc: 'Planning to move deeper into penetration testing after building strong blue-team and networking fundamentals. Goal is to practice real-world attack simulations and vulnerability exploitation.',
  color: 'from-red-500/20 to-orange-500/20'
}
]

const Learning = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % learningItems.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Section id="learning" title="Beyond Code">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-bg/50 backdrop-blur-md h-[400px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col"
          >
            {/* Visual Area */}
            <div className="relative h-40 w-full overflow-hidden border-b border-[#212121] group">
              <div 
                className="absolute inset-0 opacity-20 transition-opacity duration-500" 
                style={{ 
                  background: `radial-gradient(circle at center, ${learningItems[index].color.split(' ')[1].replace('to-', '')} 0%, transparent 70%)` 
                }} 
              />
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
               
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-md">
                {learningItems[index].category}
                
              </div>

              <div className="flex h-full items-center justify-center">
                 <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                   {(() => {
                     const Icon = learningItems[index].icon
                     return <Icon className="size-10 text-white/70" />
                   })()}
                 </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="mb-3 text-2xl font-semibold text-white font-['JetBrains_Mono']">{learningItems[index].title}</h3>
                </div>
                
                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {learningItems[index].tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white/80"
                    >
                      <HiSparkles className="size-3 opacity-70" />
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-white/50">
                  {learningItems[index].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-10">
          {learningItems.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/10'
              }`} 
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Learning
