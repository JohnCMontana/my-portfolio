import { motion } from 'framer-motion';
import Section from './ui/Section';

const Motion = motion;

const journey = [
  {
    period: '2022–24',
    title: 'IT Systems & Networks',
    detail: 'System administration, networking, hardware maintenance & IT support.',
    color: '#3b82f6',
  },
  {
    period: '2024',
    title: 'Internship at Grupo Inmark',
    detail: 'IT support, helpdesk operations, device provisioning & technical documentation.',
    color: '#10b981',
  },
  {
    period: '2024–26',
    title: 'Software Development',
    detail: 'Full-stack & app architecture.',
    color: '#a855f7',
  },
  {
    period: '2025',
    title: 'AWS Cloud Training',
    detail: 'Certification-focused training on core cloud concepts, services & architecture using interactive labs.',
    color: '#f59e0b',
  },
  {
    period: 'Present',
    title: 'Cybersecurity',
    detail: 'Focus on security testing, vulnerability assessment & secure systems.',
    color: '#ef4444',
  },
];

const Journey = () => {
  return (
    <Section id="journey" title="My Journey">
      <div className="relative mx-auto max-w-3xl px-2 py-8 md:px-4 md:py-10">
        <Motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/30 via-white/15 to-transparent"
        />

        <div className="space-y-2 md:space-y-5">
          {journey.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <div key={item.period} className="relative flex items-center justify-between">
                
                <Motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '12%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`absolute top-1/2 h-px bg-white/15 hidden md:block
                    ${isRight ? 'left-1/2' : 'right-1/2'}`}
                />

                <div className={`w-full md:w-[42%] ${isRight ? 'md:ml-auto' : 'md:mr-auto text-right'}`}>
                  <Motion.div
                    initial={{ opacity: 0, x: isRight ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: isRight ? 5 : -5 }}
                    className="group relative rounded-xl border border-[#212121] bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                  >
                    <div 
                      className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `radial-gradient(400px circle at center, ${item.color}15, transparent 40%)` }}
                    />

                    <span 
                      className="font-mono text-[9px] font-bold tracking-[0.2em]"
                      style={{ color: item.color }}
                    >
                      {item.period}
                    </span>
                    
                    <h3 className="mt-1 text-sm font-semibold text-white/90">
                      {item.title}
                    </h3>
                    
                    <p className="mt-1 text-[11px] leading-relaxed text-white/50 group-hover:text-white/70">
                      {item.detail}
                    </p>
                  </Motion.div>
                </div>

                <Motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                  className="absolute left-1/2 z-10 flex size-5 -translate-x-1/2 items-center justify-center rounded-full bg-bg border border-[#212121]"
                >
                  <div 
                    className="size-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                  />
                </Motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Journey;
