'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-sn-navy pt-[72px] pb-16">
      {/* ── Background radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% -10%, #1C1C84 0%, #0C0C4F 65%)',
        }}
      />

      {/* ── Decorative gradient lines (Starknet brand pattern) ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="line1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC796B" stopOpacity="0" />
            <stop offset="40%" stopColor="#EC796B" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#D672EF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D672EF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line2Grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E175B1" stopOpacity="0" />
            <stop offset="50%" stopColor="#E175B1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D672EF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Large diagonal line — top-left to bottom-right */}
        <line
          x1="10%"
          y1="0%"
          x2="95%"
          y2="90%"
          stroke="url(#line1Grad)"
          strokeWidth="1"
        />
        {/* Secondary diagonal — top-right corner */}
        <line
          x1="100%"
          y1="5%"
          x2="60%"
          y2="75%"
          stroke="url(#line2Grad)"
          strokeWidth="0.8"
        />
        {/* Subtle tertiary line */}
        <line
          x1="20%"
          y1="0%"
          x2="100%"
          y2="60%"
          stroke="url(#line1Grad)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>

      {/* ── Ambient glow blobs ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(214,114,239,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(236,121,107,0.07) 0%, transparent 70%)',
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-8">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10 text-sm text-white/70 tracking-wider uppercase font-medium">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'linear-gradient(135deg, #EC796B, #D672EF)' }}
          />
          Applications Now Open — Cohort 1
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6">
          Build Fast.<br />
          <span className="gradient-text">Raise Smart.</span><br />
          Ship on Starknet.
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-in-up delay-200 text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
          Stark/Acc is the elite acceleration program for founders building the
          next generation of Starknet companies — connecting you with world-class
          mentors, top-tier investors, and the tools to ship, validate, and
          fundraise at speed.
        </p>

        {/* CTA group */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#apply"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-gradient px-8 py-4 rounded-full text-base font-bold text-white tracking-wide min-w-[180px] text-center"
          >
            Apply Now →
          </a>
          <a
            href="#program"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-outline-gradient px-8 py-4 rounded-full text-base font-semibold text-white/80 tracking-wide min-w-[180px] text-center"
          >
            How It Works
          </a>
        </div>

        {/* Trust line */}
        <p className="animate-fade-in delay-400 mt-8 text-sm text-white/35 tracking-wide">
          Backed by 13+ leading Web3 investors · Built on Starknet
        </p>
      </div>

      {/* ── Stats strip ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-20 md:mt-24">
        <div className="section-sep mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in delay-500">
          {[
            { value: '12', label: 'Weeks Intensive' },
            { value: '13+', label: 'Investor Partners' },
            { value: '100%', label: 'Accountability-First' },
            { value: 'Global', label: 'Founder Network' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-black gradient-text">
                {stat.value}
              </span>
              <span className="text-sm text-white/50 tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
        <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2.5" fill="white">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;0,8;0,0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </section>
  )
}
