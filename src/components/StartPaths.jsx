import React from 'react'

export default function StartPaths({ onBookDemo }) {
  const steps = [
    {
      title: 'Start with Planning',
      desc: 'Digitise briefs, media plans, budgets, scenarios, approvals, and reporting.',
      icon: 'event_note'
    },
    {
      title: 'Start with Intelligence',
      desc: 'Track competitors, market movement, messaging, visibility, and category shifts.',
      icon: 'radar'
    },
    {
      title: 'Start with Measurement',
      desc: 'Measure exposure, response, brand lift, and optimisation signals in real time.',
      icon: 'monitoring'
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-white select-none" id="start">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-primary mb-6">
            Start where value is fastest.
          </h2>
          <p className="text-text-grey text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Pulse 360 does not need to be adopted all at once. Begin with the workflow that matters most, prove value, and scale from there.
          </p>
        </div>

        {/* Cards Grid (Middle card highlighted) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 md:gap-10 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 items-stretch">
          {steps.map((step, idx) => {
            const isMiddle = idx === 1
            return (
              <div 
                key={idx} 
                onClick={onBookDemo}
                className={`w-[85vw] md:w-auto shrink-0 snap-center p-10 md:p-12 rounded-[3.5rem] border text-center flex flex-col items-center transition-all duration-500 cursor-pointer group select-none ${
                  isMiddle 
                    ? 'bg-white border-secondary/50 shadow-2xl scale-100 md:scale-[1.03] z-10' 
                    : 'bg-slate-50 border-black/5 hover:bg-white hover:shadow-2xl'
                }`}
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
            )
          })}
        </div>

        {/* Book a Demo CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <button 
            onClick={onBookDemo}
            className="bg-primary text-white border border-secondary px-8 py-3.5 rounded-full font-black text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/20 hover:bg-gradient-to-r hover:from-secondary hover:to-deep-orange hover:border-transparent"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
