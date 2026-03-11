const ecosystemProjects = [
  {
    name: 'Ekubo Protocol',
    category: 'DeFi · DEX',
    description:
      'The leading decentralised exchange on Starknet, featuring concentrated liquidity and a singleton architecture built for efficiency at scale.',
    url: 'https://ekubo.org',
    color: '#4F9EFF',
  },
  {
    name: 'Argent X',
    category: 'Wallets',
    description:
      'The most popular smart-contract wallet on Starknet. Native account abstraction, social recovery, and DeFi integrations built-in.',
    url: 'https://argent.xyz',
    color: '#FF875B',
  },
  {
    name: 'Braavos',
    category: 'Wallets',
    description:
      'Hardware Signer-enabled smart wallet leveraging Starknet account abstraction for bank-grade security with Web3 flexibility.',
    url: 'https://braavos.app',
    color: '#F5A623',
  },
  {
    name: 'Nostra Finance',
    category: 'DeFi · Lending',
    description:
      'A multi-layered money market on Starknet — borrow, lend, and earn yield with capital efficiency not possible on L1.',
    url: 'https://nostra.finance',
    color: '#7B6FFF',
  },
  {
    name: 'Vesu',
    category: 'DeFi · Lending',
    description:
      'Modular lending protocol built natively on Starknet with permissionless pool creation and transparent risk management.',
    url: 'https://vesu.xyz',
    color: '#34D399',
  },
  {
    name: 'Realms / Bibliotheca',
    category: 'Gaming · NFTs',
    description:
      'An on-chain gaming universe built on Starknet. Fully autonomous worlds, composable game logic, and a thriving creator ecosystem.',
    url: 'https://realms.world',
    color: '#E175B1',
  },
]

const whyStarknet = [
  {
    icon: '🔐',
    title: 'ZK-Native Infrastructure',
    description:
      'Built on STARK proofs — the most powerful ZK cryptography at scale. Provable computation for any app, not just payments.',
  },
  {
    icon: '⚡',
    title: 'Ethereum Secured',
    description:
      'Inherits Ethereum\'s trust and security without its limitations. Your users get L1 guarantees at L2 speeds and cost.',
  },
  {
    icon: '🧠',
    title: 'Cairo — Purpose-Built Language',
    description:
      'Cairo is the language of provable programs. Write code that is mathematically verifiable — a genuine moat for the builders who master it.',
  },
  {
    icon: '🌍',
    title: 'Growing Ecosystem',
    description:
      'DeFi, gaming, identity, and infrastructure — a fast-growing ecosystem of builders choosing Starknet for its technical advantages.',
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-28 px-6 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(214,114,239,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Why Starknet */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#D672EF] mb-4">
              Why Starknet
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              The Blockchain That<br />
              Gives You <span className="gradient-text">an Edge</span>
            </h2>
            <p className="text-lg text-white/55 leading-relaxed">
              Starknet isn&apos;t just another L2. It&apos;s the only platform
              where ZK proofs are a native primitive — giving builders capabilities
              that simply don&apos;t exist elsewhere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyStarknet.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h4 className="font-bold text-white-flare mb-2">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-sep mb-24" />

        {/* Ecosystem spotlight */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#EC796B] mb-4">
                Ecosystem Spotlight
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                The Ecosystem{' '}
                <span className="gradient-text">You&apos;re Building For</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-xs text-right">
              A sample of the projects proving Starknet&apos;s potential across DeFi,
              gaming, and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ecosystemProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  {/* Color dot */}
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0"
                    style={{ background: `${project.color}25`, border: `1px solid ${project.color}40` }}
                  >
                    <div
                      className="w-full h-full rounded-xl flex items-center justify-center text-xs font-black"
                      style={{ color: project.color }}
                    >
                      {project.name.charAt(0)}
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      color: project.color,
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <h4 className="font-bold text-white-flare mb-2 group-hover:text-white transition-colors">
                  {project.name}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-white/25 group-hover:text-white/50 transition-colors">
                  Visit →
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-white/25 text-sm mt-8">
            These are example ecosystem projects and not Stark/Acc portfolio companies.
          </p>
        </div>
      </div>
    </section>
  )
}
