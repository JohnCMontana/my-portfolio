const socials = [
  {
    href: 'https://www.linkedin.com/in/johncmontana/',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.851-3.037-1.852 0-2.135 1.445-2.135 2.939v5.667H9.988V9h3.112v1.561h.045c.434-.82 1.494-1.684 3.073-1.684 3.287 0 3.89 2.164 3.89 4.977v6.598ZM5.337 7.433a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62ZM6.956 20.452H3.717V9h3.239v11.452Z"
        />
      </svg>
    ),
  },
  {
    href: 'https://github.com/JohnCMontana',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.477 2 2 6.486 2 12.02c0 4.425 2.865 8.18 6.839 9.504.5.094.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.114-4.555-4.952 0-1.094.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.706.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.545 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.688 0 3.848-2.338 4.697-4.566 4.945.36.312.68.926.68 1.866 0 1.347-.013 2.433-.013 2.764 0 .267.18.58.688.481C19.138 20.196 22 16.44 22 12.02 22 6.486 17.523 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.244 2H21l-6.39 7.307L22 22h-7.412l-4.6-6.2L4.5 22H1.744l6.84-7.82L2 2h7.588l4.168 5.633L18.244 2Zm-1.3 18h2.052L7.06 4H4.86l12.084 16Z"
        />
      </svg>
    ),
  },
  {
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 6h16a2 2 0 0 1 2 2v.01l-10 6.25-10-6.25V8a2 2 0 0 1 2-2Zm-2 5.21V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.79l-9.47 5.92a1 1 0 0 1-1.06 0L2 11.21Z"
        />
      </svg>
    ),
  },
]

const SocialLinks = () => (
  <div className="mt-6 flex flex-wrap items-center gap-12 text-sm text-white/70">
    {socials.map((item) => (
      <a
        href={item.href}
        className="group inline-flex items-center gap-2 hover:text-white"
      >
        {item.icon}
        <span className="w group-hover:translate-x-1 frow transition-transform duration-300"></span>
      </a>
    ))}
  </div>
)

export default SocialLinks
