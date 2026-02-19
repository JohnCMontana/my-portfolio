import Section from './ui/Section'
import GlowButton from './ui/GlowButton'

const Footer = () => {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center py-12">
        <h3 className="mb-6 text-3xl md:text-4xl font-semibold font-['JetBrains_Mono']">Keep calm and vibe code.</h3>
        <div className="mb-6 flex justify-center items-center">
          <img src="/john-avatar.png" alt="John Montaña" className="w-40 h-40 mb-4 rounded-full" />
        </div>
        <GlowButton href="#contact">Contact me</GlowButton>

        <div className="mt-6 text-sm text-white/50">© {new Date().getFullYear()} John Montaña. All rights reserved.</div>
      </div>
    </Section>
  )
}

export default Footer
