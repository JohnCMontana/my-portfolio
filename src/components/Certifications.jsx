import Section from './ui/Section'
import { HiTrophy, HiShieldCheck, HiCommandLine } from 'react-icons/hi2'

const certifications = [
  {
    title: 'eJPTv2',
    issuer: 'INE Security',
    date: 'In Progress',
    icon: HiTrophy,
    color: 'text-blue-400',
    image: '/images/certs/ejpt.png'
  },
  {
    title: 'SOC Analyst Path',
    issuer: 'LetsDefend',
    date: 'Completed',
    icon: HiShieldCheck,
    color: 'text-emerald-400',
    image: '/images/certs/letsdefend.png'
  },
  {
    title: 'SOC Analyst L1',
    issuer: 'TryHackMe',
    date: 'Completed',
    icon: HiCommandLine,
    color: 'text-red-400',
    image: '/images/certs/thm.png'
  }
]

const Certifications = () => {
  return (
    <Section id="certs" title="Certifications & Training">
      <div className="grid gap-3">
        {certifications.map((cert) => (
          <div 
            key={cert.title} 
            className="group relative flex items-center gap-4 p-2 rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/5 bg-black/20">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="h-full w-full object-contain p-1.5 opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden h-full w-full items-center justify-center bg-white/5 text-white/20">
                <cert.icon className="size-5" />
              </div>
            </div>

            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <h3 className="text-[13px] font-semibold text-white/90 truncate">{cert.title}</h3>
                <span className={`shrink-0 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/5 bg-white/5 ${cert.date === 'In Progress' ? 'text-blue-400/70' : 'text-emerald-400/70'}`}>
                  {cert.date}
                </span>
              </div>
              <p className="text-[11px] text-white/40 truncate">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Certifications
