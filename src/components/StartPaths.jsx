import React from 'react'

export default function StartPaths({ onBookDemo }) {
  const steps = [
    {
      title: 'Start with Planning',
      desc: 'Optimise your media mix with high-precision AI scenario modeling and cross-channel forecasting.',
      icon: 'event_note'
    },
    {
      title: 'Start with Intelligence',
      desc: 'Deploy Pulse Scout to capture competitor shifts, market signals, and live sentiment analysis.',
      icon: 'radar'
    },
    {
      title: 'Start with Measurement',
      desc: 'Connect live signals to brand lift outcomes for instant optimization and ROI attribution.',
      icon: 'monitoring'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white select-none" id="pricing">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <h2 className="text-center text-4xl lg:text-6xl font-display font-extrabold tracking-tight mb-12 lg:mb-16 text-primary">
          Start where value is fastest.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              onClick={onBookDemo}
              className="bg-slate-50 p-12 rounded-[3.5rem] border border-black/5 text-center flex flex-col items-center hover:bg-white hover:shadow-3xl transition-all duration-500 cursor-pointer group select-none"
            >
              {/* Animated Icon Box */}
              <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl text-secondary">{step.icon}</span>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-black mb-6 text-on-surface">
                {step.title}
              </h4>
              
              {/* Desc */}
              <p className="text-on-surface/50 text-sm mb-12 leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Action Button */}
              <button className="mt-auto font-black text-xs uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:gap-4 transition-all">
                Get Started 
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
