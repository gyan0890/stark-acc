'use client'

import { useState, useEffect } from 'react'

const StarknetIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="17" cy="17" r="16" fill="#0C0C4F" />
    <circle
      cx="17"
      cy="17"
      r="15.5"
      stroke="url(#navCircleGrad)"
      strokeWidth="1"
    />
    {/* Main wave / S-curve */}
    <path
      d="M9 21.5 C9 21.5 11.5 24.5 16 24.5 C20.5 24.5 22.5 20 27 20"
      stroke="url(#navWaveGrad)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M9 14.5 C9 14.5 11.5 11 17 11 C22.5 11 24.5 14 27 14"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
    {/* Connect the two ends */}
    <path
      d="M9 14.5 C8 16 8 19 9 21.5"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
    {/* Sparkle star */}
    <path
      d="M12 12.5 L12.35 11 L12.7 12.5 L14.2 12.85 L12.7 13.2 L12.35 14.7 L12 13.2 L10.5 12.85 Z"
      fill="white"
    />
    {/* Pink dot */}
    <circle cx="23" cy="23" r="1.8" fill="url(#navDotGrad)" />
    <defs>
      <linearGradient
        id="navCircleGrad"
        x1="0"
        y1="0"
        x2="34"
        y2="34"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#EC796B" />
        <stop offset="100%" stopColor="#E175B1" />
      </linearGradient>
      <linearGradient
        id="navWaveGrad"
        x1="9"
        y1="20"
        x2="27"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#EC796B" />
        <stop offset="100%" stopColor="#E175B1" />
      </linearGradient>
      <radialGradient id="navDotGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#EC796B" />
        <stop offset="100%" stopColor="#E175B1" />
      </radialGradient>
    </defs>
  </svg>
)

const navLinks = [
  { label: 'Program', href: '#program' },
  { label: 'Partners', href: '#partners' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sn-navy/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] grid grid-cols-3 items-center">
        {/* Logo — Starknet sub-brand format (left col) */}
        <a
          href="#"
          className="flex items-center gap-3 group justify-self-start"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
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
        </a>

        {/* Desktop links — truly centered (middle col) */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-white/70 hover:text-white-flare transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA (right col) */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <button
            onClick={() => handleNav('#apply')}
            className="btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white tracking-wide"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-sn-navy/95 backdrop-blur-md border-b border-white/5`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-white/80 hover:text-white text-base py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#apply')}
            className="btn-gradient mt-2 px-5 py-3 rounded-full text-sm font-semibold text-white w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </header>
  )
}
