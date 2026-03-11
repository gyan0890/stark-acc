'use client'

export default function ApplyCTA() {
  return (
    <section id="apply" className="relative py-32 px-6 overflow-hidden">
      {/* Background: deep glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(28,28,132,0.6) 0%, #0C0C4F 70%)',
        }}
      />

      {/* Decorative gradient lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ctaLine1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EC796B" stopOpacity="0" />
            <stop offset="50%" stopColor="#EC796B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D672EF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="url(#ctaLine1)" strokeWidth="1" />
        <line x1="30%" y1="100%" x2="100%" y2="30%" stroke="url(#ctaLine1)" strokeWidth="0.6" opacity="0.5" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 text-sm text-white/60 tracking-wider uppercase font-medium">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'linear-gradient(135deg, #EC796B, #D672EF)' }}
          />
          Applications Open — Cohort 1
        </div>

        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          Ready to{' '}
          <span className="gradient-text">Build the Future</span>
          <br />
          on Starknet?
        </h2>

        {/* Sub */}
        <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
          Join Cohort 1 of Stark/Acc. Ship faster, validate with real users, and
          get in front of the investors who are paying attention to Starknet.
          Applications reviewed on a rolling basis — limited spots.
        </p>

        {/* Checklist */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            '12-week intensive program',
            'World-class mentors',
            'Investor network access',
            'Weekly accountability',
            'Demo Day',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-white/60 px-4 py-2 rounded-full bg-white/5 border border-white/8"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="flex-shrink-0"
              >
                <circle cx="7" cy="7" r="6" fill="url(#checkGrad)" />
                <path
                  d="M4.5 7 L6.2 8.8 L9.5 5.5"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="checkGrad" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EC796B" />
                    <stop offset="100%" stopColor="#D672EF" />
                  </linearGradient>
                </defs>
              </svg>
              {item}
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="btn-gradient px-10 py-5 rounded-full text-lg font-bold text-white tracking-wide shadow-xl shadow-purple-900/30 min-w-[220px]"
            // TODO: Replace href with your application form (e.g. Typeform, Google Form)
            onClick={() => alert('Application form coming soon!')}
          >
            Apply Now →
          </button>
          <a
            href="mailto:hello@starkacc.xyz"
            className="btn-outline-gradient px-8 py-4 rounded-full text-base font-semibold text-white/70 tracking-wide"
          >
            Get in Touch
          </a>
        </div>

        <p className="mt-6 text-white/25 text-sm">
          Not sure if you&apos;re ready? Apply anyway — we review every application personally.
        </p>
      </div>
    </section>
  )
}
