const GlowButton = ({ href, children, className = '', onClick }) => {
  const Component = href ? 'a' : 'button'
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`rounded-[10px] bg-white text-black px-4 py-2 text-sm font-medium shadow-[0_15px_40px_rgba(255,255,255,0.20)] ${className}`}
    >
      {children}
    </Component>
  )
}

export default GlowButton
