import React from 'react'

export default function Teams() {
  const teams = [
    {
      name: 'Brand Leaders',
      desc: 'A live view of brand health, marketing efficiency, campaign impact, and governance.',
      icon: 'workspace_premium'
    },
    {
      name: 'Marketing Heads',
      desc: 'A connected system to align strategy, agencies, planning, execution, and measurement.',
      icon: 'leaderboard'
    },
    {
      name: 'Media Teams',
      desc: 'Structured planning, budget scenarios, approvals, and planned-versus-delivered visibility.',
      icon: 'tv'
    },
    {
      name: 'Performance Teams',
      desc: 'Live optimisation signals across campaigns, audiences, and engagement flows.',
      icon: 'speed'
    },
    {
      name: 'Consumer Insight Teams',
      desc: 'Brand lift, recall, exposure, audience response, and campaign learning.',
      icon: 'query_stats'
    },
    {
      name: 'Agencies & Partners',
      desc: 'Clearer briefs, faster approvals, shared workflows, and stronger accountability.',
      icon: 'handshake'
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-[#fcfcfc] select-none" id="teams">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-primary mb-6">
            One platform for every team.
          </h2>
          <p className="text-text-grey text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Pulse 360 gives each team the visibility, structure, and intelligence they need — while keeping everyone connected to the same marketing system.
          </p>
        </div>

        {/* Grid Cards (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((t, idx) => (
            <div 
              key={idx} 
              className="p-10 lg:p-12 rounded-[2.5rem] bg-white border border-black/5 hover:border-secondary/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group cursor-default text-left flex flex-col justify-between"
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
