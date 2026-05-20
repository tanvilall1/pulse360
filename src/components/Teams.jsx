import React from 'react'

export default function Teams() {
  const teams = [
    {
      name: 'Brand Leaders',
      desc: 'Ensure total consistency across global markets with automated governance and asset management.',
      icon: 'workspace_premium'
    },
    {
      name: 'Marketing Heads',
      desc: 'Align strategic vision with execution speed across entire regional clusters and product lines.',
      icon: 'leaderboard'
    },
    {
      name: 'Media Teams',
      desc: 'Optimise media spend in real-time based on live intelligence signals and competitive shifts.',
      icon: 'tv'
    },
    {
      name: 'Insight Analysts',
      desc: 'Extract deep market signals and competitive intelligence without manual data crunching.',
      icon: 'query_stats'
    },
    {
      name: 'Global Agencies',
      desc: 'Collaborate seamlessly with brand owners on a unified operating system for planning and reporting.',
      icon: 'handshake'
    },
    {
      name: 'Finance & Ops',
      desc: 'Audit marketing efficiency and budget compliance with transparent, live performance data.',
      icon: 'account_balance'
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-[#fcfcfc] select-none" id="teams">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-primary">
            One platform for every team.
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teams.map((t, idx) => (
            <div 
              key={idx} 
              className="p-10 rounded-[2.5rem] bg-white border border-black/5 hover:border-secondary transition-all hover:shadow-2xl group cursor-default text-left flex flex-col justify-between"
            >
              <div>
                {/* Animated Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">{t.icon}</span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-black mb-4 text-on-surface">
                  {t.name}
                </h4>
                
                {/* Desc */}
                <p className="text-on-surface/50 text-sm leading-relaxed font-medium">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
