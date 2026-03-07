import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const pillars = [
  {
    number: "01",
    title: "Build with confidence",
    desc: "Every deployment is versioned, tested, and reversible. Ship faster knowing you can roll back in seconds with zero data loss.",
    icon: "🏗️"
  },
  {
    number: "02",
    title: "Scale without limits",
    desc: "From 10 users to 10 million. Sypra's infrastructure auto-scales in real time, so you never pay for idle compute or face capacity ceilings.",
    icon: "📈"
  },
  {
    number: "03",
    title: "Secure by default",
    desc: "End-to-end encryption, automated vulnerability scanning, and compliance reporting built into every layer of your stack.",
    icon: "🔒"
  }
]

export default function CreatorSection() {
  const containerRef = useRef(null)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <motion.div
        style={{ y: bgY }}
        className="absolute right-[-100px] top-[-80px] w-[500px] h-[500px] bg-[#FF424D]/5 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Big centered headline */}
        <div ref={headRef} className="text-center mb-24 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#FF424D] mb-4"
          >
            Our mission
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[44px] md:text-[62px] xl:text-[76px] font-bold leading-[1.0] tracking-[-2.5px] text-gray-900"
          >
            Turning complex systems<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF424D]">into scalable businesses</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={headInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-[#FF424D]/10 rounded-sm origin-left -z-0"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="mt-8 text-[18px] text-gray-500 leading-[1.7] max-w-2xl mx-auto"
          >
            Sypra helps organizations transform sprawling infrastructure into high-performance systems that grow with their ambitions — not against them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(255,66,77,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#FF424D] text-white px-8 py-4 rounded-full text-[16px] font-bold shadow-[0_4px_20px_rgba(255,66,77,0.3)]"
            >
              Start your journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </motion.a>
            <a href="#" className="inline-flex items-center gap-2 text-gray-600 px-6 py-4 rounded-full text-[15px] font-semibold hover:text-gray-900 transition-colors border-2 border-gray-100 hover:border-gray-300">
              Read our story
            </a>
          </motion.div>
        </div>

        {/* Three pillar cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF424D]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 group-hover:border-[#FF424D]/20 transition-colors duration-300">
                <div className="text-[40px] mb-4">{p.icon}</div>
                <div className="text-[13px] font-bold text-[#FF424D] mb-2 tracking-widest">{p.number}</div>
                <h3 className="text-[22px] font-bold text-gray-900 mb-3 tracking-[-0.3px]">{p.title}</h3>
                <p className="text-[15px] text-gray-500 leading-[1.65]">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big number strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-1"
        >
          {[
            { v: "10x", l: "Faster deployments" },
            { v: "340%", l: "Performance improvement" },
            { v: "92%", l: "Reduction in incidents" },
            { v: "24/7", l: "Expert support" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="text-center py-10 bg-gray-50 rounded-2xl border border-gray-100 mx-1"
            >
              <p className="text-[48px] font-black text-gray-900 tracking-[-2px] leading-none">{s.v}</p>
              <p className="text-[14px] text-gray-500 mt-2 font-medium">{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}