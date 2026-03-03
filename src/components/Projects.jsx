import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCodeBracket } from 'react-icons/hi2'
import Section from './ui/Section'

const projects = [
  {
    title: 'Modern Entreprise UI',
    desc: 'A high-performance landing page focused on modern UI/UX, seamless design, and optimized asset delivery.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    color: 'from-purple-500/20 to-indigo-500/20',
    image: '/images/dam.jpg',
  },
  {
    title: 'Neon Commerce',
    desc: 'An e-commerce platform with a dark aesthetic, featuring seamless cart management and payment integration.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    color: 'from-purple-500/20 to-pink-500/20',
    image: '/images/smr.jpg',
  },
]

const Projects = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Section id="projects" title="My Sandbox">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#212121] bg-bg/50 backdrop-blur-md h-[420px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col"
          >
            {/* Image / Visual Area */}
            <div className="relative h-48 w-full overflow-hidden border-b border-[#212121] group">
              <img 
                src={projects[index].image} 
                alt={projects[index].title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-md">
                Featured Project
              </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="mb-3 text-2xl font-semibold text-white font-['JetBrains_Mono']">{projects[index].title}</h3>
                </div>
                
                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {projects[index].tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white/80"
                    >
                      <HiCodeBracket className="size-3 opacity-70" />
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-white/50">
                  {projects[index].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-10">
          {projects.map((_, i) => (
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

export default Projects
