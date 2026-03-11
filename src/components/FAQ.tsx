'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Who should apply to Stark/Acc?',
    a: 'We look for two profiles: (1) founders with an existing product who want to migrate to Starknet and leverage its ZK-native advantages to scale, and (2) new or experienced founders with a sharp idea ready to build on Starknet from the ground up. In both cases, we value speed, accountability, and the ability to talk to users. Brilliant idea + working product (or strong MVP) + the hunger to move fast.',
  },
  {
    q: 'What does the program look like week to week?',
    a: 'Each week has a specific focus — either shipping, validation, or fundraising readiness. You\'ll have a weekly masterclass from a world-class mentor, a constraint discovery session to identify your single biggest bottleneck, and an accountability check-in. There are hard gates: teams that don\'t hit their weekly targets get coached intensively. No coasting. The format is remote-first and high-intensity.',
  },
  {
    q: 'Is there equity or funding involved?',
    a: 'Details on equity and any pre-seed investment will be announced with the official Cohort 1 launch. The focus of Stark/Acc is to make every founding team fundable and investor-ready — the goal is that you either raise external capital from our investor network after the program, or build real revenue without needing VC. We\'ll have more to share soon.',
  },
  {
    q: 'Do I need to be building on Starknet already?',
    a: 'Not necessarily, but you need to have a clear reason why Starknet is the right home for your product. We work with teams that are migrating from other chains (with existing traction) and teams starting fresh. What we do require is that by the end of the program, your product is live and production-ready on Starknet.',
  },
  {
    q: 'When does Cohort 1 start?',
    a: 'Applications are open now. The exact start date for Cohort 1 will be announced soon. Apply early — we review applications on a rolling basis and cohort size is intentionally small so every founding team gets the attention they deserve.',
  },
  {
    q: 'What kind of investor access do I get?',
    a: 'Stark/Acc maintains the Starknet Investor Network — a curated group of top Web3 VCs who receive deal flow exclusively from our programs. We filter aggressively so the signal is high. Introductions are thesis-aligned (not spray-and-pray), and we build investor awareness before you ever send a deck. You\'ll also work on investor updates and pitch narrative throughout the program.',
  },
  {
    q: 'How is Stark/Acc different from a typical accelerator?',
    a: 'Most accelerators are education programs with a demo day at the end. Stark/Acc is an execution system. We care about weekly constraints removed, users acquired, and capital raised — not decks submitted. Urgency is built in by design. What most teams take 6 months to build, we expect in 4-6 weeks. We also provide whatever connections you need — not just intros, but active facilitation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(236,121,107,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#EC796B] mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-white/50">
            Have a question not covered here?{' '}
            <a
              href="mailto:hello@starkacc.xyz"
              className="text-[#EC796B] hover:text-[#D672EF] transition-colors underline underline-offset-2"
            >
              Drop us a message.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? 'gradient-border-card'
                  : 'glass-card'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-7 py-5 flex items-center justify-between gap-4 text-left group"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`text-base font-semibold transition-colors duration-200 ${
                    openIndex === i ? 'gradient-text' : 'text-white/85 group-hover:text-white'
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-gradient-to-br from-[#EC796B] to-[#D672EF] rotate-45'
                      : 'bg-white/10 group-hover:bg-white/15'
                  }`}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M5 1V9M1 5H9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-7 pb-6">
                  <div className="w-full h-px bg-white/5 mb-4" />
                  <p className="text-white/60 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
