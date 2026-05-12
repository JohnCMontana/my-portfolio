import React from 'react'
import Section from './ui/Section'
import { HiCommandLine, HiCloud, HiShieldCheck } from 'react-icons/hi2'

const experiences = [
  {
    title: 'IT Support Intern',
    company: 'Grupo Inmark',
    period: '2024',
    description: 'IT support, helpdesk operations, device provisioning & technical documentation.',
    icon: HiCommandLine,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/5',
    border: 'border-emerald-400/10'
  },
  {
    title: 'AWS Cloud Training',
    company: 'Self-Paced',
    period: '2025',
    description: 'Certification-focused training on core cloud concepts, services & architecture using interactive labs.',
    icon: HiCloud,
    color: 'text-amber-400',
    bg: 'bg-amber-400/5',
    border: 'border-amber-400/10'
  },
  {
    title: 'SOC Analyst Intern',
    company: 'MCS Spain',
    period: 'Present',
    description: 'Hands-on experience in security monitoring, incident detection, and threat analysis.',
    icon: HiShieldCheck,
    color: 'text-purple-400',
    bg: 'bg-purple-400/5',
    border: 'border-purple-400/10'
  }
]

const Experience = () => {
  return (
    <Section id="experience" title="Hands-On Experience">
      <div className="grid gap-4 md:grid-cols-3">
        {experiences.map((exp) => (
          <div 
            key={exp.title}
            className={`relative p-5 rounded-xl border ${exp.border} ${exp.bg} backdrop-blur-sm group hover:bg-white/[0.04] transition-all duration-300`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2 rounded-lg bg-black/20 ${exp.color} border border-white/5`}>
                <exp.icon className="size-5" />
              </div>
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                {exp.period}
              </span>
            </div>
            
            <h3 className="text-sm font-semibold text-white/90 mb-1">{exp.title}</h3>
            <p className="text-[11px] font-medium text-white/40 mb-3">{exp.company}</p>
            <p className="text-[11px] leading-relaxed text-white/60">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience
