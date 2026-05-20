import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUpMetric({ value, label, desc, isPercent = true, isMultiplier = false }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const target = parseFloat(value)
    const duration = 2000 // 2 seconds
    const startTime = performance.now()

    let animationFrameId;

    const update = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3) // cubic ease-out
      const val = start + (target - start) * easeProgress
      
      setCurrent(val)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update)
      } else {
        setCurrent(target)
      }
    }

    animationFrameId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isInView, value])

  const displayVal = isMultiplier 
    ? `${current.toFixed(1).replace('.0', '')}x` 
    : `${Math.floor(current)}${isPercent ? '%' : ''}`

  return (
    <div ref={ref} className="metric-card bg-white/5 border border-white/10 p-10 rounded-4xl transition-all group hover:bg-white/10 hover:border-secondary/50">
      <p className="text-5xl font-black text-secondary tracking-tighter mb-4">
        {displayVal}
      </p>
      <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">{label}</h4>
      <p className="text-white/30 text-[11px] font-medium leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Metrics() {
  const topMetrics = [
    { value: '25', label: 'Waste Reduction', desc: 'Decrease in non-working media spend via AI-driven allocation.', isPercent: true, isMultiplier: false, mtClass: '' },
    { value: '60', label: 'Faster Planning', desc: 'Reduction in manual media planning cycles using automated modeling.', isPercent: true, isMultiplier: false, mtClass: 'lg:mt-12' },
    { value: '50', label: 'Launch Speed', desc: 'Accelerated time-to-market for multi-region campaigns.', isPercent: true, isMultiplier: false, mtClass: '' },
    { value: '2', label: 'Decision Speed', desc: 'Real-time insights allow for immediate pivot and optimization.', isPercent: false, isMultiplier: true, mtClass: 'lg:mt-12' }
  ]

  const bottomMetrics = [
    { value: '20', label: 'Recall Uplift', desc: 'Improved brand memory through better targeting alignment.', isPercent: true, isMultiplier: false },
    { value: '90', label: 'Error Reduction', desc: 'Automation of governance workflows eliminates manual oversight.', isPercent: true, isMultiplier: false },
    { value: '30', label: 'Targeting Accuracy', desc: 'Higher precision in audience engagement across channels.', isPercent: true, isMultiplier: false }
  ]

  return (
    <section className="py-16 lg:py-20 bg-[#050505] text-white select-none" id="customers">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-7xl font-display font-extrabold tracking-tight mb-8">
            Designed to improve the <span className="text-secondary">economics</span> of marketing.
          </h2>
          <p className="text-white/40 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Quantifiable impact across the entire marketing lifecycle, powered by the Pulse OS intelligence engine.
          </p>
        </div>

        {/* Top 4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topMetrics.map((m, idx) => (
            <div key={idx} className={m.mtClass}>
              <CountUpMetric 
                value={m.value} 
                label={m.label} 
                desc={m.desc}
                isPercent={m.isPercent} 
                isMultiplier={m.isMultiplier}
              />
            </div>
          ))}
        </div>

        {/* Bottom 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 lg:mt-6">
          {bottomMetrics.map((m, idx) => (
            <CountUpMetric 
              key={idx}
              value={m.value} 
              label={m.label} 
              desc={m.desc}
              isPercent={m.isPercent} 
              isMultiplier={m.isMultiplier}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
