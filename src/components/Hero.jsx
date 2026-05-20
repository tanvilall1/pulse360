import React from 'react'

export default function Hero({ onBookDemo }) {
  const capabilityCards = [
    {
      title: 'Competitive Intelligence',
      category: 'Capability',
      color: 'border-secondary text-secondary',
      styleClass: 'absolute top-2 left-2 lg:left-6 animate-[float_5s_ease-in-out_infinite]',
    },
    {
      title: 'Brand Governance',
      category: 'Capability',
      color: 'border-emerald-500 text-emerald-500',
      styleClass: 'absolute bottom-2 left-2 lg:left-0 animate-[float_6s_ease-in-out_infinite_1s]',
    },
    {
      title: 'Media Planning',
      category: 'Capability',
      color: 'border-blue-500 text-blue-500',
      styleClass: 'absolute top-2 right-2 lg:right-6 animate-[float_7s_ease-in-out_infinite_0.5s]',
    },
    {
      title: 'WhatsApp Activation',
      category: 'Capability',
      color: 'border-orange-400 text-orange-400',
      styleClass: 'absolute bottom-2 right-2 lg:right-4 animate-[float_5.5s_ease-in-out_infinite_1.5s]',
    },
    {
      title: 'Brand Lift Tracking',
      category: 'Capability',
      color: 'border-white/20 text-white/40',
      styleClass: 'absolute top-1/2 -left-12 hidden xl:block animate-[float_8s_ease-in-out_infinite_2s]',
    },
    {
      title: 'Real-time Optimization',
      category: 'Capability',
      color: 'border-secondary text-secondary',
      styleClass: 'absolute top-1/2 -right-12 hidden xl:block animate-[float_9s_ease-in-out_infinite_0.8s]',
    },
  ]

  const orbitNodes = [
    { name: 'Pulse Scout', icon: 'radar', delay: '0s' },
    { name: 'Brand Book', icon: 'menu_book', delay: '-5s' },
    { name: 'Pulse Plan', icon: 'event_note', delay: '-10s' },
    { name: 'Pulse Engage', icon: 'chat', delay: '-15s' },
    { name: 'Pulse Shift', icon: 'transform', delay: '-20s' },
  ]

  return (
    <section className="relative min-h-screen lg:h-[calc(100vh-80px)] lg:min-h-[600px] flex items-center pt-28 lg:pt-0 pb-16 lg:pb-0 hero-bg overflow-hidden select-none" id="platform">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs (Centered vertically) */}
          <div className="text-left space-y-6 sm:space-y-8 max-w-2xl mx-auto lg:mx-0">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              The Marketing Operating System
            </div>

            {/* H1 Heading */}
            <h1 className="text-white font-display-lg text-4xl sm:text-5xl xl:text-6xl leading-[1.05] tracking-tight font-extrabold">
              Make every campaign <span className="text-secondary">smarter</span> than the last.
            </h1>

            {/* Subtext */}
            <p className="text-white/40 text-sm sm:text-base xl:text-lg font-body-lg leading-relaxed max-w-xl">
              Pulse 360 connects market intelligence, brand governance, media planning, audience engagement, and live measurement into one unified operating system.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center pt-2">
              <button 
                onClick={onBookDemo}
                className="bg-secondary text-white px-8 py-3.5 rounded-full font-black text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/30"
              >
                Book a Demo
              </button>
              <a href="#solutions" className="text-white font-bold text-sm flex items-center gap-2 group py-2">
                See how it works
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Ecosystem Orbit (Fully visible in the 1st fold) */}
          <div className="relative w-full max-w-lg mx-auto aspect-square lg:aspect-auto lg:h-[450px] flex items-center justify-center">
            {/* SVG Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 500 450">
              {/* Dashed Orbit Ring (diameter 280px, center 250,225) */}
              <circle 
                className="pulse-line" 
                cx="250" 
                cy="225" 
                fill="none" 
                r="140" 
                stroke="#F07E25" 
                strokeDasharray="6 6" 
                strokeWidth="1"
              />
              {/* Connecting lines from center (250,225) to floating capability card spots */}
              <line stroke="#F07E25" strokeDasharray="4 4" strokeWidth="0.5" x1="250" x2="60" y1="225" y2="40"></line>
              <line stroke="#F07E25" strokeDasharray="4 4" strokeWidth="0.5" x1="250" x2="440" y1="225" y2="45"></line>
              <line stroke="#F07E25" strokeDasharray="4 4" strokeWidth="0.5" x1="250" x2="40" y1="225" y2="400"></line>
              <line stroke="#F07E25" strokeDasharray="4 4" strokeWidth="0.5" x1="250" x2="440" y1="225" y2="395"></line>
            </svg>

            {/* Central Core (Center at 250,225) */}
            <div className="relative z-30 group cursor-pointer" onClick={onBookDemo}>
              <div className="w-28 h-28 rounded-full bg-white/5 border border-white/20 backdrop-blur-3xl flex items-center justify-center animate-[pulse-glow_4s_ease-in-out_infinite_alternate] group-hover:scale-110 transition-transform">
                <div className="w-18 h-18 rounded-full bg-gradient-to-br from-secondary to-orange-700 flex items-center justify-center border border-white/30 shadow-2xl">
                  <span className="text-white font-display-lg font-black text-3xl">P</span>
                </div>
              </div>
            </div>

            {/* Orbiting Nodes Wrapper */}
            <div className="absolute inset-0 pointer-events-none">
              {orbitNodes.map((node, index) => (
                <div 
                  key={index} 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                  style={{
                    animation: `orbit 25s linear ${node.delay} infinite normal none running`
                  }}
                  onClick={onBookDemo}
                >
                  <div className="bg-black/85 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:border-secondary hover:bg-secondary/20 transition-all select-none shadow-xl">
                    <span className="material-symbols-outlined text-secondary text-[11px]">{node.icon}</span>
                    <span className="text-[8px] font-black text-white uppercase tracking-wider">{node.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Capability Cards */}
            {capabilityCards.map((card, idx) => (
              <div key={idx} className={card.styleClass}>
                <div className={`bg-white/5 backdrop-blur-2xl p-3 rounded-xl border-l-2 ${card.color.split(' ')[0]} shadow-2xl w-40 sm:w-44 text-left`}>
                  <p className={`text-[8px] font-bold uppercase tracking-widest mb-0.5 ${card.color.includes('white') ? 'text-white/40' : card.color.split(' ')[1]}`}>
                    {card.category}
                  </p>
                  <p className="text-white text-xs font-extrabold leading-tight">{card.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
