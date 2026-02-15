const Header = ({ title, children, className = '' }) => (
  <section className={`rounded-xl border border-[#212121] bg-transparent px-6 md:px-8 py-2 md:py-3 ${className}`}>
    {title && <h2 className="mb-4 text-xl font-semibold font-['JetBrains_Mono'] tracking-tight text-white/90">{title}</h2>}
    {children}
  </section>
)

export default Header
