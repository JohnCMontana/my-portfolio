const Section = ({ title, children, className = '', id }) => (
  <section id={id} className={`rounded-xl border border-[#212121] bg-transparent p-6 md:p-8 ${className}`}>
    {title && <h2 className="mb-4 text-xl font-semibold font-['JetBrains_Mono'] tracking-tight text-white/90">{title}</h2>}
    {children}
  </section>
)

export default Section
