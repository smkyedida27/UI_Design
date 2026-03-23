"use client"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { LogIn, Menu, X, LogOut, MessageCircle, ArrowLeft } from "lucide-react"

const Navigation = ({ isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isEmarsysPage = location.pathname === "/sap-emarsys"

  // Smooth scroll function
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // WhatsApp redirect function
  const openWhatsApp = () => {
    const phoneNumber = "917973474146"; // +91 79734 74146 without spaces and special characters
    const message = encodeURIComponent("Hi SYPRA! I'm interested in your services and would like to discuss my project.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Function to scroll to top for Home
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  // Function to scroll to About section
  const scrollToAbout = () => {
    // Look for the section that contains "About Us" text
    const aboutSection = Array.from(document.querySelectorAll('section')).find(section => 
      section.textContent.includes('About') && section.textContent.includes('Meet Our')
    );
    
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Alternative: look for sections and find the one after "How SYPRA Works"
      const sections = document.querySelectorAll('section');
      // The about section should be around the 3rd or 4th section
      if (sections[3]) {
        sections[3].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: "home", label: "Home", action: scrollToTop },
    { id: "about", label: "About", action: scrollToAbout },
    { id: "services", label: "Services", action: () => scrollToSection('services-section') },
    { id: "chat", label: "Chat with us", action: openWhatsApp, isWhatsApp: true },
  ]

  /* ── Emarsys dark nav ──────────────────────────────────────────────── */
  if (isEmarsysPage) {
    const emarsysNavItems = [
      { label: "Migration", anchor: "services" },
      { label: "Services", anchor: "services" },
      { label: "Process", anchor: "services" },
      { label: "FAQ", anchor: "contact-form" },
    ]

    return (
      <nav
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="sticky top-0 z-50 bg-[#080c14]/90 backdrop-blur-xl border-b border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo + back */}
            <div className="flex items-center gap-4">
        

              <div
                className="w-24 sm:w-28 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img src={logo2 || "/placeholder.svg"} alt="SYPRA INFOTECH" className="w-full h-auto object-contain invert brightness-90" />
              </div>
              {/* page breadcrumb */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600">
                <span>/</span>
                <span
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-slate-400 font-semibold tracking-wide"
                >
                  SAP Emarsys
                </span>
              </div>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {emarsysNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    document.getElementById(item.anchor)?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-slate-400 hover:text-white text-sm font-medium transition-colors relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}

              {/* Chat on WhatsApp */}
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-1.5 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>

              {/* CTA */}
              <button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group"
              >
                Get a quote
                <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-800 bg-[#0b0f1a] rounded-b-2xl pb-4">
              <div className="pt-3 space-y-1 px-2">
                {emarsysNavItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      document.getElementById(item.anchor)?.scrollIntoView({ behavior: "smooth" })
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left px-4 py-3 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-all font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => { openWhatsApp(); setIsMenuOpen(false) }}
                  className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm text-green-400 hover:text-green-300 hover:bg-slate-800 transition-all font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp us
                </button>
                <div className="px-2 pt-2">
                  <button
                    onClick={() => {
                      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                      setIsMenuOpen(false)
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-sm font-semibold transition-all"
                  >
                    Get a quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    )
  }

  /* ── Default (main site) nav — unchanged ───────────────────────────── */
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection('hero-section')}
          >
            <div className="w-32">
              <img src={logo2 || "/placeholder.svg"} alt="SYPRA INFOTECH" className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className={`font-medium transition-all duration-300 relative group py-2 flex items-center ${
                  item.isWhatsApp 
                    ? 'text-green-600 hover:text-green-700' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.isWhatsApp }
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  item.isWhatsApp 
                    ? 'bg-gradient-to-r from-green-500 to-green-600' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600'
                }`}></span>
              </button>
            ))}

            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95 border-2 border-red-200 bg-white/80 backdrop-blur-sm hover:bg-red-50 hover:border-red-300 text-red-700 shadow-sm hover:shadow-md h-10 px-4 ml-4"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            ) : (
              <button 
                onClick={() => scrollToSection('contact-section')}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95 border-2 border-blue-200 bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:border-blue-300 text-blue-700 shadow-sm hover:shadow-md h-10 px-4 ml-4"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/90 backdrop-blur-xl rounded-b-2xl mt-2 shadow-xl">
            <div className="py-6 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`block w-full text-left px-6 py-3 transition-all duration-200 font-medium flex items-center ${
                    item.isWhatsApp 
                      ? 'text-green-600 hover:text-green-700 hover:bg-green-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.isWhatsApp && <MessageCircle className="w-4 h-4 mr-2" />}
                  {item.label}
                </button>
              ))}
              <div className="px-6 pt-4">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      onLogout()
                      setIsMenuOpen(false)
                    }}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95 border-2 border-red-200 bg-white/80 backdrop-blur-sm hover:bg-red-50 hover:border-red-300 text-red-700 shadow-sm hover:shadow-md h-10 px-4 w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                ) : (
                  <button 
                    onClick={() => scrollToSection('contact-section')}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95 border-2 border-blue-200 bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:border-blue-300 text-blue-700 shadow-sm hover:shadow-md h-10 px-4 w-full"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation