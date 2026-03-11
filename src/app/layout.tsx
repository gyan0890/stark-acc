import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Stark/Acc — The Starknet Accelerator',
  description:
    'Stark/Acc is the premier accelerator for founders building on Starknet. Ship production-ready products, validate with real users, and raise from world-class investors.',
  openGraph: {
    title: 'Stark/Acc — The Starknet Accelerator',
    description:
      'Ship. Validate. Fundraise. The accelerator built to produce the next generation of Starknet companies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stark/Acc — The Starknet Accelerator',
    description: 'Ship. Validate. Fundraise. Built on Starknet.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased bg-sn-navy text-white-flare`}>
        {children}
      </body>
    </html>
  )
}
