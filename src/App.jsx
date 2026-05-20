import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, CheckCircle2, ArrowRight } from 'lucide-react'

// Import all premium components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueStrip from './components/ValueStrip'
import ProductTabs from './components/ProductTabs'
import CommandCenter from './components/CommandCenter'
import ProcessFlow from './components/ProcessFlow'
import Metrics from './components/Metrics'
import Teams from './components/Teams'
import Clientele from './components/Clientele'
import StartPaths from './components/StartPaths'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '10-50',
    note: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    setIsSubmitted(false)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Clear form
    setFormData({
      name: '',
      email: '',
      company: '',
      size: '10-50',
      note: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="relative bg-white text-on-surface min-h-screen selection:bg-secondary/30 selection:text-on-surface overflow-x-hidden">
      {/* Stick sticky components in a layout z-wrapper */}
      <div className="relative z-10">
        <Navbar onBookDemo={handleOpenModal} />
        
        <main>
          <Hero onBookDemo={handleOpenModal} />
          <ValueStrip />
          <ProcessFlow />
          <ProductTabs />
          <CommandCenter />
          <Metrics />
          <Teams />
          <Clientele />
          <StartPaths onBookDemo={handleOpenModal} />
          <Cta onBookDemo={handleOpenModal} />
          <Footer />
        </main>
      </div>

      {/* Book a Demo Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="w-full max-w-lg rounded-3xl border border-outline-variant bg-surface p-8 relative overflow-hidden shadow-2xl z-10 select-none text-left"
            >
              {/* Corner Glow decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full filter blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-2 rounded-xl text-on-surface-variant hover:bg-on-surface/5 transition-all"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Header */}
                    <div className="mb-6 flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-xl text-on-surface">Book a Technical Demo</h3>
                        <p className="text-xs text-on-surface-variant/70 font-mono mt-0.5">Custom 30-minute infrastructure consult</p>
                      </div>
                    </div>

                    {/* Booking Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-bold font-mono text-on-surface-variant uppercase mb-1.5">FULL NAME</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tanvi Lall"
                          className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-[10px] font-bold font-mono text-on-surface-variant uppercase mb-1.5">COMPANY EMAIL</label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="tanvi@dxfactor.com"
                            className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-secondary transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-[10px] font-bold font-mono text-on-surface-variant uppercase mb-1.5">COMPANY NAME</label>
                          <input
                            type="text"
                            id="company"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="dXfactor"
                            className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-secondary transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="size" className="block text-[10px] font-bold font-mono text-on-surface-variant uppercase mb-1.5">TEAM SIZE</label>
                        <select
                          id="size"
                          value={formData.size}
                          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                          className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-secondary transition-colors cursor-pointer"
                        >
                          <option value="1-10">1 - 10 developers</option>
                          <option value="10-50">10 - 50 developers</option>
                          <option value="50-250">50 - 250 developers</option>
                          <option value="250+">250+ enterprise developers</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="note" className="block text-[10px] font-bold font-mono text-on-surface-variant uppercase mb-1.5">CORE USE CASE (OPTIONAL)</label>
                        <textarea
                          id="note"
                          rows="3"
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          placeholder="Tell us what workflows you want to automate..."
                          className="w-full bg-surface border border-outline-variant rounded-xl p-4 text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-secondary transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-display font-semibold text-sm text-white bg-gradient-to-r from-secondary to-[#F1620F] hover:shadow-[0_10px_25px_rgba(240,126,37,0.25)] transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2 font-mono text-xs">
                              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              INITIATING PIPELINE ALLOCATION...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Schedule Session
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center flex flex-col items-center space-y-5"
                  >
                    <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-on-surface">Demo Scheduled!</h3>
                      <p className="text-on-surface-variant text-sm font-light max-w-sm mx-auto leading-relaxed">
                        Excellent, <span className="text-secondary font-semibold">{formData.name}</span>. We've reserved a dedicated sandbox pipeline for <span className="text-on-surface font-medium">{formData.company}</span>.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface-variant border border-outline-variant font-mono text-[10px] text-on-surface-variant space-y-1 w-full max-w-sm">
                      <p className="flex justify-between"><span>ALLOCATED HOST</span><span className="text-emerald-500">AWS-US-EAST-1D</span></p>
                      <p className="flex justify-between"><span>CONTACT ROUTE</span><span className="text-on-surface">{formData.email}</span></p>
                      <p className="flex justify-between"><span>INVITATION TICKET</span><span className="text-secondary">#PULSE-DEMO-{Math.floor(1000 + Math.random() * 9000)}</span></p>
                    </div>

                    <button
                      onClick={handleCloseModal}
                      className="px-6 py-2.5 rounded-full font-display font-medium text-xs text-on-surface bg-surface-variant border border-outline-variant hover:bg-on-surface/5 transition-all"
                    >
                      Return to Dashboard
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
