import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CommandCenter() {
  const [activeTab, setActiveTab] = useState('health')

  const sidebarItems = [
    { id: 'health', label: 'Marketing Health', icon: 'grid_view' },
    { id: 'budget', label: 'Budget Allocation', icon: 'payments' },
    { id: 'actions', label: 'Next Best Actions', icon: 'rocket_launch' },
    { id: 'intelligence', label: 'Intelligence', icon: 'insights' }
  ]

  const contents = {
    health: {
      title: 'Marketing Health Console',
      desc: 'Live updates from all global regions',
      metrics: [
        { label: 'Efficiency Index', value: '92.4', barWidth: '92%', colorClass: 'bg-secondary' },
        { label: 'Brand Consistency', value: '98.1%', barWidth: '98%', colorClass: 'bg-emerald-500' },
        { label: 'Media ROI', value: '4.8x', barWidth: '80%', colorClass: 'bg-blue-500' }
      ],
      viz: (
        <svg className="w-full h-40 opacity-70" viewBox="0 0 400 150">
          <path
            d="M 10,120 Q 80,40 150,90 T 300,30 T 390,70"
            fill="none"
            stroke="#F07E25"
            strokeWidth="3"
            strokeLinecap="round"
            className="pulse-line"
          />
          <circle cx="150" cy="90" r="4" fill="#F07E25" />
          <circle cx="300" cy="30" r="4" fill="#F07E25" />
          <path
            d="M 10,120 Q 80,40 150,90 T 300,30 T 390,70 L 390,150 L 10,150 Z"
            fill="url(#viz-grad)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="viz-grad" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#F07E25" />
              <stop offset="100%" stopColor="#F07E25" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    budget: {
      title: 'Budget Allocation Monitor',
      desc: 'Real-time media mix allocation weights',
      metrics: [
        { label: 'Search & Paid', value: '$840K', barWidth: '70%', colorClass: 'bg-blue-500' },
        { label: 'Social & Display', value: '$1.2M', barWidth: '85%', colorClass: 'bg-secondary' },
        { label: 'Dynamic Video', value: '$450K', barWidth: '45%', colorClass: 'bg-orange-400' }
      ],
      viz: (
        <div className="flex justify-around items-end w-full h-32 px-10">
          <div className="flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} animate={{ height: '70px' }} className="w-12 bg-blue-500 rounded-t-lg" />
            <span className="text-[9px] text-white/50">Search</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} animate={{ height: '110px' }} className="w-12 bg-secondary rounded-t-lg" />
            <span className="text-[9px] text-white/50">Social</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} animate={{ height: '50px' }} className="w-12 bg-orange-400 rounded-t-lg" />
            <span className="text-[9px] text-white/50">Video</span>
          </div>
        </div>
      )
    },
    actions: {
      title: 'Next Best Actions AI',
      desc: 'Cognitive recommendation engines active',
      metrics: [
        { label: 'Confidence Score', value: '94.2%', barWidth: '94%', colorClass: 'bg-emerald-500' },
        { label: 'Actions Staged', value: '4 Ready', barWidth: '60%', colorClass: 'bg-secondary' },
        { label: 'Auto-pilot Sync', value: 'Active', barWidth: '100%', colorClass: 'bg-blue-500' }
      ],
      viz: (
        <div className="w-full max-w-md mx-auto text-left space-y-3 font-mono text-[10px] text-white/70">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center">
            <span>🚀 REALLOCATE SOCIAL BUDGET TO HIGH-ROI CAMPAIGNS</span>
            <span className="text-secondary font-bold">EXECUTE</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center">
            <span>⚠️ ADJUST AD GOVERNANCE WARNING DISPATCH LIMIT</span>
            <span className="text-emerald-500 font-bold">RESOLVED</span>
          </div>
        </div>
      )
    },
    intelligence: {
      title: 'Intelligence Signals Stream',
      desc: 'Live intelligence parsing competitor moves',
      metrics: [
        { label: 'Tracked Competitors', value: '12 Brands', barWidth: '85%', colorClass: 'bg-secondary' },
        { label: 'Signals Processed', value: '4,812 /s', barWidth: '95%', colorClass: 'bg-emerald-500' },
        { label: 'Market Opportunity', value: 'High', barWidth: '90%', colorClass: 'bg-blue-500' }
      ],
      viz: (
        <div className="w-full max-w-md mx-auto text-left space-y-1 font-mono text-[9px] text-emerald-400/80 max-h-32 overflow-hidden select-none">
          <p className="animate-pulse">&gt; [16:37:04] INGEST: competitor "Apex" updated brand assets on WhatsApp</p>
          <p>&gt; [16:37:02] PARSE: WhatsApp activation clickstream routing ok</p>
          <p>&gt; [16:37:00] UPDATE: Global efficiency score calibrated to 92.4</p>
          <p className="text-white/20">&gt; [16:36:55] IDLE: waiting for stream buffer...</p>
        </div>
      )
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-white select-none" id="command">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight text-primary">
            One command center.
          </h2>
          <p className="text-on-surface/40 text-lg sm:text-xl mt-6 max-w-2xl mx-auto font-medium">
            Unified operations across intelligence, planning, and measurement.
          </p>
        </div>

        {/* UI Mockup Wrapper */}
        <div className="relative bg-slate-950 rounded-[2rem] sm:rounded-[3rem] p-4 lg:p-10 border border-black/10 shadow-3xl overflow-hidden mb-0">
          <div className="bg-[#0a0a0c] rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row min-h-[600px]">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-black/40 border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white font-black text-lg">P</div>
                <span className="text-white font-black tracking-tight text-sm">Pulse OS</span>
              </div>
              <nav className="space-y-3">
                {sidebarItems.map((item) => {
                  const isActive = activeTab === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors text-left ${
                        isActive 
                          ? 'bg-white/5 text-secondary border border-white/10' 
                          : 'text-white/40 hover:text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">{item.icon}</span>
                      {item.label}
                    </button>
                  )
                })}
              </nav>
            </aside>

            {/* Main Area */}
            <main className="flex-1 p-6 lg:p-10 bg-[#0c0c0e] text-left">
              <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10">
                <div>
                  <h4 className="text-white text-xl font-bold">{contents[activeTab].title}</h4>
                  <p className="text-white/40 text-xs mt-1">{contents[activeTab].desc}</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-white/60 text-[10px] font-bold">REGION: GLOBAL</div>
                  <div className="bg-secondary/20 text-secondary px-4 py-2 rounded-lg border border-secondary/30 text-[10px] font-bold">LIVE SYNC ACTIVE</div>
                </div>
              </header>

              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {contents[activeTab].metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
                    <p className="text-white/40 text-[10px] font-bold uppercase mb-2">{metric.label}</p>
                    <p className="text-white text-3xl font-black">{metric.value}</p>
                    <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: metric.barWidth }}
                        transition={{ duration: 0.8 }}
                        className={`h-full ${metric.colorClass}`} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Visualization Canvas */}
              <div className="bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 min-h-[256px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-col items-center justify-center text-center space-y-4"
                  >
                    {contents[activeTab].viz}
                    <p className="text-white/20 font-black text-xs uppercase tracking-[0.3em] mt-4">
                      Operational Visualisation Engine
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  )
}
