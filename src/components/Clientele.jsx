import React from 'react'

export default function Clientele() {
  const labels = ['Enterprise Brands', 'Media Teams', 'Growth Teams', 'Agencies', 'Consumer Insight Teams']

  return (
    <section className="py-16 lg:py-24 bg-white select-none">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <h3 className="text-center text-sm font-black uppercase tracking-[0.3em] text-on-surface/40 mb-12">
          Built for teams modernising how marketing decisions get made.
        </h3>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {labels.map((name, idx) => (
            <div key={idx} className="px-6 py-3 rounded-full border border-black/5 bg-slate-50 group cursor-default hover:border-secondary/20 hover:bg-secondary/5 transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface/40 group-hover:text-primary transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
