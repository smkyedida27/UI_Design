import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
// import Navigation from "./Navigation";
// import Footer from "./Footer"

import { 
  ChevronRight, 
  Code, 
  Smartphone, 
  Blocks, 
  Globe, 
  Database, 
  Cloud, 
  Star, 
  Quote, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  User, 
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  Monitor,
  Palette,
  ShoppingCart,
  Brain,
  Shield,
  Zap,
  ChevronLeft,
  Target,
  Heart,
  Users,
  Award,
  Linkedin,
  ExternalLink,
} from "lucide-react"

const Organisations = () => {
  // const navigate = useNavigate()
  const [currentImageSet, setCurrentImageSet] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(false)
  }, [])

  const handleLogout = () => {
    setIsLoggedIn(false)
    window.location.reload()
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const heroImagesRef = useRef(null)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const heroImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop",
  ]

  const services = [
    {
      name: "Web Development",
      icon: Globe,
      description: "Custom websites and web applications",
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
      ],
      links: [
        "https://sih-2025-phi-one.vercel.app/",
        null
      ],
      projectDescriptions: [
        "Farming Landing Page",
        "Business Portfolio Website"
      ]
    },
    {
      name: "CX Solutions",
      icon: Smartphone,
      description: "Native and cross-platform mobile apps",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
      ],
      links: [null, null],
      projectDescriptions: [
        "Ride Sharing App",
        "E-Learning Mobile App"
      ]
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Beautiful and intuitive user interfaces",
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop"
      ],
      links: [null, null],
      projectDescriptions: [
        "E-Commerce App Design",
        "SaaS Dashboard UI"
      ]
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Online stores and payment solutions",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop"
      ],
      links: [null, null],
      projectDescriptions: [
        "Online Grocery Store",
        "Clothing E-Commerce Platform"
      ]
    },
    {
      name: "AI/ML Solutions",
      icon: Brain,
      description: "Intelligent automation and data insights",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop"
      ],
      links: [null, null],
      projectDescriptions: [
        "AI Chatbot System",
        "Predictive Analytics Platform"
      ]
    }
  ];

  const workSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your vision, analyze requirements, and create a strategic roadmap for success.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "Design & Prototype",
      description: "Our creative team designs intuitive interfaces and creates interactive prototypes for approval.",
      icon: Palette,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Development & Testing", 
      description: "Expert developers build your solution using cutting-edge technology with rigorous testing.",
      icon: Code,
      color: "from-emerald-500 to-teal-500"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project seamlessly and provide ongoing support to ensure continued success.",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    }
  ]

  const teamMembers = [
    {
      name: "Sri Manikanta",
      role: "CEO & Co-Founder",
      description: "Leads company strategy and marketing initiatives, ensuring growth and brand presence while overseeing business operations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      linkedinUrl: "https://www.linkedin.com/in/sri-manikanta-608125290/",
    },
    {
      name: "Prasanth Kumar",
      role: "CTO & Co-Founder",
      description: "Responsible for technical strategy, product architecture, and leading the engineering team to build scalable solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      linkedinUrl: "https://www.linkedin.com/in/tadala-prasanth-kumar-0ba33828b/",
    },
    {
      name: "Arpit Anand",
      role: "Software Developer",
      description: "Works on developing core product features, optimizing performance, and collaborating with the team on technical solutions.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      linkedinUrl: "https://www.linkedin.com/in/arpit-anand-614583288/",
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      rating: 5,
      text: "SYPRA Infotech transformed our outdated website into a modern, responsive platform. The team's professionalism and attention to detail exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c7e98e1c?w=100&h=100&fit=crop&crop=face",
      project: "E-commerce Platform"
    },
    {
      name: "Michael Chen", 
      position: "Founder, Digital Solutions",
      rating: 5,
      text: "Working with SYPRA was a game-changer. They delivered our mobile app ahead of schedule and within budget. Outstanding communication throughout the project.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      project: "Mobile Application"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCorp",
      rating: 5,
      text: "The blockchain solution SYPRA developed revolutionized our supply chain management. Their expertise in emerging technologies is remarkable.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      project: "Blockchain Integration"
    },
    {
      name: "David Park",
      position: "CTO, InnovateLab",
      rating: 5,
      text: "SYPRA's AI solution increased our operational efficiency by 40%. Their team combines technical excellence with business acumen perfectly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      project: "AI/ML Implementation"
    }
  ]

  const faqs = [
    {
      question: "What makes SYPRA Infotech different from other IT companies?",
      answer: "We combine cutting-edge technology with creative design thinking. Our team focuses on delivering scalable, future-ready solutions that grow with your business. We also provide comprehensive support throughout the entire project lifecycle."
    },
    {
      question: "How long does it take to complete a typical project?",
      answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer comprehensive post-launch support including maintenance, updates, security monitoring, and performance optimization. Our support packages are flexible and tailored to your specific needs."
    },
    {
      question: "Can you work with our existing systems and infrastructure?",
      answer: "Yes, we specialize in seamless integration with existing systems. Our team conducts thorough assessments to ensure compatibility and can provide migration strategies when needed."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern technologies including React, Node.js, Python, Flutter, blockchain platforms, cloud services (AWS, Azure), AI/ML frameworks, and various databases. We always choose the best tech stack for your specific requirements."
    },
    {
      question: "How do you ensure project quality and security?",
      answer: "We follow industry best practices including code reviews, automated testing, security audits, and compliance checks. All projects undergo rigorous quality assurance before deployment, and we implement robust security measures at every level."
    }
  ]

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (heroImagesRef.current) {
        const container = heroImagesRef.current
        const scrollAmount = container.scrollLeft + container.offsetWidth / 2
        
        if (scrollAmount >= container.scrollWidth - container.offsetWidth) {
          container.scrollLeft = 0
        } else {
          container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
          })
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const nextIndex = prev + 1
        if (nextIndex >= services[currentImageSet].images.length) {
          setCurrentImageSet(prevSet => (prevSet + 1) % services.length)
          return 0
        }
        return nextIndex
      })
    }, 1500)

    return () => clearInterval(imageInterval)
  }, [currentImageSet, services])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.mobile.trim()) errors.mobile = "Mobile number is required"
    else if (!/^\d{10}$/.test(formData.mobile)) errors.mobile = "Mobile number must be 10 digits"
    if (!formData.service) errors.service = "Please select a service"
    if (!formData.message.trim()) errors.message = "Message is required"
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setSuccessMessage('')
    setErrorMessage('')
    setIsSubmitting(true)
    
    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Service Inquiry: ${formData.service}`,
          message: `Service Required: ${formData.service}
Mobile: ${formData.mobile}

Project Details:
${formData.message}`
        }),
      })

      const result = await response.json()
      
      if (response.ok) {
        setSuccessMessage("Thank you for your inquiry! We'll get back to you soon.")
        setFormData({ name: '', email: '', mobile: '', service: '', message: '' })
        setFormErrors({})
        
        setTimeout(() => {
          setSuccessMessage('')
        }, 5000)
      } else {
        setErrorMessage(result.error || "Something went wrong. Please try again.")
        
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage("Network error. Please try again later.")
      
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Desktop Version */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center">
            <div className="lg:col-span-2 relative z-10 pr-0 lg:pr-8">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Transform Your Vision
                  </span>
                  <span className="block text-gray-800 mt-1">Into Digital Reality</span>
                  <span className="block text-xl md:text-2xl text-gray-500 mt-3 font-normal">
                    with <span className="font-semibold text-blue-600">SYPRA</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
                  We craft powerful digital solutions that merge technology with creativity. From custom software and mobile apps to next-gen IT services, we help businesses innovate and scale. Our mission: deliver performance-driven, future-ready solutions that elevate your digital presence.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button 
                  onClick={() => scrollToSection('services-section')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="lg:col-span-1 flex items-start justify-center h-full min-h-[700px] -mt-20 lg:-mt-16">
              <div className="w-full h-full max-w-none flex items-center justify-center scale-110 lg:scale-125">
                <div className="w-full min-w-[400px] min-h-[400px] max-w-[900px] max-h-[700px]" />
              </div>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-8">
            <div className="relative z-10 px-4">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Transform Your Vision
                  </span>
                  <span className="block text-gray-800 mt-1">Into Digital Reality</span>
                  <span className="block text-lg sm:text-xl text-gray-500 mt-3 font-normal">
                    with <span className="font-semibold text-blue-600">SYPRA</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
                  We craft powerful digital solutions that merge technology with creativity. From custom software and mobile apps to next-gen IT services, we help businesses innovate and scale.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button 
                  onClick={() => scrollToSection('services-section')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center group w-full sm:w-auto"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center mt-8">
              <div className="w-80 h-80 flex items-center justify-center">
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* SAP Emarsys Section */}
<section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

  <div className="absolute top-10 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
  <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{animationDelay: '2s'}}></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-4">
      <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500">SAP Emarsys · Customer Experience</span>
    </div>

    <div className="text-center mb-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
        Managing CX
        <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"> at Scale.</span>
      </h2>
      <p className="text-sm sm:text-base text-gray-500 font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
        The kind of work that doesn't make noise — it just gets done right.
      </p>
    </div>

    {/* The flagship proof point */}
    <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl mb-16">

      {/* Left dark */}
      <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white p-10 sm:p-14 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-16 left-16 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-40 h-40 bg-purple-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="relative z-10">
          <p className="text-blue-300 text-xs font-bold tracking-[0.25em] uppercase mb-6">The Challenge</p>
          <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-6">
            700 email templates.<br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              One migration. Zero errors.
            </span>
          </h3>
          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              Migrating 700 email templates from an external system into SAP Emarsys is not a copy-paste job. Each template needs to be rebuilt inside Emarsys — structure, logic, dynamic content, and all.
            </p>
            <p>
              Done manually, this takes weeks, burns through resources, and almost always introduces errors along the way.
            </p>
          </div>
        </div>
      </div>

      {/* Right light */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-10 sm:p-14 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-12 right-12 w-36 h-36 bg-blue-300 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-12 left-12 w-28 h-28 bg-indigo-300 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="relative z-10">
          <p className="text-indigo-500 text-xs font-bold tracking-[0.25em] uppercase mb-6">How We Did It</p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight mb-6">
            Automated. Verified.<br />
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
              No human intervention needed.
            </span>
          </h3>
          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              With proven expertise in the SAP Emarsys ecosystem, we built a migration process that handled all 700 templates accurately — no manual recreation, no inconsistencies, no back-and-forth.
            </p>
            <p>
              The client's team didn't have to lift a finger. They got their entire template library inside Emarsys, working exactly as intended, from day one.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Stat bar */}
    <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-20">
      {[
        { number: "700", line1: "Email Templates", line2: "Migrated" },
        { number: "0", line1: "Errors or", line2: "Inconsistencies" },
        { number: "100%", line1: "Automated", line2: "Process" }
      ].map((stat, i) => (
        <div key={i} className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-10 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
          <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text mb-2">
            {stat.number}
          </div>
          <div className="text-gray-500 text-xs sm:text-sm font-medium leading-snug">
            {stat.line1}<br />{stat.line2}
          </div>
        </div>
      ))}
    </div>

    {/* What this means for a client */}
    <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-10 sm:p-14 shadow-xl mb-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-500 text-xs font-bold tracking-[0.25em] uppercase mb-6 text-center">What This Means For You</p>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 text-center">
          {[
            {
              heading: "Your timelines don't slip",
              body: "A migration that would take your team weeks gets handled without pulling anyone off their actual work."
            },
            {
              heading: "Your data stays clean",
              body: "No half-migrated templates, no broken logic, no fire drills after go-live. It's done right the first time."
            },
            {
              heading: "Your Emarsys actually performs",
              body: "Templates inside Emarsys aren't just sitting there — they're built to work with segmentation, automation, and personalisation from day one."
            }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-5 group-hover:w-16 transition-all duration-500"></div>
              <h4 className="text-gray-800 font-bold text-sm sm:text-base mb-2">{item.heading}</h4>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center">
      <p className="text-gray-400 text-base mb-2 tracking-wide">Running Emarsys? Thinking about it?</p>
      <p className="text-gray-700 text-lg sm:text-xl font-semibold mb-8">See the full scope of what we do with SAP Emarsys.</p>
      
    </div>

  </div>
</section>

{/* How SYPRA Works - Reduced top padding */}
<section className="py-12 sm:py-16 lg:py-20 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
        How SYPRA
        <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
          Works
        </span>
      </h2>
      <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
        Our proven 4-step process ensures your project is delivered on time, within budget, and exceeds expectations
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {workSteps.map((step, index) => (
        <div 
          key={index} 
          className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl border border-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
            {step.title}
          </h3>
          
          <p className="text-gray-500 leading-relaxed mb-4 text-xs sm:text-sm">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="about-section" className="py-14 sm:py-20 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* About Us Header */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
        About <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Us</span>
      </h2>
      <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
        Driven by innovation, guided by excellence. Discover our mission, vision, and the passionate team behind SYPRA's success.
      </p>
    </div>

    {/* Mission & Vision Split - Mobile Responsive */}
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 min-h-[55vh] mb-14 sm:mb-20 rounded-3xl overflow-hidden shadow-2xl">
      {/* Mission Side - Dark */}
      <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 bg-purple-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-6 sm:mb-8">
            <Target className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 mr-3 sm:mr-4 animate-pulse" />
            <span className="text-blue-300 font-medium tracking-wider uppercase text-xs sm:text-sm">Our Mission</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold mb-5 leading-tight">
            Empowering Digital
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Transformation
            </span>
          </h3>
          
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-gray-300">
            <p>At SYPRA Infotech, we transform ideas into powerful digital solutions that help businesses grow faster, smarter, and stronger.</p>
            <p>From custom software development to innovative IT services, we combine cutting-edge technology with creative thinking to deliver reliable, scalable, and future-ready solutions that bring your vision to life.</p>
          </div>
        </div>
      </div>

      {/* Vision Side - Light */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-24 sm:w-36 h-24 sm:h-36 bg-orange-300 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 w-20 sm:w-28 h-20 sm:h-28 bg-pink-300 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-6 sm:mb-8">
            <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500 mr-3 sm:mr-4 animate-pulse" />
            <span className="text-orange-700 font-medium tracking-wider uppercase text-xs sm:text-sm">Our Vision</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold mb-5 leading-tight text-gray-800">
            Shaping Tomorrow's
            <span className="block text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
              Digital Landscape
            </span>
          </h3>
          
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-gray-600">
            <p>We envision a future where technology seamlessly integrates with human creativity, enabling businesses to achieve unprecedented growth and innovation.</p>
            <p>Our vision is to become the go-to partner for organizations seeking to leverage digital transformation as their competitive advantage in an evolving marketplace.</p>
          </div>

          {/* Achievement metrics - Mobile Responsive */}
          <div className="mt-8 sm:mt-12 flex justify-center sm:justify-start space-x-6 sm:space-x-8">
            <div className="text-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg mx-auto">
                <span className="text-lg sm:text-xl font-bold text-white">5</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Projects Delivered</span>
            </div>
            <div className="text-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg mx-auto">
                <span className="text-lg sm:text-xl font-bold text-white">98%</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Client Satisfaction</span>
            </div>
            <div className="text-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg mx-auto">
                <span className="text-lg sm:text-xl font-bold text-white">24/7</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>

 
  </div>
</section>


<section id="services-section" className="py-20 bg-white relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
        Our Services
      </h2>
      <p className="text-sm text-gray-500 max-w-2xl mx-auto">
        Comprehensive digital solutions tailored to transform your business
      </p>
    </div>

    {/* Desktop Version - Hidden on mobile */}
    <div className="hidden lg:flex flex-col lg:flex-row gap-0 items-start">
      {/* LEFT SIDE - Service List (moved further left) */}
      <div className="lg:w-2/5 relative h-80 overflow-hidden">
        <div className="relative h-full">
          {services.map((service, idx) => {
            const total = services.length;
            const prevIndex = (currentImageSet - 1 + total) % total;
            const nextIndex = (currentImageSet + 1) % total;
            const prev2Index = (currentImageSet - 2 + total) % total;
            const next2Index = (currentImageSet + 2) % total;

            // Default offscreen position
            let posClass = "translate-y-60 opacity-0 scale-75 pointer-events-none z-0";

            // Position mapping
            if (idx === prev2Index) posClass = "-translate-y-40 opacity-40 scale-75 z-0";
            if (idx === prevIndex) posClass = "-translate-y-20 opacity-70 scale-90 z-10";
            if (idx === currentImageSet) posClass = "translate-y-0 opacity-100 scale-100 z-20";
            if (idx === nextIndex) posClass = "translate-y-20 opacity-70 scale-90 z-10";
            if (idx === next2Index) posClass = "translate-y-40 opacity-40 scale-75 z-0";

            return (
              <div
                key={idx}
                onClick={() => setCurrentImageSet(idx)}
                className={`absolute left-0 right-0 flex justify-center items-center transform-gpu transition-all duration-700 ease-in-out ${posClass}`}
                style={{ height: "96px", willChange: "transform, opacity" }}
              >
                <div
                  className={`h-24 w-5/6 p-3 rounded-xl border flex items-center space-x-3 transition-all duration-500 ${
                    idx === currentImageSet
                      ? "bg-blue-50 border-blue-200 shadow-lg"
                      : "bg-gray-50 border-gray-100"
                  }`}
                >
                  <div
                    className={`rounded-lg flex items-center justify-center transition-all duration-500 ${
                      idx === currentImageSet
                        ? "w-12 h-12 bg-blue-500 text-white"
                        : "w-8 h-8 bg-gray-200 text-gray-400"
                    }`}
                  >
                    {service.icon && (
                      <service.icon
                        className={idx === currentImageSet ? "w-6 h-6" : "w-4 h-4"}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold ${
                        idx === currentImageSet
                          ? "text-gray-800 text-lg"
                          : "text-gray-400 text-sm"
                      }`}
                    >
                      {service.name}
                    </h4>
                    <p
                      className={`${
                        idx === currentImageSet
                          ? "text-gray-600 text-sm opacity-100"
                          : "text-gray-400 text-xs opacity-60"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE - Enhanced Project Images Display with increased width */}
      <div className="-mt-10 lg:w-3/5 relative pl-0 lg:pl-8">
        <div className="mb-4 flex justify-between items-center">
          <h4 className="text-lg font-semibold text-gray-800">
            {services[currentImageSet].name} Projects
          </h4>
        </div>

        {/* Main Image Display - Increased width */}
        <div className="relative h-[450px] w-full rounded-xl overflow-hidden group">
          {services[currentImageSet].links[currentImageIndex] ? (
            <a 
              href={services[currentImageSet].links[currentImageIndex]} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={services[currentImageSet].images[currentImageIndex]}
                alt={`${services[currentImageSet].name} project ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 cursor-pointer"
              />
            </a>
          ) : (
            <img
              src={services[currentImageSet].images[currentImageIndex]}
              alt={`${services[currentImageSet].name} project ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          )}

          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentImageIndex((currentImageIndex - 1 + services[currentImageSet].images.length) % services[currentImageSet].images.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => setCurrentImageIndex((currentImageIndex + 1) % services[currentImageSet].images.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
            <p className="text-sm opacity-90">
              {services[currentImageSet].projectDescriptions[currentImageIndex]}
            </p>
          </div>
        </div>

        {/* Image navigation dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {services[currentImageSet].images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? "bg-blue-500"  // Active: blue circle
                  : "bg-gray-300 hover:bg-gray-400"  // Inactive: gray circle
              }`}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Mobile Version - Hidden on desktop */}
    <div className="lg:hidden flex flex-col items-center">
      {/* Mobile Service Selector with Same Animation Effect */}
      <div className="w-full max-w-md mb-8">
        <div className="relative h-80 overflow-hidden">
          <div className="relative h-full">
            {services.map((service, idx) => {
              const total = services.length;
              const prevIndex = (currentImageSet - 1 + total) % total;
              const nextIndex = (currentImageSet + 1) % total;
              const prev2Index = (currentImageSet - 2 + total) % total;
              const next2Index = (currentImageSet + 2) % total;

              // Default offscreen position
              let posClass = "translate-y-60 opacity-0 scale-75 pointer-events-none z-0";

              // Position mapping - same as desktop
              if (idx === prev2Index) posClass = "-translate-y-40 opacity-40 scale-75 z-0";
              if (idx === prevIndex) posClass = "-translate-y-20 opacity-70 scale-90 z-10";
              if (idx === currentImageSet) posClass = "translate-y-0 opacity-100 scale-100 z-20";
              if (idx === nextIndex) posClass = "translate-y-20 opacity-70 scale-90 z-10";
              if (idx === next2Index) posClass = "translate-y-40 opacity-40 scale-75 z-0";

              return (
                <div
                  key={idx}
                  onClick={() => setCurrentImageSet(idx)}
                  className={`absolute left-0 right-0 flex justify-center items-center transform-gpu transition-all duration-700 ease-in-out ${posClass}`}
                  style={{ height: "96px", willChange: "transform, opacity" }}
                >
                  <div
                    className={`h-24 w-11/12 p-3 rounded-xl border flex items-center space-x-3 transition-all duration-500 ${
                      idx === currentImageSet
                        ? "bg-blue-50 border-blue-200 shadow-lg"
                        : "bg-gray-50 border-gray-100"
                    }`}
                  >
                    <div
                      className={`rounded-lg flex items-center justify-center transition-all duration-500 ${
                        idx === currentImageSet
                          ? "w-12 h-12 bg-blue-500 text-white"
                          : "w-8 h-8 bg-gray-200 text-gray-400"
                      }`}
                    >
                      {service.icon && (
                        <service.icon
                          className={idx === currentImageSet ? "w-6 h-6" : "w-4 h-4"}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold ${
                          idx === currentImageSet
                            ? "text-gray-800 text-base"
                            : "text-gray-400 text-sm"
                        }`}
                      >
                        {service.name}
                      </h4>
                      <p
                        className={`${
                          idx === currentImageSet
                            ? "text-gray-600 text-sm opacity-100"
                            : "text-gray-400 text-xs opacity-60"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Project Display */}
      <div className="space-y-6">
        <div className="text-center">
          <h4 className="text-base font-semibold text-gray-800 mb-2">
            {services[currentImageSet].name} Projects
          </h4>
        </div>

        {/* Mobile Image Display */}
        <div className="relative h-[300px] w-full rounded-xl overflow-hidden group">
          {services[currentImageSet].links[currentImageIndex] ? (
            <a 
              href={services[currentImageSet].links[currentImageIndex]} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={services[currentImageSet].images[currentImageIndex]}
                alt={`${services[currentImageSet].name} project ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 cursor-pointer"
              />
            </a>
          ) : (
            <img
              src={services[currentImageSet].images[currentImageIndex]}
              alt={`${services[currentImageSet].name} project ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          )}

          {/* Mobile Navigation Arrows */}
          <button 
            onClick={() => setCurrentImageIndex((currentImageIndex - 1 + services[currentImageSet].images.length) % services[currentImageSet].images.length)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setCurrentImageIndex((currentImageIndex + 1) % services[currentImageSet].images.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          
          {/* Mobile Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <p className="text-sm opacity-90">
              {services[currentImageSet].projectDescriptions[currentImageIndex]}
            </p>
          </div>
        </div>

        {/* Mobile Image navigation dots */}
        <div className="flex justify-center space-x-2">
          {services[currentImageSet].images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

   

      {/* Contact Form */}

{/* Contact Form - Mobile Responsive */}
<section id="contact-section" className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 text-gray-800 relative overflow-hidden">
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-twinkle"></div>
    <div className="absolute top-32 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
    <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Centered Heading */}
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
        Have a Project in Mind?
        <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mt-1">
          Let's make it happen!
        </span>
      </h2>
      <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Ready to transform your ideas into reality? Get in touch and let's create something amazing together.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-6 items-stretch">
      {/* Left Side - Lottie Animation (Hidden on small mobile) */}
      <div className="hidden sm:flex lg:w-2/5 items-center justify-center p-4">
        <div className="w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center">

        </div>
      </div>

      {/* Right Side - Form Container */}
      <div className="w-full lg:w-3/5">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 h-full">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.name ? 'border-red-300 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-400'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {formErrors.name && <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.email ? 'border-red-300 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-400'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
              </div>

              {/* Mobile Field */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.mobile ? 'border-red-300 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-400'
                    }`}
                    placeholder="Enter your mobile number"
                  />
                </div>
                {formErrors.mobile && <p className="text-red-500 text-sm mt-2">{formErrors.mobile}</p>}
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Service Required *
                </label>
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.service ? 'border-red-300 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-400'
                    }`}
                  >
                    <option value="" className="text-gray-500">Select a service</option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name} className="text-gray-800">
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                {formErrors.service && <p className="text-red-500 text-sm mt-2">{formErrors.service}</p>}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Project Details *
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-5 w-4 h-4 text-gray-400" />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    formErrors.message ? 'border-red-300 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-400'
                  }`}
                  placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
                />
              </div>
              {formErrors.message && <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>}
            </div>

            {/* Success/Error Message */}
            {(successMessage || errorMessage) && (
              <div className={`p-4 rounded-xl border ${
                successMessage 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              } transition-all duration-300`}>
                <div className="flex items-center space-x-2">
                  {successMessage ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <MessageCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="font-medium">
                    {successMessage || errorMessage}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-2.5 rounded-lg font-medium shadow-sm transition-all duration-300 text-sm w-full sm:w-auto ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:shadow-lg hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2 justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 justify-center">
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
{/* FAQ Section - Mobile Responsive */}
<section className="py-14 sm:py-20 bg-gradient-to-br from-gray-50 to-slate-100">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
        Frequently Asked
        <span className="block text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text">
          Questions
        </span>
      </h2>
      <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Got questions? We've got answers. Find everything you need to know about working with SYPRA.
      </p>
    </div>

    <div className="space-y-4 sm:space-y-6">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            className="w-full px-5 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-white/20 transition-all duration-300"
          >
            <span className="text-sm sm:text-base font-semibold text-gray-800 pr-4">{faq.question}</span>
            {openFAQ === index ? (
              <ChevronUp className="w-4 sm:w-5 h-4 sm:h-5 text-violet-600 transform transition-transform duration-300 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 transform transition-transform duration-300 flex-shrink-0" />
            )}
          </button>
          
          <div className={`px-5 sm:px-6 transition-all duration-500 ease-in-out ${
            openFAQ === index ? 'max-h-96 pb-4 sm:pb-6' : 'max-h-0 overflow-hidden'
          }`}>
            <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Organisations