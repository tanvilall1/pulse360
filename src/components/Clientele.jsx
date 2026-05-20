import React from 'react'

export default function Clientele() {
  const clients = ['Lumina', 'Aether', 'Vortex', 'Apex', 'Horizon', 'Synergy']

  return (
    <section className="py-16 lg:py-24 bg-white select-none">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <h3 className="text-center text-sm font-black uppercase tracking-[0.3em] text-on-surface/40 mb-12">
          Trusted by the world's most ambitious marketing teams.
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
          {clients.map((name, idx) => (
            <div key={idx} className="flex justify-center group cursor-default">
              <span className="font-display text-2xl font-extrabold tracking-tighter text-on-surface/20 group-hover:text-primary transition-all duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
