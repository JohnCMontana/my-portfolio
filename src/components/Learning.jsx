import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiChevronDown,
  HiCodeBracket,
  HiSparkles,
  HiServer,
  HiSquares2X2,
  HiDevicePhoneMobile,
  HiArrowPath,
  HiShieldCheck,
} from 'react-icons/hi2'
import Section from './ui/Section'

const Motion = motion

const iconMap = {
  'Web Development & Frameworks': HiCodeBracket,
  'Animation & Interactivity': HiSparkles,
  'Data Visualization': HiSquares2X2,
  'AI & Generative Tools': HiSparkles,
  'Backend & APIs': HiServer,
  'Design Systems & UI/UX': HiSquares2X2,
  'Mobile Development': HiDevicePhoneMobile,
  'Version Control & Collaboration': HiArrowPath,
  Cybersecurity: HiShieldCheck,
}

const topics = [
  {
    title: 'Web Development & Frameworks',
    items: ['Deepening knowledge in React, Next.js, and experimenting with Tailwind CSS for modern UI.'],
  },
  {
    title: 'AI & Generative Tools',
    items: ['Experimenting with OpenAI API, Stable Diffusion, and ChatGPT plugins for creative projects.'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express', 'REST', 'GraphQL'],
  },
  {
    title: 'Design Systems & UI/UX',
    items: ['Building reusable component libraries, focusing on accessibility and responsive design.'],
  },
  {
    title: 'Mobile Development',
    items: ['Learning React Native and Expo to create cross-platform apps.'],
  },
  {
    title: 'Version Control & Collaboration',
    items: ['Exploring web security fundamentals, ethical hacking, and vulnerability testing to build safer applications.'],
  },
  {
    title: 'Cybersecurity',
    items: ['Web security fundamentals', 'Ethical hacking', 'Vulnerability testing'],
  },
]

const Learning = () => {
  const [open, setOpen] = useState(null)

  const toggle = (idx) => {
    setOpen((prev) => (prev === idx ? null : idx))
  }

  return (
    <Section id="learning" title="Currently Exploring">
      <ul className="space-y-2 list-none">
        {topics.map((t, i) => {
          const isOpen = open === i
          return (
            <li key={t.title} className="rounded-lg border border-[#212121] bg-transparent">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between p-3 text-sm"
              >
                <span className="flex items-center gap-3">
                  {(() => {
                    const Icon = iconMap[t.title] || HiSparkles
                    return <Icon className="size-5 text-white/70" aria-hidden="true" />
                  })()}
                  <span className="font-medium text-white/90">{t.title}</span>
                </span>
                <HiChevronDown
                  className={`size-5 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    {(() => {
                      const desc = Array.isArray(t.items)
                        ? (t.items.length > 1 ? t.items.join(', ') : t.items[0])
                        : t.items
                      return (
                        <div className="px-3 pb-3">
                          <p className="text-sm leading-relaxed text-white/70">{desc}</p>
                        </div>
                      )
                    })()}
                  </Motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default Learning
