const Button = ({ href, children, className = '' }) => (
  <a
    href={href}
    className={`rounded-[10px] border border-white/20 px-4 py-2 text-sm text-white/80 
                hover:bg-white/5 hover:text-white transition-all duration-200
      ${className}`}
  >
    {children}
  </a>
)

export default Button
