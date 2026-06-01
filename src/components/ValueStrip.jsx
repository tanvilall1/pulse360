import React from 'react'

export default function ValueStrip() {
  const valueItems = [
    { label: 'Plan faster', desc: 'Turn briefs into structured investment choices.' },
    { label: 'Track competition', desc: 'See market shifts and competitor moves earlier.' },
    { label: 'Govern consistency', desc: 'Keep every campaign aligned across teams and channels.' },
    { label: 'Measure live', desc: 'Optimise while campaigns are still active.' }
  ]

  return (
    <section className="py-8 lg:py-10 bg-white border-y border-black/5 relative z-30 select-none">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-stretch">
          {valueItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-4 px-4 ${
                idx > 0 ? 'md:border-l md:border-black/10' : ''
              } group cursor-default`}
            >
              {/* Subtle orange pulse marker instead of generic icon */}
              <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0 animate-pulse"></span>
              <div className="text-left flex-1">
                <h4 className="font-display font-black text-sm text-primary tracking-tight mb-1 group-hover:text-secondary transition-colors">
                  {item.label}
                </h4>
                <p className="text-text-grey text-[11px] leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
