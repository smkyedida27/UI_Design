import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const featureItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    ),
    label: "Automated CI/CD pipelines",
    desc: "Ship faster with intelligent pipelines"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    label: "Real-time system metrics",
    desc: "Monitor every layer in real time"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v3"/>
      </svg>
    ),
    label: "Predictive performance analysis",
    desc: "AI models that prevent incidents"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    label: "Enterprise-grade protection",
    desc: "SOC 2 Type II certified security"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    label: "Team collaboration tools",
    desc: "Work together across every time zone"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    label: "Global edge distribution",
    desc: "180+ edge locations worldwide"
  },
]

export default function CommunitySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 bg-[#0A0A0B] overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#FF424D]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[-50px] w-[400px] h-[400px] bg-[#4F46E5]/10 rounded-full blur-[100px]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 border border-white/10 text-white/60 rounded-full px-4 py-1.5 text-[13px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF424D] animate-pulse" />
            Trusted by 50,000+ teams globally
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[44px] md:text-[58px] font-bold leading-[1.05] tracking-[-2px] text-white"
            >
              Build powerful<br />
              <span className="text-[#FF424D]">engineering teams</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[17px] text-white/50 leading-[1.7] max-w-lg"
            >
              Sypra enables engineering teams to collaborate, deploy and scale infrastructure efficiently. Our platform provides the tools necessary for building high-performance systems that never sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(255,66,77,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#FF424D] text-white px-7 py-3.5 rounded-full text-[15px] font-bold shadow-[0_4px_20px_rgba(255,66,77,0.3)]"
              >
                Explore platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </motion.a>
              <a href="#" className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3.5 rounded-full text-[15px] font-semibold hover:border-white/40 hover:text-white transition-all">
                Talk to sales
              </a>
            </motion.div>

            {/* Feature checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-10 space-y-2.5"
            >
              {["No infrastructure expertise required", "Deploy in under 5 minutes", "Cancel anytime, keep your data"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] text-white/60">
                  <div className="w-5 h-5 rounded-full bg-[#FF424D]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#FF424D]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} stroke="currentColor" fill="none" d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — feature cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {featureItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="group relative bg-white/5 border border-white/8 rounded-2xl p-5 hover:bg-white/8 hover:border-white/15 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF424D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative">
                  <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/60 group-hover:text-[#FF424D] group-hover:bg-[#FF424D]/10 transition-all duration-300 mb-3">
                    {item.icon}
                  </div>
                  <p className="text-[13px] font-semibold text-white/80 leading-snug mb-1">{item.label}</p>
                  <p className="text-[12px] text-white/35">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom progress/status bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-white/5 border border-white/8 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-[14px] font-semibold text-white/70">Live platform health</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[12px] text-green-400 font-semibold">All systems operational</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "API Response", val: 98, color: "#22c55e" },
              { label: "CDN Latency", val: 94, color: "#3b82f6" },
              { label: "DB Throughput", val: 87, color: "#f59e0b" },
              { label: "Queue Health", val: 99, color: "#FF424D" },
            ].map((bar, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[11px] text-white/40">{bar.label}</span>
                  <span className="text-[11px] font-bold" style={{ color: bar.color }}>{bar.val}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${bar.val}%` } : {}}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: bar.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}