import React from 'react'

export default function Cta({ onBookDemo }) {
  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,126,37,0.1)_0%,_transparent_70%)]"></div>
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10 text-center">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight mb-12">
          Make every campaign smarter.
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={onBookDemo}
            className="bg-secondary text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-secondary/30"
          >
            Book a Demo
          </button>
          <button 
            onClick={onBookDemo}
            className="bg-white/5 text-white border border-white/20 px-12 py-5 rounded-full font-black text-xl hover:bg-white hover:text-primary transition-all"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
