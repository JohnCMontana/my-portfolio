import { CursorProvider, Cursor, CursorFollow } from './Cursor'

const Section = ({ title, children, className = '', id, hideTitle = false }) => (
  <section id={id} className={`rounded-xl border border-[#212121] bg-transparent p-5 md:p-8 backdrop-blur-sm ${className}`}>
    <CursorProvider>
      <Cursor />
      {title && <CursorFollow>{title}</CursorFollow>}
      {title && !hideTitle && <h2 className="mb-4 text-xl font-semibold font-['JetBrains_Mono'] tracking-tight text-white/90">{title}</h2>}
      {children}
    </CursorProvider>
  </section>
)

export default Section
