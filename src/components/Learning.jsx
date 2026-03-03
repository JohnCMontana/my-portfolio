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
    category: 'Certification',
    title: 'AWS Cloud Practitioner',
    icon: HiAcademicCap,
    tags: ['Cloud Computing', 'AWS', 'Infrastructure'],
    desc: 'Foundational understanding of AWS Cloud concepts, security, and compliance.',
    image: '/images/logos/aws-certified.png', // Placeholder, using generic logic later
    color: 'from-orange-500/20 to-yellow-500/20'
  },
  {
    category: 'Goal 2026',
    title: 'Master Rust & WebAssembly',
    icon: HiTrophy,
    tags: ['Systems Programming', 'Performance', 'Wasm'],
    desc: 'Deep diving into memory safety and high-performance web applications using Rust.',
    color: 'from-red-500/20 to-orange-500/20'
  },
  {
    category: 'Language',
    title: 'Japanese (N4)',
    icon: HiLanguage,
    tags: ['Conversational', 'Reading', 'Kanji'],
    desc: 'Studying for the JLPT N4 exam. Passionate about Japanese culture and technology.',
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    category: 'Currently Learning',
    title: 'Three.js & WebGL',
    icon: HiGlobeAlt,
    tags: ['3D Graphics', 'Creative Coding', 'Shaders'],
    desc: 'Creating immersive 3D web experiences and exploring the math behind computer graphics.',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    category: 'Soft Skill',
    title: 'Technical Writing',
    icon: HiSparkles,
    tags: ['Documentation', 'Communication', 'Blogging'],
    desc: 'Improving ability to explain complex technical concepts through clear, concise writing.',
    color: 'from-green-500/20 to-emerald-500/20'
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
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#212121] bg-bg/50 backdrop-blur-md h-[400px]">
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
