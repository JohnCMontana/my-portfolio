import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Motion = motion;

const socials = [
  {
    href: 'https://www.linkedin.com/in/johncmontana/',
    icon: <FaLinkedin className="size-5 transition-transform duration-300 group-hover:scale-110" />,
    name: 'LinkedIn'
  },
  {
    href: 'https://github.com/JohnCMontana',
    icon: <FaGithub className="size-5 transition-transform duration-300 group-hover:scale-110" />,
    name: 'GitHub'
  },
  {
    href: 'https://x.com/montana48044',
    icon: <FaTwitter className="size-5 transition-transform duration-300 group-hover:scale-110" />,
    name: 'Twitter'
  },
  {
    icon: <FaEnvelope className="size-5 transition-transform duration-300 group-hover:scale-110" />,
    name: 'Email',
    copyValue: 'johnclyde.montana@gmail.com'
  },
]

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-6 flex flex-wrap items-center gap-12 text-sm text-white/70">
      {socials.map((item) => {
        if (item.copyValue) {
          return (
            <button
              key={item.name}
              className="group inline-flex items-center gap-2 hover:text-white relative"
              onClick={() => handleCopy(item.copyValue)}
            >
              {item.icon}
              <AnimatePresence>
                {copied && item.name === 'Email' && (
                  <Motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-white/10 px-2 py-1 text-xs text-white whitespace-nowrap"
                  >
                    📧 Email copied!
                  </Motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        }

        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 hover:text-white"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
