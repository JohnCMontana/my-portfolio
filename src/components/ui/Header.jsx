import { CursorProvider, Cursor, CursorFollow } from './Cursor'

const Header = ({ title, children, className = '', hideTitle = false }) => (
  <section className={`rounded-xl border border-[#212121] bg-transparent px-4 md:px-8 py-2 md:py-3 ${className}`}>
    <CursorProvider>
      <Cursor />
      {title && <CursorFollow>{title}</CursorFollow>}
      {title && !hideTitle && <h2 className="mb-4 text-xl font-semibold font-['JetBrains_Mono'] tracking-tight text-white/90">{title}</h2>}
      {children}
    </CursorProvider>
  </section>
)

export default Header
