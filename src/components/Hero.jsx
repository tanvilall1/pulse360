import React from 'react'

export default function Hero({ onBookDemo }) {
  const capabilityCards = [
    {
      title: 'Brand recall lift',
      value: '32%',
      color: 'border-secondary text-secondary',
      styleClass: 'absolute top-0 left-0 lg:-top-6 lg:-left-6 animate-[float_5s_ease-in-out_infinite]',
    },
    {
      title: 'Campaign readiness',
      value: '84%',
      color: 'border-blue-500 text-blue-500',
      styleClass: 'absolute top-0 right-0 lg:-top-6 lg:-right-6 animate-[float_7s_ease-in-out_infinite_0.5s]',
    },
    {
      title: 'Faster planning cycles',
      value: '40–60%',
      color: 'border-white/20 text-white/40',
      styleClass: 'absolute top-[35%] -left-4 lg:top-[33%] lg:-left-16 animate-[float_8s_ease-in-out_infinite_2s]',
    },
    {
      title: 'Better targeting accuracy',
      value: '20–30%',
      color: 'border-secondary text-secondary',
      styleClass: 'absolute top-[35%] -right-4 lg:top-[33%] lg:-right-16 animate-[float_9s_ease-in-out_infinite_0.8s]',
    },
    {
      title: 'Ad waste reduced',
      value: '18%',
      color: 'border-emerald-500 text-emerald-500',
      styleClass: 'absolute bottom-0 left-0 lg:-bottom-6 lg:-left-6 animate-[float_6s_ease-in-out_infinite_1s]',
    },
    {
      title: 'Live optimisation signals',
      value: '6',
      color: 'border-orange-400 text-orange-400',
      styleClass: 'absolute bottom-0 right-0 lg:-bottom-6 lg:-right-6 animate-[float_5.5s_ease-in-out_infinite_1.5s]',
    },
  ]

  const orbitNodes = [
    { name: 'Faster Planning', desc: 'Structured decisions, less manual effort', icon: 'speed', style: 'absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { name: 'Smarter Targeting', desc: 'Sharper audience and market signals', icon: 'my_location', style: 'absolute top-1/2 right-[18%] translate-x-1/2 -translate-y-1/2' },
    { name: 'Stronger Brand Control', desc: 'Consistent messaging and governance', icon: 'verified_user', style: 'absolute bottom-[18%] left-1/2 -translate-x-1/2 translate-y-1/2' },
    { name: 'Live Measurement', desc: 'Real-time visibility and optimisation', icon: 'monitoring', style: 'absolute top-1/2 left-[18%] -translate-x-1/2 -translate-y-1/2' },
  ]

  return (
    <section className="relative min-h-screen lg:h-[calc(100vh-80px)] lg:min-h-[700px] flex items-center pt-28 lg:pt-0 pb-16 lg:pb-0 bg-primary overflow-hidden select-none" id="platform">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,126,37,0.06)_0%,transparent_70%)] pointer-events-none"></div>
      
      {/* Glow path connecting left and right */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-1/4 h-[150px] bg-[radial-gradient(ellipse_at_center,rgba(240,126,37,0.08)_0%,transparent_80%)] pointer-events-none blur-xl hidden lg:block"></div>

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs (Centered vertically) */}
          <div className="lg:col-span-6 text-left space-y-6 sm:space-y-8 max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              A marketing operating system
            </div>

            {/* H1 Heading */}
            <h1 className="text-white font-display-lg text-4xl sm:text-5xl xl:text-6xl leading-[1.05] tracking-tight font-extrabold">
              Make every campaign <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-deep-orange">smarter</span> than the last.
            </h1>

            {/* Subtext */}
            <p className="text-white/60 text-sm sm:text-base xl:text-lg font-body-lg leading-relaxed max-w-xl">
              Pulse 360 connects market intelligence, brand governance, media planning, audience engagement, and live measurement into one operating system — helping brands move faster, stay aligned, and optimise continuously.
            </p>

            {/* Value Proof Line */}
            <p className="text-white/40 text-xs sm:text-sm font-medium border-l-2 border-white/10 pl-4 py-1 italic">
              Built for brand, media, and marketing teams that need speed, control, and measurable growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center pt-2">
              <button 
                onClick={onBookDemo}
                className="bg-primary text-white border border-secondary px-8 py-3.5 rounded-full font-black text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/20 hover:bg-gradient-to-r hover:from-secondary hover:to-deep-orange hover:border-transparent"
              >
                Book a Demo
              </button>
              <a href="#suite" className="text-white font-bold text-sm flex items-center gap-2 group py-2">
                See how it works
                <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Ecosystem Orbit */}
          <div className="lg:col-span-6 relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] mx-auto aspect-square lg:h-[500px] flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            {/* SVG Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 hidden lg:block" viewBox="0 0 500 500">
              <defs>
                <linearGradient id="hero-connect-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F07E25" stopOpacity="0" />
                  <stop offset="40%" stopColor="#F07E25" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F07E25" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Subtle line connection from hero copy area */}
              <line x1="0" y1="250" x2="250" y2="250" stroke="url(#hero-connect-line)" strokeWidth="1.5" strokeDasharray="5 5" className="pulse-line" />
              {/* Dashed Orbit Ring */}
              <circle 
                className="pulse-line" 
                cx="250" 
                cy="250" 
                fill="none" 
                r="150" 
                stroke="#F07E25" 
                strokeDasharray="6 6" 
                strokeWidth="1.5"
              />
            </svg>
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 lg:hidden" viewBox="0 0 320 320">
              <circle className="pulse-line" cx="160" cy="160" fill="none" r="100" stroke="#F07E25" strokeDasharray="4 4" strokeWidth="1" />
            </svg>

            {/* Central Core */}
            <div className="relative z-30 group cursor-pointer" onClick={onBookDemo}>
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white/5 border border-white/20 backdrop-blur-3xl flex items-center justify-center animate-[pulse-glow_4s_ease-in-out_infinite_alternate] group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(240,126,37,0.3)]">
                <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-secondary to-deep-orange flex items-center justify-center border border-white/30 shadow-2xl">
                  <span className="text-white font-display-lg font-black text-2xl lg:text-3xl">P</span>
                </div>
              </div>
            </div>

            {/* Orbiting Nodes Wrapper */}
            <div className="absolute inset-0 pointer-events-none z-20">
              {orbitNodes.map((node, index) => (
                <div 
                  key={index} 
                  className={`${node.style} pointer-events-auto cursor-pointer`}
                  onClick={onBookDemo}
                >
                  <div className="bg-charcoal/95 backdrop-blur-xl border border-white/10 px-3 py-2 rounded-2xl flex flex-col items-center gap-1 hover:border-secondary hover:bg-black transition-all select-none shadow-xl w-[150px] lg:w-[185px] text-center">
                    <div className="flex items-center gap-1.5 justify-center">
                      <span className="material-symbols-outlined text-secondary text-xs lg:text-sm">{node.icon}</span>
                      <span className="text-[10px] lg:text-[11px] font-black text-white tracking-wide leading-tight">{node.name}</span>
                    </div>
                    <span className="text-[7.5px] lg:text-[8.5px] text-white/50 font-medium leading-tight">{node.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Insight Cards */}
            {capabilityCards.map((card, idx) => (
              <div key={idx} className={`${card.styleClass} z-10`}>
                <div className={`bg-charcoal/80 backdrop-blur-2xl p-2.5 lg:p-3.5 rounded-xl border-l-2 ${card.color.split(' ')[0]} shadow-2xl w-32 lg:w-40 text-left border-y border-r border-y-white/5 border-r-white/5`}>
                  <p className={`text-sm lg:text-base font-black mb-0.5 ${card.color.includes('white') ? 'text-white' : card.color.split(' ')[1]}`}>
                    {card.value}
                  </p>
                  <p className="text-white/60 text-[8px] lg:text-[9px] font-bold uppercase tracking-wider leading-tight">{card.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
