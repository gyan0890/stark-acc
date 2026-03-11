'use client'

import { useState } from 'react'

// ──────────────────────────────────────────────────────────────
// Partner data
// To add your logos: save each file to /public/partners/<filename>
// e.g.  /public/partners/animoca-ventures.png
// ──────────────────────────────────────────────────────────────
// darkBg: true adds a white border ring so the logo is visible against the page background
const partners = [
  { name: 'Animoca Ventures',  file: 'animoca-ventures.png',  bg: '#1AB6FF',  darkBg: false },
  { name: 'Archetype',         file: 'archetype.png',          bg: '#000000',  darkBg: true  },
  { name: 'Blockwall',         file: 'blockwall.png',          bg: '#ffffff',  darkBg: false },
  { name: 'Borderless Capital',file: 'borderless.png',         bg: '#ffffff',  darkBg: false },
  { name: 'Draper Associates', file: 'draper-associates.png',  bg: '#ffffff',  darkBg: false },
  { name: 'Frachtis',          file: 'frachtis.png',           bg: '#ffffff',  darkBg: false },
  { name: 'Pantera Capital',   file: 'pantera.png',            bg: '#ffffff',  darkBg: false },
  { name: 'PL Capital',        file: 'pl-capital.png',         bg: '#ffffff',  darkBg: false },
  { name: 'WAGMI Ventures',    file: 'wagmi-ventures.png',     bg: '#000000',  darkBg: true  },
  { name: 'Big Brain Holdings',file: 'big-brain-holdings.png', bg: '#000000',  darkBg: true  },
  { name: 'Dracoon Ventures',  file: 'dracoon-ventures.png',   bg: '#000000',  darkBg: true  },
  { name: 'GSR Ventures',      file: 'gsr-ventures.png',       bg: '#ffffff',  darkBg: false },
  { name: 'Rayo Capital',      file: 'rayo-capital.png',       bg: '#0B1929',  darkBg: true  },
]

function PartnerCard({ partner }: { partner: (typeof partners)[0] }) {
  const [imgError, setImgError] = useState(false)
  const isDark = partner.bg === '#ffffff' || partner.bg === '#f5f5f5'

  return (
    <div className="flex flex-col items-center gap-3 group">
      {/* Circular logo container */}
      <div
        className={`
          relative w-24 h-24 rounded-full flex items-center justify-center
          overflow-hidden transition-all duration-300
          hover:scale-110 hover:shadow-lg
          ${partner.darkBg ? 'ring-2 ring-white/25 hover:ring-white/50' : 'ring-1 ring-white/10 hover:ring-white/25'}
        `}
        style={{ backgroundColor: partner.bg }}
        title={partner.name}
      >
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/partners/${partner.file}`}
            alt={partner.name}
            className="object-contain w-16 h-16"
            onError={() => setImgError(true)}
          />
        ) : (
          // Fallback: initials
          <span
            className={`text-lg font-black tracking-tight ${isDark ? 'text-sn-navy' : 'text-white'}`}
          >
            {partner.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </span>
        )}
      </div>

      {/* Partner name below */}
      <span className="text-xs text-white/55 text-center font-medium tracking-wide leading-tight max-w-[96px] group-hover:text-white/80 transition-colors duration-200">
        {partner.name}
      </span>
    </div>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(236,121,107,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#EC796B] mb-4">
            Investor Network
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Backed by the World&apos;s Best{' '}
            <span className="gradient-text">Web3 Investors</span>
          </h2>
          <p className="text-lg text-white/55 leading-relaxed">
            Stark/Acc founders get direct access to a curated network of top-tier
            VCs and investors who are already paying attention to Starknet&apos;s
            deal flow. Low volume. High signal. Every share matters.
          </p>
        </div>

        {/* Partner logo grid — 4 per row */}
        <div className="grid grid-cols-4 justify-items-center gap-x-10 gap-y-10 max-w-2xl mx-auto mb-16">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
          {/* "And more" pill */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-dashed border-white/15 text-white/30 text-xs font-semibold tracking-wide text-center leading-tight px-2">
              + More<br/>to come
            </div>
            <span className="text-xs text-white/25 font-medium tracking-wide">&nbsp;</span>
          </div>
        </div>

        {/* Value propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: '🔍',
              title: 'Pre-filtered Deal Flow',
              desc: 'Investors in our network receive only the highest-signal teams. We filter aggressively so every deal they see is worth their attention.',
            },
            {
              icon: '📡',
              title: 'Built-in Attention',
              desc: 'We build investor awareness before the deal drops — through weekly updates, momentum narratives, and a structured investor engagement process.',
            },
            {
              icon: '🤝',
              title: 'Thesis-Aligned Intros',
              desc: 'Founders get introduced to the right investors for their specific vertical, stage, and fundraising thesis — not cold emails to random LPs.',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-6">
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h4 className="font-bold text-white-flare mb-2">{item.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
