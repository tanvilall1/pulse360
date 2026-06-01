import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

function CountUpMetric({ value, label, desc, suffix = '' }) {
  const isRange = value.includes('–') || value.includes('-')
  const [current, setCurrent] = useState(isRange ? [0, 0] : 0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const startTime = performance.now()
    let animationFrameId;

    if (isRange) {
      const parts = value.split(/[–-]/)
      const t1 = parseFloat(parts[0])
      const t2 = parseFloat(parts[1])

      const update = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        const val1 = t1 * easeProgress
        const val2 = t2 * easeProgress
        
        setCurrent([val1, val2])

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(update)
        } else {
          setCurrent([t1, t2])
        }
      }
      animationFrameId = requestAnimationFrame(update)
    } else {
      const target = parseFloat(value)
      const update = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        const val = target * easeProgress
        
        setCurrent(val)

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(update)
        } else {
          setCurrent(target)
        }
      }
      animationFrameId = requestAnimationFrame(update)
    }

    return () => cancelAnimationFrame(animationFrameId)
  }, [isInView, value, isRange])

  return (
    <div ref={ref} className="metric-card bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] transition-all duration-300 group hover:bg-white/[0.08] hover:border-secondary/50 hover:-translate-y-2 flex flex-col justify-between h-full hover:shadow-[0_15px_30px_-10px_rgba(240,126,37,0.15)]">
      <div>
        <p className="text-5xl font-black text-secondary tracking-tighter mb-6">
          {isRange 
            ? `${Math.floor(current[0])}–${Math.floor(current[1])}${suffix}` 
            : suffix === 'x' 
              ? `${current.toFixed(1).replace('.0', '')}x` 
              : `${Math.floor(current)}${suffix}`}
        </p>
        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-3 leading-snug">{label}</h4>
      </div>
      <p className="text-white/40 text-[11px] font-medium leading-relaxed mt-4">{desc}</p>
    </div>
  )
}

export default function Metrics() {
  const topMetrics = [
    { value: '15–25', label: 'Potential reduction in wasted media spend', desc: 'Through better allocation, targeting, and optimisation loops.', suffix: '%' },
    { value: '40–60', label: 'Faster planning cycles', desc: 'By replacing spreadsheet-led planning with structured workflows.', suffix: '%' },
    { value: '30–50', label: 'Faster campaign launches', desc: 'Through centralized approvals and execution readiness.', suffix: '%' },
    { value: '20–30', label: 'Better targeting accuracy', desc: 'Using competitor signals, audience intelligence, and segmentation logic.', suffix: '%' }
  ]

  const bottomMetrics = [
    { value: '10–20', label: 'Improvement in brand recall', desc: 'Through consistent messaging, measurement, and learning.', suffix: '%' },
    { value: '2', label: 'Faster decision-making', desc: 'With one view of planning, performance, and market movement.', suffix: 'x' },
    { value: '70–90', label: 'Reduction in manual errors', desc: 'Through automation, validation, and centralized workflows.', suffix: '%' }
  ]

  return (
    <section className="py-24 lg:py-32 bg-[#050505] text-white select-none border-y border-white/5" id="customers">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-7xl font-display font-extrabold tracking-tight mb-8">
            Designed to improve the <span className="text-secondary">economics</span> of marketing.
          </h2>
          <p className="text-white/40 text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Pulse 360 helps brands reduce wasted effort, accelerate planning, improve targeting, strengthen consistency, and make faster decisions with connected intelligence.
          </p>
        </div>

        {/* Top 4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topMetrics.map((m, idx) => (
            <div key={idx} className="h-full">
              <CountUpMetric 
                value={m.value} 
                label={m.label} 
                desc={m.desc}
                suffix={m.suffix}
              />
            </div>
          ))}
        </div>

        {/* Bottom 3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bottomMetrics.map((m, idx) => (
            <div key={idx} className="h-full">
              <CountUpMetric 
                value={m.value} 
                label={m.label} 
                desc={m.desc}
                suffix={m.suffix}
              />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/20 text-[10px] font-medium mt-16 max-w-2xl mx-auto leading-relaxed">
          Actual outcomes depend on campaign scale, category, data availability, adoption, and implementation maturity.
        </p>
      </div>
    </section>
  )
}
