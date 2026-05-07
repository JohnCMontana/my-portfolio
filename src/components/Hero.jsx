import { useState } from 'react'
import Section from './ui/Section'
import GlowButton from './ui/GlowButton'
import Button from './ui/Button'
import SocialLinks from './SocialLinks'
import Contact from './ui/Contact'

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <Section id="home">
      <Contact 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        email="johnclyde.montana@gmail.com" 
      />
      <div className="md:px-8">
        <div className="mb-12 flex flex-col items-start text-left">
          <div className="space-y-1">
            <img src="/avatars/john-avatar.png" alt="Avatar" className="mb-2 mt-6 h-15 w-15 rounded-2xl shadow-2xl" />
            <div className="text-2xl font-semibold text-white">John Montaña</div>
            <div className="text-sm text-white/60">SOC Analyst Intern · Cybersecurity · Software Developer</div>
          </div>
        </div>

        <div className="my-8 space-y-3 text-left">
          <h1 className="text-3xl md:text-4xl font-semibold font-['JetBrains_Mono'] leading-tight text-white">
            Thinking like the threat. <br />
            With precision.
          </h1>
          <div className="flex flex-wrap justify-start gap-3 pt-2 mt-4">
            <GlowButton onClick={() => setIsContactOpen(true)}>Get in touch</GlowButton>
            <Button href="/JohnCMontana-CV.pdf" target="_blank">View CV</Button>
          </div>
        </div>

        <hr className="border-[#212121]" />
        <div className="flex justify-start">
          <SocialLinks />
        </div>
        <hr className="my-6 border-[#212121]" />

        <p className="max-w-2xl text-start text-sm leading-relaxed text-white/80">
          Building my career in cybersecurity with a strong technical foundation in development and systems.
          <br /><br />
          Currently growing through real SOC experience, labs, and continuous learning, I enjoy analyzing how systems behave, how threats operate, and how to respond effectively.        
          <br /><br />
          I’m also interested in penetration testing and aim to move into offensive security in the future.
        </p>
      </div>
    </Section>
  )
}

export default Hero
