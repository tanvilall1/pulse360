import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('brand')

  const tabs = [
    { id: 'brand', label: 'Brand Book' },
    { id: 'scout', label: 'Pulse Scout' },
    { id: 'plan', label: 'Pulse Plan' },
    { id: 'engage', label: 'Pulse Engage' },
    { id: 'shift', label: 'Pulse Shift' }
  ]

  const tabData = {
    brand: {
      category: 'Global Governance',
      title: 'The ultimate source of truth for global brand assets.',
      desc: 'Automate brand governance with a living digital brand book that connects directly to your execution channels.',
      features: [
        'Automated asset compliance checks',
        'Real-time style guide distribution',
        'Dynamic DAM integration'
      ],
      tags: ['Compliance AI', 'Global Sync'],
      visual: (
        <div className="w-full h-full bg-white rounded-xl shadow-inner border border-black/5 overflow-hidden flex flex-col">
          <div className="h-12 border-b border-black/5 flex items-center px-6 gap-3 shrink-0 bg-slate-50/50">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <div className="flex-1"></div>
            <div className="text-[9px] font-mono font-bold text-black/30 uppercase tracking-widest">Brand_Book_v4.2</div>
          </div>
          <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center items-center gap-8 bg-white">
            <motion.div 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg"
            >
              P
            </motion.div>
            <div className="space-y-3 w-full max-w-[200px]">
              <div className="h-2 bg-black/5 rounded-full w-full"></div>
              <div className="h-2 bg-black/5 rounded-full w-3/4 mx-auto"></div>
            </div>
            <div className="grid grid-cols-4 gap-2 w-full mt-4">
              <div className="aspect-square bg-secondary/15 rounded-lg border border-secondary/20"></div>
              <div className="aspect-square bg-black/5 rounded-lg"></div>
              <div className="aspect-square bg-black/5 rounded-lg"></div>
              <div className="aspect-square bg-black/5 rounded-lg"></div>
            </div>
          </div>
        </div>
      )
    },
    scout: {
      category: 'Market Intelligence',
      title: 'Real-time competitive intelligence and market dynamics.',
      desc: 'Deploy automated bots to track competitor moves, category shifts, and live sentiment analysis.',
      features: [
        'Competitor creative monitoring',
        'Market sentiment tracking',
        'Share of voice analysis'
      ],
      tags: ['SOV Tracking', 'Ad Intel'],
      visual: (
        <div className="w-full h-full bg-white rounded-xl shadow-inner border border-black/5 overflow-hidden flex flex-col">
          <div className="h-12 border-b border-black/5 flex items-center px-6 gap-3 shrink-0 bg-slate-50/50">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <div className="flex-1"></div>
            <div className="text-[9px] font-mono font-bold text-black/30 uppercase tracking-widest font-mono">SCOUT_RADAR_SYNC</div>
          </div>
          <div className="flex-1 p-6 sm:p-8 bg-slate-50 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="w-full h-20 bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="material-symbols-outlined text-4xl text-secondary/30">image</span>
                <div className="absolute inset-0 border border-dashed border-secondary/50 rounded-lg animate-pulse" />
              </div>
              <div className="space-y-1.5 mt-3">
                <div className="h-2 bg-black/10 rounded-full w-3/4"></div>
                <div className="h-1.5 bg-black/5 rounded-full w-1/2"></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm flex flex-col justify-between">
              <div className="flex-1 flex flex-col justify-center items-center gap-3">
                <div className="w-14 h-14 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center font-bold text-xs text-emerald-500 animate-[spin_8s_linear_infinite]">
                  +42%
                </div>
                <span className="text-[9px] font-bold text-black/40 uppercase tracking-wider">SENTIMENT INDEX</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    plan: {
      category: 'Media Mix Optimization',
      title: 'Optimise media mix allocation with scenario modeling.',
      desc: 'Simulate campaign performance outcomes before spending. Turn media briefs into structured investment plans.',
      features: [
        'AI Scenario modeling',
        'Cross-channel budget weights',
        'Predictive lift graphs'
      ],
      tags: ['Media Mix', 'Scenario Dev'],
      visual: (
        <div className="w-full h-full bg-white rounded-xl shadow-inner border border-black/5 overflow-hidden flex flex-col">
          <div className="h-12 border-b border-black/5 flex items-center px-6 gap-3 shrink-0 bg-slate-50/50">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <div className="flex-1"></div>
            <div className="text-[9px] font-mono font-bold text-black/30 uppercase tracking-widest font-mono">SCENARIO_MODELER</div>
          </div>
          <div className="flex-1 p-6 sm:p-8 bg-white flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-bold text-black/50">
                  <span>SEARCH & PAID</span>
                  <span className="text-secondary">$840,000</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-3/4 rounded-full" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-bold text-black/50">
                  <span>SOCIAL & DISPLAY</span>
                  <span className="text-emerald-500">$1,200,000</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[90%] rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="h-24 border border-black/5 rounded-xl bg-slate-50/50 overflow-hidden relative">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 80">
                <path d="M 0,60 Q 60,20 120,40 T 240,10 T 300,30" fill="none" stroke="#F07E25" strokeWidth="2" />
                <path d="M 0,60 Q 60,20 120,40 T 240,10 T 300,30 L 300,80 L 0,80 Z" fill="#F07E25" fillOpacity="0.05" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    engage: {
      category: 'Audience Activation',
      title: 'Engage audience cohorts through automated channels.',
      desc: 'Build conditional triggers across messaging, email, and live WhatsApp activations automatically.',
      features: [
        'Conditional cohort builders',
        'WhatsApp Business activations',
        'Triggered multi-channel routing'
      ],
      tags: ['Activations', 'Engage Core'],
      visual: (
        <div className="w-full h-full bg-white rounded-xl shadow-inner border border-black/5 overflow-hidden flex flex-col">
          <div className="h-12 border-b border-black/5 flex items-center px-6 gap-3 shrink-0 bg-slate-50/50">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <div className="flex-1"></div>
            <div className="text-[9px] font-mono font-bold text-black/30 uppercase tracking-widest font-mono">FLOW_ACTIVATOR_V1</div>
          </div>
          <div className="flex-1 p-6 sm:p-8 bg-slate-50 flex flex-col justify-center items-center gap-4">
            <div className="flex items-center gap-3 w-full max-w-[280px] p-3 rounded-xl bg-white border border-black/5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">chat</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-[9px] font-bold text-black/30 uppercase tracking-wider">TRIGGER</p>
                <p className="text-[11px] font-black text-on-surface">Stripe Checkout Success</p>
              </div>
            </div>
            <div className="w-0.5 h-6 bg-secondary/30" />
            <div className="flex items-center gap-3 w-full max-w-[280px] p-3 rounded-xl bg-white border border-black/5 shadow-sm border-l-2 border-l-secondary">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">forward</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-[9px] font-bold text-secondary uppercase tracking-wider">ACTION</p>
                <p className="text-[11px] font-black text-on-surface">WhatsApp Onboarding Dispatch</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    shift: {
      category: 'ROI Attribution',
      title: 'Connect campaign execution directly to financial outcomes.',
      desc: 'Trace complete conversion paths from initial competitive signal to transaction, attributing ROI perfectly.',
      features: [
        'Multi-touch conversion tracking',
        'Raw clickstream tracking',
        'Executive ROI dashboards'
      ],
      tags: ['Attribution', 'ROI Tracking'],
      visual: (
        <div className="w-full h-full bg-white rounded-xl shadow-inner border border-black/5 overflow-hidden flex flex-col">
          <div className="h-12 border-b border-black/5 flex items-center px-6 gap-3 shrink-0 bg-slate-50/50">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <div className="flex-1"></div>
            <div className="text-[9px] font-mono font-bold text-black/30 uppercase tracking-widest font-mono">ATTRIBUTION_ENGINE</div>
          </div>
          <div className="flex-1 p-6 sm:p-8 bg-white flex flex-col justify-between select-none">
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-black/5">
              <div className="text-left">
                <p className="text-[9px] font-bold text-black/30 uppercase tracking-wider">CAMPAIGN ROI</p>
                <p className="text-2xl font-black text-secondary">4.8x</p>
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[9px] font-mono font-bold rounded-lg border border-emerald-500/20">
                +18% LIFT
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 w-full mt-4 font-mono text-[8px] text-black/40 text-left">
              <div className="p-2 bg-slate-50 rounded-lg border border-black/5">
                <p className="font-bold text-primary">Google Ads</p>
                <p className="mt-1">32% weight</p>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-black/5">
                <p className="font-bold text-primary">WhatsApp</p>
                <p className="mt-1">45% weight</p>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-black/5">
                <p className="font-bold text-primary">Display</p>
                <p className="mt-1">23% weight</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-white select-none" id="platform-tabs">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="max-w-5xl mx-auto">
          {/* Tabs Navigation Header */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-12 border-b border-black/5 pb-2 mb-10 lg:mb-12">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-black text-[11px] uppercase tracking-widest px-4 pb-4 transition-all ${
                    isActive ? 'text-secondary border-b-2 border-secondary' : 'text-black/30 hover:text-secondary'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Dynamic Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 text-left"
              >
                <div className="inline-block px-3 py-1 bg-secondary/10 rounded text-[10px] font-black text-secondary uppercase tracking-widest">
                  {tabData[activeTab].category}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-primary">
                  {tabData[activeTab].title}
                </h3>
                <p className="text-on-surface/60 text-lg leading-relaxed">
                  {tabData[activeTab].desc}
                </p>
                <ul className="space-y-4">
                  {tabData[activeTab].features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary shrink-0">verified</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  {tabData[activeTab].tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-widest text-black/40 border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Graphic/Visual Side */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-slate-100 p-4 sm:p-8 border border-black/5 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {tabData[activeTab].visual}
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
