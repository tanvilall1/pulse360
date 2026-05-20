import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onBookDemo }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className="fixed top-0 w-full z-[100] transition-all duration-300 glass-nav" 
      id="main-nav"
      style={{
        boxShadow: isScrolled ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' : 'none',
        background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'
      }}
    >
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop h-20 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="#" className="font-display-lg text-2xl font-extrabold tracking-tighter text-primary select-none">
            Pulse 360
          </a>
          <div className="hidden lg:flex gap-8">
            <a className="text-sm font-semibold text-on-surface/70 hover:text-secondary transition-colors" href="#platform">Platform</a>
            <a className="text-sm font-semibold text-on-surface/70 hover:text-secondary transition-colors" href="#solutions">Solutions</a>
            <a className="text-sm font-semibold text-on-surface/70 hover:text-secondary transition-colors" href="#customers">Customers</a>
            <a className="text-sm font-semibold text-on-surface/70 hover:text-secondary transition-colors" href="#pricing">Pricing</a>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-sm font-bold text-on-surface/80 hover:text-secondary transition-colors hidden sm:inline-block">
            Log in
          </button>
          <button
            onClick={onBookDemo}
            className="bg-primary text-on-primary px-7 py-2.5 rounded-full text-sm font-extrabold active:scale-95 transition-all shadow-md hover:bg-secondary"
          >
            Book a Demo
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-on-surface hover:text-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <a
                href="#platform"
                onClick={() => setIsOpen(false)}
                className="block text-base font-semibold text-on-surface/70 hover:text-secondary py-2"
              >
                Platform
              </a>
              <a
                href="#solutions"
                onClick={() => setIsOpen(false)}
                className="block text-base font-semibold text-on-surface/70 hover:text-secondary py-2"
              >
                Solutions
              </a>
              <a
                href="#customers"
                onClick={() => setIsOpen(false)}
                className="block text-base font-semibold text-on-surface/70 hover:text-secondary py-2"
              >
                Customers
              </a>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="block text-base font-semibold text-on-surface/70 hover:text-secondary py-2"
              >
                Pricing
              </a>
              <div className="pt-4 flex flex-col gap-4 border-t border-black/5">
                <button className="w-full py-3 text-center text-sm font-bold text-on-surface/80 hover:text-secondary transition-colors">
                  Log in
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    onBookDemo()
                  }}
                  className="w-full bg-primary text-on-primary py-3 rounded-full text-sm font-extrabold text-center hover:bg-secondary transition-colors"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
