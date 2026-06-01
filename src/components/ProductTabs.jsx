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
      headline: 'Govern brand consistency at scale.',
      desc: 'Brand Book codifies positioning, tone, messaging rules, communication principles, and risk thresholds so every campaign stays consistent, controlled, and compliant.',
      features: [
        'Brand positioning and narrative framework',
        'Tone of voice and messaging principles',
        'Content and communication guardrails',
        'Brand risk and compliance thresholds',
        'Cross-channel consistency rules'
      ],
      chips: ['Brand Strategy', 'Messaging Rules', 'Compliance Guardrails']
    },
    scout: {
      headline: 'See competitor moves before they become market shifts.',
      desc: 'Pulse Scout tracks competitor activity, creative patterns, visibility trends, share of voice, and market movement across search engines and digital publishers.',
      features: [
        'Competitive ad tracking',
        'Creative and messaging visibility',
        'Share of voice analysis',
        'Market activity monitoring',
        'Trend and change detection'
      ],
      chips: ['Competitor Tracking', 'Creative Visibility', 'Market Trends']
    },
    plan: {
      headline: 'Turn briefs into confident media decisions.',
      desc: 'Pulse Plan transforms campaign briefs into structured, intelligence-led media plans using market context, historical performance, budget logic, and scenario planning.',
      features: [
        'Brief-to-plan workflows',
        'Scenario-based budget modelling',
        'Media mix planning',
        'Channel allocation logic',
        'Investment planning by objective'
      ],
      chips: ['Media Mix', 'Budget Scenarios', 'Plan Approvals']
    },
    engage: {
      headline: 'Make WhatsApp a measurable engagement channel.',
      desc: 'Pulse Engage helps brands create, schedule, approve, target, and measure WhatsApp Business API campaigns from one controlled system.',
      features: [
        'Campaign creation and scheduling',
        'Template and approval management',
        'Audience uploads and segmentation',
        'Opt-in and compliance controls',
        'Message delivery tracking'
      ],
      chips: ['WhatsApp Campaigns', 'Audience Segments', 'Delivery Tracking']
    },
    shift: {
      headline: 'Measure what is working while campaigns are live.',
      desc: 'Pulse Shift gives real-time visibility into campaign exposure, audience response, brand lift, and optimisation opportunities while campaigns are still active.',
      features: [
        'Real-time performance dashboards',
        'Exposure and reach tracking',
        'Audience response signals',
        'Brand lift measurement',
        'Live optimisation indicators'
      ],
      chips: ['Brand Lift', 'Live Dashboards', 'Optimisation Signals']
    }
  }

  const renderVisual = (id) => {
    switch (id) {
      case 'brand':
        return (
          <div className="w-full h-full flex flex-col gap-4 text-left p-2 sm:p-4">
            {/* Header / Brand Rules */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-black/50">Brand Rules</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[8px] font-bold uppercase tracking-wider">COMPLIANT</span>
              </div>
              <p className="text-xs font-bold text-primary">Rule #04: Brand Narrative Claim Guardrail</p>
              <p className="text-[10px] text-text-grey mt-1">Ensure claims on campaign budgets use approved wording.</p>
            </div>
            {/* Tone Guide */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-1">Tone Guide</span>
                <p className="text-xs font-bold text-primary">Confident, Precise, Enterprise-ready</p>
              </div>
              <span className="material-symbols-outlined text-secondary">tune</span>
            </div>
            {/* Approved Claims */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-2">Approved Claims Library</span>
              <div className="space-y-1.5">
                <div className="p-2 bg-white rounded border border-black/5 text-[10px] font-medium text-primary">"The only connected operating system for modern marketing teams."</div>
                <div className="p-2 bg-white rounded border border-black/5 text-[10px] font-medium text-primary">"Drive category growth with brand intelligence & media planning."</div>
              </div>
            </div>
            {/* Risk Flags */}
            <div className="bg-red-50 p-4 rounded-2xl border border-red-100 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">warning</span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-red-700 block">Risk Flag Raised</span>
                <p className="text-[10px] text-red-800 font-bold mt-0.5">Unapproved competitor comparison claim found in media brief #03.</p>
              </div>
            </div>
          </div>
        )
      case 'scout':
        return (
          <div className="w-full h-full flex flex-col gap-4 text-left p-2 sm:p-4">
            {/* Share of Voice */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-3">Share of Voice Index</span>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-primary mb-1"><span>Pulse 360</span><span>42%</span></div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden"><div className="h-full bg-secondary w-[42%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-primary mb-1"><span>Competitor Alpha</span><span>28%</span></div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden"><div className="h-full bg-slate-400 w-[28%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-primary mb-1"><span>Competitor Beta</span><span>15%</span></div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden"><div className="h-full bg-slate-300 w-[15%]"></div></div>
                </div>
              </div>
            </div>
            {/* Competitor Timeline */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-2">Competitor Activity Feed</span>
              <div className="space-y-2">
                <div className="flex gap-2 text-[10px]">
                  <span className="text-secondary font-black">10:42 AM</span>
                  <span className="text-primary font-bold">Alpha launched 12 new video creatives on YouTube.</span>
                </div>
                <div className="flex gap-2 text-[10px]">
                  <span className="text-slate-400 font-black">Yesterday</span>
                  <span className="text-primary">Beta increased search bids in category "Marketing intelligence".</span>
                </div>
              </div>
            </div>
            {/* Creative Examples */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-2">Creative Visual Tracking</span>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-video bg-slate-200 rounded border border-black/5 flex items-center justify-center text-[8px] font-bold text-black/40">Creative A</div>
                <div className="aspect-video bg-slate-200 rounded border border-black/5 flex items-center justify-center text-[8px] font-bold text-black/40">Creative B</div>
                <div className="aspect-video bg-slate-200 rounded border border-black/5 flex items-center justify-center text-[8px] font-bold text-black/40">Creative C</div>
              </div>
            </div>
            {/* Market Alert */}
            <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-100 flex gap-2">
              <span className="material-symbols-outlined text-amber-600 text-sm mt-0.5">notification_important</span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">Market bidding alert</span>
                <p className="text-[9px] text-amber-800 font-bold mt-0.5">Search auction bids spiked 18% in media operating system segment.</p>
              </div>
            </div>
          </div>
        )
      case 'plan':
        return (
          <div className="w-full h-full flex flex-col gap-4 text-left p-2 sm:p-4">
            {/* Campaign Brief */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-2">Campaign Brief</span>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div><span className="text-black/40 block">Campaign Objective</span><span className="font-bold text-primary">Brand recall & leads</span></div>
                <div><span className="text-black/40 block">Target Budget</span><span className="font-bold text-primary">$450,000 USD</span></div>
              </div>
            </div>
            {/* Budget Split & Media Mix */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-3">Scenario B: Recommended Media Mix</span>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-primary">Connected TV (CTV)</span>
                  <span className="text-secondary font-black">40% ($180k)</span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-primary">Social (LinkedIn & Meta)</span>
                  <span className="text-secondary font-black">35% ($157.5k)</span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-primary">Search & Programmatic</span>
                  <span className="text-secondary font-black">25% ($112.5k)</span>
                </div>
              </div>
            </div>
            {/* Scenario Comparison */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-2xl border border-secondary/30 shadow-sm relative">
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <p className="text-[9px] font-black uppercase tracking-wider text-secondary">Scenario A (Standard)</p>
                <p className="text-xs font-bold text-primary mt-1">4.2M Est. Reach</p>
                <p className="text-[8px] text-text-grey mt-0.5">+8.4% Brand lift</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-black/5">
                <p className="text-[9px] font-black uppercase tracking-wider text-black/40">Scenario B (Optimised)</p>
                <p className="text-xs font-bold text-primary mt-1">5.8M Est. Reach</p>
                <p className="text-[8px] text-text-grey mt-0.5">+14.2% Brand lift</p>
              </div>
            </div>
          </div>
        )
      case 'engage':
        return (
          <div className="w-full h-full flex flex-col gap-4 text-left p-2 sm:p-4">
            {/* Message Template Preview */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-2">WhatsApp Message Template</span>
              <div className="bg-[#E7F3EF] p-3 rounded-lg border border-[#BDE0D4] max-w-[220px] shadow-sm">
                <p className="text-[9px] text-primary/80 font-bold">Pulse 360 Official</p>
                <p className="text-[10px] text-primary leading-snug mt-1 font-medium font-body">Hi {"{{"}name{"}}"}, ready to elevate your campaign orchestration? Discover scenario planning today.</p>
                <div className="mt-2 pt-1.5 border-t border-[#BDE0D4] text-center text-[9px] font-black text-emerald-800">
                  Book a Demo
                </div>
              </div>
            </div>
            {/* Audience Segments & Opt-in Badge */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-2xl border border-black/5">
                <span className="text-[9px] font-black uppercase tracking-wider text-black/40 block mb-1">Target Segment</span>
                <p className="text-xs font-bold text-primary">Media Leaders (Enterprise)</p>
                <p className="text-[8px] text-text-grey mt-0.5">14,200 recipients</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-100 flex flex-col justify-center">
                <span className="text-[9px] font-black uppercase tracking-wider text-emerald-700 block">Opt-In compliance</span>
                <p className="text-[10px] text-emerald-800 font-bold mt-1">100% Opt-In Verified</p>
              </div>
            </div>
            {/* Delivery Status Bars */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-2">Real-Time Delivery tracking</span>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[9px] font-bold text-primary"><span>Delivered (98.4%)</span><span>13,972</span></div>
                <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[98.4%]"></div></div>
                <div className="flex justify-between text-[9px] font-bold text-primary mt-1"><span>Read / Opened (87.2%)</span><span>12,382</span></div>
                <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden"><div className="h-full bg-secondary w-[87.2%]"></div></div>
              </div>
            </div>
          </div>
        )
      case 'shift':
        return (
          <div className="w-full h-full flex flex-col gap-4 text-left p-2 sm:p-4">
            {/* Exposure Dashboard */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-2">Exposure Dashboard</span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-2 rounded border border-black/5"><p className="text-black/40 text-[8px] font-bold">Impressions</p><p className="text-xs font-black text-primary">4.2M</p></div>
                <div className="bg-white p-2 rounded border border-black/5"><p className="text-black/40 text-[8px] font-bold">Frequency</p><p className="text-xs font-black text-primary">3.1x</p></div>
                <div className="bg-white p-2 rounded border border-black/5"><p className="text-black/40 text-[8px] font-bold">Reach Rate</p><p className="text-xs font-black text-emerald-600">89.4%</p></div>
              </div>
            </div>
            {/* Brand Lift Trend */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-black/5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/50 block mb-2">Brand Lift Trend (+18.4% Lift)</span>
              <div className="h-20 relative flex items-end">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,80 Q25,70 50,45 T100,10" fill="none" stroke="#F07E25" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  <path d="M0,80 Q25,70 50,45 T100,10 L100,100 L0,100 Z" fill="url(#shiftGrad)" opacity="0.15" />
                  <defs>
                    <linearGradient id="shiftGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F07E25"/>
                      <stop offset="100%" stopColor="#F07E25" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Live Optimisation Indicators */}
            <div className="bg-secondary/10 p-3.5 rounded-2xl border border-secondary/20 flex gap-2.5">
              <span className="material-symbols-outlined text-secondary text-sm mt-0.5">dynamic_feed</span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-secondary">Optimisation recommendation</span>
                <p className="text-[10px] text-primary font-bold mt-0.5">Shift $32,000 from low-recall segments to video channels.</p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-[#fafafa] select-none border-y border-black/5" id="suite">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white border border-black/5 rounded-full text-[10px] font-black text-secondary uppercase tracking-widest mb-6 shadow-sm">
              THE PULSE 360 SUITE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-primary mb-6">
              Five connected products. One intelligence loop.
            </h2>
            <p className="text-text-grey text-lg sm:text-xl font-medium leading-relaxed">
              Each Pulse 360 product solves a specific marketing challenge. Together, they create a system where market signals inform planning, brand rules guide execution, engagement captures response, and measurement improves the next decision.
            </p>
          </div>

          {/* Desktop Tabs UI */}
          <div className="hidden lg:block">
            {/* Tabs Navigation */}
            <div className="flex justify-center gap-4 border-b border-black/5 pb-6 mb-12">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`font-display font-black text-[11px] uppercase tracking-widest px-5 py-3 rounded-xl transition-all relative overflow-hidden ${
                      isActive 
                        ? 'text-secondary bg-secondary/10 border-b-2 border-secondary font-black' 
                        : 'text-black/40 hover:text-primary hover:bg-slate-100/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Dynamic Content Grid (Desktop) */}
            <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[500px]">
              {/* Product Info (Headline first, Description second, Features third, Chips fourth) */}
              <div className="lg:col-span-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6 text-left"
                  >
                    <h3 className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight text-primary">
                      {tabData[activeTab].headline}
                    </h3>
                    <p className="text-text-grey text-lg leading-relaxed font-medium">
                      {tabData[activeTab].desc}
                    </p>
                    <ul className="space-y-4 pt-2">
                      {tabData[activeTab].features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 font-semibold text-sm text-primary">
                          <span className="material-symbols-outlined text-secondary shrink-0 text-xl">check_circle</span>
                          <span className="mt-0.5">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 flex-wrap pt-4">
                      {tabData[activeTab].chips.map((chip, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 rounded-full bg-white text-[10px] font-black uppercase tracking-widest text-primary border border-black/10 shadow-sm"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Graphic/Visual Side */}
              <div className="lg:col-span-6 relative rounded-[2rem] shadow-xl bg-white p-6 border border-black/5 flex items-center justify-center min-h-[460px] max-h-[500px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full"
                  >
                    {renderVisual(activeTab)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Accordion UI */}
          <div className="lg:hidden space-y-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <div key={tab.id} className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden transition-all">
                  <button
                    onClick={() => setActiveTab(isActive ? '' : tab.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className={`font-display font-black text-sm uppercase tracking-widest ${isActive ? 'text-secondary' : 'text-primary'}`}>
                      {tab.label}
                    </span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isActive ? 'rotate-180 text-secondary' : 'text-black/30'}`}>
                      keyboard_arrow_down
                    </span>
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 space-y-6">
                          <h3 className="text-2xl font-extrabold tracking-tight text-primary">
                            {tabData[tab.id].headline}
                          </h3>
                          <p className="text-text-grey text-sm font-medium">
                            {tabData[tab.id].desc}
                          </p>
                          <ul className="space-y-3">
                            {tabData[tab.id].features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-3 font-semibold text-xs text-primary">
                                <span className="material-symbols-outlined text-secondary shrink-0 text-lg">check_circle</span>
                                <span className="mt-0.5">{feat}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2 pb-6 border-t border-black/5 mt-4">
                            {renderVisual(tab.id)}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Connection Line & CTA */}
          <div className="mt-16 pt-16 border-t border-black/5 text-center">
            <p className="text-primary font-bold text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Scout informs Plan. Brand Book governs execution. Engage activates audiences. Shift measures impact. Learning feeds back into the system.
            </p>
            <button 
              onClick={onBookDemo}
              className="bg-primary text-white border border-secondary px-8 py-3.5 rounded-full font-black text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/20 hover:bg-gradient-to-r hover:from-secondary hover:to-deep-orange hover:border-transparent"
            >
              Book a Demo
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
