'use client'

const StarknetIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="17" cy="17" r="16" fill="#0C0C4F" />
    <circle cx="17" cy="17" r="15.5" stroke="url(#ftCircleGrad)" strokeWidth="1" />
    <path d="M9 21.5 C9 21.5 11.5 24.5 16 24.5 C20.5 24.5 22.5 20 27 20" stroke="url(#ftWaveGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M9 14.5 C9 14.5 11.5 11 17 11 C22.5 11 24.5 14 27 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9"/>
    <path d="M9 14.5 C8 16 8 19 9 21.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9"/>
    <path d="M12 12.5 L12.35 11 L12.7 12.5 L14.2 12.85 L12.7 13.2 L12.35 14.7 L12 13.2 L10.5 12.85 Z" fill="white"/>
    <circle cx="23" cy="23" r="1.8" fill="url(#ftDotGrad)" />
    <defs>
      <linearGradient id="ftCircleGrad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EC796B" />
        <stop offset="100%" stopColor="#E175B1" />
      </linearGradient>
      <linearGradient id="ftWaveGrad" x1="9" y1="20" x2="27" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EC796B" />
        <stop offset="100%" stopColor="#E175B1" />
      </linearGradient>
      <radialGradient id="ftDotGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#EC796B" />
        <stop offset="100%" stopColor="#E175B1" />
      </radialGradient>
    </defs>
  </svg>
)

const footerLinks = {
  Program: [
    { label: 'How It Works', href: '#program' },
    { label: 'Who We Accept', href: '#program' },
    { label: 'Masterclasses', href: '#program' },
    { label: 'Demo Day', href: '#program' },
  ],
  Network: [
    { label: 'Investor Partners', href: '#partners' },
    { label: 'Mentor Network', href: '#partners' },
    { label: 'Ecosystem', href: '#ecosystem' },
  ],
  Apply: [
    { label: 'Apply Now', href: '#apply' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: 'mailto:hello@starkacc.xyz' },
  ],
}

const socialLinks = [
  {
    label: 'Twitter / X',
    href: 'https://x.com/starkacc', // TODO: update with real handle
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/starkacc', // TODO: update with real link
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.901l-2.94-.918c-.64-.203-.652-.64.135-.953l11.491-4.43c.533-.194 1.003.13.948.621z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScroll = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/8 bg-sn-navy overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(28,28,132,0.3) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <StarknetIcon />
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-widest text-sm text-white-flare uppercase">
                  Starknet
                </span>
                <span className="text-white/30 font-light text-lg leading-none">|</span>
                <span className="font-semibold tracking-wider text-sm gradient-text uppercase">
                  Acc
                </span>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              The premier accelerator for founders building the next generation of
              companies on Starknet. Ship. Validate. Fundraise.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => handleScroll(link.href)}
                        className="text-sm text-white/55 hover:text-white-flare transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white-flare transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="section-sep" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} Stark/Acc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/25">
              Built on{' '}
              <a
                href="https://starknet.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#EC796B] transition-colors"
              >
                Starknet
              </a>
            </span>
            <a
              href="mailto:hello@starkacc.xyz"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              hello@starkacc.xyz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
