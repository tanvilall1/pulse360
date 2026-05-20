import React from 'react'

export default function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-black/5 select-none">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display text-xl font-extrabold tracking-tighter text-primary">Pulse 360</span>
            <p className="text-on-surface/40 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} dXfactor. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            <a className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 hover:text-secondary transition-colors" href="#">Privacy Policy</a>
            <a className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 hover:text-secondary transition-colors" href="#">Terms of Service</a>
            <a className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 hover:text-secondary transition-colors" href="#">Security</a>
          </div>

          {/* Actions/Socials */}
          <div className="flex gap-4">
            <a 
              className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors" 
              href="#"
              aria-label="Public channel link"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a 
              className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors" 
              href="#"
              aria-label="Share platform link"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
