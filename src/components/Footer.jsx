import Section from './ui/Section'
import GlowButton from './ui/GlowButton'

const Footer = () => {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center py-12">
        <h3 className="mb-6 text-3xl md:text-4xl font-semibold font-['JetBrains_Mono']">Thoughtful design drives meaningful products.</h3>
        <p className="mb-8 text-sm text-white/70">
          Simplify complexity and deliver with confidence.
        </p>
        <div className="mb-6 flex justify-center items-center">
          <img src="/pfp.png" alt="John Montaña" className="w-40 h-40 rounded-full" />
        </div>
        <GlowButton href="#contact">Contact me</GlowButton>

        <div className="mt-6 text-sm text-white/50">© {new Date().getFullYear()} John Montaña. All rights reserved.</div>
      </div>
    </Section>
  )
}

export default Footer
