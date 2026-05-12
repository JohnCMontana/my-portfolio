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
      <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
        {certifications.map((cert) => (
          <div 
            key={cert.title} 
            className="group relative h-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:border-white/20"
          >
            {/* Background Image - Styled like image_8f3fbd.png */}
            <img 
              src={cert.image} 
              alt={cert.title}
              className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <cert.icon className={`size-5 ${cert.color}`} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {cert.title}
                </h3>
              </div>

              {/* Status Badge - Positioned like the 'Reserve' button/tags */}
              <div className="flex items-center gap-3">
                <span className={`text-[11px] font-bold px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md ${cert.date === 'In Progress' ? 'text-blue-400' : 'text-emerald-400'}`}>
                  {cert.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Certifications