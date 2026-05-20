import React from 'react'

export default function ProcessFlow() {
  const steps = [
    {
      num: 1,
      title: 'Discover',
      desc: 'Track competitor activity, category shifts, creative patterns, and market movement.',
      placement: 'above'
    },
    {
      num: 2,
      title: 'Govern',
      desc: 'Apply brand rules, messaging principles, communication guardrails, and compliance thresholds.',
      placement: 'below'
    },
    {
      num: 3,
      title: 'Plan',
      desc: 'Turn briefs into structured media plans, investment scenarios, and channel choices.',
      placement: 'above'
    },
    {
      num: 4,
      title: 'Engage',
      desc: 'Activate audiences through controlled, measurable engagement channels.',
      placement: 'below'
    },
    {
      num: 5,
      title: 'Measure',
      desc: 'Track exposure, audience response, brand lift, and campaign performance live.',
      placement: 'above'
    },
    {
      num: 6,
      title: 'Optimise',
      desc: 'Feed learning back into the next brief, plan, audience, and campaign decision.',
      placement: 'below'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-[#fcfcfc] overflow-hidden select-none" id="solutions">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-primary mb-6">
            From market signal to measurable impact.
          </h2>
          <p className="text-on-surface/40 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            A unified lifecycle ensuring every campaign builds on the intelligence of the last.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto py-12 lg:py-20 px-4">
          {/* Desktop Timeline Horizontal Lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/10 -translate-y-1/2 hidden md:block"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-secondary/30 -translate-y-1/2 pulse-line hidden md:block"></div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-0 relative">
            {steps.map((step) => {
              const isAbove = step.placement === 'above'
              return (
                <div key={step.num} className="flex flex-col items-center relative">
                  {/* Above content (Desktop only) */}
                  <div className={`text-center w-full md:w-48 mb-6 md:mb-0 md:absolute md:bottom-10 transition-all ${
                    isAbove ? 'md:block' : 'md:hidden'
                  }`}>
                    <h4 className="font-black text-xs uppercase tracking-widest text-secondary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[10px] leading-relaxed text-on-surface/50 font-medium px-2 max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </div>

                  {/* Marker Dot */}
                  <div className="relative flex items-center justify-center">
                    {/* Mobile vertical line connecting dots */}
                    <div className="absolute h-16 w-[1px] bg-black/10 top-3 md:hidden"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary timeline-marker ring-4 ring-secondary/20 z-10"></div>
                  </div>

                  {/* Below content */}
                  <div className={`text-center w-full md:w-48 mt-6 md:mt-0 md:absolute md:top-10 transition-all ${
                    isAbove ? 'md:hidden' : 'md:block'
                  }`}>
                    <h4 className="font-black text-xs uppercase tracking-widest text-secondary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[10px] leading-relaxed text-on-surface/50 font-medium px-2 max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
