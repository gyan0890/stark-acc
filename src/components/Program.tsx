'use client'

const pillars = [
  {
    icon: '🚀',
    title: 'Ship',
    subtitle: 'Production-Ready, Fast',
    description:
      'Build in 4 weeks what most teams take 6 months to do. Weekly accountability gates, AI-accelerated development workflows, and hard deadlines that force execution over perfection.',
    tags: ['AI-powered dev', 'Weekly gates', 'Production focus'],
    gradient: 'from-[#EC796B] to-[#E175B1]',
  },
  {
    icon: '🎯',
    title: 'Validate',
    subtitle: 'Real Users. Real Signals.',
    description:
      'YC-style ICP discovery and user interviews. Stop building for nobody. Define your ideal customer, go talk to them, and come back with evidence — not assumptions.',
    tags: ['ICP discovery', 'User interviews', 'Market validation'],
    gradient: 'from-[#E175B1] to-[#D672EF]',
  },
  {
    icon: '💰',
    title: 'Fundraise',
    subtitle: 'Investor-Ready From Day 1',
    description:
      'Fundraising is a process, not an afterthought. We embed fundraising readiness from week one — sharpened pitches, curated investor introductions, and a network that pays attention.',
    tags: ['Pitch prep', 'VC introductions', 'Momentum narrative'],
    gradient: 'from-[#D672EF] to-[#3F8CFF]',
  },
]

const programDetails = [
  { label: 'Duration', value: '12 Weeks', icon: '📅' },
  { label: 'Format', value: 'Remote-first, high-intensity', icon: '🌐' },
  { label: 'Cohort Size', value: 'Small & selective', icon: '🏆' },
  { label: 'Masterclasses', value: 'Weekly, world-class mentors', icon: '🎓' },
  { label: 'Demo Day', value: 'Live investor showcase', icon: '🎤' },
  { label: 'Equity', value: 'TBD — announced with Cohort 1', icon: '📝' },
]

const profiles = [
  {
    title: 'Migrating to Starknet',
    description:
      'You have a working product with initial traction and want to leverage Starknet\'s ZK-native infrastructure to scale. You\'re looking for a home blockchain with real technical advantages.',
    badge: 'Existing Product',
    badgeColor: 'text-[#EC796B] bg-[#EC796B]/10 border-[#EC796B]/20',
  },
  {
    title: 'Building on Starknet',
    description:
      'You\'re a new or experienced founder with a sharp idea, strong technical chops, and the hunger to build something fundable on the most powerful ZK L2 in the world.',
    badge: 'New Project',
    badgeColor: 'text-[#D672EF] bg-[#D672EF]/10 border-[#D672EF]/20',
  },
]

export default function Program() {
  return (
    <section id="program" className="relative py-28 px-6 bg-sn-navy overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(214,114,239,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#EC796B] mb-4">
            The Program
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Built for Founders{' '}
            <span className="gradient-text">Who Move Fast</span>
          </h2>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Stark/Acc is an execution system — not a lecture series. Every week is
            structured around one goal: removing the bottleneck between where you are
            and where you need to be.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass-card rounded-2xl p-8 transition-all duration-300">
              {/* Icon + number */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{pillar.icon}</span>
                <span
                  className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-to-r ${pillar.gradient} text-white`}
                >
                  {pillar.title}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white-flare mb-2">{pillar.subtitle}</h3>
              <p className="text-white/55 leading-relaxed mb-6 text-sm">{pillar.description}</p>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Program details grid */}
        <div className="section-sep mb-16" />
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white/90">Program Details</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {programDetails.map((detail) => (
              <div
                key={detail.label}
                className="gradient-border-card rounded-xl p-4 text-center"
              >
                <div className="text-2xl mb-2">{detail.icon}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{detail.label}</div>
                <div className="text-sm font-semibold text-white/85">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Masterclasses & Mentors teaser */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#D672EF] mb-3">
                Masterclasses & Workshops
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white-flare">
                Learn from People Who've Actually Done It
              </h3>
              <p className="text-white/55 leading-relaxed mb-6">
                Weekly sessions delivered by founders of successful companies, executives at
                global firms, and the top Web3 and Web2 investors. No fluff — practical,
                battle-tested knowledge from the Starknet Investor Network and Starknet
                Mentor Network.
              </p>
              <ul className="space-y-3">
                {[
                  'Founders of successful Web3 and Web2 companies',
                  'C-suite executives from leading global firms',
                  'Top-tier VCs from our investor network',
                  'AI tooling specialists for developer acceleration',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/65">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r from-[#EC796B] to-[#D672EF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 md:w-48 flex flex-col items-center justify-center text-center gap-2 p-6 rounded-xl bg-white/5">
              <span className="text-5xl font-black gradient-text">12</span>
              <span className="text-white/50 text-sm">Weeks of intensive mentorship and accountability</span>
            </div>
          </div>
        </div>

        {/* Who we're looking for */}
        <div className="section-sep mb-16" />
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-[#EC796B] mb-4">
            Who We&apos;re Looking For
          </p>
          <h3 className="text-3xl md:text-4xl font-black mb-8">
            Are You the Right Fit?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profiles.map((profile) => (
              <div key={profile.title} className="glass-card rounded-2xl p-8 transition-all duration-300">
                <span
                  className={`inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border mb-5 ${profile.badgeColor}`}
                >
                  {profile.badge}
                </span>
                <h4 className="text-xl font-bold text-white-flare mb-3">{profile.title}</h4>
                <p className="text-white/55 leading-relaxed text-sm">{profile.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm mb-4">
              Not sure if you qualify? Apply anyway — we review every application.
            </p>
            <a
              href="#apply"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-gradient inline-block px-8 py-3.5 rounded-full text-sm font-bold text-white tracking-wide"
            >
              Apply to Stark/Acc →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
