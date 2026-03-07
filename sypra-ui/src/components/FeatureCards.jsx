import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
      </svg>
    ),
    title: "Cloud Infrastructure",
    desc: "Deploy globally across 32 regions with one-click orchestration, auto-scaling, and zero-downtime deployments built for modern teams.",
    color: "#4F46E5",
    bg: "#EEF2FF",
    tag: "Core"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v3"/>
      </svg>
    ),
    title: "Predictive AI Models",
    desc: "Intelligent ML pipelines that analyze your infrastructure patterns and proactively prevent bottlenecks before they impact users.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    tag: "AI-Powered"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Enterprise Security",
    desc: "SOC 2 Type II certified with automated threat detection, zero-trust networking, and real-time compliance monitoring across your stack.",
    color: "#059669",
    bg: "#ECFDF5",
    tag: "Compliance"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "DevOps Automation",
    desc: "CI/CD pipelines that run 10x faster with intelligent caching, parallel execution, and automated rollbacks when anomalies are detected.",
    color: "#D97706",
    bg: "#FFFBEB",
    tag: "Automation"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Global Edge Network",
    desc: "Serve traffic from 180+ edge locations worldwide. Sub-20ms latency guaranteed, with intelligent routing and automatic failover.",
    color: "#0EA5E9",
    bg: "#F0F9FF",
    tag: "Global"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: "Advanced Analytics",
    desc: "Real-time observability across every layer of your stack. Custom dashboards, smart alerting, and one-click incident response.",
    color: "#FF424D",
    bg: "#FFF5F5",
    tag: "Observability"
  }
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${feature.bg} 0%, transparent 60%)` }}
      />

      <div className="relative">
        {/* Icon + Tag row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: feature.bg, color: feature.color }}
          >
            {feature.icon}
          </div>
          <span
            className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ backgroundColor: feature.bg, color: feature.color }}
          >
            {feature.tag}
          </span>
        </div>

        <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-[-0.3px]">
          {feature.title}
        </h3>
        <p className="text-[15px] text-gray-500 leading-[1.65]">
          {feature.desc}
        </p>

        {/* Learn more link */}
        <div className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold transition-all duration-200"
          style={{ color: feature.color }}>
          <span>Learn more</span>
          <motion.svg
            className="w-4 h-4"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </motion.svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeatureCards() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#FF424D] mb-4"
          >
            Everything you need
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[44px] md:text-[56px] font-bold tracking-[-1.5px] text-gray-900 leading-[1.1]"
          >
            The platform that powers<br />
            <span className="text-[#FF424D]">world-class engineering</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-[18px] text-gray-500 max-w-2xl mx-auto leading-[1.65]"
          >
            Six powerful modules, one unified platform. Built by engineers, for engineering teams that refuse to compromise on performance.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="#" className="inline-flex items-center gap-2 text-[15px] font-semibold text-gray-600 hover:text-gray-900 transition-colors group">
            View all features
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}