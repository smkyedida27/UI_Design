// // // // import { useState, useEffect, useRef } from "react";

// // // // // ── DATA ──────────────────────────────────────────────────────────────────────

// // // // const SERVICES = [
// // // //   {
// // // //     num: "01",
// // // //     name: "Web & App Development",
// // // //     short: "WEB & MOBILE",
// // // //     detail:
// // // //       "Custom websites, progressive web apps, and native mobile solutions engineered with React, Node.js, Flutter, and modern cloud-native architectures. Every build is optimized for performance, security, and long-term maintainability.",
// // // //     outcomes: ["300+ applications delivered", "98% on-time delivery", "React · Node · Flutter · AWS"],
// // // //     icon: "◈",
// // // //   },
// // // //   {
// // // //     num: "02",
// // // //     name: "Cloud & Infrastructure",
// // // //     short: "CLOUD & DEVOPS",
// // // //     detail:
// // // //       "Full-cycle cloud migration, containerization with Docker and Kubernetes, CI/CD pipeline engineering, and 24/7 managed infrastructure operations. We architect for resilience, cost-efficiency, and elastic scale.",
// // // //     outcomes: ["40% avg cost reduction", "99.97% uptime delivered", "AWS · Azure · GCP"],
// // // //     icon: "◉",
// // // //   },
// // // //   {
// // // //     num: "03",
// // // //     name: "AI & Automation",
// // // //     short: "AI & ML",
// // // //     detail:
// // // //       "From predictive analytics and NLP pipelines to intelligent document processing and workflow automation — we build AI systems that generate measurable ROI, not just demos.",
// // // //     outcomes: ["12+ AI projects live", "60% process time saved", "Python · TensorFlow · LLMs"],
// // // //     icon: "◎",
// // // //   },
// // // //   {
// // // //     num: "04",
// // // //     name: "ERP & CRM",
// // // //     short: "ERP & CRM",
// // // //     detail:
// // // //       "SAP, Salesforce, and custom ERP implementations that unify finance, HR, supply chain, and customer data. We handle discovery, configuration, migration, and training across every module.",
// // // //     outcomes: ["Salesforce · SAP · Custom", "Full org rollout support", "Data migration included"],
// // // //     icon: "⬡",
// // // //   },
// // // //   {
// // // //     num: "05",
// // // //     name: "Cybersecurity",
// // // //     short: "SECURITY",
// // // //     detail:
// // // //       "Penetration testing, VAPT, security architecture review, ISO 27001 readiness, GDPR compliance, and 24/7 SOC monitoring. We harden your systems before attackers find the gaps.",
// // // //     outcomes: ["VAPT & pen testing", "ISO 27001 readiness", "24/7 threat monitoring"],
// // // //     icon: "⬢",
// // // //   },
// // // //   {
// // // //     num: "06",
// // // //     name: "IT Consulting",
// // // //     short: "CONSULTING",
// // // //     detail:
// // // //       "From technology audits and vendor selection to full digital transformation roadmaps — our senior consultants embed with your leadership team to drive decisions backed by data, not opinion.",
// // // //     outcomes: ["150+ engagements", "CTO-level advisory", "Roadmap to execution"],
// // // //     icon: "◐",
// // // //   },
// // // // ];

// // // // const STATS = [
// // // //   { v: "10+", l: "Years of experience" },
// // // //   { v: "300+", l: "Projects completed" },
// // // //   { v: "500+", l: "Professionals trained" },
// // // //   { v: "98%", l: "Client satisfaction rate" },
// // // // ];

// // // // const CASES = [
// // // //   {
// // // //     sector: "FINTECH",
// // // //     title: "AI-powered lending platform serving 400K+ users across 3 states",
// // // //     result: "2.3× faster loan approvals",
// // // //     body: "Built end-to-end credit scoring infrastructure using ML pipelines and real-time decisioning APIs deployed on AWS.",
// // // //     tech: ["React", "Python", "AWS"],
// // // //     color: "#E8521A",
// // // //   },
// // // //   {
// // // //     sector: "HEALTHTECH",
// // // //     title: "Hospital management system unifying 12 departments into one digital core",
// // // //     result: "40% reduction in admin overhead",
// // // //     body: "Replaced 6 legacy systems with a unified EHR and workflow platform, integrating lab, billing, pharmacy, and scheduling.",
// // // //     tech: ["Node.js", "PostgreSQL", "Azure"],
// // // //     color: "#0B1E33",
// // // //   },
// // // //   {
// // // //     sector: "EDTECH",
// // // //     title: "Skill-based training platform with live mentorship and placement tracking",
// // // //     result: "92% placement success rate",
// // // //     body: "Live cohort platform with AI-matched mentorship, progress analytics, and employer integration for 18,000+ learners.",
// // // //     tech: ["Flutter", "Firebase", "ML"],
// // // //     color: "#E8521A",
// // // //   },
// // // // ];

// // // // const WHYS = [
// // // //   { n: "01", h: "Full-Stack Delivery", b: "We own the entire technology stack — design, frontend, backend, DevOps, QA, and security — under a single engagement." },
// // // //   { n: "02", h: "Outcome-Driven Contracts", b: "We price by outcomes and deliverables, not by hours. You know what you're getting before we write a line of code." },
// // // //   { n: "03", h: "Transparent Operations", b: "Daily standups, weekly demos, live project dashboards. No black boxes, no surprises, no excuses." },
// // // //   { n: "04", h: "Post-Delivery Partnership", b: "Our engagements don't end at launch. Maintenance, monitoring, feature iterations, and SLA-backed support come standard." },
// // // // ];

// // // // const NAV_ITEMS = [
// // // //   { label: "Platform", sub: ["Web & Apps", "Cloud & DevOps", "AI & Automation", "Cybersecurity"] },
// // // //   { label: "Solutions", sub: ["ERP & CRM", "IT Consulting", "Digital Transformation", "Managed Services"] },
// // // //   { label: "Industries", sub: ["Fintech", "Healthcare", "EdTech", "Retail", "Manufacturing"] },
// // // //   { label: "Training", sub: ["Programs", "Corporate", "Certifications"] },
// // // //   { label: "About", sub: ["Company", "Leadership", "Careers", "Press"] },
// // // //   { label: "Insights", sub: ["Blog", "Case Studies", "Whitepapers"] },
// // // // ];

// // // // const LOGOS = ["FINTECH", "EDTECH", "HEALTHTECH", "RETAIL", "LOGISTICS", "MANUFACTURING"];

// // // // // ── COMPONENT ─────────────────────────────────────────────────────────────────

// // // // export default function App() {
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const [activeSvc, setActiveSvc] = useState(0);
// // // //   const [openNav, setOpenNav] = useState(null);
// // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // //   const [heroVisible, setHeroVisible] = useState(false);
// // // //   const heroRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const fn = () => setScrolled(window.scrollY > 10);
// // // //     window.addEventListener("scroll", fn);
// // // //     return () => window.removeEventListener("scroll", fn);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const t = setTimeout(() => setHeroVisible(true), 100);
// // // //     return () => clearTimeout(t);
// // // //   }, []);

// // // //   return (
// // // //     <div style={{ fontFamily: "'DM Sans','Helvetica Neue',Arial,sans-serif", background: "#fff", color: "#0f1923", overflowX: "hidden" }}>
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=DM+Mono:wght@400;500&family=Syne:wght@600;700;800&display=swap');

// // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // // //         :root {
// // // //           --or: #E8521A;
// // // //           --or-dk: #c94412;
// // // //           --nv: #0B1E33;
// // // //           --nv2: #0f2a45;
// // // //           --md: #4a5568;
// // // //           --lt: #f7f8fa;
// // // //           --lt2: #f0f2f5;
// // // //           --br: #e2e6ea;
// // // //           --br2: #d0d5dd;
// // // //           --f: 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
// // // //           --h: 'Syne', sans-serif;
// // // //           --mono: 'DM Mono', monospace;
// // // //           --max: 1320px;
// // // //           --trans: cubic-bezier(0.25, 0.46, 0.45, 0.94);
// // // //         }

// // // //         html { scroll-behavior: smooth; }

// // // //         /* ── SCROLLBAR ── */
// // // //         ::-webkit-scrollbar { width: 4px; }
// // // //         ::-webkit-scrollbar-track { background: #f0f0f0; }
// // // //         ::-webkit-scrollbar-thumb { background: var(--or); border-radius: 2px; }

// // // //         /* ── NAV ── */
// // // //         .nav {
// // // //           position: fixed; top: 0; left: 0; right: 0; z-index: 900;
// // // //           background: rgba(255,255,255,0.97);
// // // //           backdrop-filter: blur(16px);
// // // //           border-bottom: 1px solid transparent;
// // // //           transition: border-color .3s, box-shadow .3s;
// // // //         }
// // // //         .nav.scrolled {
// // // //           border-bottom-color: var(--br);
// // // //           box-shadow: 0 1px 0 0 rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06);
// // // //         }
// // // //         .nav-inner {
// // // //           max-width: var(--max); margin: 0 auto; padding: 0 40px;
// // // //           height: 68px; display: flex; align-items: center; gap: 0;
// // // //         }
// // // //         .brand {
// // // //           display: flex; align-items: center; gap: 0;
// // // //           font-family: var(--h); font-weight: 800; font-size: 20px;
// // // //           letter-spacing: -0.3px; color: var(--nv); text-decoration: none;
// // // //           margin-right: 48px; flex-shrink: 0;
// // // //         }
// // // //         .brand-dot { color: var(--or); }
// // // //         .nav-menu { display: flex; align-items: center; gap: 2px; flex: 1; }
// // // //         .nav-item { position: relative; }
// // // //         .nav-btn {
// // // //           display: flex; align-items: center; gap: 5px;
// // // //           padding: 8px 14px; border-radius: 6px; border: none;
// // // //           background: transparent; font: 500 14px var(--f); color: #374151;
// // // //           cursor: pointer; transition: all .18s var(--trans); white-space: nowrap;
// // // //         }
// // // //         .nav-btn:hover { background: var(--lt2); color: var(--nv); }
// // // //         .nav-chevron {
// // // //           width: 14px; height: 14px; display: flex; align-items: center;
// // // //           justify-content: center; transition: transform .2s var(--trans);
// // // //         }
// // // //         .nav-chevron.open { transform: rotate(180deg); }
// // // //         .nav-dropdown {
// // // //           position: absolute; top: calc(100% + 8px); left: 0;
// // // //           background: #fff; border: 1px solid var(--br);
// // // //           border-radius: 10px; padding: 8px; min-width: 200px;
// // // //           box-shadow: 0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
// // // //           opacity: 0; pointer-events: none; transform: translateY(-8px);
// // // //           transition: opacity .2s var(--trans), transform .2s var(--trans);
// // // //           z-index: 100;
// // // //         }
// // // //         .nav-dropdown.open { opacity: 1; pointer-events: all; transform: translateY(0); }
// // // //         .nav-dd-item {
// // // //           display: block; padding: 9px 14px; border-radius: 6px;
// // // //           font-size: 13.5px; font-weight: 500; color: #374151;
// // // //           text-decoration: none; transition: all .15s;
// // // //         }
// // // //         .nav-dd-item:hover { background: var(--lt); color: var(--or); }
// // // //         .nav-right { margin-left: auto; display: flex; gap: 8px; align-items: center; }
// // // //         .btn-ghost {
// // // //           padding: 9px 20px; border-radius: 7px; border: 1px solid var(--br2);
// // // //           font: 600 13.5px var(--f); background: transparent; color: #374151;
// // // //           cursor: pointer; transition: all .15s; text-decoration: none;
// // // //           display: inline-flex; align-items: center;
// // // //         }
// // // //         .btn-ghost:hover { border-color: var(--nv); color: var(--nv); background: var(--lt); }
// // // //         .btn-primary {
// // // //           padding: 10px 22px; border-radius: 7px; border: none;
// // // //           font: 600 13.5px var(--f); background: var(--or); color: #fff;
// // // //           cursor: pointer; transition: all .15s; display: inline-flex; align-items: center; gap: 6px;
// // // //         }
// // // //         .btn-primary:hover { background: var(--or-dk); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(232,82,26,0.35); }

// // // //         /* ── HERO ── */
// // // //         .hero {
// // // //           padding-top: 68px; background: var(--nv);
// // // //           position: relative; overflow: hidden;
// // // //         }
// // // //         .hero-bg-lines {
// // // //           position: absolute; inset: 0; opacity: 0.04;
// // // //           background-image: repeating-linear-gradient(
// // // //             0deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px
// // // //           ),
// // // //           repeating-linear-gradient(
// // // //             90deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px
// // // //           );
// // // //         }
// // // //         .hero-glow {
// // // //           position: absolute; top: -30%; right: -15%;
// // // //           width: 900px; height: 900px; border-radius: 50%;
// // // //           background: radial-gradient(circle at center, rgba(232,82,26,0.18) 0%, rgba(232,82,26,0.04) 45%, transparent 70%);
// // // //           pointer-events: none;
// // // //         }
// // // //         .hero-glow2 {
// // // //           position: absolute; bottom: -20%; left: -10%;
// // // //           width: 600px; height: 600px; border-radius: 50%;
// // // //           background: radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, transparent 65%);
// // // //           pointer-events: none;
// // // //         }
// // // //         .hero-inner {
// // // //           max-width: var(--max); margin: 0 auto; padding: 88px 40px 0;
// // // //           position: relative; z-index: 2;
// // // //         }
// // // //         .hero-top { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; padding-bottom: 80px; }
// // // //         .hero-label {
// // // //           display: inline-flex; align-items: center; gap: 8px;
// // // //           padding: 5px 12px; border-radius: 20px;
// // // //           border: 1px solid rgba(232,82,26,0.3);
// // // //           background: rgba(232,82,26,0.08);
// // // //           font-family: var(--mono); font-size: 11px; font-weight: 500;
// // // //           letter-spacing: 0.08em; color: #fb8c6a;
// // // //           margin-bottom: 28px;
// // // //           opacity: 0; transform: translateY(12px);
// // // //           transition: opacity 0.6s var(--trans), transform 0.6s var(--trans);
// // // //         }
// // // //         .hero-label.visible { opacity: 1; transform: translateY(0); }
// // // //         .hero-label-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--or); animation: pulse 2s ease-in-out infinite; }
// // // //         @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
// // // //         .hero-h1 {
// // // //           font-family: var(--h); font-size: clamp(38px, 5vw, 64px);
// // // //           font-weight: 800; line-height: 1.04; letter-spacing: -1.5px;
// // // //           color: #fff; margin-bottom: 24px;
// // // //           opacity: 0; transform: translateY(16px);
// // // //           transition: opacity 0.7s 0.1s var(--trans), transform 0.7s 0.1s var(--trans);
// // // //         }
// // // //         .hero-h1.visible { opacity: 1; transform: translateY(0); }
// // // //         .hero-h1-accent { color: var(--or); }
// // // //         .hero-p {
// // // //           font-size: 17px; font-weight: 400; line-height: 1.75;
// // // //           color: rgba(255,255,255,0.5); max-width: 460px; margin-bottom: 40px;
// // // //           opacity: 0; transform: translateY(16px);
// // // //           transition: opacity 0.7s 0.2s var(--trans), transform 0.7s 0.2s var(--trans);
// // // //         }
// // // //         .hero-p.visible { opacity: 1; transform: translateY(0); }
// // // //         .hero-ctas {
// // // //           display: flex; gap: 12px; flex-wrap: wrap;
// // // //           opacity: 0; transform: translateY(16px);
// // // //           transition: opacity 0.7s 0.3s var(--trans), transform 0.7s 0.3s var(--trans);
// // // //         }
// // // //         .hero-ctas.visible { opacity: 1; transform: translateY(0); }
// // // //         .btn-hero {
// // // //           padding: 13px 28px; border-radius: 7px; border: none;
// // // //           font: 600 15px var(--f); background: var(--or); color: #fff;
// // // //           cursor: pointer; transition: all .18s;
// // // //           display: inline-flex; align-items: center; gap: 8px;
// // // //         }
// // // //         .btn-hero:hover { background: var(--or-dk); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,82,26,0.45); }
// // // //         .btn-hero-ghost {
// // // //           padding: 13px 24px; border-radius: 7px; border: 1px solid rgba(255,255,255,0.18);
// // // //           font: 500 15px var(--f); background: transparent; color: rgba(255,255,255,0.72);
// // // //           cursor: pointer; transition: all .18s;
// // // //           display: inline-flex; align-items: center; gap: 8px;
// // // //         }
// // // //         .btn-hero-ghost:hover { border-color: rgba(255,255,255,0.4); color: #fff; background: rgba(255,255,255,0.05); }

// // // //         /* Hero Right Panel */
// // // //         .hero-panel {
// // // //           opacity: 0; transform: translateY(20px);
// // // //           transition: opacity 0.8s 0.4s var(--trans), transform 0.8s 0.4s var(--trans);
// // // //         }
// // // //         .hero-panel.visible { opacity: 1; transform: translateY(0); }
// // // //         .panel-card {
// // // //           background: rgba(255,255,255,0.04);
// // // //           border: 1px solid rgba(255,255,255,0.1);
// // // //           border-radius: 12px; overflow: hidden;
// // // //         }
// // // //         .panel-header {
// // // //           display: flex; align-items: center; justify-content: space-between;
// // // //           padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.07);
// // // //         }
// // // //         .panel-title { font-family: var(--mono); font-size: 11px; color: rgba(255,255,255,0.35); letter-spacing: 0.08em; }
// // // //         .panel-badge {
// // // //           display: flex; align-items: center; gap: 5px;
// // // //           font-family: var(--mono); font-size: 10px; font-weight: 500;
// // // //           padding: 3px 8px; border-radius: 4px;
// // // //         }
// // // //         .badge-live { background: rgba(34,197,94,0.12); color: #4ade80; border: 1px solid rgba(34,197,94,0.2); }
// // // //         .badge-track { background: rgba(232,82,26,0.12); color: #fb923c; border: 1px solid rgba(232,82,26,0.2); }
// // // //         .panel-body { padding: 20px; }
// // // //         .proj-row { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
// // // //         .proj-row:last-child { margin-bottom: 0; }
// // // //         .proj-color { width: 3px; height: 36px; border-radius: 2px; flex-shrink: 0; }
// // // //         .proj-info { flex: 1; min-width: 0; }
// // // //         .proj-name { font-size: 12.5px; font-weight: 600; color: rgba(255,255,255,0.75); margin-bottom: 5px; }
// // // //         .proj-bar-wrap { height: 3px; background: rgba(255,255,255,0.07); border-radius: 2px; }
// // // //         .proj-bar { height: 3px; border-radius: 2px; }
// // // //         .proj-pct { font-family: var(--mono); font-size: 11px; color: rgba(255,255,255,0.4); flex-shrink: 0; width: 28px; text-align: right; }
// // // //         .mini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px; }
// // // //         .mini-stat {
// // // //           background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
// // // //           border-radius: 10px; padding: 18px; text-align: center;
// // // //         }
// // // //         .mini-stat-v { font-family: var(--h); font-size: 32px; font-weight: 700; color: #fff; line-height: 1; }
// // // //         .mini-stat-v span { color: var(--or); }
// // // //         .mini-stat-l { font-size: 11px; color: rgba(255,255,255,0.3); margin-top: 5px; }

// // // //         /* Hero Bottom Stats */
// // // //         .hero-stats {
// // // //           border-top: 1px solid rgba(255,255,255,0.07);
// // // //           display: grid; grid-template-columns: repeat(4,1fr);
// // // //           opacity: 0; transform: translateY(10px);
// // // //           transition: opacity 0.7s 0.5s var(--trans), transform 0.7s 0.5s var(--trans);
// // // //         }
// // // //         .hero-stats.visible { opacity: 1; transform: translateY(0); }
// // // //         .hstat { padding: 32px 40px; border-right: 1px solid rgba(255,255,255,0.07); }
// // // //         .hstat:last-child { border-right: none; }
// // // //         .hstat-v { font-family: var(--h); font-size: 36px; font-weight: 700; color: #fff; letter-spacing: -1px; line-height: 1; }
// // // //         .hstat-v em { color: var(--or); font-style: normal; }
// // // //         .hstat-l { font-size: 12px; font-weight: 400; color: rgba(255,255,255,0.35); margin-top: 6px; }

// // // //         /* ── TRUST BAR ── */
// // // //         .trust-bar { background: #fff; border-bottom: 1px solid var(--br); }
// // // //         .trust-inner {
// // // //           max-width: var(--max); margin: 0 auto; padding: 0 40px;
// // // //           height: 64px; display: flex; align-items: center; gap: 0;
// // // //         }
// // // //         .trust-label {
// // // //           font-family: var(--mono); font-size: 10.5px; font-weight: 500;
// // // //           letter-spacing: 0.12em; color: #9ca3af; text-transform: uppercase;
// // // //           padding-right: 32px; border-right: 1px solid var(--br); margin-right: 32px; white-space: nowrap;
// // // //         }
// // // //         .trust-logos { display: flex; gap: 32px; align-items: center; }
// // // //         .trust-logo { font-family: var(--mono); font-size: 11px; font-weight: 500; letter-spacing: 0.1em; color: #c5c9d1; text-transform: uppercase; }

// // // //         /* ── SECTION SHARED ── */
// // // //         .section { padding: 96px 0; }
// // // //         .section-alt { padding: 96px 0; background: var(--lt); border-top: 1px solid var(--br); border-bottom: 1px solid var(--br); }
// // // //         .wrap { max-width: var(--max); margin: 0 auto; padding: 0 40px; }
// // // //         .eyebrow {
// // // //           display: inline-flex; align-items: center; gap: 10px;
// // // //           font-family: var(--mono); font-size: 11px; font-weight: 500;
// // // //           letter-spacing: 0.12em; text-transform: uppercase; color: var(--or);
// // // //           margin-bottom: 20px;
// // // //         }
// // // //         .eyebrow::before { content: ''; width: 20px; height: 1px; background: var(--or); }
// // // //         .section-h {
// // // //           font-family: var(--h); font-size: clamp(28px,3.5vw,48px);
// // // //           font-weight: 700; letter-spacing: -1px; line-height: 1.08; color: var(--nv);
// // // //         }
// // // //         .section-sub {
// // // //           font-size: 17px; font-weight: 400; color: var(--md); line-height: 1.7;
// // // //           max-width: 520px; margin-top: 16px;
// // // //         }
// // // //         .link-arrow {
// // // //           display: inline-flex; align-items: center; gap: 6px;
// // // //           font: 600 13.5px var(--f); color: var(--or); text-decoration: none;
// // // //           transition: gap .18s;
// // // //         }
// // // //         .link-arrow:hover { gap: 10px; }

// // // //         /* ── SERVICES ── */
// // // //         .svc-wrap { display: grid; grid-template-columns: 280px 1fr; border: 1px solid var(--br); border-radius: 12px; overflow: hidden; margin-top: 56px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
// // // //         .svc-tabs { border-right: 1px solid var(--br); background: var(--lt); }
// // // //         .svc-tab {
// // // //           display: flex; align-items: center; gap: 14px;
// // // //           padding: 18px 24px; border-left: 3px solid transparent;
// // // //           cursor: pointer; transition: all .18s var(--trans);
// // // //           border-bottom: 1px solid var(--br);
// // // //         }
// // // //         .svc-tab:last-child { border-bottom: none; }
// // // //         .svc-tab.active { background: #fff; border-left-color: var(--or); }
// // // //         .svc-tab:not(.active):hover { background: #eef0f3; }
// // // //         .svc-tab-num { font-family: var(--mono); font-size: 11px; color: #c0c5cc; }
// // // //         .svc-tab.active .svc-tab-num { color: var(--or); }
// // // //         .svc-tab-name { font-size: 13.5px; font-weight: 600; color: #6b7280; }
// // // //         .svc-tab.active .svc-tab-name { color: var(--nv); }
// // // //         .svc-icon { font-size: 18px; color: rgba(232,82,26,0.3); margin-left: auto; }
// // // //         .svc-tab.active .svc-icon { color: var(--or); }
// // // //         .svc-content { padding: 56px 60px; background: #fff; }
// // // //         .svc-content-tag { font-family: var(--mono); font-size: 10.5px; font-weight: 500; letter-spacing: 0.15em; color: var(--or); text-transform: uppercase; margin-bottom: 16px; }
// // // //         .svc-content-h { font-family: var(--h); font-size: 30px; font-weight: 700; letter-spacing: -0.5px; color: var(--nv); margin-bottom: 16px; line-height: 1.15; }
// // // //         .svc-content-p { font-size: 15.5px; color: var(--md); line-height: 1.8; max-width: 540px; margin-bottom: 32px; }
// // // //         .svc-outcomes { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 36px; }
// // // //         .svc-outcome {
// // // //           display: inline-flex; align-items: center; gap: 7px;
// // // //           padding: 7px 14px; border-radius: 6px;
// // // //           background: var(--lt); border: 1px solid var(--br);
// // // //           font: 600 12.5px var(--f); color: var(--nv);
// // // //         }
// // // //         .svc-outcome::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--or); flex-shrink: 0; }
// // // //         .svc-actions { display: flex; gap: 12px; align-items: center; }
// // // //         .btn-sm {
// // // //           padding: 10px 22px; border-radius: 7px; border: none;
// // // //           font: 600 13.5px var(--f); background: var(--or); color: #fff;
// // // //           cursor: pointer; transition: all .15s;
// // // //         }
// // // //         .btn-sm:hover { background: var(--or-dk); }

// // // //         /* ── STATS BAND ── */
// // // //         .stats-band { background: var(--or); }
// // // //         .stats-inner {
// // // //           max-width: var(--max); margin: 0 auto; padding: 0 40px;
// // // //           display: grid; grid-template-columns: repeat(4,1fr);
// // // //         }
// // // //         .stat-cell { padding: 52px 40px; border-right: 1px solid rgba(255,255,255,0.2); }
// // // //         .stat-cell:last-child { border-right: none; }
// // // //         .stat-v { font-family: var(--h); font-size: 56px; font-weight: 700; color: #fff; letter-spacing: -2px; line-height: 1; }
// // // //         .stat-l { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.65); margin-top: 8px; }

// // // //         /* ── DARK SECTION ── */
// // // //         .dark-section { background: var(--nv); position: relative; overflow: hidden; }
// // // //         .dark-bg {
// // // //           position: absolute; inset: 0;
// // // //           background-image: repeating-linear-gradient(
// // // //             0deg, transparent, transparent 80px, rgba(255,255,255,0.02) 80px, rgba(255,255,255,0.02) 81px
// // // //           ),
// // // //           repeating-linear-gradient(
// // // //             90deg, transparent, transparent 80px, rgba(255,255,255,0.02) 80px, rgba(255,255,255,0.02) 81px
// // // //           );
// // // //         }
// // // //         .dark-glow {
// // // //           position: absolute; top: -20%; right: -5%;
// // // //           width: 700px; height: 700px; border-radius: 50%;
// // // //           background: radial-gradient(circle, rgba(232,82,26,0.14) 0%, transparent 60%);
// // // //           pointer-events: none;
// // // //         }
// // // //         .dark-inner {
// // // //           max-width: var(--max); margin: 0 auto; padding: 96px 40px;
// // // //           display: grid; grid-template-columns: 5fr 4fr; gap: 80px; align-items: start;
// // // //           position: relative; z-index: 2;
// // // //         }
// // // //         .dark-h { font-family: var(--h); font-size: clamp(28px,3.5vw,46px); font-weight: 700; letter-spacing: -1px; color: #fff; line-height: 1.1; margin-bottom: 18px; }
// // // //         .dark-p { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 36px; }
// // // //         .checks { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
// // // //         .check { display: flex; align-items: flex-start; gap: 14px; }
// // // //         .check-icon {
// // // //           flex-shrink: 0; width: 22px; height: 22px; margin-top: 1px;
// // // //           border-radius: 50%; background: rgba(232,82,26,0.15);
// // // //           border: 1px solid rgba(232,82,26,0.3);
// // // //           display: flex; align-items: center; justify-content: center;
// // // //         }
// // // //         .check-text { font-size: 14.5px; color: rgba(255,255,255,0.6); line-height: 1.6; }
// // // //         .dark-btns { display: flex; gap: 12px; }

// // // //         /* Terminal */
// // // //         .terminal {
// // // //           background: #060d1a; border: 1px solid rgba(255,255,255,0.1);
// // // //           border-radius: 10px; overflow: hidden;
// // // //         }
// // // //         .term-header {
// // // //           padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.07);
// // // //           display: flex; align-items: center; gap: 7px;
// // // //         }
// // // //         .term-dot { width: 11px; height: 11px; border-radius: 50%; }
// // // //         .term-title { font-family: var(--mono); font-size: 11px; color: rgba(255,255,255,0.2); margin-left: 8px; }
// // // //         .term-body { padding: 24px; }
// // // //         .tl { display: flex; font-family: var(--mono); font-size: 12px; line-height: 1.8; }
// // // //         .tc-prompt { color: var(--or); }
// // // //         .tc-cmd { color: rgba(255,255,255,0.7); }
// // // //         .tc-out { color: rgba(255,255,255,0.28); padding-left: 14px; display: block; }
// // // //         .tc-ok { color: #4ade80; }
// // // //         .tc-head { color: rgba(255,255,255,0.85); font-weight: 500; }
// // // //         .term-bar-wrap { margin: 6px 0; }
// // // //         .term-bar-label { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 10px; color: rgba(255,255,255,0.28); margin-bottom: 4px; }
// // // //         .term-bar-label span:last-child { color: var(--or); }
// // // //         .term-bar-bg { height: 3px; background: rgba(255,255,255,0.07); border-radius: 2px; }
// // // //         .term-bar-fg { height: 3px; border-radius: 2px; background: linear-gradient(90deg, var(--or), #fb923c); }

// // // //         /* ── CASE STUDIES ── */
// // // //         .cases-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 52px; }
// // // //         .case-card {
// // // //           background: #fff; border: 1px solid var(--br); border-radius: 12px;
// // // //           padding: 36px 32px; position: relative; overflow: hidden;
// // // //           transition: border-color .2s, box-shadow .2s, transform .2s var(--trans);
// // // //           cursor: pointer;
// // // //         }
// // // //         .case-card:hover { border-color: var(--or); box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-3px); }
// // // //         .case-card-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; transform: scaleX(0); transform-origin: left; transition: transform .3s var(--trans); }
// // // //         .case-card:hover .case-card-bar { transform: scaleX(1); }
// // // //         .case-sector { font-family: var(--mono); font-size: 10.5px; font-weight: 500; letter-spacing: 0.12em; color: var(--or); text-transform: uppercase; margin-bottom: 16px; }
// // // //         .case-title { font-family: var(--h); font-size: 18px; font-weight: 700; letter-spacing: -0.3px; color: var(--nv); line-height: 1.35; margin-bottom: 16px; }
// // // //         .case-body { font-size: 13.5px; color: var(--md); line-height: 1.65; margin-bottom: 24px; }
// // // //         .case-result { font-family: var(--h); font-size: 26px; font-weight: 700; color: var(--or); letter-spacing: -0.5px; margin-bottom: 4px; }
// // // //         .case-result-label { font-size: 11.5px; color: #9ca3af; margin-bottom: 20px; }
// // // //         .case-tags { display: flex; flex-wrap: wrap; gap: 6px; }
// // // //         .case-tag {
// // // //           font-family: var(--mono); font-size: 10.5px; padding: 4px 10px;
// // // //           border-radius: 4px; background: var(--lt); border: 1px solid var(--br2);
// // // //           color: #6b7280;
// // // //         }

// // // //         /* ── WHY ── */
// // // //         .why-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: var(--br); border: 1px solid var(--br); border-radius: 12px; overflow: hidden; margin-top: 52px; }
// // // //         .why-cell {
// // // //           background: #fff; padding: 48px; position: relative; overflow: hidden;
// // // //           transition: background .2s;
// // // //         }
// // // //         .why-cell:hover { background: #fafbfc; }
// // // //         .why-stripe {
// // // //           position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
// // // //           background: var(--or); transform: scaleY(0); transform-origin: top;
// // // //           transition: transform .3s var(--trans);
// // // //         }
// // // //         .why-cell:hover .why-stripe { transform: scaleY(1); }
// // // //         .why-num { font-family: var(--mono); font-size: 11px; font-weight: 500; color: var(--or); letter-spacing: 0.1em; margin-bottom: 16px; }
// // // //         .why-h { font-family: var(--h); font-size: 21px; font-weight: 700; color: var(--nv); margin-bottom: 12px; }
// // // //         .why-p { font-size: 14.5px; color: var(--md); line-height: 1.72; }

// // // //         /* ── CTA SECTION ── */
// // // //         .cta-section { background: var(--nv); position: relative; overflow: hidden; }
// // // //         .cta-glow {
// // // //           position: absolute; left: -15%; top: 50%; transform: translateY(-50%);
// // // //           width: 800px; height: 800px; border-radius: 50%;
// // // //           background: radial-gradient(circle, rgba(232,82,26,0.12) 0%, transparent 60%);
// // // //         }
// // // //         .cta-inner {
// // // //           max-width: var(--max); margin: 0 auto; padding: 104px 40px;
// // // //           display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
// // // //           position: relative; z-index: 2;
// // // //         }
// // // //         .cta-h { font-family: var(--h); font-size: clamp(28px,4vw,52px); font-weight: 700; letter-spacing: -1.2px; color: #fff; line-height: 1.06; }
// // // //         .cta-p { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.75; margin-top: 16px; }
// // // //         .cta-right { display: flex; flex-direction: column; gap: 14px; }
// // // //         .cta-form {
// // // //           display: flex; border: 1px solid rgba(255,255,255,0.15);
// // // //           border-radius: 8px; overflow: hidden; background: rgba(255,255,255,0.05);
// // // //         }
// // // //         .cta-input {
// // // //           flex: 1; padding: 14px 18px; background: transparent; border: none;
// // // //           font: 400 14px var(--f); color: #fff; outline: none;
// // // //           border-right: 1px solid rgba(255,255,255,0.1);
// // // //         }
// // // //         .cta-input::placeholder { color: rgba(255,255,255,0.28); }
// // // //         .cta-submit {
// // // //           padding: 14px 24px; background: var(--or); border: none;
// // // //           font: 600 14px var(--f); color: #fff; cursor: pointer;
// // // //           transition: background .15s; white-space: nowrap;
// // // //         }
// // // //         .cta-submit:hover { background: var(--or-dk); }
// // // //         .cta-note { font-size: 12px; color: rgba(255,255,255,0.24); }
// // // //         .cta-link { font: 600 13px var(--f); color: rgba(255,255,255,0.45); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: color .15s; }
// // // //         .cta-link:hover { color: rgba(255,255,255,0.75); }

// // // //         /* ── FOOTER ── */
// // // //         footer { background: #060f1c; border-top: 1px solid rgba(255,255,255,0.05); }
// // // //         .foot-main {
// // // //           max-width: var(--max); margin: 0 auto; padding: 72px 40px 52px;
// // // //           display: grid; grid-template-columns: 2.5fr 1fr 1fr 1fr; gap: 56px;
// // // //         }
// // // //         .foot-brand { font-family: var(--h); font-size: 18px; font-weight: 800; color: #fff; letter-spacing: -0.3px; margin-bottom: 14px; }
// // // //         .foot-brand span { color: var(--or); }
// // // //         .foot-desc { font-size: 13.5px; color: rgba(255,255,255,0.3); line-height: 1.72; max-width: 240px; margin-bottom: 24px; }
// // // //         .foot-socials { display: flex; gap: 8px; }
// // // //         .foot-social {
// // // //           width: 34px; height: 34px; border-radius: 7px;
// // // //           border: 1px solid rgba(255,255,255,0.1);
// // // //           display: flex; align-items: center; justify-content: center;
// // // //           font-family: var(--mono); font-size: 11px; color: rgba(255,255,255,0.35);
// // // //           cursor: pointer; transition: all .15s; text-transform: lowercase;
// // // //         }
// // // //         .foot-social:hover { border-color: var(--or); color: var(--or); }
// // // //         .foot-col-h { font-family: var(--mono); font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.22); margin-bottom: 20px; }
// // // //         .foot-links { display: flex; flex-direction: column; gap: 11px; }
// // // //         .foot-link { font-size: 13.5px; color: rgba(255,255,255,0.4); text-decoration: none; transition: color .15s; }
// // // //         .foot-link:hover { color: rgba(255,255,255,0.8); }
// // // //         .foot-bottom {
// // // //           max-width: var(--max); margin: 0 auto; padding: 20px 40px;
// // // //           border-top: 1px solid rgba(255,255,255,0.05);
// // // //           display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
// // // //         }
// // // //         .foot-copy { font-size: 12px; color: rgba(255,255,255,0.18); }
// // // //         .foot-legal { display: flex; gap: 20px; }
// // // //         .foot-legal-link { font-size: 12px; color: rgba(255,255,255,0.18); text-decoration: none; transition: color .15s; }
// // // //         .foot-legal-link:hover { color: rgba(255,255,255,0.45); }

// // // //         /* ── RESPONSIVE ── */
// // // //         @media (max-width: 1100px) {
// // // //           .hero-top { grid-template-columns: 1fr; }
// // // //           .hero-panel { display: none; }
// // // //           .hero-stats { grid-template-columns: repeat(2,1fr); }
// // // //           .svc-wrap { grid-template-columns: 1fr; }
// // // //           .svc-tabs { display: flex; overflow-x: auto; border-right: none; border-bottom: 1px solid var(--br); background: var(--lt); }
// // // //           .svc-tab { border-left: none; border-bottom: 3px solid transparent; flex-shrink: 0; }
// // // //           .svc-tab.active { border-bottom-color: var(--or); border-left-color: transparent; }
// // // //           .stats-inner { grid-template-columns: repeat(2,1fr); }
// // // //           .dark-inner { grid-template-columns: 1fr; gap: 48px; }
// // // //           .cases-grid { grid-template-columns: 1fr; }
// // // //           .why-grid { grid-template-columns: 1fr; }
// // // //           .cta-inner { grid-template-columns: 1fr; gap: 40px; }
// // // //           .foot-main { grid-template-columns: 1fr 1fr; }
// // // //         }
// // // //         @media (max-width: 768px) {
// // // //           .nav-menu { display: none; }
// // // //           .wrap { padding: 0 20px; }
// // // //           .hero-inner { padding-left: 20px; padding-right: 20px; }
// // // //           .hstat { padding: 28px 20px; }
// // // //           .stats-inner { padding: 0 20px; }
// // // //           .dark-inner { padding: 72px 20px; }
// // // //           .cta-inner { padding: 72px 20px; }
// // // //           .foot-main { grid-template-columns: 1fr; padding: 52px 20px 36px; }
// // // //           .foot-bottom { padding: 20px; }
// // // //           .section, .section-alt { padding: 72px 0; }
// // // //         }
// // // //         @media (max-width: 560px) {
// // // //           .hero-stats { grid-template-columns: repeat(2,1fr); }
// // // //           .stats-inner { grid-template-columns: repeat(2,1fr); }
// // // //           .mini-grid { grid-template-columns: 1fr; }
// // // //         }
// // // //       `}</style>

// // // //       {/* ═══════ NAV ═══════ */}
// // // //       <nav className={`nav${scrolled ? " scrolled" : ""}`}>
// // // //         <div className="nav-inner">
// // // //           <a className="brand" href="#">Sypra<span className="brand-dot">.</span></a>
// // // //           <div className="nav-menu">
// // // //             {NAV_ITEMS.map((item) => (
// // // //               <div
// // // //                 className="nav-item"
// // // //                 key={item.label}
// // // //                 onMouseEnter={() => setOpenNav(item.label)}
// // // //                 onMouseLeave={() => setOpenNav(null)}
// // // //               >
// // // //                 <button className="nav-btn">
// // // //                   {item.label}
// // // //                   <span className={`nav-chevron${openNav === item.label ? " open" : ""}`}>
// // // //                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
// // // //                       <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                     </svg>
// // // //                   </span>
// // // //                 </button>
// // // //                 <div className={`nav-dropdown${openNav === item.label ? " open" : ""}`}>
// // // //                   {item.sub.map((s) => (
// // // //                     <a key={s} href="#" className="nav-dd-item">{s}</a>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           <div className="nav-right">
// // // //             <a href="#" className="btn-ghost">Contact Sales</a>
// // // //             <button className="btn-primary">Get a Quote →</button>
// // // //           </div>
// // // //         </div>
// // // //       </nav>

// // // //       {/* ═══════ HERO ═══════ */}
// // // //       <section className="hero">
// // // //         <div className="hero-bg-lines" />
// // // //         <div className="hero-glow" />
// // // //         <div className="hero-glow2" />
// // // //         <div className="hero-inner">
// // // //           <div className="hero-top">
// // // //             {/* Left */}
// // // //             <div>
// // // //               <div className={`hero-label${heroVisible ? " visible" : ""}`}>
// // // //                 <span className="hero-label-dot" />
// // // //                 IT Solutions & Digital Transformation
// // // //               </div>
// // // //               <h1 className={`hero-h1${heroVisible ? " visible" : ""}`}>
// // // //                 Build the Future<br />of Your Business<br />on <span className="hero-h1-accent">Sypra</span>
// // // //               </h1>
// // // //               <p className={`hero-p${heroVisible ? " visible" : ""}`}>
// // // //                 End-to-end technology services — from custom software and cloud infrastructure to AI automation and IT consulting — engineered to accelerate your growth.
// // // //               </p>
// // // //               <div className={`hero-ctas${heroVisible ? " visible" : ""}`}>
// // // //                 <button className="btn-hero">
// // // //                   Explore Services
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //                 </button>
// // // //                 <button className="btn-hero-ghost">View Case Studies</button>
// // // //               </div>
// // // //             </div>
// // // //             {/* Right */}
// // // //             <div className={`hero-panel${heroVisible ? " visible" : ""}`}>
// // // //               <div className="panel-card">
// // // //                 <div className="panel-header">
// // // //                   <span className="panel-title">ACTIVE PROJECTS DASHBOARD</span>
// // // //                   <span className="panel-badge badge-live">
// // // //                     <span style={{width:6,height:6,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>
// // // //                     LIVE
// // // //                   </span>
// // // //                 </div>
// // // //                 <div className="panel-body">
// // // //                   {[
// // // //                     { name: "Fintech Platform", pct: 96, color: "#E8521A" },
// // // //                     { name: "Healthcare ERP", pct: 88, color: "#3b82f6" },
// // // //                     { name: "E-commerce App", pct: 74, color: "#8b5cf6" },
// // // //                     { name: "Cloud Migration", pct: 100, color: "#22c55e" },
// // // //                   ].map((p) => (
// // // //                     <div className="proj-row" key={p.name}>
// // // //                       <div className="proj-color" style={{ background: p.color }} />
// // // //                       <div className="proj-info">
// // // //                         <div className="proj-name">{p.name}</div>
// // // //                         <div className="proj-bar-wrap">
// // // //                           <div className="proj-bar" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg, ${p.color}, ${p.color}bb)` }} />
// // // //                         </div>
// // // //                       </div>
// // // //                       <div className="proj-pct">{p.pct}%</div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //               <div className="mini-grid">
// // // //                 <div className="mini-stat">
// // // //                   <div className="mini-stat-v">98<span>%</span></div>
// // // //                   <div className="mini-stat-l">On-time delivery</div>
// // // //                 </div>
// // // //                 <div className="mini-stat">
// // // //                   <div className="mini-stat-v">300<span>+</span></div>
// // // //                   <div className="mini-stat-l">Projects shipped</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Stats bar */}
// // // //           <div className={`hero-stats${heroVisible ? " visible" : ""}`}>
// // // //             {[
// // // //               { v: "10", s: "+", l: "Years of experience" },
// // // //               { v: "300", s: "+", l: "Projects delivered" },
// // // //               { v: "500", s: "+", l: "Professionals trained" },
// // // //               { v: "98", s: "%", l: "Client satisfaction" },
// // // //             ].map((s) => (
// // // //               <div className="hstat" key={s.l}>
// // // //                 <div className="hstat-v">{s.v}<em>{s.s}</em></div>
// // // //                 <div className="hstat-l">{s.l}</div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ═══════ TRUST BAR ═══════ */}
// // // //       <div className="trust-bar">
// // // //         <div className="trust-inner">
// // // //           <span className="trust-label">Serving clients across</span>
// // // //           <div className="trust-logos">
// // // //             {LOGOS.map((l) => <span className="trust-logo" key={l}>{l}</span>)}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ═══════ SERVICES ═══════ */}
// // // //       <div className="section">
// // // //         <div className="wrap">
// // // //           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
// // // //             <div>
// // // //               <div className="eyebrow">Our Services</div>
// // // //               <h2 className="section-h">Everything Your Business<br />Needs to Go Digital</h2>
// // // //             </div>
// // // //             <a className="link-arrow" href="#">
// // // //               View all services
// // // //               <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //             </a>
// // // //           </div>

// // // //           <div className="svc-wrap">
// // // //             <div className="svc-tabs">
// // // //               {SERVICES.map((s, i) => (
// // // //                 <div key={s.num} className={`svc-tab${activeSvc === i ? " active" : ""}`} onClick={() => setActiveSvc(i)}>
// // // //                   <span className="svc-tab-num">{s.num}</span>
// // // //                   <span className="svc-tab-name">{s.name}</span>
// // // //                   <span className="svc-icon">{s.icon}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //             <div className="svc-content">
// // // //               <div className="svc-content-tag">{SERVICES[activeSvc].short}</div>
// // // //               <div className="svc-content-h">{SERVICES[activeSvc].name}</div>
// // // //               <div className="svc-content-p">{SERVICES[activeSvc].detail}</div>
// // // //               <div className="svc-outcomes">
// // // //                 {SERVICES[activeSvc].outcomes.map((o) => (
// // // //                   <span className="svc-outcome" key={o}>{o}</span>
// // // //                 ))}
// // // //               </div>
// // // //               <div className="svc-actions">
// // // //                 <button className="btn-sm">Learn More</button>
// // // //                 <a className="link-arrow" href="#">
// // // //                   Case studies
// // // //                   <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //                 </a>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ═══════ STATS BAND ═══════ */}
// // // //       <div className="stats-band">
// // // //         <div className="stats-inner">
// // // //           {STATS.map((s) => (
// // // //             <div className="stat-cell" key={s.l}>
// // // //               <div className="stat-v">{s.v}</div>
// // // //               <div className="stat-l">{s.l}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* ═══════ DARK — WHY SYPRA ═══════ */}
// // // //       <div className="dark-section">
// // // //         <div className="dark-bg" />
// // // //         <div className="dark-glow" />
// // // //         <div className="dark-inner">
// // // //           <div>
// // // //             <div className="eyebrow" style={{ color: "var(--or)" }}>Why Sypra Infotech</div>
// // // //             <h2 className="dark-h">Trusted Technology<br />Partner. Real Results.</h2>
// // // //             <p className="dark-p">We don't just deliver code — we become a strategic extension of your team. Every engagement is outcome-driven, fully transparent, and backed by senior engineers who've solved your problem before.</p>
// // // //             <div className="checks">
// // // //               {[
// // // //                 "Agile delivery with daily visibility — standups, sprint demos, live dashboards",
// // // //                 "Dedicated project manager and senior engineers on every engagement",
// // // //                 "Post-launch maintenance, monitoring & SLA-backed uptime guarantees",
// // // //                 "ISO-aligned development practices, security-first code reviews",
// // // //                 "In-house training division to upskill your internal teams",
// // // //               ].map((c) => (
// // // //                 <div className="check" key={c}>
// // // //                   <div className="check-icon">
// // // //                     <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
// // // //                       <path d="M1 4L3.5 6.5L9 1" stroke="#E8521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                     </svg>
// // // //                   </div>
// // // //                   <span className="check-text">{c}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //             <div className="dark-btns">
// // // //               <button className="btn-hero">Start a Project</button>
// // // //               <button className="btn-hero-ghost">Meet the Team</button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Terminal */}
// // // //           <div className="terminal">
// // // //             <div className="term-header">
// // // //               <div className="term-dot" style={{ background: "#ef4444" }} />
// // // //               <div className="term-dot" style={{ background: "#f59e0b" }} />
// // // //               <div className="term-dot" style={{ background: "#22c55e" }} />
// // // //               <span className="term-title">sypra — project delivery dashboard</span>
// // // //             </div>
// // // //             <div className="term-body">
// // // //               <div className="tl"><span className="tc-prompt">$ </span><span className="tc-cmd">sypra status --project fintech-lending-v2</span></div>
// // // //               <div className="tl"><span className="tc-out">› Running test suite (312 tests)... <span className="tc-ok">all passed</span></span></div>
// // // //               <div className="tl"><span className="tc-out">› Building production bundle... <span className="tc-ok">done (3.2MB)</span></span></div>
// // // //               <div className="tl"><span className="tc-out">› Running security scan... <span className="tc-ok">0 vulnerabilities</span></span></div>
// // // //               <div className="tl" style={{ marginTop: 6 }}><span className="tc-prompt">→ </span><span className="tc-head">Sprint 7 of 8 — On Track</span></div>
// // // //               {[
// // // //                 { n: "Backend APIs", p: 96 },
// // // //                 { n: "Frontend UI", p: 88 },
// // // //                 { n: "QA Coverage", p: 94 },
// // // //                 { n: "Deployment Readiness", p: 72 },
// // // //               ].map((b) => (
// // // //                 <div className="term-bar-wrap" key={b.n}>
// // // //                   <div className="term-bar-label"><span>{b.n}</span><span>{b.p}%</span></div>
// // // //                   <div className="term-bar-bg"><div className="term-bar-fg" style={{ width: `${b.p}%` }} /></div>
// // // //                 </div>
// // // //               ))}
// // // //               <div className="tl" style={{ marginTop: 8 }}><span className="tc-prompt">✓ </span><span className="tc-ok">Delivery in 6 days — client sign-off pending</span></div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ═══════ CASE STUDIES ═══════ */}
// // // //       <div className="section">
// // // //         <div className="wrap">
// // // //           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
// // // //             <div>
// // // //               <div className="eyebrow">Case Studies</div>
// // // //               <h2 className="section-h">Outcomes That Speak<br />for Themselves</h2>
// // // //             </div>
// // // //             <a className="link-arrow" href="#">
// // // //               All case studies
// // // //               <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //             </a>
// // // //           </div>
// // // //           <div className="cases-grid">
// // // //             {CASES.map((c) => (
// // // //               <div className="case-card" key={c.title}>
// // // //                 <div className="case-card-bar" style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}99)` }} />
// // // //                 <div className="case-sector">{c.sector}</div>
// // // //                 <div className="case-title">{c.title}</div>
// // // //                 <div className="case-body">{c.body}</div>
// // // //                 <div className="case-result">{c.result}</div>
// // // //                 <div className="case-result-label">Key outcome</div>
// // // //                 <div className="case-tags">
// // // //                   {c.tech.map((t) => <span className="case-tag" key={t}>{t}</span>)}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ═══════ WHY CHOOSE US ═══════ */}
// // // //       <div className="section-alt">
// // // //         <div className="wrap">
// // // //           <div className="eyebrow">Our Differentiators</div>
// // // //           <h2 className="section-h">What Makes Sypra Different</h2>
// // // //           <div className="why-grid">
// // // //             {WHYS.map((w) => (
// // // //               <div className="why-cell" key={w.h}>
// // // //                 <div className="why-stripe" />
// // // //                 <div className="why-num">{w.n}</div>
// // // //                 <div className="why-h">{w.h}</div>
// // // //                 <div className="why-p">{w.b}</div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ═══════ CTA ═══════ */}
// // // //       <div className="cta-section">
// // // //         <div className="cta-glow" />
// // // //         <div className="cta-inner">
// // // //           <div>
// // // //             <h2 className="cta-h">Ready to build something great together?</h2>
// // // //             <p className="cta-p">Talk to our team. Free consultation, clear proposal, no pressure. Let's understand your challenge before we talk solutions.</p>
// // // //           </div>
// // // //           <div className="cta-right">
// // // //             <div className="cta-form">
// // // //               <input className="cta-input" type="email" placeholder="Enter your work email" />
// // // //               <button className="cta-submit">Get Started</button>
// // // //             </div>
// // // //             <span className="cta-note">No commitment. We'll respond within 24 hours.</span>
// // // //             <a href="#" className="cta-link">
// // // //               Or schedule a call
// // // //               <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ═══════ FOOTER ═══════ */}
// // // //       <footer>
// // // //         <div className="foot-main">
// // // //           <div>
// // // //             <div className="foot-brand">Sypra<span>.</span></div>
// // // //             <div className="foot-desc">Sypra Infotech delivers expert IT solutions, software development, cloud infrastructure, and digital transformation services to businesses worldwide.</div>
// // // //             <div className="foot-socials">
// // // //               {["in", "tw", "gh", "yt"].map((s) => (
// // // //                 <div className="foot-social" key={s}>{s}</div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //           {[
// // // //             { h: "Services", links: ["Web Development", "Cloud & DevOps", "AI & Automation", "ERP & CRM", "Cybersecurity", "IT Consulting"] },
// // // //             { h: "Company", links: ["About Us", "Leadership", "Careers", "Case Studies", "Press"] },
// // // //             { h: "Support", links: ["Contact Sales", "Documentation", "Training Programs", "Status Page", "Privacy Policy"] },
// // // //           ].map((col) => (
// // // //             <div key={col.h}>
// // // //               <div className="foot-col-h">{col.h}</div>
// // // //               <div className="foot-links">
// // // //                 {col.links.map((l) => <a href="#" key={l} className="foot-link">{l}</a>)}
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //         <div className="foot-bottom">
// // // //           <div className="foot-copy">© 2026 Sypra Infotech & Professionals Pvt. Ltd. All rights reserved.</div>
// // // //           <div className="foot-legal">
// // // //             {["Privacy Policy", "Terms of Service", "Cookie Settings", "Sitemap"].map((l) => (
// // // //               <a href="#" key={l} className="foot-legal-link">{l}</a>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }
// // // import { useState, useEffect, useRef } from "react";

// // // /* ─── DATA (Sypra content only) ─────────────────────────────────────── */

// // // const SERVICES = [
// // //   { id: "01", name: "Web & App Development", tag: "WEB & MOBILE", detail: "Custom websites, progressive web apps, and native mobile solutions engineered with React, Node.js, Flutter, and modern cloud-native architectures. Every build is optimised for performance, security, and long-term maintainability.", outcomes: ["300+ applications delivered", "98% on-time delivery", "React · Node · Flutter · AWS"] },
// // //   { id: "02", name: "Cloud & Infrastructure", tag: "CLOUD & DEVOPS", detail: "Full-cycle cloud migration, containerisation with Docker and Kubernetes, CI/CD pipeline engineering, and 24/7 managed infrastructure operations. We architect for resilience, cost-efficiency, and elastic scale.", outcomes: ["40% avg cost reduction", "99.97% uptime delivered", "AWS · Azure · GCP"] },
// // //   { id: "03", name: "AI & Automation", tag: "AI & ML", detail: "From predictive analytics and NLP pipelines to intelligent document processing and workflow automation — we build AI systems that generate measurable ROI, not just demos.", outcomes: ["12+ AI projects live", "60% process time saved", "Python · TensorFlow · LLMs"] },
// // //   { id: "04", name: "ERP & CRM", tag: "ERP & CRM", detail: "SAP, Salesforce, and custom ERP implementations that unify finance, HR, supply chain, and customer data. We handle discovery, configuration, migration, and training across every module.", outcomes: ["Salesforce · SAP · Custom", "Full org rollout support", "Data migration included"] },
// // //   { id: "05", name: "Cybersecurity", tag: "SECURITY", detail: "Penetration testing, VAPT, security architecture review, ISO 27001 readiness, GDPR compliance, and 24/7 SOC monitoring. We harden your systems before attackers find the gaps.", outcomes: ["VAPT & pen testing", "ISO 27001 readiness", "24/7 threat monitoring"] },
// // //   { id: "06", name: "IT Consulting", tag: "CONSULTING", detail: "From technology audits and vendor selection to full digital transformation roadmaps — our senior consultants embed with your leadership team to drive decisions backed by data, not opinion.", outcomes: ["150+ engagements", "CTO-level advisory", "Roadmap to execution"] },
// // // ];

// // // const STATS = [
// // //   { v: "10+", l: "Years of experience" },
// // //   { v: "300+", l: "Projects completed" },
// // //   { v: "500+", l: "Professionals trained" },
// // //   { v: "98%", l: "Client satisfaction rate" },
// // // ];

// // // const CASES = [
// // //   { sector: "FINTECH", title: "AI-powered lending platform serving 400K+ users across 3 states", result: "2.3× faster loan approvals", body: "Built end-to-end credit scoring infrastructure using ML pipelines and real-time decisioning APIs deployed on AWS.", tech: ["React", "Python", "AWS"] },
// // //   { sector: "HEALTHTECH", title: "Hospital management system unifying 12 departments into one digital core", result: "40% reduction in admin overhead", body: "Replaced 6 legacy systems with a unified EHR platform integrating lab, billing, pharmacy, and scheduling.", tech: ["Node.js", "PostgreSQL", "Azure"] },
// // //   { sector: "EDTECH", title: "Skill-based training platform with live mentorship and placement tracking", result: "92% placement success rate", body: "Live cohort platform with AI-matched mentorship, progress analytics, and employer integration for 18,000+ learners.", tech: ["Flutter", "Firebase", "ML"] },
// // // ];

// // // const WHYS = [
// // //   { n: "01", h: "Full-Stack Delivery", b: "We own the entire technology stack — design, frontend, backend, DevOps, QA, and security — under a single engagement." },
// // //   { n: "02", h: "Outcome-Driven Contracts", b: "We price by outcomes and deliverables, not by hours. You know exactly what you're getting before we write a line of code." },
// // //   { n: "03", h: "Transparent Operations", b: "Daily standups, weekly demos, live project dashboards. No black boxes, no surprises, no excuses — ever." },
// // //   { n: "04", h: "Post-Delivery Partnership", b: "Our engagements don't end at launch. Maintenance, monitoring, feature iterations, and SLA-backed support come standard." },
// // // ];

// // // const NAV = [
// // //   { label: "Platform", items: ["Web & App Development", "Cloud & DevOps", "AI & Automation", "ERP & CRM", "Cybersecurity", "IT Consulting"] },
// // //   { label: "Solutions", items: ["Digital Transformation", "Managed Services", "Staff Augmentation", "Technology Audit"] },
// // //   { label: "Industries", items: ["Fintech", "Healthcare", "EdTech", "Retail & E-commerce", "Logistics", "Manufacturing"] },
// // //   { label: "Training", items: ["Corporate Programs", "Developer Bootcamps", "Certification Tracks", "Placement Support"] },
// // //   { label: "About", items: ["Our Story", "Leadership Team", "Careers", "Press & Media"] },
// // //   { label: "Insights", items: ["Blog", "Case Studies", "Whitepapers", "Webinars"] },
// // // ];

// // // const INDUSTRIES = ["Fintech", "EdTech", "HealthTech", "Retail", "Logistics", "Manufacturing", "NGO", "Startups"];

// // // const CHECKS = [
// // //   "Agile delivery with daily visibility — standups, sprint demos, live dashboards",
// // //   "Dedicated project manager and senior engineers on every engagement",
// // //   "Post-launch maintenance, monitoring & SLA-backed uptime guarantees",
// // //   "ISO-aligned development practices, security-first code reviews",
// // //   "In-house training division to upskill your internal teams",
// // // ];

// // // /* ─── ICONS ─────────────────────────────────────────────────────────── */
// // // const ChevronDown = ({ size = 14 }) => (
// // //   <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5l4 4 4-4" /></svg>
// // // );
// // // const ArrowRight = ({ size = 14 }) => (
// // //   <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h10M8 3l4 4-4 4" /></svg>
// // // );
// // // const Check = () => (
// // //   <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5l3.5 3.5L11 1" stroke="#FF6600" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
// // // );

// // // /* ─── APP ────────────────────────────────────────────────────────────── */
// // // export default function App() {
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [openNav, setOpenNav] = useState(null);
// // //   const [activeSvc, setActiveSvc] = useState(0);
// // //   const navTimeout = useRef(null);

// // //   useEffect(() => {
// // //     const fn = () => setScrolled(window.scrollY > 4);
// // //     window.addEventListener("scroll", fn, { passive: true });
// // //     return () => window.removeEventListener("scroll", fn);
// // //   }, []);

// // //   const openMenu = (label) => {
// // //     clearTimeout(navTimeout.current);
// // //     setOpenNav(label);
// // //   };
// // //   const closeMenu = () => {
// // //     navTimeout.current = setTimeout(() => setOpenNav(null), 120);
// // //   };

// // //   return (
// // //     <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#fff", color: "#1a1a1a", overflowX: "hidden", lineHeight: 1.5 }}>
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

// // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // //         html { font-size: 16px; scroll-behavior: smooth; }

// // //         :root {
// // //           --orange: #FF6600;
// // //           --orange-dk: #e05500;
// // //           --orange-lt: #fff5ef;
// // //           --navy: #1a1a2e;
// // //           --text: #1a1a1a;
// // //           --text-md: #444;
// // //           --text-lt: #6b7280;
// // //           --border: #e5e7eb;
// // //           --border-dk: #d1d5db;
// // //           --bg-lt: #f9fafb;
// // //           --bg-lt2: #f3f4f6;
// // //           --max-w: 1200px;
// // //           --ease: cubic-bezier(0.2, 0, 0.1, 1);
// // //         }

// // //         /* SCROLLBAR */
// // //         ::-webkit-scrollbar { width: 5px; }
// // //         ::-webkit-scrollbar-track { background: #f1f1f1; }
// // //         ::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 3px; }

// // //         /* ── TOPBAR announcement ── */
// // //         .topbar {
// // //           background: var(--orange);
// // //           padding: 9px 24px;
// // //           text-align: center;
// // //           font-size: 13.5px;
// // //           font-weight: 500;
// // //           color: #fff;
// // //           letter-spacing: 0.01em;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           gap: 10px;
// // //         }
// // //         .topbar a {
// // //           color: #fff;
// // //           font-weight: 700;
// // //           text-decoration: underline;
// // //           text-underline-offset: 2px;
// // //           cursor: pointer;
// // //         }
// // //         .topbar-close {
// // //           position: absolute;
// // //           right: 20px;
// // //           background: none;
// // //           border: none;
// // //           color: rgba(255,255,255,0.7);
// // //           cursor: pointer;
// // //           font-size: 18px;
// // //           line-height: 1;
// // //           padding: 0 4px;
// // //         }
// // //         .topbar-close:hover { color: #fff; }

// // //         /* ── NAV ── */
// // //         .nav {
// // //           position: fixed;
// // //           top: 0;
// // //           left: 0;
// // //           right: 0;
// // //           z-index: 999;
// // //           background: #fff;
// // //           border-bottom: 1px solid var(--border);
// // //           transition: box-shadow 0.25s var(--ease);
// // //         }
// // //         .nav.raised {
// // //           box-shadow: 0 2px 20px rgba(0,0,0,0.08);
// // //         }
// // //         .nav-row {
// // //           max-width: var(--max-w);
// // //           margin: 0 auto;
// // //           padding: 0 24px;
// // //           height: 64px;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 0;
// // //         }

// // //         /* Logo */
// // //         .logo {
// // //           font-size: 21px;
// // //           font-weight: 800;
// // //           color: var(--text);
// // //           letter-spacing: -0.5px;
// // //           text-decoration: none;
// // //           margin-right: 40px;
// // //           flex-shrink: 0;
// // //           display: flex;
// // //           align-items: baseline;
// // //           gap: 1px;
// // //         }
// // //         .logo-dot { color: var(--orange); }

// // //         /* Nav links */
// // //         .nav-links {
// // //           display: flex;
// // //           align-items: stretch;
// // //           flex: 1;
// // //           height: 64px;
// // //           gap: 0;
// // //         }
// // //         .nav-link-wrap {
// // //           position: relative;
// // //           display: flex;
// // //           align-items: stretch;
// // //         }
// // //         .nav-link-btn {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 5px;
// // //           padding: 0 15px;
// // //           border: none;
// // //           background: none;
// // //           font: 500 14px 'Inter', sans-serif;
// // //           color: #444;
// // //           cursor: pointer;
// // //           white-space: nowrap;
// // //           border-bottom: 2px solid transparent;
// // //           transition: color 0.15s, border-color 0.15s;
// // //         }
// // //         .nav-link-btn:hover,
// // //         .nav-link-btn.active-nav {
// // //           color: var(--orange);
// // //           border-bottom-color: var(--orange);
// // //         }

// // //         /* Mega dropdown */
// // //         .nav-dropdown {
// // //           position: absolute;
// // //           top: 100%;
// // //           left: 0;
// // //           min-width: 220px;
// // //           background: #fff;
// // //           border: 1px solid var(--border);
// // //           border-top: 2px solid var(--orange);
// // //           border-radius: 0 0 6px 6px;
// // //           padding: 6px 0;
// // //           box-shadow: 0 8px 32px rgba(0,0,0,0.1);
// // //           opacity: 0;
// // //           pointer-events: none;
// // //           transform: translateY(-6px);
// // //           transition: opacity 0.18s var(--ease), transform 0.18s var(--ease);
// // //         }
// // //         .nav-dropdown.open {
// // //           opacity: 1;
// // //           pointer-events: all;
// // //           transform: translateY(0);
// // //         }
// // //         .nav-dd-link {
// // //           display: block;
// // //           padding: 10px 20px;
// // //           font-size: 13.5px;
// // //           font-weight: 400;
// // //           color: #444;
// // //           text-decoration: none;
// // //           transition: background 0.12s, color 0.12s;
// // //           white-space: nowrap;
// // //         }
// // //         .nav-dd-link:hover {
// // //           background: var(--bg-lt);
// // //           color: var(--orange);
// // //         }
// // //         .nav-dd-sep { height: 1px; background: var(--border); margin: 4px 0; }

// // //         /* Nav right */
// // //         .nav-right {
// // //           margin-left: auto;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 10px;
// // //           flex-shrink: 0;
// // //         }
// // //         .nav-search {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 6px;
// // //           padding: 7px 14px;
// // //           border: 1px solid var(--border);
// // //           border-radius: 4px;
// // //           font: 400 13px 'Inter', sans-serif;
// // //           color: var(--text-lt);
// // //           background: var(--bg-lt);
// // //           cursor: pointer;
// // //           transition: border-color 0.15s;
// // //         }
// // //         .nav-search:hover { border-color: var(--border-dk); }

// // //         /* BUTTONS */
// // //         .btn-outline {
// // //           padding: 8px 18px;
// // //           border: 1.5px solid var(--border-dk);
// // //           border-radius: 4px;
// // //           background: #fff;
// // //           font: 500 13.5px 'Inter', sans-serif;
// // //           color: #444;
// // //           cursor: pointer;
// // //           transition: all 0.15s;
// // //           white-space: nowrap;
// // //           text-decoration: none;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 6px;
// // //         }
// // //         .btn-outline:hover {
// // //           border-color: var(--orange);
// // //           color: var(--orange);
// // //         }
// // //         .btn-orange {
// // //           padding: 9px 20px;
// // //           border-radius: 4px;
// // //           border: none;
// // //           background: var(--orange);
// // //           font: 600 13.5px 'Inter', sans-serif;
// // //           color: #fff;
// // //           cursor: pointer;
// // //           transition: background 0.15s, box-shadow 0.15s, transform 0.12s;
// // //           white-space: nowrap;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 6px;
// // //           text-decoration: none;
// // //         }
// // //         .btn-orange:hover {
// // //           background: var(--orange-dk);
// // //           box-shadow: 0 4px 16px rgba(255,102,0,0.3);
// // //           transform: translateY(-1px);
// // //         }
// // //         .btn-orange:active { transform: translateY(0); }

// // //         .btn-orange-lg {
// // //           padding: 13px 28px;
// // //           border-radius: 4px;
// // //           border: none;
// // //           background: var(--orange);
// // //           font: 600 15px 'Inter', sans-serif;
// // //           color: #fff;
// // //           cursor: pointer;
// // //           transition: background 0.15s, box-shadow 0.15s, transform 0.12s;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //         }
// // //         .btn-orange-lg:hover {
// // //           background: var(--orange-dk);
// // //           box-shadow: 0 6px 24px rgba(255,102,0,0.35);
// // //           transform: translateY(-2px);
// // //         }
// // //         .btn-ghost-lg {
// // //           padding: 13px 28px;
// // //           border-radius: 4px;
// // //           border: 1.5px solid #fff;
// // //           background: transparent;
// // //           font: 500 15px 'Inter', sans-serif;
// // //           color: #fff;
// // //           cursor: pointer;
// // //           transition: all 0.15s;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //         }
// // //         .btn-ghost-lg:hover {
// // //           background: rgba(255,255,255,0.12);
// // //         }
// // //         .btn-ghost-dk {
// // //           padding: 12px 24px;
// // //           border-radius: 4px;
// // //           border: 1.5px solid var(--border-dk);
// // //           background: transparent;
// // //           font: 500 14px 'Inter', sans-serif;
// // //           color: #444;
// // //           cursor: pointer;
// // //           transition: all 0.15s;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //         }
// // //         .btn-ghost-dk:hover {
// // //           border-color: var(--orange);
// // //           color: var(--orange);
// // //         }
// // //         .btn-text-link {
// // //           background: none;
// // //           border: none;
// // //           font: 600 14px 'Inter', sans-serif;
// // //           color: var(--orange);
// // //           cursor: pointer;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 5px;
// // //           padding: 0;
// // //           transition: gap 0.15s;
// // //           text-decoration: none;
// // //         }
// // //         .btn-text-link:hover { gap: 9px; }

// // //         /* ── HERO ── */
// // //         .hero {
// // //           background: #1a1a2e;
// // //           padding-top: 64px;
// // //           position: relative;
// // //           overflow: hidden;
// // //         }
// // //         .hero-pattern {
// // //           position: absolute;
// // //           inset: 0;
// // //           opacity: 0.06;
// // //           background-image:
// // //             radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0);
// // //           background-size: 40px 40px;
// // //         }
// // //         .hero-accent {
// // //           position: absolute;
// // //           top: 0; right: 0;
// // //           width: 55%;
// // //           height: 100%;
// // //           background: linear-gradient(135deg, transparent 40%, rgba(255,102,0,0.08) 100%);
// // //           pointer-events: none;
// // //         }
// // //         .hero-accent2 {
// // //           position: absolute;
// // //           bottom: -80px; left: -80px;
// // //           width: 500px; height: 500px;
// // //           border-radius: 50%;
// // //           background: radial-gradient(circle, rgba(255,102,0,0.12) 0%, transparent 65%);
// // //           pointer-events: none;
// // //         }
// // //         .hero-inner {
// // //           max-width: var(--max-w);
// // //           margin: 0 auto;
// // //           padding: 80px 24px 0;
// // //           position: relative;
// // //           z-index: 2;
// // //         }
// // //         .hero-top {
// // //           display: grid;
// // //           grid-template-columns: 1fr 460px;
// // //           gap: 60px;
// // //           align-items: center;
// // //           padding-bottom: 80px;
// // //         }
// // //         .hero-eyebrow {
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //           font-size: 12px;
// // //           font-weight: 600;
// // //           letter-spacing: 0.1em;
// // //           text-transform: uppercase;
// // //           color: #FF6600;
// // //           margin-bottom: 22px;
// // //         }
// // //         .hero-eyebrow-line {
// // //           width: 24px;
// // //           height: 2px;
// // //           background: var(--orange);
// // //         }
// // //         .hero-h1 {
// // //           font-size: clamp(34px, 4.5vw, 58px);
// // //           font-weight: 800;
// // //           line-height: 1.07;
// // //           letter-spacing: -1.5px;
// // //           color: #fff;
// // //           margin-bottom: 22px;
// // //         }
// // //         .hero-h1-orange { color: var(--orange); }
// // //         .hero-body {
// // //           font-size: 17px;
// // //           font-weight: 400;
// // //           line-height: 1.75;
// // //           color: rgba(255,255,255,0.55);
// // //           max-width: 500px;
// // //           margin-bottom: 38px;
// // //         }
// // //         .hero-btns {
// // //           display: flex;
// // //           gap: 12px;
// // //           flex-wrap: wrap;
// // //           margin-bottom: 52px;
// // //         }

// // //         /* Hero right – dashboard card */
// // //         .hero-card {
// // //           background: rgba(255,255,255,0.04);
// // //           border: 1px solid rgba(255,255,255,0.1);
// // //           border-radius: 8px;
// // //           overflow: hidden;
// // //         }
// // //         .hcard-topbar {
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: space-between;
// // //           padding: 14px 20px;
// // //           border-bottom: 1px solid rgba(255,255,255,0.08);
// // //         }
// // //         .hcard-title {
// // //           font-size: 11px;
// // //           font-weight: 600;
// // //           letter-spacing: 0.1em;
// // //           text-transform: uppercase;
// // //           color: rgba(255,255,255,0.3);
// // //         }
// // //         .hcard-badge {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 5px;
// // //           font-size: 10.5px;
// // //           font-weight: 600;
// // //           letter-spacing: 0.06em;
// // //           padding: 3px 9px;
// // //           border-radius: 3px;
// // //         }
// // //         .badge-green {
// // //           background: rgba(34,197,94,0.12);
// // //           color: #4ade80;
// // //           border: 1px solid rgba(34,197,94,0.25);
// // //         }
// // //         .badge-orange {
// // //           background: rgba(255,102,0,0.12);
// // //           color: #FF6600;
// // //           border: 1px solid rgba(255,102,0,0.25);
// // //         }
// // //         .hcard-body { padding: 20px; }
// // //         .hcard-row {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 12px;
// // //           margin-bottom: 14px;
// // //         }
// // //         .hcard-row:last-child { margin-bottom: 0; }
// // //         .hcard-color { width: 3px; height: 38px; border-radius: 2px; flex-shrink: 0; }
// // //         .hcard-info { flex: 1; }
// // //         .hcard-name { font-size: 12.5px; font-weight: 500; color: rgba(255,255,255,0.7); margin-bottom: 6px; }
// // //         .hcard-track { height: 3px; background: rgba(255,255,255,0.07); border-radius: 2px; }
// // //         .hcard-fill { height: 3px; border-radius: 2px; }
// // //         .hcard-pct { font-size: 11.5px; font-weight: 600; color: rgba(255,255,255,0.4); width: 32px; text-align: right; }
// // //         .hcard-mini {
// // //           display: grid;
// // //           grid-template-columns: 1fr 1fr;
// // //           gap: 12px;
// // //           margin-top: 12px;
// // //         }
// // //         .hcard-mini-cell {
// // //           background: rgba(255,255,255,0.04);
// // //           border: 1px solid rgba(255,255,255,0.07);
// // //           border-radius: 6px;
// // //           padding: 16px;
// // //           text-align: center;
// // //         }
// // //         .hcard-mini-val {
// // //           font-size: 28px;
// // //           font-weight: 800;
// // //           color: #fff;
// // //           letter-spacing: -0.5px;
// // //           line-height: 1;
// // //         }
// // //         .hcard-mini-val span { color: var(--orange); }
// // //         .hcard-mini-label { font-size: 11px; color: rgba(255,255,255,0.3); margin-top: 5px; }

// // //         /* Hero stats row */
// // //         .hero-stats {
// // //           display: grid;
// // //           grid-template-columns: repeat(4, 1fr);
// // //           border-top: 1px solid rgba(255,255,255,0.07);
// // //         }
// // //         .hstat {
// // //           padding: 30px 24px;
// // //           border-right: 1px solid rgba(255,255,255,0.07);
// // //         }
// // //         .hstat:last-child { border-right: none; }
// // //         .hstat-val {
// // //           font-size: 32px;
// // //           font-weight: 800;
// // //           color: #fff;
// // //           letter-spacing: -1px;
// // //           line-height: 1;
// // //         }
// // //         .hstat-val em { color: var(--orange); font-style: normal; }
// // //         .hstat-label { font-size: 12px; color: rgba(255,255,255,0.38); margin-top: 6px; }

// // //         /* ── TRUST STRIP ── */
// // //         .trust-strip {
// // //           background: var(--bg-lt);
// // //           border-bottom: 1px solid var(--border);
// // //         }
// // //         .trust-inner {
// // //           max-width: var(--max-w);
// // //           margin: 0 auto;
// // //           padding: 0 24px;
// // //           height: 60px;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 0;
// // //         }
// // //         .trust-label {
// // //           font-size: 11px;
// // //           font-weight: 600;
// // //           letter-spacing: 0.1em;
// // //           text-transform: uppercase;
// // //           color: #9ca3af;
// // //           padding-right: 28px;
// // //           border-right: 1px solid var(--border);
// // //           margin-right: 28px;
// // //           flex-shrink: 0;
// // //         }
// // //         .trust-logos { display: flex; gap: 28px; align-items: center; flex-wrap: wrap; }
// // //         .trust-logo {
// // //           font-size: 11.5px;
// // //           font-weight: 700;
// // //           letter-spacing: 0.08em;
// // //           text-transform: uppercase;
// // //           color: #c8cdd5;
// // //         }

// // //         /* ── SHARED SECTION ── */
// // //         .section { padding: 88px 0; }
// // //         .section-gray {
// // //           padding: 88px 0;
// // //           background: var(--bg-lt);
// // //           border-top: 1px solid var(--border);
// // //           border-bottom: 1px solid var(--border);
// // //         }
// // //         .wrap { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }
// // //         .section-header {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: flex-end;
// // //           margin-bottom: 44px;
// // //           gap: 20px;
// // //           flex-wrap: wrap;
// // //         }
// // //         .eyebrow {
// // //           font-size: 11.5px;
// // //           font-weight: 700;
// // //           letter-spacing: 0.12em;
// // //           text-transform: uppercase;
// // //           color: var(--orange);
// // //           margin-bottom: 12px;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 10px;
// // //         }
// // //         .eyebrow::before {
// // //           content: '';
// // //           width: 18px;
// // //           height: 2px;
// // //           background: var(--orange);
// // //           border-radius: 2px;
// // //         }
// // //         .section-h {
// // //           font-size: clamp(26px, 3vw, 40px);
// // //           font-weight: 800;
// // //           letter-spacing: -0.8px;
// // //           line-height: 1.1;
// // //           color: var(--text);
// // //         }
// // //         .section-sub {
// // //           font-size: 16.5px;
// // //           color: var(--text-lt);
// // //           line-height: 1.7;
// // //           margin-top: 14px;
// // //           max-width: 560px;
// // //         }

// // //         /* ── SERVICES PANEL ── */
// // //         .svc-panel {
// // //           display: grid;
// // //           grid-template-columns: 260px 1fr;
// // //           border: 1px solid var(--border);
// // //           border-radius: 6px;
// // //           overflow: hidden;
// // //           box-shadow: 0 1px 8px rgba(0,0,0,0.04);
// // //         }
// // //         .svc-sidebar { background: var(--bg-lt); border-right: 1px solid var(--border); }
// // //         .svc-tab {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 12px;
// // //           padding: 16px 20px;
// // //           border-bottom: 1px solid var(--border);
// // //           border-left: 3px solid transparent;
// // //           cursor: pointer;
// // //           transition: background 0.14s, border-color 0.14s;
// // //           user-select: none;
// // //         }
// // //         .svc-tab:last-child { border-bottom: none; }
// // //         .svc-tab:hover:not(.active) { background: #eef0f3; }
// // //         .svc-tab.active {
// // //           background: #fff;
// // //           border-left-color: var(--orange);
// // //         }
// // //         .svc-tab-num {
// // //           font-size: 11px;
// // //           font-weight: 700;
// // //           color: #cbd5e1;
// // //           flex-shrink: 0;
// // //           width: 20px;
// // //           font-variant-numeric: tabular-nums;
// // //         }
// // //         .svc-tab.active .svc-tab-num { color: var(--orange); }
// // //         .svc-tab-name {
// // //           font-size: 13.5px;
// // //           font-weight: 500;
// // //           color: var(--text-lt);
// // //         }
// // //         .svc-tab.active .svc-tab-name { color: var(--text); font-weight: 600; }

// // //         .svc-detail { padding: 48px 52px; background: #fff; }
// // //         .svc-detail-tag {
// // //           font-size: 11px;
// // //           font-weight: 700;
// // //           letter-spacing: 0.14em;
// // //           text-transform: uppercase;
// // //           color: var(--orange);
// // //           margin-bottom: 14px;
// // //         }
// // //         .svc-detail-h {
// // //           font-size: 28px;
// // //           font-weight: 800;
// // //           letter-spacing: -0.5px;
// // //           color: var(--text);
// // //           margin-bottom: 16px;
// // //           line-height: 1.15;
// // //         }
// // //         .svc-detail-p {
// // //           font-size: 15px;
// // //           color: var(--text-md);
// // //           line-height: 1.8;
// // //           max-width: 520px;
// // //           margin-bottom: 28px;
// // //         }
// // //         .svc-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
// // //         .svc-chip {
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 7px;
// // //           padding: 7px 14px;
// // //           background: var(--orange-lt);
// // //           border: 1px solid rgba(255,102,0,0.15);
// // //           border-radius: 4px;
// // //           font-size: 12.5px;
// // //           font-weight: 600;
// // //           color: #c94412;
// // //         }
// // //         .svc-chip::before {
// // //           content: '';
// // //           width: 5px;
// // //           height: 5px;
// // //           border-radius: 50%;
// // //           background: var(--orange);
// // //           flex-shrink: 0;
// // //         }
// // //         .svc-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }

// // //         /* ── ORANGE BAND ── */
// // //         .orange-band { background: var(--orange); }
// // //         .orange-band-inner {
// // //           max-width: var(--max-w);
// // //           margin: 0 auto;
// // //           padding: 0 24px;
// // //           display: grid;
// // //           grid-template-columns: repeat(4, 1fr);
// // //         }
// // //         .ostat {
// // //           padding: 48px 32px;
// // //           border-right: 1px solid rgba(255,255,255,0.2);
// // //         }
// // //         .ostat:last-child { border-right: none; }
// // //         .ostat-val {
// // //           font-size: 52px;
// // //           font-weight: 800;
// // //           color: #fff;
// // //           letter-spacing: -2px;
// // //           line-height: 1;
// // //         }
// // //         .ostat-label {
// // //           font-size: 13.5px;
// // //           font-weight: 400;
// // //           color: rgba(255,255,255,0.72);
// // //           margin-top: 8px;
// // //         }

// // //         /* ── DARK SECTION ── */
// // //         .dark-section {
// // //           background: #1a1a2e;
// // //           position: relative;
// // //           overflow: hidden;
// // //         }
// // //         .dark-grid {
// // //           position: absolute;
// // //           inset: 0;
// // //           background-image:
// // //             linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
// // //             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
// // //           background-size: 60px 60px;
// // //         }
// // //         .dark-glow {
// // //           position: absolute;
// // //           top: -20%;
// // //           right: -8%;
// // //           width: 600px;
// // //           height: 600px;
// // //           border-radius: 50%;
// // //           background: radial-gradient(circle, rgba(255,102,0,0.15) 0%, transparent 65%);
// // //         }
// // //         .dark-inner {
// // //           max-width: var(--max-w);
// // //           margin: 0 auto;
// // //           padding: 88px 24px;
// // //           display: grid;
// // //           grid-template-columns: 1fr 1fr;
// // //           gap: 72px;
// // //           align-items: start;
// // //           position: relative;
// // //           z-index: 2;
// // //         }
// // //         .dark-h {
// // //           font-size: clamp(26px, 3vw, 42px);
// // //           font-weight: 800;
// // //           letter-spacing: -1px;
// // //           color: #fff;
// // //           line-height: 1.1;
// // //           margin-bottom: 16px;
// // //         }
// // //         .dark-p {
// // //           font-size: 16px;
// // //           color: rgba(255,255,255,0.45);
// // //           line-height: 1.8;
// // //           margin-bottom: 32px;
// // //         }
// // //         .dark-checks { display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; }
// // //         .dark-check {
// // //           display: flex;
// // //           align-items: flex-start;
// // //           gap: 13px;
// // //         }
// // //         .dark-check-icon {
// // //           flex-shrink: 0;
// // //           width: 22px;
// // //           height: 22px;
// // //           border-radius: 50%;
// // //           background: rgba(255,102,0,0.1);
// // //           border: 1px solid rgba(255,102,0,0.25);
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           margin-top: 1px;
// // //         }
// // //         .dark-check-text { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; }
// // //         .dark-btns { display: flex; gap: 12px; flex-wrap: wrap; }

// // //         /* TERMINAL */
// // //         .terminal {
// // //           background: #060d1a;
// // //           border: 1px solid rgba(255,255,255,0.1);
// // //           border-radius: 8px;
// // //           overflow: hidden;
// // //           font-family: 'SFMono-Regular', 'Cascadia Code', 'Fira Code', Consolas, monospace;
// // //         }
// // //         .term-bar {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 7px;
// // //           padding: 13px 18px;
// // //           border-bottom: 1px solid rgba(255,255,255,0.07);
// // //         }
// // //         .term-dot { width: 11px; height: 11px; border-radius: 50%; }
// // //         .term-label {
// // //           margin-left: 8px;
// // //           font-size: 11.5px;
// // //           color: rgba(255,255,255,0.2);
// // //           letter-spacing: 0.02em;
// // //         }
// // //         .term-body { padding: 22px; }
// // //         .tline { display: flex; font-size: 12.5px; line-height: 2; flex-wrap: wrap; }
// // //         .tc-pr { color: #FF6600; }
// // //         .tc-cmd { color: rgba(255,255,255,0.7); }
// // //         .tc-out { color: rgba(255,255,255,0.28); padding-left: 14px; flex-basis: 100%; }
// // //         .tc-ok { color: #4ade80; }
// // //         .tc-head { color: #f1f5f9; font-weight: 600; }
// // //         .term-bar-row { margin: 5px 0; }
// // //         .term-bar-label {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           font-size: 11px;
// // //           color: rgba(255,255,255,0.28);
// // //           margin-bottom: 4px;
// // //         }
// // //         .term-bar-label span:last-child { color: #FF6600; }
// // //         .term-bg { height: 3px; background: rgba(255,255,255,0.07); border-radius: 2px; }
// // //         .term-fg { height: 3px; background: linear-gradient(90deg, #FF6600, #ff9944); border-radius: 2px; }

// // //         /* ── CASE STUDIES ── */
// // //         .cases-grid {
// // //           display: grid;
// // //           grid-template-columns: repeat(3, 1fr);
// // //           gap: 20px;
// // //         }
// // //         .case-card {
// // //           border: 1px solid var(--border);
// // //           border-radius: 6px;
// // //           padding: 36px 28px;
// // //           background: #fff;
// // //           position: relative;
// // //           overflow: hidden;
// // //           cursor: pointer;
// // //           transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s var(--ease);
// // //         }
// // //         .case-card::before {
// // //           content: '';
// // //           position: absolute;
// // //           top: 0; left: 0; right: 0;
// // //           height: 3px;
// // //           background: var(--orange);
// // //           transform: scaleX(0);
// // //           transform-origin: left;
// // //           transition: transform 0.25s var(--ease);
// // //         }
// // //         .case-card:hover {
// // //           border-color: rgba(255,102,0,0.3);
// // //           box-shadow: 0 8px 32px rgba(0,0,0,0.07);
// // //           transform: translateY(-3px);
// // //         }
// // //         .case-card:hover::before { transform: scaleX(1); }
// // //         .case-sector {
// // //           font-size: 10.5px;
// // //           font-weight: 700;
// // //           letter-spacing: 0.14em;
// // //           text-transform: uppercase;
// // //           color: var(--orange);
// // //           margin-bottom: 14px;
// // //         }
// // //         .case-title {
// // //           font-size: 17px;
// // //           font-weight: 700;
// // //           letter-spacing: -0.2px;
// // //           color: var(--text);
// // //           line-height: 1.4;
// // //           margin-bottom: 14px;
// // //         }
// // //         .case-body {
// // //           font-size: 13.5px;
// // //           color: var(--text-lt);
// // //           line-height: 1.7;
// // //           margin-bottom: 24px;
// // //         }
// // //         .case-result {
// // //           font-size: 26px;
// // //           font-weight: 800;
// // //           color: var(--orange);
// // //           letter-spacing: -0.5px;
// // //           line-height: 1;
// // //           margin-bottom: 4px;
// // //         }
// // //         .case-result-label {
// // //           font-size: 12px;
// // //           color: #9ca3af;
// // //           margin-bottom: 20px;
// // //         }
// // //         .case-tech { display: flex; gap: 6px; flex-wrap: wrap; }
// // //         .case-tag {
// // //           font-size: 11px;
// // //           font-weight: 500;
// // //           padding: 4px 10px;
// // //           border-radius: 3px;
// // //           background: var(--bg-lt);
// // //           border: 1px solid var(--border);
// // //           color: var(--text-lt);
// // //         }

// // //         /* ── WHY ── */
// // //         .why-grid {
// // //           display: grid;
// // //           grid-template-columns: repeat(2, 1fr);
// // //           gap: 1px;
// // //           background: var(--border);
// // //           border: 1px solid var(--border);
// // //           border-radius: 6px;
// // //           overflow: hidden;
// // //         }
// // //         .why-cell {
// // //           background: #fff;
// // //           padding: 44px 40px;
// // //           position: relative;
// // //           overflow: hidden;
// // //           transition: background 0.18s;
// // //         }
// // //         .why-cell:hover { background: var(--bg-lt); }
// // //         .why-stripe {
// // //           position: absolute;
// // //           left: 0; top: 0; bottom: 0;
// // //           width: 3px;
// // //           background: var(--orange);
// // //           transform: scaleY(0);
// // //           transform-origin: top;
// // //           transition: transform 0.25s var(--ease);
// // //         }
// // //         .why-cell:hover .why-stripe { transform: scaleY(1); }
// // //         .why-num {
// // //           font-size: 11.5px;
// // //           font-weight: 700;
// // //           letter-spacing: 0.1em;
// // //           color: var(--orange);
// // //           margin-bottom: 14px;
// // //         }
// // //         .why-h {
// // //           font-size: 20px;
// // //           font-weight: 700;
// // //           color: var(--text);
// // //           margin-bottom: 10px;
// // //         }
// // //         .why-p { font-size: 14px; color: var(--text-lt); line-height: 1.72; }

// // //         /* ── CTA SECTION ── */
// // //         .cta-section {
// // //           background: #1a1a2e;
// // //           position: relative;
// // //           overflow: hidden;
// // //         }
// // //         .cta-glow {
// // //           position: absolute;
// // //           left: -12%;
// // //           top: 50%;
// // //           transform: translateY(-50%);
// // //           width: 700px; height: 700px;
// // //           border-radius: 50%;
// // //           background: radial-gradient(circle, rgba(255,102,0,0.12) 0%, transparent 65%);
// // //         }
// // //         .cta-inner {
// // //           max-width: var(--max-w);
// // //           margin: 0 auto;
// // //           padding: 96px 24px;
// // //           display: grid;
// // //           grid-template-columns: 1fr 1fr;
// // //           gap: 72px;
// // //           align-items: center;
// // //           position: relative;
// // //           z-index: 2;
// // //         }
// // //         .cta-h {
// // //           font-size: clamp(26px, 3.5vw, 46px);
// // //           font-weight: 800;
// // //           letter-spacing: -1px;
// // //           color: #fff;
// // //           line-height: 1.1;
// // //         }
// // //         .cta-p {
// // //           font-size: 16px;
// // //           color: rgba(255,255,255,0.45);
// // //           line-height: 1.75;
// // //           margin-top: 16px;
// // //         }
// // //         .cta-form-wrap { display: flex; flex-direction: column; gap: 12px; }
// // //         .cta-input-row {
// // //           display: flex;
// // //           border: 1px solid rgba(255,255,255,0.14);
// // //           border-radius: 4px;
// // //           overflow: hidden;
// // //           background: rgba(255,255,255,0.05);
// // //         }
// // //         .cta-input {
// // //           flex: 1;
// // //           padding: 14px 18px;
// // //           background: transparent;
// // //           border: none;
// // //           font: 400 14px 'Inter', sans-serif;
// // //           color: #fff;
// // //           outline: none;
// // //           border-right: 1px solid rgba(255,255,255,0.1);
// // //         }
// // //         .cta-input::placeholder { color: rgba(255,255,255,0.28); }
// // //         .cta-submit {
// // //           padding: 14px 24px;
// // //           background: var(--orange);
// // //           border: none;
// // //           font: 600 14px 'Inter', sans-serif;
// // //           color: #fff;
// // //           cursor: pointer;
// // //           transition: background 0.15s;
// // //           white-space: nowrap;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 6px;
// // //         }
// // //         .cta-submit:hover { background: var(--orange-dk); }
// // //         .cta-note { font-size: 12px; color: rgba(255,255,255,0.25); }
// // //         .cta-secondary {
// // //           font: 500 13.5px 'Inter', sans-serif;
// // //           color: rgba(255,255,255,0.4);
// // //           text-decoration: none;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 6px;
// // //           transition: color 0.15s, gap 0.15s;
// // //         }
// // //         .cta-secondary:hover { color: rgba(255,255,255,0.75); gap: 10px; }

// // //         /* ── FOOTER ── */
// // //         footer { background: #0d1117; border-top: 1px solid rgba(255,255,255,0.06); }
// // //         .foot-main {
// // //           max-width: var(--max-w);
// // //           margin: 0 auto;
// // //           padding: 64px 24px 48px;
// // //           display: grid;
// // //           grid-template-columns: 2.4fr 1fr 1fr 1fr;
// // //           gap: 48px;
// // //         }
// // //         .foot-logo {
// // //           font-size: 18px;
// // //           font-weight: 800;
// // //           color: #fff;
// // //           letter-spacing: -0.3px;
// // //           margin-bottom: 14px;
// // //         }
// // //         .foot-logo span { color: var(--orange); }
// // //         .foot-desc {
// // //           font-size: 13.5px;
// // //           color: rgba(255,255,255,0.3);
// // //           line-height: 1.72;
// // //           max-width: 240px;
// // //           margin-bottom: 24px;
// // //         }
// // //         .foot-socs { display: flex; gap: 8px; }
// // //         .foot-soc {
// // //           width: 34px; height: 34px;
// // //           border-radius: 4px;
// // //           border: 1px solid rgba(255,255,255,0.1);
// // //           display: flex; align-items: center; justify-content: center;
// // //           font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.35);
// // //           cursor: pointer; transition: all 0.15s; text-transform: lowercase;
// // //           font-family: 'Inter', sans-serif;
// // //         }
// // //         .foot-soc:hover { border-color: var(--orange); color: var(--orange); }
// // //         .foot-col-h {
// // //           font-size: 11px;
// // //           font-weight: 700;
// // //           letter-spacing: 0.1em;
// // //           text-transform: uppercase;
// // //           color: rgba(255,255,255,0.25);
// // //           margin-bottom: 18px;
// // //         }
// // //         .foot-col-links { display: flex; flex-direction: column; gap: 10px; }
// // //         .foot-link {
// // //           font-size: 13.5px;
// // //           color: rgba(255,255,255,0.4);
// // //           text-decoration: none;
// // //           transition: color 0.15s;
// // //         }
// // //         .foot-link:hover { color: rgba(255,255,255,0.8); }
// // //         .foot-bottom {
// // //           max-width: var(--max-w);
// // //           margin: 0 auto;
// // //           padding: 18px 24px;
// // //           border-top: 1px solid rgba(255,255,255,0.06);
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //           flex-wrap: wrap;
// // //           gap: 12px;
// // //         }
// // //         .foot-copy { font-size: 12px; color: rgba(255,255,255,0.2); }
// // //         .foot-legal-links { display: flex; gap: 20px; }
// // //         .foot-legal-link {
// // //           font-size: 12px;
// // //           color: rgba(255,255,255,0.2);
// // //           text-decoration: none;
// // //           transition: color 0.15s;
// // //         }
// // //         .foot-legal-link:hover { color: rgba(255,255,255,0.5); }

// // //         /* ── RESPONSIVE ── */
// // //         @media (max-width: 1024px) {
// // //           .hero-top { grid-template-columns: 1fr; }
// // //           .hero-card { display: none; }
// // //           .hero-stats { grid-template-columns: repeat(2,1fr); }
// // //           .svc-panel { grid-template-columns: 1fr; }
// // //           .svc-sidebar { display: flex; overflow-x: auto; border-right: none; border-bottom: 1px solid var(--border); }
// // //           .svc-tab { flex-shrink: 0; border-left: none; border-bottom: 3px solid transparent; padding: 14px 16px; }
// // //           .svc-tab.active { border-bottom-color: var(--orange); border-left-color: transparent; }
// // //           .orange-band-inner { grid-template-columns: repeat(2,1fr); }
// // //           .dark-inner { grid-template-columns: 1fr; }
// // //           .cases-grid { grid-template-columns: 1fr; }
// // //           .why-grid { grid-template-columns: 1fr; }
// // //           .cta-inner { grid-template-columns: 1fr; gap: 40px; }
// // //           .foot-main { grid-template-columns: 1fr 1fr; }
// // //         }
// // //         @media (max-width: 768px) {
// // //           .nav-links { display: none; }
// // //           .hero-stats { grid-template-columns: repeat(2,1fr); }
// // //           .orange-band-inner { grid-template-columns: repeat(2,1fr); }
// // //           .foot-main { grid-template-columns: 1fr; }
// // //           .trust-strip { display: none; }
// // //           .topbar { font-size: 12px; padding: 8px 40px 8px 16px; }
// // //         }
// // //         @media (max-width: 480px) {
// // //           .hero-stats { grid-template-columns: repeat(2,1fr); }
// // //           .orange-band-inner { grid-template-columns: repeat(2,1fr); }
// // //         }
// // //       `}</style>

// // //       {/* ─── TOPBAR ─── */}
// // //       <TopBar />

// // //       {/* ─── NAV ─── */}
// // //       <nav className={`nav${scrolled ? " raised" : ""}`} style={{ top: 0 }}>
// // //         <div className="nav-row">
// // //           {/* Logo */}
// // //           <a className="logo" href="#">Sypra<span className="logo-dot">.</span></a>

// // //           {/* Links */}
// // //           <div className="nav-links">
// // //             {NAV.map((item) => (
// // //               <div
// // //                 key={item.label}
// // //                 className="nav-link-wrap"
// // //                 onMouseEnter={() => openMenu(item.label)}
// // //                 onMouseLeave={closeMenu}
// // //               >
// // //                 <button className={`nav-link-btn${openNav === item.label ? " active-nav" : ""}`}>
// // //                   {item.label}
// // //                   <ChevronDown />
// // //                 </button>
// // //                 <div className={`nav-dropdown${openNav === item.label ? " open" : ""}`}>
// // //                   {item.items.map((s, i) => (
// // //                     <span key={s}>
// // //                       <a href="#" className="nav-dd-link">{s}</a>
// // //                       {i === 1 && <div className="nav-dd-sep" />}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Right */}
// // //           <div className="nav-right">
// // //             <div className="nav-search">
// // //               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#9ca3af" strokeWidth="1.6"><circle cx="6" cy="6" r="4"/><path d="M10 10l2.5 2.5"/></svg>
// // //               Search
// // //             </div>
// // //             <a href="#" className="btn-outline">Contact Sales</a>
// // //             <button className="btn-orange">Get a Quote <ArrowRight /></button>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* ─── HERO ─── */}
// // //       <section className="hero">
// // //         <div className="hero-pattern" />
// // //         <div className="hero-accent" />
// // //         <div className="hero-accent2" />
// // //         <div className="hero-inner">
// // //           <div className="hero-top">
// // //             {/* Left */}
// // //             <div>
// // //               <div className="hero-eyebrow">
// // //                 <span className="hero-eyebrow-line" />
// // //                 IT Solutions & Digital Transformation
// // //               </div>
// // //               <h1 className="hero-h1">
// // //                 Build the Future of<br />Your Business on<br />
// // //                 <span className="hero-h1-orange">Expert IT</span>
// // //               </h1>
// // //               <p className="hero-body">
// // //                 Sypra Infotech delivers end-to-end technology services — from custom software and cloud infrastructure to AI automation and IT consulting — engineered to accelerate your growth.
// // //               </p>
// // //               <div className="hero-btns">
// // //                 <button className="btn-orange-lg">
// // //                   Explore Services <ArrowRight size={16} />
// // //                 </button>
// // //                 <button className="btn-ghost-lg">
// // //                   View Case Studies
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Right — live dashboard */}
// // //             <div>
// // //               <div className="hero-card">
// // //                 <div className="hcard-topbar">
// // //                   <span className="hcard-title">Active Project Dashboard</span>
// // //                   <span className="hcard-badge badge-green">
// // //                     <span style={{width:6,height:6,borderRadius:"50%",background:"#4ade80",display:"inline-block",animation:"pulse 2s infinite"}}/>
// // //                     LIVE
// // //                   </span>
// // //                 </div>
// // //                 <div className="hcard-body">
// // //                   {[
// // //                     { name: "Fintech Platform", pct: 96, color: "#FF6600" },
// // //                     { name: "Healthcare ERP", pct: 88, color: "#3b82f6" },
// // //                     { name: "E-commerce App", pct: 74, color: "#8b5cf6" },
// // //                     { name: "Cloud Migration", pct: 100, color: "#22c55e" },
// // //                   ].map((p) => (
// // //                     <div className="hcard-row" key={p.name}>
// // //                       <div className="hcard-color" style={{ background: p.color }} />
// // //                       <div className="hcard-info">
// // //                         <div className="hcard-name">{p.name}</div>
// // //                         <div className="hcard-track">
// // //                           <div className="hcard-fill" style={{ width: `${p.pct}%`, background: p.color }} />
// // //                         </div>
// // //                       </div>
// // //                       <div className="hcard-pct">{p.pct}%</div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //                 <div className="hcard-mini" style={{ padding: "0 20px 20px" }}>
// // //                   <div className="hcard-mini-cell">
// // //                     <div className="hcard-mini-val">98<span>%</span></div>
// // //                     <div className="hcard-mini-label">On-time delivery</div>
// // //                   </div>
// // //                   <div className="hcard-mini-cell">
// // //                     <div className="hcard-mini-val">300<span>+</span></div>
// // //                     <div className="hcard-mini-label">Projects shipped</div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Stats row */}
// // //           <div className="hero-stats">
// // //             {[
// // //               { v: "10", s: "+", l: "Years of experience" },
// // //               { v: "300", s: "+", l: "Projects delivered" },
// // //               { v: "500", s: "+", l: "Professionals trained" },
// // //               { v: "98", s: "%", l: "Client satisfaction" },
// // //             ].map((s) => (
// // //               <div className="hstat" key={s.l}>
// // //                 <div className="hstat-val">{s.v}<em>{s.s}</em></div>
// // //                 <div className="hstat-label">{s.l}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ─── TRUST STRIP ─── */}
// // //       <div className="trust-strip">
// // //         <div className="trust-inner">
// // //           <span className="trust-label">Serving clients across</span>
// // //           <div className="trust-logos">
// // //             {INDUSTRIES.map((l) => (
// // //               <span className="trust-logo" key={l}>{l}</span>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ─── SERVICES ─── */}
// // //       <div className="section">
// // //         <div className="wrap">
// // //           <div className="section-header">
// // //             <div>
// // //               <div className="eyebrow">Our Services</div>
// // //               <h2 className="section-h">Everything Your Business<br />Needs to Go Digital</h2>
// // //             </div>
// // //             <a className="btn-text-link" href="#">
// // //               View all services <ArrowRight />
// // //             </a>
// // //           </div>

// // //           <div className="svc-panel">
// // //             {/* Sidebar tabs */}
// // //             <div className="svc-sidebar">
// // //               {SERVICES.map((s, i) => (
// // //                 <div
// // //                   key={s.id}
// // //                   className={`svc-tab${activeSvc === i ? " active" : ""}`}
// // //                   onClick={() => setActiveSvc(i)}
// // //                 >
// // //                   <span className="svc-tab-num">{s.id}</span>
// // //                   <span className="svc-tab-name">{s.name}</span>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Detail pane */}
// // //             <div className="svc-detail">
// // //               <div className="svc-detail-tag">{SERVICES[activeSvc].tag}</div>
// // //               <div className="svc-detail-h">{SERVICES[activeSvc].name}</div>
// // //               <div className="svc-detail-p">{SERVICES[activeSvc].detail}</div>
// // //               <div className="svc-chips">
// // //                 {SERVICES[activeSvc].outcomes.map((o) => (
// // //                   <span className="svc-chip" key={o}>{o}</span>
// // //                 ))}
// // //               </div>
// // //               <div className="svc-actions">
// // //                 <button className="btn-orange">Learn More <ArrowRight /></button>
// // //                 <a className="btn-text-link" href="#">See case studies <ArrowRight /></a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ─── ORANGE STATS BAND ─── */}
// // //       <div className="orange-band">
// // //         <div className="orange-band-inner">
// // //           {STATS.map((s) => (
// // //             <div className="ostat" key={s.l}>
// // //               <div className="ostat-val">{s.v}</div>
// // //               <div className="ostat-label">{s.l}</div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* ─── DARK — WHY SYPRA ─── */}
// // //       <div className="dark-section">
// // //         <div className="dark-grid" />
// // //         <div className="dark-glow" />
// // //         <div className="dark-inner">
// // //           <div>
// // //             <div className="eyebrow" style={{ color: "#FF6600" }}>Why Sypra Infotech</div>
// // //             <h2 className="dark-h">Trusted Technology<br />Partner. Real Results.</h2>
// // //             <p className="dark-p">We don't just deliver code — we become a strategic extension of your team. Every engagement is outcome-driven, fully transparent, and backed by senior engineers who've solved your problem before.</p>
// // //             <div className="dark-checks">
// // //               {CHECKS.map((c) => (
// // //                 <div className="dark-check" key={c}>
// // //                   <div className="dark-check-icon"><Check /></div>
// // //                   <span className="dark-check-text">{c}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //             <div className="dark-btns">
// // //               <button className="btn-orange-lg">Start a Project <ArrowRight size={15} /></button>
// // //               <button className="btn-ghost-lg">Meet the Team</button>
// // //             </div>
// // //           </div>

// // //           {/* Terminal */}
// // //           <div className="terminal">
// // //             <div className="term-bar">
// // //               <div className="term-dot" style={{ background: "#ef4444" }} />
// // //               <div className="term-dot" style={{ background: "#f59e0b" }} />
// // //               <div className="term-dot" style={{ background: "#22c55e" }} />
// // //               <span className="term-label">sypra — project-delivery-dashboard</span>
// // //             </div>
// // //             <div className="term-body">
// // //               <div className="tline"><span className="tc-pr">$ </span><span className="tc-cmd"> sypra status --project fintech-lending-v2</span></div>
// // //               <div className="tline"><span className="tc-out">› Running test suite (312 tests)...&nbsp;<span className="tc-ok">all passed</span></span></div>
// // //               <div className="tline"><span className="tc-out">› Building production bundle...&nbsp;<span className="tc-ok">done (3.2 MB)</span></span></div>
// // //               <div className="tline"><span className="tc-out">› Security scan...&nbsp;<span className="tc-ok">0 vulnerabilities found</span></span></div>
// // //               <div className="tline" style={{ marginTop: 6 }}>
// // //                 <span className="tc-pr">→ </span><span className="tc-cmd">&nbsp;</span><span className="tc-head">Sprint 7 of 8 — On Track</span>
// // //               </div>
// // //               <div style={{ marginTop: 8 }}>
// // //                 {[
// // //                   { n: "Backend APIs", p: 96 },
// // //                   { n: "Frontend UI", p: 88 },
// // //                   { n: "QA Coverage", p: 94 },
// // //                   { n: "Deployment Readiness", p: 72 },
// // //                 ].map((b) => (
// // //                   <div className="term-bar-row" key={b.n}>
// // //                     <div className="term-bar-label">
// // //                       <span>{b.n}</span>
// // //                       <span>{b.p}%</span>
// // //                     </div>
// // //                     <div className="term-bg">
// // //                       <div className="term-fg" style={{ width: `${b.p}%` }} />
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className="tline" style={{ marginTop: 10 }}>
// // //                 <span className="tc-pr">✓ </span><span className="tc-cmd">&nbsp;</span>
// // //                 <span className="tc-ok">Delivery in 6 days — client sign-off pending</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ─── CASE STUDIES ─── */}
// // //       <div className="section">
// // //         <div className="wrap">
// // //           <div className="section-header">
// // //             <div>
// // //               <div className="eyebrow">Case Studies</div>
// // //               <h2 className="section-h">Outcomes That Speak<br />for Themselves</h2>
// // //             </div>
// // //             <a className="btn-text-link" href="#">All case studies <ArrowRight /></a>
// // //           </div>
// // //           <div className="cases-grid">
// // //             {CASES.map((c) => (
// // //               <div className="case-card" key={c.title}>
// // //                 <div className="case-sector">{c.sector}</div>
// // //                 <div className="case-title">{c.title}</div>
// // //                 <div className="case-body">{c.body}</div>
// // //                 <div className="case-result">{c.result}</div>
// // //                 <div className="case-result-label">Key outcome</div>
// // //                 <div className="case-tech">
// // //                   {c.tech.map((t) => <span className="case-tag" key={t}>{t}</span>)}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ─── WHY ─── */}
// // //       <div className="section-gray">
// // //         <div className="wrap">
// // //           <div className="section-header">
// // //             <div>
// // //               <div className="eyebrow">Our Differentiators</div>
// // //               <h2 className="section-h">What Makes Sypra Different</h2>
// // //             </div>
// // //           </div>
// // //           <div className="why-grid">
// // //             {WHYS.map((w) => (
// // //               <div className="why-cell" key={w.h}>
// // //                 <div className="why-stripe" />
// // //                 <div className="why-num">{w.n}</div>
// // //                 <div className="why-h">{w.h}</div>
// // //                 <div className="why-p">{w.b}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ─── CTA ─── */}
// // //       <div className="cta-section">
// // //         <div className="cta-glow" />
// // //         <div className="cta-inner">
// // //           <div>
// // //             <h2 className="cta-h">Ready to build something great together?</h2>
// // //             <p className="cta-p">Talk to our team. Free consultation, clear proposal, no pressure. Let's understand your challenge before we talk solutions.</p>
// // //           </div>
// // //           <div className="cta-form-wrap">
// // //             <div className="cta-input-row">
// // //               <input className="cta-input" type="email" placeholder="Enter your work email" />
// // //               <button className="cta-submit">Get Started <ArrowRight size={13} /></button>
// // //             </div>
// // //             <span className="cta-note">No commitment. We'll respond within 24 hours.</span>
// // //             <a href="#" className="cta-secondary">Or schedule a call <ArrowRight size={12} /></a>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ─── FOOTER ─── */}
// // //       <footer>
// // //         <div className="foot-main">
// // //           <div>
// // //             <div className="foot-logo">Sypra<span>.</span></div>
// // //             <div className="foot-desc">Sypra Infotech delivers expert IT solutions, software development, cloud infrastructure, and digital transformation services to businesses worldwide.</div>
// // //             <div className="foot-socs">
// // //               {["in", "tw", "gh", "yt"].map((s) => (
// // //                 <div className="foot-soc" key={s}>{s}</div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           {[
// // //             { h: "Services", links: ["Web Development", "Cloud & DevOps", "AI & Automation", "ERP & CRM", "Cybersecurity", "IT Consulting"] },
// // //             { h: "Company", links: ["About Us", "Leadership", "Careers", "Case Studies", "Press"] },
// // //             { h: "Support", links: ["Contact Sales", "Documentation", "Training Programs", "Status Page", "Privacy Policy"] },
// // //           ].map((col) => (
// // //             <div key={col.h}>
// // //               <div className="foot-col-h">{col.h}</div>
// // //               <div className="foot-col-links">
// // //                 {col.links.map((l) => (
// // //                   <a href="#" key={l} className="foot-link">{l}</a>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <div className="foot-bottom">
// // //           <span className="foot-copy">© 2026 Sypra Infotech & Professionals Pvt. Ltd. All rights reserved.</span>
// // //           <div className="foot-legal-links">
// // //             {["Privacy Policy", "Terms of Service", "Cookie Settings", "Sitemap"].map((l) => (
// // //               <a href="#" key={l} className="foot-legal-link">{l}</a>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// // // /* ─── TOPBAR ─────────────────────────────────────────────────────── */
// // // function TopBar() {
// // //   const [visible, setVisible] = useState(true);
// // //   if (!visible) return null;
// // //   return (
// // //     <div className="topbar" style={{ position: "relative" }}>
// // //       <span>🚀 Sypra Infotech is now taking enterprise projects for Q2 2026.&nbsp;
// // //         <a href="#">Schedule a free consultation →</a>
// // //       </span>
// // //       <button className="topbar-close" onClick={() => setVisible(false)}>×</button>
// // //     </div>
// // //   );
// // // }

// // import { useState, useEffect, useRef } from "react";

// // /* ─── DATA (Sypra tailored to Teradata's Tone) ──────────────────────── */

// // const SERVICES = [
// //   { id: "01", name: "Modern Web & App Platforms", tag: "DIGITAL EXPERIENCES", detail: "Deliver connected, multi-platform experiences. We engineer custom progressive web apps and native mobile solutions using modern cloud-native architectures that scale infinitely.", outcomes: ["300+ platforms live", "React · Node · Flutter", "Enterprise-grade security"] },
// //   { id: "02", name: "Multi-Cloud Infrastructure", tag: "CLOUD & DEVOPS", detail: "The flexibility to deploy anywhere. Full-cycle cloud migration, containerisation, and elastic infrastructure management optimized for cost, performance, and compliance.", outcomes: ["AWS · Azure · GCP", "99.99% SLA uptime", "Zero-downtime migrations"] },
// //   { id: "03", name: "AI & Intelligent Automation", tag: "AI & ANALYTICS", detail: "Unleash the power of your data. We build predictive NLP pipelines, intelligent document processing, and automated workflows that generate measurable ROI and drive operational velocity.", outcomes: ["12+ AI models deployed", "60% workflow acceleration", "Python · LLMs · TensorFlow"] },
// //   { id: "04", name: "Connected ERP & CRM", tag: "BUSINESS SYSTEMS", detail: "Unify your enterprise data. Seamless SAP, Salesforce, and custom ERP implementations that connect finance, supply chain, and customer touchpoints into a single source of truth.", outcomes: ["Full org rollouts", "Complex data migration", "Salesforce · SAP"] },
// //   { id: "05", name: "Zero-Trust Cybersecurity", tag: "SECURITY & COMPLIANCE", detail: "Protect your most valuable assets. Comprehensive VAPT, architecture reviews, and 24/7 SOC monitoring to harden your perimeters and ensure absolute compliance.", outcomes: ["ISO 27001 readiness", "Active threat hunting", "Penetration testing"] },
// //   { id: "06", name: "Strategic IT Consulting", tag: "ADVISORY SERVICES", detail: "Decisions backed by data, not opinion. Our senior architects embed with your executive team to audit technology stacks and architect clear roadmaps for digital dominance.", outcomes: ["CTO-level advisory", "Vendor consolidation", "Actionable roadmaps"] },
// // ];

// // const STATS = [
// //   { v: "10+", l: "YEARS INNOVATING" },
// //   { v: "300+", l: "ENTERPRISE DEPLOYMENTS" },
// //   { v: "500+", l: "EXPERTS TRAINED" },
// //   { v: "98%", l: "RETENTION RATE" },
// // ];

// // const CASES = [
// //   { sector: "FINANCIAL SERVICES", title: "Global Lending Platform Modernization", result: "2.3x", resultLabel: "Faster approvals", body: "Re-architected legacy credit scoring into a real-time, ML-driven decision engine on AWS, serving 400K+ concurrent users with zero latency.", tech: ["React", "Python", "AWS"] },
// //   { sector: "HEALTHCARE", title: "Unified Hospital Data Core", result: "40%", resultLabel: "Overhead reduction", body: "Consolidated 12 disparate departmental databases into a single, compliant EHR platform, enabling seamless patient data flow across the enterprise.", tech: ["Node.js", "Azure", "HL7"] },
// //   { sector: "EDUCATION", title: "AI-Matched Mentorship Ecosystem", result: "92%", resultLabel: "Placement success", body: "Engineered a live cohort platform utilizing predictive analytics to match 18,000+ learners with industry mentors and employer pipelines.", tech: ["Flutter", "ML", "Firebase"] },
// // ];

// // const WHYS = [
// //   { n: "01", h: "End-to-End Accountability", b: "We own the entire technology stack. From initial strategy and UI/UX to cloud deployment and SOC monitoring, we deliver seamless integration without vendor sprawl." },
// //   { n: "02", h: "Outcome-Based Engagements", b: "We align our success with yours. Contracts are structured around measurable business deliverables, guaranteeing you know the exact ROI before execution begins." },
// //   { n: "03", h: "Radical Transparency", b: "Complete visibility into the engineering process. Daily standups, live sprint dashboards, and weekly architectural reviews ensure continuous alignment." },
// //   { n: "04", h: "Lifecycle Partnership", b: "Deployment is just day one. We provide ongoing proactive maintenance, continuous feature iteration, and SLA-backed infrastructure management." },
// // ];

// // const NAV = [
// //   { label: "Platform", items: ["Web & App Development", "Multi-Cloud", "AI & Analytics", "ERP & CRM", "Security"] },
// //   { label: "Solutions", items: ["By Industry", "By Role", "Digital Transformation", "Managed Services"] },
// //   { label: "Customers", items: ["Case Studies", "Testimonials", "Global Reach"] },
// //   { label: "Insights", items: ["Blog", "Whitepapers", "Webinars", "Documentation"] },
// //   { label: "Company", items: ["About Sypra", "Leadership", "Careers", "Partners"] },
// // ];

// // const INDUSTRIES = ["FINANCE", "HEALTHCARE", "MANUFACTURING", "RETAIL", "PUBLIC SECTOR", "TELECOM"];

// // /* ─── ICONS ─────────────────────────────────────────────────────────── */
// // const ChevronDown = ({ size = 12 }) => (
// //   <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M3 5l4 4 4-4" /></svg>
// // );
// // const ArrowRight = ({ size = 16 }) => (
// //   <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
// // );
// // const Check = () => (
// //   <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#FF5A00" strokeWidth="2" strokeLinecap="square"><path d="M1 7l4 4 8-8" /></svg>
// // );

// // /* ─── APP ────────────────────────────────────────────────────────────── */
// // export default function App() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [openNav, setOpenNav] = useState(null);
// //   const [activeSvc, setActiveSvc] = useState(0);
// //   const navTimeout = useRef(null);

// //   useEffect(() => {
// //     const fn = () => setScrolled(window.scrollY > 10);
// //     window.addEventListener("scroll", fn, { passive: true });
// //     return () => window.removeEventListener("scroll", fn);
// //   }, []);

// //   const openMenu = (label) => {
// //     clearTimeout(navTimeout.current);
// //     setOpenNav(label);
// //   };
// //   const closeMenu = () => {
// //     navTimeout.current = setTimeout(() => setOpenNav(null), 150);
// //   };

// //   return (
// //     <div style={{ fontFamily: "'Inter', sans-serif", background: "#FFFFFF", color: "#1A1A1A", overflowX: "hidden", lineHeight: 1.5 }}>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// //         html { font-size: 16px; scroll-behavior: smooth; }

// //         :root {
// //           /* Teradata Inspired Palette */
// //           --td-orange: #FF5A00;
// //           --td-orange-hover: #E04F00;
// //           --td-navy: #00233C;
// //           --td-navy-dk: #001626;
// //           --td-blue: #007398;
// //           --td-gray-bg: #F4F6F8;
// //           --td-gray-border: #D1D5DB;
// //           --td-text: #1A1A1A;
// //           --td-text-muted: #5A6A75;
          
// //           --max-w: 1280px;
// //           --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
// //         }

// //         /* ── TOPBAR ── */
// //         .topbar {
// //           background: #1A1A1A;
// //           padding: 10px 24px;
// //           text-align: center;
// //           font-size: 12px;
// //           font-weight: 600;
// //           color: #FFF;
// //           letter-spacing: 0.05em;
// //           text-transform: uppercase;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 16px;
// //         }
// //         .topbar a {
// //           color: var(--td-orange);
// //           text-decoration: none;
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 4px;
// //         }
// //         .topbar a:hover { text-decoration: underline; }

// //         /* ── NAV ── */
// //         .nav {
// //           position: sticky;
// //           top: 0;
// //           z-index: 999;
// //           background: #FFF;
// //           border-bottom: 1px solid var(--td-gray-border);
// //           transition: background 0.3s, box-shadow 0.3s;
// //         }
// //         .nav.raised {
// //           box-shadow: 0 4px 24px rgba(0,0,0,0.06);
// //         }
// //         .nav-row {
// //           max-width: var(--max-w);
// //           margin: 0 auto;
// //           padding: 0 32px;
// //           height: 72px;
// //           display: flex;
// //           align-items: center;
// //         }

// //         .logo {
// //           font-size: 24px;
// //           font-weight: 900;
// //           color: var(--td-navy);
// //           text-decoration: none;
// //           letter-spacing: -0.5px;
// //           margin-right: 48px;
// //         }
// //         .logo span { color: var(--td-orange); }

// //         .nav-links {
// //           display: flex;
// //           align-items: stretch;
// //           height: 100%;
// //         }
// //         .nav-link-wrap { position: relative; display: flex; align-items: stretch; }
// //         .nav-link-btn {
// //           background: none;
// //           border: none;
// //           padding: 0 20px;
// //           font: 600 14px 'Inter', sans-serif;
// //           color: var(--td-navy);
// //           cursor: pointer;
// //           display: flex;
// //           align-items: center;
// //           gap: 6px;
// //           transition: color 0.2s;
// //         }
// //         .nav-link-btn:hover, .nav-link-btn.active-nav { color: var(--td-orange); }

// //         .nav-dropdown {
// //           position: absolute;
// //           top: 100%;
// //           left: 0;
// //           min-width: 260px;
// //           background: #FFF;
// //           border: 1px solid var(--td-gray-border);
// //           border-top: 3px solid var(--td-orange);
// //           padding: 16px 0;
// //           box-shadow: 0 12px 32px rgba(0,35,60,0.08);
// //           opacity: 0;
// //           pointer-events: none;
// //           transform: translateY(10px);
// //           transition: all 0.2s var(--ease);
// //         }
// //         .nav-dropdown.open {
// //           opacity: 1;
// //           pointer-events: all;
// //           transform: translateY(0);
// //         }
// //         .nav-dd-link {
// //           display: block;
// //           padding: 10px 32px;
// //           font-size: 14px;
// //           font-weight: 500;
// //           color: var(--td-text);
// //           text-decoration: none;
// //           transition: all 0.2s;
// //         }
// //         .nav-dd-link:hover {
// //           background: var(--td-gray-bg);
// //           color: var(--td-orange);
// //           padding-left: 36px;
// //         }

// //         .nav-right {
// //           margin-left: auto;
// //           display: flex;
// //           align-items: center;
// //           gap: 16px;
// //         }

// //         /* BUTTONS - Sharp edges, uppercase, bold */
// //         .btn-primary {
// //           background: var(--td-orange);
// //           color: #FFF;
// //           border: none;
// //           padding: 14px 28px;
// //           font: 700 13px 'Inter', sans-serif;
// //           letter-spacing: 0.1em;
// //           text-transform: uppercase;
// //           cursor: pointer;
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 8px;
// //           transition: background 0.2s, transform 0.2s;
// //           text-decoration: none;
// //         }
// //         .btn-primary:hover { background: var(--td-orange-hover); transform: translateY(-2px); }
        
// //         .btn-secondary {
// //           background: transparent;
// //           color: var(--td-navy);
// //           border: 2px solid var(--td-navy);
// //           padding: 12px 26px;
// //           font: 700 13px 'Inter', sans-serif;
// //           letter-spacing: 0.1em;
// //           text-transform: uppercase;
// //           cursor: pointer;
// //           display: inline-flex;
// //           align-items: center;
// //           transition: all 0.2s;
// //           text-decoration: none;
// //         }
// //         .btn-secondary:hover { background: var(--td-navy); color: #FFF; }

// //         .btn-ghost-white {
// //           background: transparent;
// //           color: #FFF;
// //           border: 2px solid #FFF;
// //           padding: 12px 26px;
// //           font: 700 13px 'Inter', sans-serif;
// //           letter-spacing: 0.1em;
// //           text-transform: uppercase;
// //           cursor: pointer;
// //           transition: all 0.2s;
// //         }
// //         .btn-ghost-white:hover { background: #FFF; color: var(--td-navy); }

// //         /* ── HERO ── */
// //         .hero {
// //           background: var(--td-navy);
// //           position: relative;
// //           padding: 120px 0 100px;
// //           overflow: hidden;
// //         }
// //         .hero-bg-accent {
// //           position: absolute;
// //           top: -20%; right: -10%;
// //           width: 60%; height: 140%;
// //           background: linear-gradient(135deg, var(--td-navy-dk) 0%, transparent 100%);
// //           transform: skewX(-15deg);
// //           border-left: 1px solid rgba(255,255,255,0.05);
// //           pointer-events: none;
// //         }
// //         .hero-inner {
// //           max-width: var(--max-w);
// //           margin: 0 auto;
// //           padding: 0 32px;
// //           position: relative;
// //           z-index: 2;
// //           display: grid;
// //           grid-template-columns: 1.1fr 0.9fr;
// //           gap: 64px;
// //           align-items: center;
// //         }
// //         .hero-eyebrow {
// //           color: var(--td-orange);
// //           font-weight: 700;
// //           font-size: 14px;
// //           letter-spacing: 0.15em;
// //           text-transform: uppercase;
// //           margin-bottom: 24px;
// //           display: flex;
// //           align-items: center;
// //           gap: 12px;
// //         }
// //         .hero-eyebrow::before { content: ''; width: 32px; height: 2px; background: var(--td-orange); }
        
// //         .hero-h1 {
// //           font-size: clamp(40px, 5vw, 64px);
// //           font-weight: 900;
// //           line-height: 1.05;
// //           letter-spacing: -1px;
// //           color: #FFF;
// //           margin-bottom: 32px;
// //         }
// //         .hero-p {
// //           font-size: 18px;
// //           line-height: 1.6;
// //           color: rgba(255,255,255,0.7);
// //           margin-bottom: 48px;
// //           max-width: 540px;
// //         }
// //         .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

// //         /* Hero Dashboard Card (Enterprise Style) */
// //         .hero-dash {
// //           background: #FFF;
// //           border-top: 6px solid var(--td-orange);
// //           padding: 32px;
// //           box-shadow: 0 24px 64px rgba(0,0,0,0.3);
// //           position: relative;
// //         }
// //         .hero-dash::after {
// //           content: '';
// //           position: absolute;
// //           bottom: -16px; right: -16px;
// //           width: 100%; height: 100%;
// //           border: 1px solid rgba(255,255,255,0.1);
// //           z-index: -1;
// //         }
// //         .dash-header {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           margin-bottom: 32px;
// //           border-bottom: 1px solid var(--td-gray-border);
// //           padding-bottom: 16px;
// //         }
// //         .dash-title { font-weight: 800; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--td-navy); }
// //         .dash-status { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 700; color: #008A00; text-transform: uppercase; }
// //         .dash-pulse { width: 8px; height: 8px; background: #008A00; border-radius: 50%; }

// //         .dash-metric-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px; }
// //         .d-metric-val { font-size: 40px; font-weight: 900; color: var(--td-navy); line-height: 1; margin-bottom: 8px; }
// //         .d-metric-val span { color: var(--td-orange); }
// //         .d-metric-lbl { font-size: 12px; font-weight: 600; color: var(--td-text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

// //         .dash-bar-row { margin-bottom: 16px; }
// //         .d-bar-lbl { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: var(--td-text); margin-bottom: 8px; }
// //         .d-bar-track { height: 6px; background: var(--td-gray-bg); }
// //         .d-bar-fill { height: 100%; background: var(--td-blue); }

// //         /* ── TRUST BAND ── */
// //         .trust-band {
// //           background: var(--td-gray-bg);
// //           border-bottom: 1px solid var(--td-gray-border);
// //           padding: 32px 0;
// //         }
// //         .trust-inner {
// //           max-width: var(--max-w);
// //           margin: 0 auto;
// //           padding: 0 32px;
// //           display: flex;
// //           align-items: center;
// //           gap: 48px;
// //         }
// //         .trust-lbl { font-size: 12px; font-weight: 700; color: var(--td-text-muted); text-transform: uppercase; letter-spacing: 0.1em; flex-shrink: 0; }
// //         .trust-logos { display: flex; gap: 48px; flex-wrap: wrap; opacity: 0.6; }
// //         .trust-logo { font-size: 16px; font-weight: 900; letter-spacing: 0.05em; color: var(--td-navy); }

// //         /* ── COMMON SECTION ── */
// //         .section { padding: 120px 0; }
// //         .section-dark { background: var(--td-navy); color: #FFF; padding: 120px 0; }
// //         .wrap { max-width: var(--max-w); margin: 0 auto; padding: 0 32px; }
        
// //         .sec-head { margin-bottom: 64px; max-width: 700px; }
// //         .sec-eyebrow {
// //           font-size: 14px; font-weight: 700; color: var(--td-orange); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 16px; display: inline-block;
// //         }
// //         .sec-title { font-size: 48px; font-weight: 900; line-height: 1.1; letter-spacing: -1px; margin-bottom: 24px; color: var(--td-navy); }
// //         .section-dark .sec-title { color: #FFF; }
// //         .sec-desc { font-size: 18px; color: var(--td-text-muted); line-height: 1.6; }
// //         .section-dark .sec-desc { color: rgba(255,255,255,0.7); }

// //         /* ── SERVICES GRID (Enterprise Layout) ── */
// //         .svc-grid {
// //           display: grid;
// //           grid-template-columns: repeat(3, 1fr);
// //           gap: 32px;
// //         }
// //         .svc-card {
// //           border: 1px solid var(--td-gray-border);
// //           padding: 40px 32px;
// //           background: #FFF;
// //           transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
// //           position: relative;
// //         }
// //         .svc-card::before {
// //           content: ''; position: absolute; top: -1px; left: -1px; right: -1px; height: 4px; background: transparent; transition: background 0.3s;
// //         }
// //         .svc-card:hover {
// //           transform: translateY(-4px);
// //           box-shadow: 0 20px 40px rgba(0,0,0,0.06);
// //           border-color: transparent;
// //         }
// //         .svc-card:hover::before { background: var(--td-orange); }
        
// //         .svc-id { font-size: 14px; font-weight: 800; color: var(--td-gray-border); margin-bottom: 24px; }
// //         .svc-card:hover .svc-id { color: var(--td-orange); }
// //         .svc-name { font-size: 22px; font-weight: 800; color: var(--td-navy); margin-bottom: 16px; line-height: 1.2; }
// //         .svc-detail { font-size: 15px; color: var(--td-text-muted); line-height: 1.6; margin-bottom: 32px; }
// //         .svc-link {
// //           font-size: 13px; font-weight: 700; color: var(--td-blue); text-transform: uppercase; letter-spacing: 0.1em; text-decoration: none; display: flex; align-items: center; gap: 8px;
// //         }
// //         .svc-link:hover { color: var(--td-orange); }

// //         /* ── STATS BLOCK ── */
// //         .stats-wrap {
// //           display: grid;
// //           grid-template-columns: repeat(4, 1fr);
// //           border-top: 1px solid rgba(255,255,255,0.1);
// //           border-bottom: 1px solid rgba(255,255,255,0.1);
// //           margin-top: 80px;
// //         }
// //         .stat-box { padding: 48px 32px; border-right: 1px solid rgba(255,255,255,0.1); }
// //         .stat-box:last-child { border-right: none; }
// //         .stat-v { font-size: 56px; font-weight: 900; color: #FFF; line-height: 1; margin-bottom: 12px; }
// //         .stat-l { font-size: 12px; font-weight: 700; color: var(--td-orange); text-transform: uppercase; letter-spacing: 0.1em; }

// //         /* ── CASES (High Contrast) ── */
// //         .cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--td-gray-border); }
// //         .case-card { padding: 48px 40px; border-right: 1px solid var(--td-gray-border); background: #FFF; position: relative; }
// //         .case-card:last-child { border-right: none; }
// //         .case-sector { font-size: 12px; font-weight: 800; color: var(--td-orange); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 24px; }
// //         .case-title { font-size: 24px; font-weight: 800; color: var(--td-navy); line-height: 1.2; margin-bottom: 24px; }
// //         .case-res { font-size: 48px; font-weight: 900; color: var(--td-blue); margin-bottom: 8px; line-height: 1; }
// //         .case-res-lbl { font-size: 12px; font-weight: 700; color: var(--td-text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px; }
// //         .case-body { font-size: 15px; color: var(--td-text); line-height: 1.6; margin-bottom: 32px; }
        
// //         /* ── WHY (Alternating Layout) ── */
// //         .why-row { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-bottom: 80px; }
// //         .why-row:nth-child(even) .why-content { order: 2; }
// //         .why-num { font-size: 80px; font-weight: 900; color: var(--td-gray-bg); line-height: 0.8; margin-bottom: 24px; }
// //         .why-h { font-size: 32px; font-weight: 800; color: var(--td-navy); margin-bottom: 16px; }
// //         .why-p { font-size: 16px; color: var(--td-text-muted); line-height: 1.6; }

// //         /* ── CTA ── */
// //         .cta-section { background: var(--td-orange); padding: 100px 0; text-align: center; }
// //         .cta-h { font-size: 48px; font-weight: 900; color: #FFF; letter-spacing: -1px; margin-bottom: 32px; }
// //         .cta-btns { display: flex; gap: 16px; justify-content: center; }

// //         /* ── FOOTER ── */
// //         footer { background: var(--td-navy-dk); padding: 80px 0 40px; color: rgba(255,255,255,0.6); }
// //         .ft-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 80px; }
// //         .ft-logo { font-size: 28px; font-weight: 900; color: #FFF; margin-bottom: 24px; letter-spacing: -0.5px; }
// //         .ft-logo span { color: var(--td-orange); }
// //         .ft-desc { font-size: 14px; line-height: 1.6; max-width: 300px; margin-bottom: 32px; }
// //         .ft-h { font-size: 12px; font-weight: 800; color: #FFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px; }
// //         .ft-links { display: flex; flex-direction: column; gap: 12px; }
// //         .ft-link { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; transition: color 0.2s; }
// //         .ft-link:hover { color: var(--td-orange); }
// //         .ft-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 32px; display: flex; justify-content: space-between; font-size: 13px; }

// //         /* RESPONSIVE */
// //         @media (max-width: 1024px) {
// //           .hero-inner { grid-template-columns: 1fr; text-align: center; }
// //           .hero-eyebrow { justify-content: center; }
// //           .hero-eyebrow::before { display: none; }
// //           .hero-p { margin: 0 auto 48px; }
// //           .hero-btns { justify-content: center; }
// //           .svc-grid { grid-template-columns: repeat(2, 1fr); }
// //           .stats-wrap { grid-template-columns: repeat(2, 1fr); border-right: none; border-left: none; }
// //           .stat-box { border-bottom: 1px solid rgba(255,255,255,0.1); }
// //           .cases-grid { grid-template-columns: 1fr; }
// //           .case-card { border-right: none; border-bottom: 1px solid var(--td-gray-border); }
// //           .why-row { grid-template-columns: 1fr; gap: 40px; text-align: center; }
// //           .why-row:nth-child(even) .why-content { order: unset; }
// //           .ft-grid { grid-template-columns: 1fr 1fr; }
// //         }
// //         @media (max-width: 768px) {
// //           .nav-links { display: none; }
// //           .svc-grid { grid-template-columns: 1fr; }
// //           .trust-band { display: none; }
// //           .ft-grid { grid-template-columns: 1fr; }
// //           .ft-bottom { flex-direction: column; gap: 16px; align-items: center; }
// //         }
// //       `}</style>

// //       {/* ── TOPBAR ── */}
// //       <div className="topbar">
// //         <span>The connected IT platform for enterprise transformation.</span>
// //         <a href="#">Read the Report <ArrowRight size={12}/></a>
// //       </div>

// //       {/* ── NAV ── */}
// //       <nav className={`nav${scrolled ? " raised" : ""}`}>
// //         <div className="nav-row">
// //           <a href="#" className="logo">Sypra<span>.</span></a>
// //           <div className="nav-links">
// //             {NAV.map((item) => (
// //               <div
// //                 key={item.label}
// //                 className="nav-link-wrap"
// //                 onMouseEnter={() => openMenu(item.label)}
// //                 onMouseLeave={closeMenu}
// //               >
// //                 <button className={`nav-link-btn${openNav === item.label ? " active-nav" : ""}`}>
// //                   {item.label} <ChevronDown />
// //                 </button>
// //                 <div className={`nav-dropdown${openNav === item.label ? " open" : ""}`}>
// //                   {item.items.map((s) => (
// //                     <a href="#" key={s} className="nav-dd-link">{s}</a>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="nav-right">
// //             <a href="#" className="nav-link-btn" style={{ fontSize: 13, fontWeight: 700 }}>CONTACT</a>
// //             <a href="#" className="btn-primary">GET PRICING</a>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* ── HERO ── */}
// //       <section className="hero">
// //         <div className="hero-bg-accent" />
// //         <div className="hero-inner">
// //           <div>
// //             <div className="hero-eyebrow">Enterprise IT & Cloud</div>
// //             <h1 className="hero-h1">The Most Complete IT Platform for Enterprise AI.</h1>
// //             <p className="hero-p">
// //               Sypra Infotech delivers the flexibility to deploy anywhere, the analytics to predict anything, and the performance to drive the future of your business.
// //             </p>
// //             <div className="hero-btns">
// //               <a href="#" className="btn-primary">View Platform <ArrowRight /></a>
// //               <a href="#" className="btn-ghost-white">Why Sypra</a>
// //             </div>
// //           </div>
          
// //           <div className="hero-dash">
// //             <div className="dash-header">
// //               <span className="dash-title">Platform Operations</span>
// //               <span className="dash-status"><span className="dash-pulse"/> System Nominal</span>
// //             </div>
// //             <div className="dash-metric-grid">
// //               <div>
// //                 <div className="d-metric-val">99.9<span>%</span></div>
// //                 <div className="d-metric-lbl">Uptime SLA</div>
// //               </div>
// //               <div>
// //                 <div className="d-metric-val">1.2<span>M+</span></div>
// //                 <div className="d-metric-lbl">Daily Transactions</div>
// //               </div>
// //             </div>
// //             {[
// //               { n: "Cloud Migration Progress", p: 85 },
// //               { n: "AI Model Accuracy", p: 94 },
// //               { n: "Threat Mitigation", p: 100 }
// //             ].map(bar => (
// //               <div className="dash-bar-row" key={bar.n}>
// //                 <div className="d-bar-lbl"><span>{bar.n}</span><span>{bar.p}%</span></div>
// //                 <div className="d-bar-track"><div className="d-bar-fill" style={{ width: `${bar.p}%`, background: bar.p === 100 ? "#008A00" : "var(--td-blue)" }}/></div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── TRUST ── */}
// //       <div className="trust-band">
// //         <div className="trust-inner">
// //           <span className="trust-lbl">Trusted By Global Enterprises In:</span>
// //           <div className="trust-logos">
// //             {INDUSTRIES.map(i => <span key={i} className="trust-logo">{i}</span>)}
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── SERVICES ── */}
// //       <div className="section" style={{ background: "#F4F6F8" }}>
// //         <div className="wrap">
// //           <div className="sec-head">
// //             <span className="sec-eyebrow">Capabilities</span>
// //             <h2 className="sec-title">Architected for Scale. Engineered for Performance.</h2>
// //             <p className="sec-desc">Comprehensive technology solutions built on modern architectures. We handle the complexity so you can focus on driving business value.</p>
// //           </div>
// //           <div className="svc-grid">
// //             {SERVICES.map(s => (
// //               <div className="svc-card" key={s.id}>
// //                 <div className="svc-id">{s.id}</div>
// //                 <h3 className="svc-name">{s.name}</h3>
// //                 <p className="svc-detail">{s.detail}</p>
// //                 <a href="#" className="svc-link">Explore Solution <ArrowRight size={14}/></a>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── DARK SECTION (STATS & WHY) ── */}
// //       <div className="section-dark">
// //         <div className="wrap">
// //           <div className="sec-head" style={{ margin: "0 auto 80px", textAlign: "center" }}>
// //             <span className="sec-eyebrow">The Sypra Advantage</span>
// //             <h2 className="sec-title">Do More With Data.</h2>
// //             <p className="sec-desc" style={{ margin: "0 auto" }}>We don't just deliver code — we become a strategic extension of your enterprise. Every engagement is outcome-driven and backed by senior engineering leadership.</p>
// //           </div>
          
// //           <div>
// //             {WHYS.map(w => (
// //               <div className="why-row" key={w.n}>
// //                 <div className="why-content">
// //                   <div className="why-num">{w.n}</div>
// //                   <h3 className="why-h">{w.h}</h3>
// //                   <p className="why-p">{w.b}</p>
// //                 </div>
// //                 <div style={{ background: "rgba(255,255,255,0.05)", padding: 60, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
// //                   <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--td-orange)" strokeWidth="1" strokeLinecap="square"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="stats-wrap">
// //             {STATS.map(s => (
// //               <div className="stat-box" key={s.l}>
// //                 <div className="stat-v">{s.v}</div>
// //                 <div className="stat-l">{s.l}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── CASES ── */}
// //       <div className="section">
// //         <div className="wrap">
// //           <div className="sec-head">
// //             <span className="sec-eyebrow">Customer Outcomes</span>
// //             <h2 className="sec-title">Proven Results Across Industries.</h2>
// //           </div>
// //           <div className="cases-grid">
// //             {CASES.map(c => (
// //               <div className="case-card" key={c.title}>
// //                 <div className="case-sector">{c.sector}</div>
// //                 <div className="case-res">{c.result}</div>
// //                 <div className="case-res-lbl">{c.resultLabel}</div>
// //                 <h3 className="case-title">{c.title}</h3>
// //                 <p className="case-body">{c.body}</p>
// //                 <a href="#" className="svc-link" style={{ color: "var(--td-orange)" }}>Read Case Study <ArrowRight size={14}/></a>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── CTA ── */}
// //       <div className="cta-section">
// //         <div className="wrap">
// //           <h2 className="cta-h">Ready to Transform Your Enterprise?</h2>
// //           <div className="cta-btns">
// //             <a href="#" className="btn-primary" style={{ background: "#1A1A1A", color: "#FFF" }}>Contact Sales</a>
// //             <a href="#" className="btn-ghost-white">View Documentation</a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── FOOTER ── */}
// //       <footer>
// //         <div className="wrap">
// //           <div className="ft-grid">
// //             <div>
// //               <div className="ft-logo">Sypra<span>.</span></div>
// //               <p className="ft-desc">Sypra Infotech delivers the most complete connected IT platform for enterprise analytics, cloud operations, and digital transformation.</p>
// //             </div>
// //             {NAV.slice(0,4).map(col => (
// //               <div key={col.label}>
// //                 <div className="ft-h">{col.label}</div>
// //                 <div className="ft-links">
// //                   {col.items.map(i => <a href="#" key={i} className="ft-link">{i}</a>)}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="ft-bottom">
// //             <div>© 2026 Sypra Infotech. All rights reserved.</div>
// //             <div style={{ display: "flex", gap: 24 }}>
// //               <a href="#" className="ft-link">Privacy Policy</a>
// //               <a href="#" className="ft-link">Terms of Use</a>
// //               <a href="#" className="ft-link">Cookie Preferences</a>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }
// import { useState, useEffect, useRef } from "react";

// /* ─── DATA ──────────────────────────────────────────────────────────── */

// const NAV = [
//   { label: "Platform", items: ["Architecture", "Cloud", "AI & ML", "Security"] },
//   { label: "Solutions", items: ["By Industry", "By Role", "Transformations"] },
//   { label: "Customers", items: ["Case Studies", "Testimonials"] },
//   { label: "Insights", items: ["Blog", "Whitepapers", "Events"] },
//   { label: "Company", items: ["About Sypra", "Careers", "Partners"] },
// ];

// const LOGOS = [
//   { name: "TechStack", img: "TS" },
//   { name: "Elevance Health", img: "Elevance Health" },
//   { name: "HSBC", img: "HSBC" },
//   { name: "Vodafone", img: "vodafone" },
// ];

// const SERVICES = [
//   { id: "01", name: "Modern Web & App Platforms", detail: "Deliver connected, multi-platform experiences. We engineer custom progressive web apps and native mobile solutions using modern cloud-native architectures that scale infinitely." },
//   { id: "02", name: "Multi-Cloud Infrastructure", detail: "The flexibility to deploy anywhere. Full-cycle cloud migration, containerisation, and elastic infrastructure management optimized for cost, performance, and compliance." },
//   { id: "03", name: "AI & Intelligent Automation", detail: "Unleash the power of your data. We build predictive NLP pipelines, intelligent document processing, and automated workflows that generate measurable ROI." },
//   { id: "04", name: "Connected ERP & CRM", detail: "Unify your enterprise data. Seamless SAP, Salesforce, and custom ERP implementations that connect finance, supply chain, and customer touchpoints." },
// ];

// /* ─── ICONS ─────────────────────────────────────────────────────────── */
// const ChevronDown = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
// );
// const ArrowRight = () => (
//   <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
// );
// const SearchIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
// );
// const MenuIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
// );

// /* ─── APP ────────────────────────────────────────────────────────────── */
// export default function App() {
//   const [scrolled, setScrolled] = useState(false);
//   const [openNav, setOpenNav] = useState(null);
//   const navTimeout = useRef(null);

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", fn, { passive: true });
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   const openMenu = (label) => {
//     clearTimeout(navTimeout.current);
//     setOpenNav(label);
//   };
//   const closeMenu = () => {
//     navTimeout.current = setTimeout(() => setOpenNav(null), 150);
//   };

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif", background: "#FFFFFF", color: "#1A1A1A", overflowX: "hidden" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         html { font-size: 16px; scroll-behavior: smooth; }

//         :root {
//           /* Teradata Exact Palette Extraction */
//           --td-orange: #FF5A00;
//           --td-blue: #2B5DF6;
//           --td-blue-hover: #1D4ED8;
//           --td-text-main: #1A1A1A;
//           --td-text-muted: #4B5563;
//           --td-border: #E5E7EB;
//           --td-bg-light: #F9FAFB;
          
//           --max-w: 1200px;
//           --ease: cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* ── TOP NAV ── */
//         .nav {
//           position: sticky;
//           top: 0;
//           z-index: 999;
//           background: #FFF;
//           border-bottom: 1px solid var(--td-border);
//           transition: box-shadow 0.3s;
//         }
//         .nav.raised { box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
//         .nav-inner {
//           max-width: var(--max-w);
//           margin: 0 auto;
//           padding: 0 24px;
//           height: 72px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }
        
//         /* Logo */
//         .logo {
//           font-size: 24px;
//           font-weight: 700;
//           color: var(--td-orange);
//           text-decoration: none;
//           letter-spacing: -0.5px;
//           display: flex;
//           align-items: center;
//         }

//         /* Desktop Links */
//         .nav-links { display: flex; align-items: stretch; height: 100%; margin-left: 40px; flex: 1; }
//         .nav-item { position: relative; display: flex; align-items: stretch; }
//         .nav-btn {
//           background: none; border: none; padding: 0 16px;
//           font: 500 15px 'Inter', sans-serif;
//           color: var(--td-text-main);
//           cursor: pointer;
//           display: flex; align-items: center; gap: 6px;
//           transition: color 0.2s;
//         }
//         .nav-btn:hover { color: var(--td-blue); }
        
//         /* Nav Right Icons */
//         .nav-actions { display: flex; align-items: center; gap: 24px; color: var(--td-text-main); }
//         .icon-btn { background: none; border: none; cursor: pointer; color: inherit; display: flex; align-items: center; transition: color 0.2s; }
//         .icon-btn:hover { color: var(--td-blue); }

//         /* ── BUTTONS ── */
//         .btn {
//           display: inline-flex; align-items: center; gap: 8px;
//           padding: 14px 24px;
//           font-size: 15px; font-weight: 500;
//           border-radius: 8px;
//           text-decoration: none;
//           cursor: pointer;
//           transition: all 0.2s var(--ease);
//         }
//         .btn .arrow-icon { transition: transform 0.2s var(--ease); }
//         .btn:hover .arrow-icon { transform: translateX(4px); }

//         .btn-primary { background: var(--td-blue); color: #FFF; border: 1px solid var(--td-blue); }
//         .btn-primary:hover { background: var(--td-blue-hover); border-color: var(--td-blue-hover); }

//         .btn-outline { background: transparent; color: var(--td-text-main); border: 1px solid var(--td-text-main); }
//         .btn-outline:hover { background: var(--td-bg-light); }

//         .btn-text { color: var(--td-blue); font-weight: 500; padding: 0; background: none; border: none; font-size: 15px; }

//         /* ── HERO SECTION ── */
//         .hero {
//           padding: 80px 24px;
//           overflow: hidden;
//           background: #FFF;
//         }
//         .hero-inner {
//           max-width: var(--max-w);
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 64px;
//           align-items: center;
//         }
//         .hero-h1 {
//           font-size: clamp(40px, 4.5vw, 56px);
//           font-weight: 400; /* Lighter font weight for that airy feel */
//           line-height: 1.15;
//           letter-spacing: -1px;
//           color: var(--td-text-main);
//           margin-bottom: 24px;
//         }
//         .hero-p {
//           font-size: 20px;
//           line-height: 1.5;
//           color: var(--td-text-muted);
//           margin-bottom: 40px;
//           max-width: 500px;
//           font-weight: 300;
//         }
//         .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

//         /* Hero Image & Glow */
//         .hero-visual { position: relative; }
//         .hero-glow {
//           position: absolute;
//           top: 10%; left: 10%; right: 10%; bottom: 10%;
//           background: linear-gradient(135deg, rgba(43,93,246,0.4), rgba(168,85,247,0.3));
//           filter: blur(80px);
//           z-index: 0;
//           border-radius: 50%;
//         }
//         .hero-img {
//           position: relative;
//           z-index: 1;
//           width: 100%;
//           height: auto;
//           border-radius: 16px;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.1);
//           display: block;
//         }

//         /* ── LOGO BAR ── */
//         .logos-sec { padding: 40px 24px 80px; }
//         .logos-inner {
//           max-width: var(--max-w);
//           margin: 0 auto;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 32px;
//         }
//         .logo-item {
//           font-size: 28px;
//           font-weight: 600;
//           color: #9CA3AF; /* Grayscale logos */
//           letter-spacing: -1px;
//           display: flex; align-items: center; gap: 8px;
//         }
//         /* Emulating the specific logos from the screenshot visually */
//         .l-ts { font-style: italic; font-weight: 800; letter-spacing: -2px; }
//         .l-elevance { font-weight: 400; font-family: serif; letter-spacing: 0; font-size: 24px; }
//         .l-hsbc { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 26px; }
//         .l-hsbc-icon { width: 32px; height: 32px; background: #9CA3AF; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
//         .l-vodafone { display: flex; align-items: center; gap: 8px; font-weight: 400; font-size: 26px; }
//         .l-voda-icon { width: 32px; height: 32px; border: 4px solid #9CA3AF; border-radius: 50%; border-bottom-color: transparent; border-right-color: transparent; transform: rotate(-45deg); }

//         /* ── PROMO CARD (Like the bottom right event card) ── */
//         .promo-sec { padding: 0 24px 80px; }
//         .promo-inner { max-width: var(--max-w); margin: 0 auto; }
//         .promo-card {
//           display: flex;
//           border: 1px solid var(--td-border);
//           border-radius: 12px;
//           overflow: hidden;
//           background: #FFF;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.03);
//           transition: box-shadow 0.3s var(--ease);
//         }
//         .promo-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
//         .promo-img-wrap { width: 40%; background: #F3F4F6; position: relative; }
//         .promo-img { width: 100%; height: 100%; object-fit: cover; }
//         .promo-content { padding: 48px; display: flex; flex-direction: column; justify-content: center; flex: 1; }
//         .promo-date { font-size: 14px; font-weight: 500; color: var(--td-text-muted); margin-bottom: 12px; }
//         .promo-title { font-size: 24px; font-weight: 500; color: var(--td-text-main); margin-bottom: 32px; line-height: 1.3; }
//         .promo-link { text-decoration: none; color: var(--td-blue); font-weight: 500; display: inline-flex; align-items: center; gap: 8px; }
//         .promo-link .arrow-icon { transition: transform 0.2s; }
//         .promo-card:hover .promo-link .arrow-icon { transform: translateX(4px); }

//         /* ── CAPABILITIES GRID (Cleaned up, no blocky borders) ── */
//         .capabilities { padding: 80px 24px; background: var(--td-bg-light); }
//         .cap-inner { max-width: var(--max-w); margin: 0 auto; }
//         .cap-header { margin-bottom: 48px; max-width: 600px; }
//         .cap-eyebrow { font-size: 13px; font-weight: 600; color: var(--td-orange); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; display: block; }
//         .cap-h2 { font-size: 36px; font-weight: 400; color: var(--td-text-main); line-height: 1.2; letter-spacing: -0.5px; }
        
//         .cap-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
//         .cap-card {
//           background: #FFF;
//           padding: 40px;
//           border-radius: 12px;
//           border: 1px solid var(--td-border);
//           transition: box-shadow 0.3s, transform 0.3s;
//         }
//         .cap-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 16px 40px rgba(0,0,0,0.06);
//         }
//         .cap-id { font-size: 14px; font-weight: 500; color: #D1D5DB; margin-bottom: 16px; }
//         .cap-title { font-size: 20px; font-weight: 500; color: var(--td-text-main); margin-bottom: 16px; }
//         .cap-desc { font-size: 15px; color: var(--td-text-muted); line-height: 1.6; margin-bottom: 24px; font-weight: 300; }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 968px) {
//           .nav-links { display: none; }
//           .hero-inner { grid-template-columns: 1fr; gap: 48px; }
//           .hero-h1 { text-align: center; }
//           .hero-p { text-align: center; margin: 0 auto 32px; }
//           .hero-btns { justify-content: center; }
//           .promo-card { flex-direction: column; }
//           .promo-img-wrap { width: 100%; height: 200px; }
//           .cap-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       {/* ── TOP NAV ── */}
//       <nav className={`nav${scrolled ? " raised" : ""}`}>
//         <div className="nav-inner">
//           {/* Logo (Orange like Teradata's text logo) */}
//           <a href="#" className="logo">sypra.</a>

//           {/* Links */}
//           <div className="nav-links">
//             {NAV.map((item) => (
//               <div
//                 key={item.label}
//                 className="nav-item"
//                 onMouseEnter={() => openMenu(item.label)}
//                 onMouseLeave={closeMenu}
//               >
//                 <button className="nav-btn">{item.label}</button>
//               </div>
//             ))}
//           </div>

//           {/* Right Actions */}
//           <div className="nav-actions">
//             <button className="icon-btn"><SearchIcon /></button>
//             <button className="icon-btn" style={{ display: "block" /* usually hide on desktop, but keeping to match screenshot */ }}><MenuIcon /></button>
//           </div>
//         </div>
//       </nav>

//       {/* ── HERO SECTION ── */}
//       <section className="hero">
//         <div className="hero-inner">
//           <div>
//             <h1 className="hero-h1">Turn intelligence into outcomes with AI</h1>
//             <p className="hero-p">
//               From real-time insight to real-world action—automated by Sypra's autonomous IT and Knowledge Platform.
//             </p>
//             <div className="hero-btns">
//               <a href="#" className="btn btn-primary">Talk to an expert <ArrowRight /></a>
//               <a href="#" className="btn btn-outline">Try for free <ArrowRight /></a>
//             </div>
//           </div>
          
//           <div className="hero-visual">
//             <div className="hero-glow"></div>
//             {/* Using a high-quality Unsplash image to mimic the guy looking at the glowing dashboard */}
//             <img 
//               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
//               alt="Data Dashboard Analysis" 
//               className="hero-img" 
//             />
//           </div>
//         </div>
//       </section>

//       {/* ── LOGOS ROW ── */}
//       <section className="logos-sec">
//         <div className="logos-inner">
//           <div className="logo-item l-ts">TS</div>
//           <div className="logo-item l-elevance">Elevance<br/><span style={{fontSize: 14}}>Health</span></div>
//           <div className="logo-item l-hsbc"><div className="l-hsbc-icon"></div> HSBC</div>
//           <div className="logo-item l-vodafone"><div className="l-voda-icon"></div> vodafone</div>
//         </div>
//       </section>

//       {/* ── EVENT / PROMO CARD ── */}
//       <section className="promo-sec">
//         <div className="promo-inner">
//           <div className="promo-card">
//             <div className="promo-img-wrap">
//               {/* Abstract orange/blue graphic replacement */}
//               <img 
//                 src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
//                 alt="Abstract Pattern" 
//                 className="promo-img" 
//               />
//             </div>
//             <div className="promo-content">
//               <div className="promo-date">March 19, 2026</div>
//               <h3 className="promo-title">Accelerate Agentic AI With Sypra Cloud and Agent Skills</h3>
//               <div>
//                 <a href="#" className="promo-link">Register now <ArrowRight /></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── CAPABILITIES (Refined to match the clean aesthetic) ── */}
//       <section className="capabilities">
//         <div className="cap-inner">
//           <div className="cap-header">
//             <span className="cap-eyebrow">Capabilities</span>
//             <h2 className="cap-h2">Architected for Scale. Engineered for Performance.</h2>
//           </div>
//           <div className="cap-grid">
//             {SERVICES.map((s) => (
//               <div className="cap-card" key={s.id}>
//                 <div className="cap-id">{s.id}</div>
//                 <h3 className="cap-title">{s.name}</h3>
//                 <p className="cap-desc">{s.detail}</p>
//                 <a href="#" className="btn-text btn">Explore Solution <ArrowRight /></a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
import { useState, useEffect, useRef } from "react";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const NAV = [
  { label: "Capabilities", items: ["Custom Software Engineering", "Cloud & DevOps", "Data & Applied AI", "Enterprise Integration", "Security & Auditing"] },
  { label: "Our Approach", items: ["Delivery Methodology", "Managed Operations", "Team Augmentation"] },
  { label: "Industries", items: ["Financial Services", "Healthcare", "Education", "Logistics & Supply Chain"] },
  { label: "Company", items: ["About Sypra", "Leadership", "Careers", "Contact"] },
];

const LOGOS = [
  { name: "SAP Partner", img: "SAP" },
  { name: "AWS Advanced", img: "AWS" },
  { name: "Microsoft Azure", img: "Azure" },
  { name: "Google Cloud", img: "GCP" },
  { name: "Oracle Certified", img: "Oracle" },
];

const SERVICES = [
  { id: "01", name: "Custom Software Engineering", detail: "We build core business applications, progressive web platforms, and mobile solutions using modern stacks like React, Node.js, and scalable microservices." },
  { id: "02", name: "Cloud & Infrastructure Operations", detail: "Seamless migration, container orchestration, and resilient infrastructure management across AWS, Azure, and Google Cloud." },
  { id: "03", name: "Data & Applied AI", detail: "Practical machine learning models, predictive pipelines, and automated workflows designed to solve specific operational bottlenecks." },
  { id: "04", name: "Enterprise System Integration", detail: "Unifying fragmented data. We handle complex ERP and third-party API integrations (SAP, Oracle, Workday) to create a single source of truth for your organization." },
];

const APPROACH = [
  { n: "01", h: "Engineering led, not sales led.", b: "You speak directly with senior architects who understand the technical reality of your business problem." },
  { n: "02", h: "No black boxes.", b: "Complete transparency through daily standups, live dashboards, and regular code reviews. You always own your IP." },
  { n: "03", h: "Priced by outcomes.", b: "We don't bill for hours spent staring at screens. We structure engagements around fixed deliverables and measurable business impact." },
  { n: "04", h: "Day-two support standard.", b: "Launch is just the beginning. Our contracts include proactive monitoring, SLA-backed uptime, and ongoing iterative improvements." },
];

const STATS = [
  { v: "10+", l: "Years in business" },
  { v: "300+", l: "Enterprise deployments" },
  { v: "99.9%", l: "SLA uptime guaranteed" },
  { v: "98%", l: "Client retention rate" },
];

/* ─── ICONS & LOGO ──────────────────────────────────────────────────── */

// Brand New Professional Logo Component
const SypraLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Modern geometric data/stack icon */}
      <rect x="4" y="16" width="10" height="12" rx="2" fill="#FF5A00" />
      <rect x="18" y="4" width="10" height="24" rx="2" fill="#2B5DF6" />
      <rect x="4" y="4" width="10" height="8" rx="2" fill="#E5E7EB" />
    </svg>
    <span style={{ fontSize: "24px", fontWeight: "700", color: "#111827", letterSpacing: "-0.5px" }}>
      Sypra<span style={{ color: "#2B5DF6" }}>.</span>
    </span>
  </div>
);

const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
);
const MenuIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
);
const ArrowRight = () => (
  <svg className="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);

/* ─── APP ────────────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(null);
  const navTimeout = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openMenu = (label) => {
    clearTimeout(navTimeout.current);
    setOpenNav(label);
  };
  const closeMenu = () => {
    navTimeout.current = setTimeout(() => setOpenNav(null), 150);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#FFFFFF", color: "#111827", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { font-size: 16px; scroll-behavior: smooth; }

        :root {
          /* Highly refined enterprise palette */
          --td-orange: #FF5A00;
          --td-blue: #2B5DF6;
          --td-blue-hover: #1D4ED8;
          --td-text-main: #111827;
          --td-text-muted: #4B5563;
          --td-border: #E5E7EB;
          --td-bg-light: #F9FAFB;
          
          /* Full expanse layout */
          --max-w: 1600px;
          --px-desk: clamp(32px, 6vw, 100px);
          --ease: cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* ── TOP NAV ── */
        .nav {
          position: sticky; top: 0; z-index: 999;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--td-border);
          transition: box-shadow 0.3s ease;
        }
        .nav.raised { box-shadow: 0 4px 32px rgba(0,0,0,0.04); }
        .nav-inner {
          max-width: var(--max-w); margin: 0 auto;
          padding: 0 var(--px-desk);
          height: 88px;
          display: flex; align-items: center; justify-content: space-between;
        }

        .nav-links { display: flex; align-items: stretch; height: 100%; margin-left: 64px; flex: 1; }
        .nav-item { position: relative; display: flex; align-items: stretch; }
        .nav-btn {
          background: none; border: none; padding: 0 20px;
          font: 500 15px 'Inter', sans-serif; color: var(--td-text-main);
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          transition: color 0.2s;
        }
        .nav-btn:hover { color: var(--td-blue); }
        
        .nav-dropdown {
          position: absolute; top: 100%; left: 0; min-width: 280px;
          background: #FFF; border: 1px solid var(--td-border);
          border-radius: 0 0 12px 12px; padding: 16px 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          opacity: 0; pointer-events: none; transform: translateY(12px);
          transition: all 0.25s var(--ease);
        }
        .nav-item:hover .nav-dropdown, .nav-dropdown.open {
          opacity: 1; pointer-events: all; transform: translateY(0);
        }
        .nav-dd-link {
          display: block; padding: 12px 32px; font-size: 15px; font-weight: 400;
          color: var(--td-text-main); text-decoration: none; transition: background 0.2s, color 0.2s;
        }
        .nav-dd-link:hover { background: var(--td-bg-light); color: var(--td-blue); }

        .nav-actions { display: flex; align-items: center; gap: 32px; color: var(--td-text-main); }
        .icon-btn { background: none; border: none; cursor: pointer; color: inherit; transition: color 0.2s; }
        .icon-btn:hover { color: var(--td-blue); }

        /* ── BUTTONS (Perfect Pills) ── */
        .btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 36px;
          font-size: 16px; font-weight: 500;
          border-radius: 999px; /* Perfect pill */
          text-decoration: none; cursor: pointer;
          transition: all 0.25s var(--ease);
        }
        .btn .arrow-icon { transition: transform 0.2s var(--ease); }
        .btn:hover .arrow-icon { transform: translateX(6px); }

        .btn-primary { background: var(--td-blue); color: #FFF; border: 1px solid var(--td-blue); }
        .btn-primary:hover { background: var(--td-blue-hover); border-color: var(--td-blue-hover); box-shadow: 0 8px 24px rgba(43,93,246,0.25); }

        .btn-outline { background: transparent; color: var(--td-text-main); border: 1px solid var(--td-border); }
        .btn-outline:hover { background: var(--td-bg-light); border-color: var(--td-text-main); }

        .btn-text { color: var(--td-blue); font-weight: 500; padding: 0; background: none; border: none; font-size: 16px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
        .btn-text .arrow-icon { transition: transform 0.2s; }
        .btn-text:hover .arrow-icon { transform: translateX(4px); }

        /* ── SECTIONS ── */
        .section { padding: 140px var(--px-desk); }
        .section-bg { background: var(--td-bg-light); padding: 140px var(--px-desk); border-top: 1px solid var(--td-border); border-bottom: 1px solid var(--td-border); }
        .inner { max-width: var(--max-w); margin: 0 auto; }
        
        .sec-eyebrow { font-size: 14px; font-weight: 600; color: var(--td-orange); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 24px; display: block; }
        .sec-h2 { font-size: clamp(40px, 4vw, 56px); font-weight: 300; color: var(--td-text-main); line-height: 1.15; letter-spacing: -1px; margin-bottom: 32px; max-width: 900px; }
        .sec-p { font-size: clamp(18px, 1.5vw, 22px); color: var(--td-text-muted); line-height: 1.6; font-weight: 300; max-width: 700px; margin-bottom: 64px; }

        /* ── HERO ── */
        .hero { padding: 120px var(--px-desk) 160px; overflow: hidden; background: #FFF; position: relative; }
        .hero-inner { max-width: var(--max-w); margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 8vw; align-items: center; position: relative; z-index: 2; }
        .hero-h1 { font-size: clamp(48px, 5.5vw, 80px); font-weight: 300; line-height: 1.05; letter-spacing: -2px; color: var(--td-text-main); margin-bottom: 32px; }
        .hero-p { font-size: clamp(20px, 1.8vw, 26px); line-height: 1.5; color: var(--td-text-muted); margin-bottom: 56px; max-width: 600px; font-weight: 300; }
        .hero-btns { display: flex; gap: 20px; flex-wrap: wrap; }

        /* Ambient Hero Glow */
        .ambient-glow {
          position: absolute; top: -10%; right: -5%; width: 60vw; height: 60vw;
          background: radial-gradient(circle, rgba(43,93,246,0.04) 0%, rgba(255,255,255,0) 70%);
          z-index: 0; pointer-events: none;
        }

        .hero-visual { position: relative; width: 100%; }
        .hero-img {
          position: relative; z-index: 1; width: 100%; height: auto;
          border-radius: 24px; box-shadow: 0 32px 64px rgba(0,0,0,0.08); display: block;
        }

        /* ── LOGO BAR ── */
        .logos-sec { padding: 0 var(--px-desk) 100px; }
        .logos-inner { max-width: var(--max-w); margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 48px; opacity: 0.6; }
        .logo-item { font-size: clamp(18px, 1.5vw, 24px); font-weight: 600; color: var(--td-text-main); letter-spacing: -0.5px; }

        /* ── PROMO CARD ── */
        .promo-card { 
          display: flex; border: 1px solid var(--td-border); border-radius: 24px; overflow: hidden; 
          background: #FFF; box-shadow: 0 12px 32px rgba(0,0,0,0.03); transition: box-shadow 0.4s var(--ease), transform 0.4s var(--ease); 
          margin-bottom: 100px; min-height: 480px; 
        }
        .promo-card:hover { box-shadow: 0 24px 64px rgba(0,0,0,0.08); transform: translateY(-4px); }
        .promo-img-wrap { width: 45%; background: var(--td-bg-light); position: relative; }
        .promo-img { width: 100%; height: 100%; object-fit: cover; }
        .promo-content { padding: clamp(48px, 6vw, 80px); display: flex; flex-direction: column; justify-content: center; flex: 1; }
        .promo-date { font-size: 14px; font-weight: 600; color: var(--td-text-muted); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1.5px; }
        .promo-title { font-size: clamp(28px, 3vw, 40px); font-weight: 300; color: var(--td-text-main); margin-bottom: 40px; line-height: 1.25; letter-spacing: -1px; }

        /* ── EXPANSIVE CARDS ── */
        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(32px, 4vw, 64px); }
        
        .card {
          background: #FFF; padding: clamp(48px, 5vw, 64px);
          border-radius: 24px; border: 1px solid var(--td-border);
          transition: box-shadow 0.4s var(--ease), transform 0.4s var(--ease);
          display: flex; flex-direction: column;
        }
        .card:hover { transform: translateY(-8px); box-shadow: 0 24px 64px rgba(0,0,0,0.06); }
        
        .card-id { font-size: 15px; font-weight: 600; color: #D1D5DB; margin-bottom: 24px; }
        .card-title { font-size: clamp(24px, 2vw, 32px); font-weight: 400; color: var(--td-text-main); margin-bottom: 24px; line-height: 1.3; letter-spacing: -0.5px; }
        .card-desc { font-size: clamp(16px, 1.2vw, 18px); color: var(--td-text-muted); line-height: 1.6; margin-bottom: 40px; font-weight: 300; flex: 1; }

        /* ── STATS ── */
        .stats-wrap { display: grid; grid-template-columns: repeat(4, 1fr); gap: 48px; margin-top: 80px; }
        .stat-item { padding: 48px 0; border-top: 1px solid var(--td-border); }
        .stat-val { font-size: clamp(48px, 5vw, 72px); font-weight: 300; color: var(--td-blue); line-height: 1; margin-bottom: 24px; letter-spacing: -2px; }
        .stat-lbl { font-size: 16px; font-weight: 500; color: var(--td-text-main); }

        /* ── FOOTER ── */
        .footer { background: #FFF; border-top: 1px solid var(--td-border); padding: 120px var(--px-desk) 48px; }
        .ft-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 6vw; margin-bottom: 80px; }
        .ft-desc { font-size: 16px; color: var(--td-text-muted); line-height: 1.6; max-width: 360px; font-weight: 300; margin-top: 24px; }
        .ft-h { font-size: 14px; font-weight: 600; color: var(--td-text-main); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 32px; }
        .ft-links { display: flex; flex-direction: column; gap: 20px; }
        .ft-link { color: var(--td-text-muted); text-decoration: none; font-size: 16px; font-weight: 400; transition: color 0.2s; }
        .ft-link:hover { color: var(--td-blue); }
        .ft-bottom { border-top: 1px solid var(--td-border); padding-top: 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; font-size: 15px; color: var(--td-text-muted); font-weight: 300; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .nav-links { display: none; }
          .hero-inner { grid-template-columns: 1fr; gap: 64px; text-align: center; }
          .hero-p { margin: 0 auto 56px; }
          .hero-btns { justify-content: center; }
          .promo-card { flex-direction: column; }
          .promo-img-wrap { width: 100%; height: 320px; }
          .stats-wrap { grid-template-columns: repeat(2, 1fr); }
          .ft-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .section, .section-bg, .hero { padding: 80px var(--px-desk); }
          .grid-2, .stats-wrap, .ft-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      {/* ── TOP NAV ── */}
      <nav className={`nav${scrolled ? " raised" : ""}`}>
        <div className="nav-inner">
          <a href="#" style={{ textDecoration: 'none' }}>
            <SypraLogo />
          </a>
          <div className="nav-links">
            {NAV.map((item) => (
              <div key={item.label} className="nav-item" onMouseEnter={() => openMenu(item.label)} onMouseLeave={closeMenu}>
                <button className="nav-btn">{item.label}</button>
                <div className={`nav-dropdown${openNav === item.label ? " open" : ""}`}>
                  {item.items.map((sub) => (
                    <a href="#" key={sub} className="nav-dd-link">{sub}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="nav-actions">
            <button className="icon-btn"><SearchIcon /></button>
            <button className="icon-btn" style={{ display: "block" }}><MenuIcon /></button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="ambient-glow" />
        <div className="hero-inner">
          <div>
            <h1 className="hero-h1">Engineering the platforms that run your business.</h1>
            <p className="hero-p">
              From resilient cloud infrastructure to custom enterprise applications. We build the technology foundations that enable global scale.
            </p>
            <div className="hero-btns">
              <a href="#" className="btn btn-primary">Talk to an architect <ArrowRight /></a>
              <a href="#" className="btn btn-outline">Explore our work</a>
            </div>
          </div>
          <div className="hero-visual">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
              alt="Dashboard Analysis" 
              className="hero-img" 
            />
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="logos-sec">
        <div className="logos-inner">
          {LOGOS.map((l) => (
            <div className="logo-item" key={l.name}>{l.name}</div>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="section-bg">
        <div className="inner">
          <span className="sec-eyebrow">Technical Capabilities</span>
          <h2 className="sec-h2">Architected for reality. Built for scale.</h2>
          <p className="sec-p">We engineer reliable, high-performance systems so your internal teams can focus on driving business strategy, not managing technical debt.</p>
          
          <div className="grid-2">
            {SERVICES.map((s) => (
              <div className="card" key={s.id}>
                <div className="card-id">{s.id}</div>
                <h3 className="card-title">{s.name}</h3>
                <p className="card-desc">{s.detail}</p>
                <div><a href="#" className="btn-text">View methodology <ArrowRight /></a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMO & STATS ── */}
      <section className="section">
        <div className="inner">
          <div className="promo-card">
            <div className="promo-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80" 
                alt="Server Infrastructure" 
                className="promo-img" 
              />
            </div>
            <div className="promo-content">
              <div className="promo-date">Case Study Insight</div>
              <h3 className="promo-title">How we migrated a global logistics provider to a zero-downtime microservices architecture.</h3>
              <div><a href="#" className="btn btn-outline">Read the full breakdown <ArrowRight /></a></div>
            </div>
          </div>

          <span className="sec-eyebrow" style={{ marginTop: "120px" }}>Track Record</span>
          <h2 className="sec-h2">Proven at the enterprise level.</h2>
          <div className="stats-wrap">
            {STATS.map((s) => (
              <div className="stat-item" key={s.l}>
                <div className="stat-val">{s.v}</div>
                <div className="stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="section-bg">
        <div className="inner">
          <span className="sec-eyebrow">Our Methodology</span>
          <h2 className="sec-h2">A better way to build software.</h2>
          <p className="sec-p">We operate as a seamless extension of your organization, prioritizing clear communication, rigorous testing, and measurable business impact.</p>
          
          <div className="grid-2">
            {APPROACH.map((w) => (
              <div className="card" key={w.n}>
                <div className="card-id" style={{ color: "var(--td-orange)" }}>{w.n}</div>
                <h3 className="card-title">{w.h}</h3>
                <p className="card-desc" style={{ marginBottom: 0 }}>{w.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section" style={{ textAlign: "center", paddingBottom: "160px" }}>
        <div className="inner">
          <h2 className="sec-h2" style={{ margin: "0 auto 32px", maxWidth: 900 }}>Ready to upgrade your technology foundation?</h2>
          <p className="sec-p" style={{ margin: "0 auto 64px" }}>Schedule a technical consultation with our senior architects. No sales pressure, just a clear discussion about your infrastructure needs.</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" className="btn btn-primary">Contact our team <ArrowRight /></a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="inner">
          <div className="ft-grid">
            <div>
              <a href="#" style={{ textDecoration: 'none' }}><SypraLogo /></a>
              <p className="ft-desc">Sypra partners with ambitious organizations to design, build, and operate resilient technology solutions at global scale.</p>
            </div>
            <div>
              <div className="ft-h">Capabilities</div>
              <div className="ft-links">
                {SERVICES.map(s => <a href="#" key={s.id} className="ft-link">{s.name}</a>)}
              </div>
            </div>
            <div>
              <div className="ft-h">Organization</div>
              <div className="ft-links">
                <a href="#" className="ft-link">Our Approach</a>
                <a href="#" className="ft-link">Executive Team</a>
                <a href="#" className="ft-link">Open Positions</a>
                <a href="#" className="ft-link">Contact Us</a>
              </div>
            </div>
            <div>
              <div className="ft-h">Insights</div>
              <div className="ft-links">
                <a href="#" className="ft-link">Technical Blog</a>
                <a href="#" className="ft-link">Case Studies</a>
                <a href="#" className="ft-link">Architecture Patterns</a>
                <a href="#" className="ft-link">System Status</a>
              </div>
            </div>
          </div>
          
          <div className="ft-bottom">
            <div>© 2026 Sypra Infotech. All rights reserved.</div>
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              <a href="#" className="ft-link">Privacy Policy</a>
              <a href="#" className="ft-link">Terms of Service</a>
              <a href="#" className="ft-link">Security Disclosures</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}