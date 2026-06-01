import React from 'react'

export default function Footer() {
  return (
    <footer className="py-16 bg-[#050505] text-white select-none">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <span className="font-display text-xl font-extrabold tracking-tighter text-white">Pulse 360</span>
            <p className="text-white/40 text-xs leading-relaxed mt-4 max-w-xs">
              The next-fit marketing operating system built for precision and growth.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-4">Platform</h4>
            <ul className="space-y-3">
              {['Pulse Scout', 'Brand Book', 'Pulse Plan', 'Pulse Engage', 'Pulse Shift'].map(link => (
                <li key={link}>
                  <a className="text-xs font-medium text-white/40 hover:text-secondary transition-colors" href="#suite">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Contact Sales', 'Resources', 'Privacy'].map(link => (
                <li key={link}>
                  <a className="text-xs font-medium text-white/40 hover:text-secondary transition-colors" href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div></div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
            © 2025 dXfactor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
