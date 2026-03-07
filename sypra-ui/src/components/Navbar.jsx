import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    {
      label: "Product",
      items: ["Cloud Infrastructure", "Predictive AI", "DevOps Automation", "Security Suite", "Analytics Dashboard"]
    },
    {
      label: "Solutions",
      items: ["Startups", "Enterprise", "Scale-ups", "Government", "Agencies"]
    },
    {
      label: "Resources",
      items: ["Documentation", "API Reference", "Community", "Blog", "Status"]
    },
    { label: "Pricing" }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#FF424D] rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-[22px] font-bold tracking-[-0.5px] text-gray-900">Sypra</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.items && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-150">
                  {link.label}
                  {link.items && (
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                <AnimatePresence>
                  {link.items && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-2 overflow-hidden"
                    >
                      {link.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2.5 text-[14px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 text-[14px] font-semibold text-gray-700 hover:text-gray-900 rounded-full transition-all hover:bg-gray-100">
              Log in
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-[#FF424D] text-white text-[14px] font-semibold rounded-full hover:bg-[#e03840] transition-all shadow-[0_2px_8px_rgba(255,66,77,0.4)] hover:shadow-[0_4px_16px_rgba(255,66,77,0.5)]"
            >
              Get started free
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-5 h-0.5 bg-gray-800 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <div className={`w-5 h-0.5 bg-gray-800 mt-1.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-gray-800 mt-1.5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white pt-[72px] px-6 overflow-y-auto lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="py-4 border-b border-gray-100"
              >
                <p className="text-lg font-semibold text-gray-900">{link.label}</p>
                {link.items && (
                  <div className="mt-2 space-y-1">
                    {link.items.map((item) => (
                      <a key={item} href="#" className="block py-1.5 text-gray-500 text-[15px]">{item}</a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <div className="py-6 flex flex-col gap-3">
              <button className="w-full py-3 border-2 border-gray-200 rounded-full font-semibold text-gray-700">Log in</button>
              <button className="w-full py-3 bg-[#FF424D] text-white rounded-full font-semibold">Get started free</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}