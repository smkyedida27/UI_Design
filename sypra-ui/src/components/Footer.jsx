import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Documentation", "API Reference"],
  Company: ["About", "Blog", "Careers", "Press Kit", "Partners", "Legal"],
  Resources: ["Community", "Support Center", "Status Page", "Security", "Compliance", "Open Source"],
  Developers: ["API Docs", "CLI Tools", "Integrations", "Webhooks", "SDKs", "GraphQL"]
}

const socialLinks = [
  {
    name: "Twitter",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "Discord",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.102.133 18.117a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
    )
  }
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <footer className="bg-[#0A0A0B] text-white overflow-hidden">
      {/* CTA Banner */}
      <div className="relative border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[20%] w-[400px] h-[300px] bg-[#FF424D]/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-[10%] w-[300px] h-[200px] bg-[#4F46E5]/8 rounded-full blur-[60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#FF424D] mb-4">
              Get started today
            </span>
            <h2 className="text-[44px] md:text-[64px] font-bold tracking-[-2px] leading-[1.0] max-w-4xl mx-auto">
              Build infrastructure that<br />
              <span className="text-[#FF424D]">scales with your ambitions</span>
            </h2>
            <p className="mt-6 text-[18px] text-white/50 max-w-xl mx-auto leading-[1.65]">
              Join 50,000+ engineering teams who ship with confidence. Start free, scale when ready.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 40px rgba(255,66,77,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#FF424D] text-white px-8 py-4 rounded-full text-[16px] font-bold shadow-[0_4px_20px_rgba(255,66,77,0.35)]"
              >
                Start for free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </motion.a>
              <a href="#" className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-8 py-4 rounded-full text-[16px] font-semibold hover:border-white/40 hover:text-white transition-all">
                Schedule demo
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/35">
              {["No credit card required", "Free 14-day trial", "Cancel anytime"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#FF424D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#FF424D] rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-[-0.5px]">Sypra</span>
              </div>
              <p className="text-[14px] text-white/40 leading-[1.65] mb-6">
                Enterprise infrastructure platform for modern engineering teams.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + colIndex * 0.07 }}
              >
                <h4 className="text-[12px] font-bold uppercase tracking-[2px] text-white/40 mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[14px] text-white/55 hover:text-white transition-colors duration-150">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-[15px] font-semibold text-white">Get the Sypra newsletter</h4>
              <p className="text-[13px] text-white/40 mt-0.5">Product updates, engineering insights, and infrastructure tips — no spam.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 md:w-64 bg-white/8 border border-white/15 rounded-full px-4 py-2.5 text-[14px] text-white placeholder-white/25 focus:outline-none focus:border-[#FF424D]/50 transition-colors"
              />
              <button className="bg-[#FF424D] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:bg-[#e03840] transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[13px] text-white/30">© 2026 Sypra, Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Acceptable Use"].map((link) => (
              <a key={link} href="#" className="text-[13px] text-white/30 hover:text-white/60 transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[12px] text-green-400 font-medium">All systems operational</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}