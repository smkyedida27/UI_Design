import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const plans = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "Perfect for solo engineers and small projects exploring what's possible.",
    cta: "Start for free",
    ctaStyle: "border",
    color: "#6B7280",
    features: [
      "Up to 3 deployments/month",
      "1 team member",
      "5GB cloud storage",
      "Basic monitoring",
      "Community support",
      "99.9% uptime SLA",
    ]
  },
  {
    name: "Growth",
    price: { monthly: 79, annual: 63 },
    desc: "Built for growing teams that need real power without enterprise complexity.",
    cta: "Start free trial",
    ctaStyle: "primary",
    color: "#FF424D",
    popular: true,
    features: [
      "Unlimited deployments",
      "Up to 15 team members",
      "100GB cloud storage",
      "Advanced monitoring & alerts",
      "Priority email support",
      "99.95% uptime SLA",
      "AI performance insights",
      "Custom domains",
    ]
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    desc: "For organizations that need unlimited scale, compliance, and white-glove support.",
    cta: "Talk to sales",
    ctaStyle: "dark",
    color: "#4F46E5",
    features: [
      "Everything in Growth",
      "Unlimited team members",
      "Unlimited storage",
      "SOC 2 Type II compliance",
      "Dedicated infrastructure",
      "99.99% uptime SLA",
      "24/7 phone & Slack support",
      "Custom SLAs & contracts",
      "SSO & advanced security",
    ]
  }
]

export default function PricingSection() {
  const [annual, setAnnual] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#FF424D] mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[44px] md:text-[56px] font-bold tracking-[-1.5px] text-gray-900 leading-[1.1]"
          >
            Simple, transparent pricing.<br />
            <span className="text-[#FF424D]">No surprises.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-[17px] text-gray-500 max-w-xl mx-auto"
          >
            Start free, scale when you're ready. All plans include our core platform with generous limits.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-full p-1"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all ${!annual ? "bg-white shadow-sm text-gray-900" : "text-gray-400"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all flex items-center gap-2 ${annual ? "bg-white shadow-sm text-gray-900" : "text-gray-400"}`}
            >
              Annual
              <span className="text-[11px] font-bold bg-[#FF424D]/10 text-[#FF424D] px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-[#FF424D] shadow-[0_0_0_1px_#FF424D,0_20px_60px_rgba(255,66,77,0.12)] bg-white"
                  : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FF424D] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mt-3">
                  {plan.price.monthly !== null ? (
                    <>
                      <span className="text-[48px] font-black text-gray-900 tracking-[-2px] leading-none">
                        ${annual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-[16px] text-gray-400 font-medium">/mo</span>
                    </>
                  ) : (
                    <span className="text-[36px] font-black text-gray-900 tracking-[-1px] leading-none">Custom</span>
                  )}
                </div>
                {plan.price.monthly !== null && annual && plan.price.monthly > 0 && (
                  <p className="text-[12px] text-[#FF424D] font-semibold mt-1">
                    Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                  </p>
                )}
                <p className="mt-3 text-[14px] text-gray-500 leading-[1.6]">{plan.desc}</p>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-full text-[15px] font-bold mb-6 transition-all ${
                  plan.ctaStyle === "primary"
                    ? "bg-[#FF424D] text-white shadow-[0_4px_15px_rgba(255,66,77,0.35)] hover:shadow-[0_6px_25px_rgba(255,66,77,0.5)]"
                    : plan.ctaStyle === "dark"
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "border-2 border-gray-200 text-gray-700 hover:border-gray-400"
                }`}
              >
                {plan.cta}
              </motion.button>

              {/* Features */}
              <div className="space-y-3 flex-1">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${plan.color}15` }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke={plan.color} viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-[14px] text-gray-600 leading-[1.5]">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center text-[14px] text-gray-400"
        >
          All plans include a 14-day free trial. No credit card required. Questions?{" "}
          <a href="#" className="text-[#FF424D] font-semibold hover:underline">Chat with us</a>
        </motion.p>
      </div>
    </section>
  )
}