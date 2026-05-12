import React from 'react'
import { motion } from 'framer-motion'
import Section from './ui/Section'

const tools = [
  'Next.js', 'Suricata', 'Watchguard', 'Linux',
  'GitHub', 'Docker', 'Python', 'Wireshark',
  'Gemini', 'Claude', 'Trae', 'Figma',
  'React', 'Java', 'Wazuh', 'Tailwind',
  'MongoDB', 'MySQL', 'Git', 'n8n'
]

const toolIcons = {
  Python: '/images/logos/python.png',
  GitHub: '/images/logos/github.png',
  Trae: '/images/logos/trae.png',
  Figma: '/images/logos/figma.png',
  Claude: '/images/logos/claude.png',
  Gemini: '/images/logos/gemini.png',
  Docker: '/images/logos/docker.png',
  n8n: '/images/logos/n8n.png',
  Linux: '/images/logos/linux.png',
  Wazuh: '/images/logos/wazuh.png',
  Suricata: '/images/logos/suricata.png',
  Watchguard: '/images/logos/watchguard.png',
  React: '/images/logos/react.png',
  Java: '/images/logos/java.png',
  'Next.js': '/images/logos/nextjs.png',
  Tailwind: '/images/logos/tailwind.png',
  MongoDB: '/images/logos/mongodb.png',
  MySQL: '/images/logos/mysql.png',
  Git: '/images/logos/git.png',
  Wireshark: '/images/logos/wireshark.png',
}

const TechStack = () => {
  return (
    <Section id="tech" title="Tech Stack">
      <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        {/* Isometric Grid Container */}
        <div 
          className="relative grid grid-cols-4 gap-4 md:gap-6"
          style={{
            transform: 'rotateX(45deg) rotateZ(-45deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {tools.map((item, index) => {
            const icon = toolIcons[item]
            
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.05 },
                  y: {
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }
                }}
                className="group relative"
              >
                <div className="relative size-12 md:size-16 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-2 md:p-3 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:-translate-z-4 group-hover:scale-110">
                  {icon ? (
                    <img 
                      src={icon} 
                      alt={item} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                  ) : (
                    <span className="text-xs font-bold text-white/20">{item.slice(0, 2)}</span>
                  )}
                  
                  {/* Tool Name Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 border border-white/10 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {item}
                  </div>
                </div>
                
                {/* Visual shadow underneath */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/40 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default TechStack
