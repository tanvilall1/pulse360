import React, { useState } from 'react'

export default function ProcessFlow() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Track competitor activity, category shifts, creative patterns, and market movement.',
      placement: 'above'
    },
    {
      num: '02',
      title: 'Govern',
      desc: 'Apply brand rules, messaging principles, communication guardrails, and compliance thresholds.',
      placement: 'below'
    },
    {
      num: '03',
      title: 'Plan',
      desc: 'Turn briefs into structured media plans, investment scenarios, and channel choices.',
      placement: 'above'
    },
    {
      num: '04',
      title: 'Engage',
      desc: 'Activate audiences through controlled, measurable engagement channels.',
      placement: 'below'
    },
    {
      num: '05',
      title: 'Measure',
      desc: 'Track exposure, audience response, brand lift, and campaign performance live.',
      placement: 'above'
    },
    {
      num: '06',
      title: 'Optimise',
      desc: 'Feed learning back into the next brief, plan, audience, and campaign decision.',
      placement: 'below'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#fdfdfd] overflow-hidden select-none" id="solutions">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative">
        
        {/* Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-primary mb-6">
            From market signal to measurable impact.
          </h2>
          <p className="text-text-grey text-lg sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Pulse 360 connects the complete marketing lifecycle, allowing strategy, execution, and measurement to work from the same intelligence.
          </p>
        </div>

        {/* Process Timeline - Desktop (Horizontal Alternate Journey) */}
        <div className="relative max-w-[1100px] mx-auto py-12 hidden lg:block z-10">
          {/* Main Connected Orange Timeline Line */}
          <div className="absolute top-1/2 left-[8%] right-[8%] h-[2px] bg-black/5 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-[8%] right-[8%] h-[2px] bg-secondary/40 -translate-y-1/2 pulse-line"></div>

          <div className="grid grid-cols-6 relative">
            {steps.map((step, idx) => {
              const isAbove = step.placement === 'above'
              const isHovered = hoveredIdx === idx
              const isAnyHovered = hoveredIdx !== null
              const cardOpacity = !isAnyHovered ? 'opacity-90' : isHovered ? 'opacity-100 scale-[1.03]' : 'opacity-30 scale-95'
              
              return (
                <div 
                  key={step.num} 
                  className="flex flex-col items-center relative group"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Above Card Container */}
                  <div className={`h-36 flex flex-col justify-end pb-4 transition-all duration-300 ${cardOpacity} ${
                    isAbove ? 'pointer-events-auto' : 'pointer-events-none opacity-0'
                  }`}>
                    {isAbove && (
                      <div className={`bg-white border p-5 rounded-3xl shadow-sm max-w-[170px] mx-auto transition-all ${
                        isHovered ? 'border-secondary shadow-lg' : 'border-black/5'
                      }`}>
                        <h4 className="font-display font-black text-xs uppercase tracking-widest text-secondary mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[10px] leading-relaxed text-text-grey font-medium">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Marker Node Dot */}
                  <div className="h-12 flex items-center justify-center relative z-20">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer ${
                      isHovered 
                        ? 'bg-secondary text-white border-transparent scale-125 shadow-[0_0_15px_rgba(240,126,37,0.5)]' 
                        : 'bg-white text-primary border-black/10'
                    }`}>
                      <span className="text-[11px] font-black">{step.num}</span>
                    </div>
                  </div>

                  {/* Below Card Container */}
                  <div className={`h-36 flex flex-col justify-start pt-4 transition-all duration-300 ${cardOpacity} ${
                    !isAbove ? 'pointer-events-auto' : 'pointer-events-none opacity-0'
                  }`}>
                    {!isAbove && (
                      <div className={`bg-white border p-5 rounded-3xl shadow-sm max-w-[170px] mx-auto transition-all ${
                        isHovered ? 'border-secondary shadow-lg' : 'border-black/5'
                      }`}>
                        <h4 className="font-display font-black text-xs uppercase tracking-widest text-secondary mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[10px] leading-relaxed text-text-grey font-medium">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Process Timeline - Mobile (Vertical) */}
        <div className="relative max-w-xl mx-auto lg:hidden z-10 pl-4 sm:pl-8">
          <div className="absolute top-4 bottom-4 left-8 sm:left-12 w-[2px] bg-black/5"></div>
          <div className="absolute top-4 bottom-4 left-8 sm:left-12 w-[2px] bg-secondary/30 pulse-line-vertical"></div>
          
          <div className="flex flex-col gap-10 relative">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-6 relative group cursor-default">
                {/* Number Node */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm group-hover:border-secondary transition-colors">
                    <span className="text-xs font-bold text-primary group-hover:text-secondary">{step.num}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border border-black/5 group-hover:shadow-md transition-shadow">
                  <h4 className="font-display font-black text-sm uppercase tracking-widest text-secondary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-grey font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
