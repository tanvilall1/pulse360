import React from 'react'

export default function Cta({ onBookDemo }) {
  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,126,37,0.1)_0%,_transparent_70%)]"></div>
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10 text-center">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight mb-6">
          Make every campaign smarter.
        </h2>
        <p className="text-white/50 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          Book a Pulse 360 demo to see how your brand can connect planning, intelligence, engagement, governance, and measurement into one growth system.
        </p>
        <div className="flex justify-center">
          <button 
            onClick={onBookDemo}
            className="bg-secondary text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-secondary/30"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
