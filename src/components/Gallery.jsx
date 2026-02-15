import Section from './ui/Section'

const Gallery = () => {
  return (
    <Section title="Gallery">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl border border-white/10 bg-white/5" />
        ))}
      </div>
    </Section>
  )
}

export default Gallery
