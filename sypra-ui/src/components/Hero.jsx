import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const stats = [
  { value: "50K+", label: "Engineering teams" },
  { value: "$2.4B", label: "Infrastructure managed" },
  { value: "99.99%", label: "Uptime guaranteed" },
  { value: "180+", label: "Countries served" },
]

const floatingCards = [
  { icon: "🚀", label: "Deployment", status: "Completed", color: "#22c55e", delay: 0 },
  { icon: "🛡️", label: "Security Audit", status: "Passed", color: "#3b82f6", delay: 0.3 },
  { icon: "📊", label: "Analytics", status: "Live", color: "#f59e0b", delay: 0.6 },
  { icon: "⚡", label: "Performance", status: "+340%", color: "#FF424D", delay: 0.9 },
]

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 50000) { clearInterval(timer); return 50000 }
        return prev + 800
      })
    }, 16)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#FF424D]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-[#FF424D]/5 rounded-full blur-[80px]" />
        <div className="absolute top-[30%] left-[30%] w-[300px] h-[300px] bg-[#ffb347]/6 rounded-full blur-[60px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: "72px 72px"
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-[72px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">

            {/* Left */}
            <motion.div style={{ y, opacity }}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#fff5f5] border border-[#ffcdd0] text-[#FF424D] rounded-full px-4 py-1.5 text-[13px] font-semibold mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF424D] animate-pulse" />
                Now with Predictive AI — v3.0 released
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-[52px] sm:text-[64px] xl:text-[76px] font-bold leading-[1.0] tracking-[-2px] text-gray-900"
              >
                Enterprise<br />
                <span className="text-[#FF424D]">cloud infra</span><br />
                that scales.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 text-[18px] text-gray-500 leading-[1.7] max-w-[480px] font-normal"
              >
                Build, deploy, and scale infrastructure with confidence. Sypra gives engineering teams the tools to move fast without breaking things.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-3 items-center"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(255,66,77,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#FF424D] text-white px-8 py-4 rounded-full text-[16px] font-bold shadow-[0_4px_20px_rgba(255,66,77,0.35)] transition-all"
                >
                  Start building free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-[14px] rounded-full text-[16px] font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch demo
                </motion.a>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-10 flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {["FF6B6B","4ECDC4","45B7D1","96CEB4","FFEAA7"].map((color, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[11px] font-bold"
                      style={{ backgroundColor: `#${color}` }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-3.5 h-3.5 text-[#FF424D] fill-[#FF424D]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                    <span className="text-[13px] text-gray-600 ml-1 font-semibold">4.9/5</span>
                  </div>
                  <p className="text-[12px] text-gray-400">Loved by <span className="font-semibold text-gray-600">{count.toLocaleString()}+</span> engineers</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Main dashboard card */}
              <div className="relative w-full max-w-[520px]">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF424D]/20 to-transparent rounded-3xl blur-2xl scale-110" />

                <div className="relative bg-white rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">
                  {/* Dashboard header */}
                  <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                      </div>
                      <span className="text-gray-400 text-[13px]">sypra.io/dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[11px] text-green-400 font-semibold">All systems operational</span>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-6">
                    {/* Top metrics row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Deployments", value: "1,247", change: "+12%", up: true },
                        { label: "Uptime", value: "99.99%", change: "SLA met", up: true },
                        { label: "Latency", value: "18ms", change: "-34%", up: true },
                      ].map((m, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                        >
                          <p className="text-[11px] text-gray-500 font-medium">{m.label}</p>
                          <p className="text-[18px] font-bold text-gray-900 mt-0.5">{m.value}</p>
                          <p className="text-[11px] text-green-500 font-semibold mt-0.5">{m.change}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart area */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[13px] font-semibold text-gray-700">Infrastructure Load</p>
                        <span className="text-[11px] text-gray-400 bg-white rounded-full px-2.5 py-1 border border-gray-200">Last 7 days</span>
                      </div>
                      {/* Mini chart bars */}
                      <div className="flex items-end gap-1.5 h-[60px]">
                        {[35, 55, 45, 70, 60, 80, 75, 90, 68, 82, 76, 95, 88, 72].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.6 + i * 0.04, duration: 0.4 }}
                            className="flex-1 rounded-t-sm origin-bottom"
                            style={{
                              height: `${h}%`,
                              background: i >= 10
                                ? "linear-gradient(to top, #FF424D, #ff7b82)"
                                : "#e5e7eb"
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Status list */}
                    {floatingCards.map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[16px]">
                            {card.icon}
                          </div>
                          <span className="text-[13px] font-medium text-gray-700">{card.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: card.color }} />
                          <span className="text-[12px] font-semibold" style={{ color: card.color }}>{card.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1 }}
                className="text-center"
              >
                <p className="text-[36px] font-bold text-gray-900 tracking-[-1px]">{stat.value}</p>
                <p className="text-[14px] text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trusted by logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 pb-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[13px] font-medium text-gray-400 tracking-widest uppercase mb-8">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-40">
            {["Stripe", "Shopify", "Notion", "Linear", "Vercel", "Figma"].map((brand, i) => (
              <span key={i} className="text-[22px] font-bold text-gray-800 tracking-tight">{brand}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}