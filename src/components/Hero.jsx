import Section from './ui/Section'
import GlowButton from './ui/GlowButton'
import Button from './ui/Button'
import ThemeToggle from './ThemeToggle'
import SocialLinks from './SocialLinks'

const Hero = () => {
  return (
    <Section id="home">
      <div className="flex items-start justify-between mb-16">
            <div className="space-y-1">
              <img src="/john-avatar.png" alt="Avatar" className="mb-2 h-18 w-18 rounded-2xl" />
              <div className="text-2xl font-semibold">John Montaña</div>
              <div className="text-sm text-white/60">Software Developer · Expanding into Cybersecurity</div>
            </div>
            <ThemeToggle />
          </div>

      <div className="my-8 space-y-3">
        <h1 className="text-2xl md:text-4xl font-semibold font-['JetBrains_Mono'] leading-tight">
          Shaping digital experiences<br />With precision.
        </h1>
        <div className="flex gap-3 pt-2 mt-4">
          <GlowButton href="#contact">Get in touch</GlowButton>
          <Button href="#contact">View CV</Button>
        </div>
      </div>

      <hr className="border-[#212121]" />
      <div className="flex justify-center">
        <SocialLinks />
      </div>
      <hr className="my-6 border-[#212121]" />

      <p className="max-w-2xl text-sm leading-relaxed text-white">
        I build digital products with a developer’s mindset and a security-first perspective, creating systems that are scalable, reliable, and built to last. <br /><br />
        Focused on Front-end Development and growing in Cybersecurity, I enjoy understanding not just how things work — but how they can break, scale, and evolve. <br /><br />
        From front-end interfaces to backend logic, I approach projects with curiosity, precision, and attention to detail.
      </p>
    </Section>
  )
}

export default Hero
