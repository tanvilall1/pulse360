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
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] py-1' 
          : 'bg-transparent border-transparent py-4'
      }`}
      id="main-nav"
    >
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop h-16 flex justify-between items-center transition-all duration-500">
        <div className="flex items-center gap-12">
          <a href="#" className="font-display-lg text-2xl font-extrabold tracking-tighter text-primary select-none flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-slate-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="text-white text-sm font-black tracking-widest">P</span>
            </div>
            Pulse 360
          </a>
          
          <div className="hidden lg:flex items-center gap-1 bg-black/5 rounded-full px-2 py-1.5 backdrop-blur-sm border border-black/5">
            {['Platform', 'Suite', 'Outcomes', 'Teams'].map((item) => (
              <a 
                key={item}
                className="text-sm font-semibold text-on-surface/80 hover:text-primary hover:bg-white px-5 py-2 rounded-full transition-all duration-300 cursor-pointer" 
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={onBookDemo}
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-extrabold hover:scale-105 active:scale-95 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_25px_rgba(240,126,37,0.25)] hover:bg-gradient-to-r hover:from-secondary hover:to-[#F1620F]"
          >
            Book a Demo
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-primary hover:bg-black/5 rounded-full transition-all relative z-50 ml-2 bg-white shadow-sm border border-black/5"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Premium Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden top-[72px]"
            />
            
            {/* Drawer Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-black/10 overflow-hidden z-50"
            >
              <div className="p-6 space-y-2">
                {['Platform', 'Suite', 'Outcomes', 'Teams'].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between text-xl font-display font-extrabold text-primary hover:bg-slate-50 p-4 rounded-2xl transition-all"
                  >
                    {item}
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-secondary text-sm">→</span>
                    </div>
                  </motion.a>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pt-6 mt-4 flex flex-col gap-3 border-t border-black/5"
                >
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      onBookDemo()
                    }}
                    className="w-full bg-primary text-white py-4 rounded-full text-sm font-extrabold text-center hover:bg-gradient-to-r hover:from-secondary hover:to-[#F1620F] hover:shadow-lg transition-all"
                  >
                    Book a Demo
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
