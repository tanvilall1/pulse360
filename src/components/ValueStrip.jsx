import React from 'react'

export default function ValueStrip() {
  const valueItems = [
    { label: 'Plan faster', icon: 'bolt', borderClass: '' },
    { label: 'Track competition', icon: 'radar', borderClass: 'border-l border-black/5' },
    { label: 'Govern consistency', icon: 'verified', borderClass: 'border-l border-black/5' },
    { label: 'Measure live', icon: 'monitoring', borderClass: 'border-l border-black/5' }
  ]

  return (
    <section className="py-12 bg-white border-y border-black/5 relative z-30 shadow-sm select-none">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {valueItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-4 justify-center ${
                idx > 0 ? 'lg:border-l lg:border-black/5' : ''
              } group cursor-default`}
            >
              <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="font-black text-[11px] uppercase tracking-[0.2em] text-on-surface/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
