import { motion, useInView, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Cloud Architect",
    company: "Horizon Labs",
    avatar: "AC",
    color: "#FF424D",
    rating: 5,
    text: "Sypra completely transformed how our infrastructure scales. Deployment pipelines are 10x faster and our monitoring has caught issues before they ever reach production.",
    highlight: "10x faster deployments"
  },
  {
    name: "Sarah Johnson",
    role: "DevOps Lead",
    company: "Fintech Corp",
    avatar: "SJ",
    color: "#4F46E5",
    rating: 5,
    text: "Our engineering teams collaborate so much more efficiently now. The automation tools cut our release cycles from weeks to hours. I honestly can't imagine shipping without Sypra.",
    highlight: "Weeks to hours"
  },
  {
    name: "Daniel Cruz",
    role: "CTO",
    company: "ScaleUp AI",
    avatar: "DC",
    color: "#059669",
    rating: 5,
    text: "We scaled from 500 to 5 million daily active users without a single infrastructure incident. The predictive AI caught capacity issues days before they would have become problems.",
    highlight: "Zero infrastructure incidents"
  },
  {
    name: "Priya Mehta",
    role: "VP Engineering",
    company: "Nexus Platform",
    avatar: "PM",
    color: "#D97706",
    rating: 5,
    text: "The security compliance features alone saved us six months of engineering work. Our SOC 2 audit passed on the first try thanks to Sypra's automated reporting.",
    highlight: "SOC 2 on first try"
  },
  {
    name: "James Wu",
    role: "Site Reliability Engineer",
    company: "GlobalScale",
    avatar: "JW",
    color: "#7C3AED",
    rating: 5,
    text: "From on-call hell to actually sleeping through the night. Sypra's anomaly detection and auto-remediation handles incidents that used to wake me up at 3am.",
    highlight: "No more 3am alerts"
  },
  {
    name: "Emma Rodriguez",
    role: "Platform Engineer",
    company: "CloudFirst",
    avatar: "ER",
    color: "#0EA5E9",
    rating: 5,
    text: "The developer experience is just unmatched. Everything from local development to production deployment feels cohesive and intentional. Our team's productivity doubled.",
    highlight: "2x team productivity"
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[#FF424D]" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-300 break-inside-avoid mb-6"
    >
      {/* Stars */}
      <StarRating count={t.rating} />

      {/* Quote */}
      <p className="mt-4 text-[15px] text-gray-600 leading-[1.7]">
        "{t.text}"
      </p>

      {/* Highlight badge */}
      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold"
        style={{ backgroundColor: `${t.color}15`, color: t.color }}>
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
        {t.highlight}
      </div>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3 pt-5 border-t border-gray-50">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-gray-900">{t.name}</p>
          <p className="text-[12px] text-gray-400">{t.role} · {t.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Marquee row component for logos
function LogoMarquee({ direction = 1 }) {
  const companies = ["Stripe", "Shopify", "Notion", "Linear", "Vercel", "Figma", "Atlassian", "Datadog", "HashiCorp", "Confluent"]
  const marqueeRef = useRef(null)
  const x = useRef(direction === 1 ? 0 : -50)

  useAnimationFrame(() => {
    if (!marqueeRef.current) return
    x.current -= 0.3 * direction
    const width = marqueeRef.current.scrollWidth / 2
    if (Math.abs(x.current) >= width) x.current = direction === 1 ? 0 : -width
    marqueeRef.current.style.transform = `translateX(${x.current}px)`
  })

  return (
    <div className="overflow-hidden py-3">
      <div ref={marqueeRef} className="flex items-center gap-12 whitespace-nowrap">
        {[...companies, ...companies].map((name, i) => (
          <span key={i} className="text-[15px] font-bold text-gray-300 tracking-tight">{name}</span>
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  const col1 = testimonials.slice(0, 2)
  const col2 = testimonials.slice(2, 4)
  const col3 = testimonials.slice(4, 6)

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
            Wall of love
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[44px] md:text-[56px] font-bold tracking-[-1.5px] text-gray-900 leading-[1.1]"
          >
            Trusted by the world's<br />
            <span className="text-[#FF424D]">best engineering teams</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-[17px] text-gray-500 max-w-xl mx-auto"
          >
            Don't take our word for it — hear from engineers who've shipped production systems with Sypra.
          </motion.p>

          {/* Overall rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-3 bg-white border border-gray-100 rounded-full px-5 py-2.5 shadow-sm"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="w-4 h-4 fill-[#FF424D]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-[14px] font-bold text-gray-900">4.9 out of 5</span>
            <span className="text-[14px] text-gray-400">·</span>
            <span className="text-[14px] text-gray-500">2,400+ reviews</span>
          </motion.div>
        </div>

        {/* Masonry testimonials grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          <div>{col1.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}</div>
          <div className="mt-8">{col2.map((t, i) => <TestimonialCard key={i} t={t} index={i + 2} />)}</div>
          <div>{col3.map((t, i) => <TestimonialCard key={i} t={t} index={i + 4} />)}</div>
        </div>

        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
        </div>

        {/* Logo marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-[12px] font-bold uppercase tracking-[3px] text-gray-300 mb-6">
            Used by teams at
          </p>
          <LogoMarquee direction={1} />
        </motion.div>
      </div>
    </section>
  )
}