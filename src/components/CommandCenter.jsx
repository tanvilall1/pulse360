import React from 'react'

export default function CommandCenter() {
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: 'grid_view' },
    { id: 'scout', label: 'Pulse Scout', icon: 'radar' },
    { id: 'book', label: 'Brand Book', icon: 'menu_book' },
    { id: 'plan', label: 'Pulse Plan', icon: 'event_note' },
    { id: 'engage', label: 'Pulse Engage', icon: 'chat' },
    { id: 'shift', label: 'Pulse Shift', icon: 'transform' },
    { id: 'reports', label: 'Reports', icon: 'bar_chart' }
  ]

  return (
    <section className="py-24 lg:py-32 bg-white select-none relative" id="command">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(240,126,37,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight text-primary">
            One command center for connected marketing.
          </h2>
          <p className="text-text-grey text-lg sm:text-xl mt-6 max-w-2xl mx-auto font-medium leading-relaxed">
            Bring intelligence, planning, governance, engagement, and measurement into one high-context workspace.
          </p>
        </div>

        {/* UI Mockup Wrapper */}
        <div className="relative bg-[#0d0f12] rounded-[2.5rem] sm:rounded-[3.5rem] p-4 sm:p-8 lg:p-10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-white/5">
          <div className="bg-[#12161b] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row min-h-[650px]">
            
            {/* Sidebar */}
            <aside className="w-full md:w-60 bg-[#0d1013] border-b md:border-b-0 md:border-r border-white/10 p-5 lg:p-6 flex flex-col gap-8 shrink-0">
              <div className="flex items-center gap-3 px-2">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-deep-orange rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg">P</div>
                <span className="text-white font-black tracking-tight text-sm">Pulse 360</span>
              </div>
              <nav className="space-y-1 overflow-x-auto md:overflow-visible flex md:flex-col pb-2 md:pb-0 scrollbar-hide">
                {sidebarItems.map((item, idx) => (
                  <button
                    key={item.id}
                    className={`shrink-0 px-4 py-3 rounded-xl text-[11px] font-bold flex items-center gap-3 transition-colors text-left ${
                      idx === 0 
                        ? 'bg-white/10 text-secondary border border-white/10' 
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    {item.label}
                  </button>
                 ))}
              </nav>
            </aside>

            {/* Main Area */}
            <main className="flex-1 p-6 lg:p-10 bg-[#12161b]/90 text-left overflow-hidden flex flex-col justify-between">
              
              {/* Top Filters */}
              <header className="flex flex-wrap items-center gap-2 lg:gap-4 mb-8">
                {['Brand', 'Market', 'Campaign', 'Time Period'].map(filter => (
                  <div key={filter} className="bg-white/5 hover:bg-white/10 cursor-pointer px-4 py-2.5 rounded-xl border border-white/10 text-white/80 text-[11px] font-bold flex items-center gap-2 transition-colors">
                    {filter}
                    <span className="material-symbols-outlined text-[14px] text-white/40">expand_more</span>
                  </div>
                ))}
              </header>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 flex-1">
                
                {/* Left/Main Content (Modules) */}
                <div className="xl:col-span-8 space-y-8 flex flex-col justify-between">
                  {/* Row 1: KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { label: 'Marketing Health Score', val: '92', color: 'text-secondary' },
                      { label: 'Media Efficiency', val: '4.8x', color: 'text-emerald-400' },
                      { label: 'Campaign Readiness', val: '84%', color: 'text-blue-400' },
                      { label: 'Brand Consistency', val: '98%', color: 'text-purple-400' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-white/[0.04] rounded-xl p-5 border border-white/10 hover:border-white/20 transition-colors">
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2">{kpi.label}</p>
                        <p className={`text-2xl lg:text-3xl font-black ${kpi.color}`}>{kpi.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Row 2: Charts/Modules */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white/[0.04] rounded-xl p-6 border border-white/10 h-52 flex flex-col justify-between">
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2">Competitor Activity</p>
                      <div className="flex-1 flex items-end gap-2 px-2 mt-4">
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                          <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }}>
                            {i === 3 && <div className="w-full h-full bg-secondary rounded-t-sm shadow-[0_0_10px_rgba(240,126,37,0.5)]"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/[0.04] rounded-xl p-6 border border-white/10 h-52 flex flex-col justify-between">
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2">Budget Allocation</p>
                      <div className="flex-1 flex flex-col justify-center gap-3">
                        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex">
                          <div className="h-full bg-blue-500 w-1/2"></div>
                          <div className="h-full bg-secondary w-1/3"></div>
                          <div className="h-full bg-orange-400 w-1/6"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-white/70 font-bold mt-2">
                          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Search</span>
                          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span> Social</span>
                          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Video</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/[0.04] rounded-xl p-6 border border-white/10 h-36 flex flex-col justify-between">
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2">Brand Lift Movement</p>
                    <div className="flex-1 relative mt-4">
                       <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                          <path d="M0,80 Q25,70 50,40 T100,20" fill="none" stroke="#10b981" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                          <path d="M0,80 Q25,70 50,40 T100,20 L100,100 L0,100 Z" fill="url(#liftGradCC)" opacity="0.2" />
                          <defs>
                            <linearGradient id="liftGradCC" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#10b981"/>
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                       </svg>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar (Next Best Actions) */}
                <div className="xl:col-span-4 bg-gradient-to-b from-secondary/10 to-transparent rounded-2xl p-6 border border-secondary/30 flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className="flex items-center gap-2.5 mb-6">
                      <span className="material-symbols-outlined text-secondary text-xl">rocket_launch</span>
                      <h3 className="text-white text-xs font-black uppercase tracking-wider">Next Best Actions</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { num: 1, text: 'Shift budget to high-performing audience clusters' },
                        { num: 2, text: 'Review competitor spike in search visibility' },
                        { num: 3, text: 'Refresh creative in low-recall segments' }
                      ].map(action => (
                        <div key={action.num} className="bg-white/[0.04] p-4.5 rounded-xl border border-white/5 hover:border-secondary/50 transition-all cursor-pointer group">
                          <div className="flex items-start gap-3.5">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black text-white/60 group-hover:bg-secondary group-hover:text-white mt-0.5 shrink-0 transition-colors">
                              {action.num}
                            </div>
                            <p className="text-white/90 text-xs font-medium leading-relaxed">
                              {action.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-4 mt-6 bg-secondary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20">
                    Review All Actions
                  </button>
                </div>

              </div>
            </main>

          </div>
        </div>
      </div>
    </section>
  )
}
