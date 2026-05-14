import Section from './ui/Section'
import { HiTrophy, HiShieldCheck, HiCommandLine } from 'react-icons/hi2'

const certifications = [
  {
    title: 'eJPTv2',
    issuer: 'INE Security',
    date: 'In Progress',
    icon: HiTrophy,
    color: 'text-blue-400',
    bg: 'bg-blue-400/5',
    border: 'border-blue-400/10',
    image: '/images/certs/ejpt.png',
  },
  {
    title: 'SOC Analyst Path',
    issuer: 'LetsDefend',
    date: 'Completed',
    icon: HiShieldCheck,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/5',
    border: 'border-emerald-400/10',
    image: '/images/certs/letsdefend.png',
  },
  {
    title: 'SOC Analyst L1',
    issuer: 'TryHackMe',
    date: 'Completed',
    icon: HiCommandLine,
    color: 'text-rose-400',
    bg: 'bg-rose-400/5',
    border: 'border-rose-400/10',
    image: '/images/certs/thm.png',
  },
]

const statusClass = (date) =>
  date === 'In Progress'
    ? 'border-blue-400/20 bg-blue-400/10 text-blue-400/90'
    : 'border-emerald-400/20 bg-emerald-400/10 text-emerald-400/90'

const Certifications = () => {
  return (
    <Section id="certs" title="Certifications & Training">
      <div className="grid grid-cols-1 gap-4">
        {certifications.map((cert) => {
          const Icon = cert.icon
          return (
            <div
              key={cert.title}
              className={`group relative flex gap-4 overflow-hidden rounded-xl border ${cert.border} ${cert.bg} p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] md:p-5`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

              <div className="relative h-[4.5rem] w-[6.25rem] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_8px_24px_-14px_rgba(0,0,0,0.65)] md:h-[5.25rem] md:w-[7.25rem]">
                <img
                  src={cert.image}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover object-center opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              <div className="relative flex min-w-0 flex-1 flex-col justify-between gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div
                    className={`rounded-lg border border-white/5 bg-black/30 p-1.5 ${cert.color}`}
                  >
                    <Icon className="size-4 md:size-5" aria-hidden />
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest md:text-[10px] ${statusClass(cert.date)}`}
                  >
                    {cert.date}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="font-['JetBrains_Mono'] text-[13px] font-semibold leading-snug tracking-tight text-white/90 md:text-sm">
                    {cert.title}
                  </h3>
                  <p className="mt-0.5 truncate text-[11px] font-medium text-white/40">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Certifications
