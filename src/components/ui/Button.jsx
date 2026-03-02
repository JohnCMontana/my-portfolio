const Button = ({ href, children, className = '', target, rel }) => {
  const safeRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel

  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      className={`rounded-[10px] border border-white/20 px-4 py-2 text-sm text-white/80 
                  hover:bg-white/5 hover:text-white transition-all duration-200
        ${className}`}
    >
      {children}
    </a>
  )
}

export default Button
