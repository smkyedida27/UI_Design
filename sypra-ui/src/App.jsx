// import { useState, useEffect, useRef } from "react";

// /* ── DATA ─────────────────────────────────────────────────────── */
// const NAV = [
//   { label: "Capabilities", items: ["Custom Software Engineering", "Cloud & DevOps", "Data & Applied AI", "Enterprise Integration", "Security & Auditing"] },
//   { label: "Features",     items: ["Delivery Methodology", "Managed Operations", "Team Augmentation", "SLA Guarantees"] },
//   { label: "Pricing",      items: ["Startup Plan", "Growth Plan", "Enterprise Plan", "Custom Engagement"] },
//   { label: "Resources",    items: ["Technical Blog", "Case Studies", "Architecture Patterns", "System Status"] },
// ];

// const SERVICES = [
//   { id:"01", name:"Custom Software Engineering", sub:"From web apps to mobile platforms", detail:"We build core business applications, progressive web platforms, and mobile solutions using modern stacks like React, Node.js, and scalable microservices.", color:"#EBF3FF" },
//   { id:"02", name:"Cloud & Infrastructure",       sub:"AWS, Azure, Google Cloud",          detail:"Seamless migration, container orchestration, and resilient infrastructure management across all major cloud providers.", color:"#FFF3EB" },
//   { id:"03", name:"Data & Applied AI",            sub:"ML pipelines & automation",          detail:"Practical machine learning models, predictive pipelines, and automated workflows designed to solve specific operational bottlenecks.", color:"#EBFFF0" },
//   { id:"04", name:"Enterprise Integration",       sub:"SAP, Oracle, Workday",               detail:"Unifying fragmented data. We handle complex ERP and third-party API integrations to create a single source of truth.", color:"#F3EBFF" },
// ];

// const APPROACH = [
//   { n:"01", h:"Engineering led, not sales led.",  b:"You speak directly with senior architects who understand the technical reality of your business problem." },
//   { n:"02", h:"No black boxes.",                   b:"Complete transparency through daily standups, live dashboards, and regular code reviews. You always own your IP." },
//   { n:"03", h:"Priced by outcomes.",               b:"We don't bill for hours spent staring at screens. We structure engagements around fixed deliverables and measurable business impact." },
//   { n:"04", h:"Day-two support standard.",          b:"Launch is just the beginning. Our contracts include proactive monitoring, SLA-backed uptime, and ongoing iterative improvements." },
// ];

// const STATS = [
//   { v:"10+",   l:"Years in business" },
//   { v:"300+",  l:"Enterprise deployments" },
//   { v:"99.9%", l:"SLA uptime guaranteed" },
//   { v:"98%",   l:"Client retention rate" },
// ];

// const LOGOS = ["SAP Partner","AWS Advanced","Microsoft Azure","Google Cloud","Oracle Certified","Kubernetes","Terraform"];

// const FOOTER_COLS = [
//   { h:"Capabilities", links:["Custom Software Eng.","Cloud & Infrastructure","Data & Applied AI","Enterprise Integration","Security & Auditing"] },
//   { h:"Company",      links:["About Sypra","Leadership","Careers","Press","Contact Us"] },
//   { h:"Resources",    links:["Technical Blog","Case Studies","Architecture Guide","System Status","Security Docs"] },
//   { h:"Legal",        links:["Privacy Policy","Terms of Service","Cookie Policy","Security Disclosures","Accessibility"] },
// ];

// /* ── PATREON P LOGO (exact style) ────────────────────────────── */
// function SypraLogo({ dark = false }) {
//   return (
//     <div style={{ display:"flex", alignItems:"center", gap:8, textDecoration:"none", cursor:"pointer" }}>
//       {/* "P"-style blob logo like Patreon */}
//       <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
//         <circle cx="17" cy="17" r="17" fill={dark ? "#fff" : "#0A0A0A"} />
//         <text x="17" y="23" textAnchor="middle" fontSize="18" fontWeight="900"
//           fill={dark ? "#0A0A0A" : "#fff"}
//           fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
//           style={{ userSelect:"none" }}>S</text>
//       </svg>
//       <span style={{
//         fontSize:20, fontWeight:700, letterSpacing:"-0.5px",
//         color: dark ? "#fff" : "#0A0A0A",
//         fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
//       }}>Sypra</span>
//     </div>
//   );
// }

// /* ── PHONE MOCKUP (shows dashboard card) ────────────────────── */
// function PhoneMockup() {
//   return (
//     <div style={{
//       width:320, background:"#fff", borderRadius:32,
//       boxShadow:"0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
//       overflow:"hidden", flexShrink:0,
//     }}>
//       {/* Phone top bar */}
//       <div style={{ background:"#0A0A0A", padding:"18px 20px 14px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//         <div style={{ fontSize:14, fontWeight:600, color:"#fff" }}>Dashboard</div>
//         <div style={{ display:"flex", gap:6 }}>
//           {["#555","#555","#888"].map((c,i)=><div key={i} style={{ width:8,height:8,borderRadius:"50%",background:c }}/>)}
//         </div>
//       </div>
//       {/* Status card */}
//       <div style={{ background:"#0A0A0A", padding:"0 20px 20px" }}>
//         <div style={{ fontSize:12, color:"#22C55E", fontWeight:600, marginBottom:4 }}>● Live deployments</div>
//         <div style={{ fontSize:34, fontWeight:800, color:"#fff", letterSpacing:"-1px" }}>$16,414</div>
//         <div style={{ fontSize:12, color:"rgba(255,255,255,.4)", marginTop:2 }}>Monthly infrastructure savings</div>
//         {/* Mini chart */}
//         <svg width="100%" height="60" viewBox="0 0 280 60" style={{ marginTop:12 }}>
//           <polyline points="0,50 40,40 80,42 120,30 160,28 200,18 240,14 280,8"
//             fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="3,3"/>
//           <polyline points="0,50 40,40 80,42 120,30 160,28 200,18 240,14 280,8"
//             fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//           <circle cx="280" cy="8" r="4" fill="#fff"/>
//         </svg>
//       </div>
//       {/* Deployments list */}
//       <div style={{ padding:"0 0 4px" }}>
//         {[
//           { label:"Q4 2023 · Enterprise", val:"$42,800", up:true },
//           { label:"Q3 2023 · Mid-Market",  val:"$36,200", up:true },
//           { label:"Q2 2023 · Startup",     val:"$28,100", up:false },
//           { label:"Q1 2023 · Enterprise",  val:"$31,600", up:true },
//         ].map((row,i)=>(
//           <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"13px 20px", borderBottom:"1px solid #F2F2F2" }}>
//             <div>
//               <div style={{ fontSize:13, fontWeight:500, color:"#0A0A0A" }}>{row.label}</div>
//               <div style={{ fontSize:11, color:"#888", marginTop:1 }}>Completed</div>
//             </div>
//             <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//               <span style={{ fontSize:14, fontWeight:700, color:"#0A0A0A" }}>{row.val}</span>
//               <span style={{ fontSize:12, color: row.up ? "#22C55E":"#EF4444" }}>{row.up?"↑":"↓"}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ── CHEVRON ─────────────────────────────────────────────────── */
// const Chev = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
// );
// const ArrR = ({s=16}) => (
//   <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
// );
// const MenuIco = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
// );
// const XIco = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
// );

// /* ── APP ─────────────────────────────────────────────────────── */
// export default function App() {
//   const [scrolled, setScrolled]   = useState(false);
//   const [openDd,   setOpenDd]     = useState(null);
//   const [mob,      setMob]        = useState(false);
//   const [vis,      setVis]        = useState({});
//   const [activeNav, setActiveNav] = useState(null);
//   const ddTimer = useRef(null);
//   const refs    = useRef({});

//   useEffect(()=>{
//     const fn = ()=>setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll",fn,{passive:true});
//     return ()=>window.removeEventListener("scroll",fn);
//   },[]);

//   useEffect(()=>{
//     const ob = new IntersectionObserver(entries=>{
//       entries.forEach(e=>{ if(e.isIntersecting) setVis(v=>({...v,[e.target.dataset.k]:true})); });
//     },{threshold:0.1});
//     Object.values(refs.current).forEach(el=>el&&ob.observe(el));
//     return ()=>ob.disconnect();
//   },[]);

//   const r = k => el => { if(el){ refs.current[k]=el; el.dataset.k=k; } };
//   const a = (k,d=0,axis="Y") => ({
//     opacity: vis[k]?1:0,
//     transform: vis[k]?"translate(0,0)":`translate${axis}(${axis==="Y"?"28px":"−20px"})`,
//     transition:`opacity .65s cubic-bezier(.22,1,.36,1) ${d}s, transform .65s cubic-bezier(.22,1,.36,1) ${d}s`,
//   });

//   const hov = l => { clearTimeout(ddTimer.current); setOpenDd(l); setActiveNav(l); };
//   const lv  = ()  => { ddTimer.current = setTimeout(()=>{ setOpenDd(null); setActiveNav(null); }, 180); };

//   // ── RENDER
//   return (
//     <div style={{ fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif", background:"#fff", color:"#0A0A0A", overflowX:"hidden" }}>
//       <style>{`
//         *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
//         html{scroll-behavior:smooth}
//         :root{
//           --black:#0A0A0A; --blue-hero:#B8CDE8; --blue-mid:#A0BCE0;
//           --border:#E5E5E5; --muted:#767676; --px:clamp(18px,4.5vw,72px);
//           --max:1440px; --ease:cubic-bezier(.22,1,.36,1);
//         }
//         ::-webkit-scrollbar{width:5px;background:#fff}
//         ::-webkit-scrollbar-thumb{background:#ddd;border-radius:99px}

//         /* NAV */
//         .nav{
//           position:sticky;top:0;z-index:1000;
//           background:#fff;
//           border-bottom:1px solid transparent;
//           transition:border-color .25s, box-shadow .25s;
//         }
//         .nav.up{ border-bottom-color:var(--border); box-shadow:0 1px 0 rgba(0,0,0,.04); }
//         .ni{ max-width:var(--max);margin:0 auto;padding:0 var(--px);height:66px;display:flex;align-items:center;gap:0 }

//         /* Nav links */
//         .nl{ display:flex;align-items:stretch;height:100%;margin-right:auto;margin-left:40px }
//         .ni-item{ position:relative;display:flex;align-items:stretch }
//         .nb{
//           background:none;border:none;padding:0 14px;
//           font-size:15px;font-weight:500;color:var(--muted);
//           cursor:pointer;display:flex;align-items:center;gap:5px;
//           transition:color .18s; white-space:nowrap;
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//         }
//         .nb:hover,.nb.active{color:var(--black)}
//         /* Patreon-style pill active state */
//         .nb.pill-active{
//           background:var(--black);color:#fff;
//           border-radius:999px;padding:0 18px;
//           transition:background .2s,color .2s;
//         }

//         /* Dropdown */
//         .dd{
//           position:absolute;top:calc(100% + 4px);left:0;
//           min-width:220px;background:#fff;
//           border:1px solid var(--border);border-radius:12px;padding:6px;
//           box-shadow:0 12px 40px rgba(0,0,0,.10),0 2px 6px rgba(0,0,0,.04);
//           opacity:0;pointer-events:none;
//           transform:translateY(4px) scale(.98);
//           transition:all .18s var(--ease);transform-origin:top left;
//         }
//         .dd.on{opacity:1;pointer-events:all;transform:translateY(0) scale(1)}
//         .dda{
//           display:block;padding:9px 14px;
//           font-size:14px;font-weight:400;color:#333;
//           text-decoration:none;border-radius:8px;
//           transition:background .12s,color .12s;
//         }
//         .dda:hover{background:#F5F5F5;color:var(--black)}

//         /* Nav right */
//         .nr{display:flex;align-items:center;gap:10px}
//         .btn-search{
//           display:flex;align-items:center;gap:8px;
//           padding:8px 18px;border-radius:999px;
//           border:1px solid var(--border);background:#fff;
//           font-size:14px;font-weight:400;color:var(--muted);
//           cursor:pointer;transition:border-color .2s,color .2s;
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//           white-space:nowrap;
//         }
//         .btn-search:hover{border-color:#999;color:var(--black)}
//         .btn-login{
//           padding:9px 20px;border-radius:999px;
//           border:1px solid var(--border);background:#fff;
//           font-size:15px;font-weight:500;color:var(--black);
//           cursor:pointer;transition:all .18s var(--ease);white-space:nowrap;
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//         }
//         .btn-login:hover{background:#F5F5F5;border-color:#ccc}
//         .btn-start{
//           padding:10px 22px;border-radius:999px;
//           border:none;background:var(--black);color:#fff;
//           font-size:15px;font-weight:700;
//           cursor:pointer;transition:all .2s var(--ease);white-space:nowrap;
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//           box-shadow:0 2px 8px rgba(0,0,0,.15);
//         }
//         .btn-start:hover{background:#222;transform:scale(1.03);box-shadow:0 4px 16px rgba(0,0,0,.22)}
//         .btn-start:active{transform:scale(.98)}
//         .mob-btn{
//           display:none!important;background:none;border:1px solid var(--border);
//           padding:7px;border-radius:8px;cursor:pointer;color:var(--black);
//           align-items:center;justify-content:center;
//         }

//         /* MOBILE DRAWER */
//         .mob-drawer{
//           position:fixed;inset:0;z-index:2000;background:#fff;
//           padding:20px var(--px);overflow-y:auto;
//           transform:translateX(100%);transition:transform .36s var(--ease);
//         }
//         .mob-drawer.on{transform:translateX(0)}
//         .mob-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:40px}
//         .mob-close{background:none;border:1px solid var(--border);padding:7px;border-radius:8px;cursor:pointer;color:var(--black)}
//         .mob-link{
//           display:block;padding:18px 0;
//           font-size:24px;font-weight:700;color:var(--black);
//           text-decoration:none;border-bottom:1px solid var(--border);
//           transition:color .18s;
//         }
//         .mob-link:hover{color:var(--muted)}

//         /* HERO */
//         .hero{
//           background:linear-gradient(160deg,#c8d8f0 0%,#b0c8e8 30%,#a8c0e4 60%,#b8ccec 100%);
//           padding:0 var(--px);min-height:580px;position:relative;overflow:hidden;
//         }
//         .hero-in{
//           max-width:var(--max);margin:0 auto;
//           display:grid;grid-template-columns:1fr auto;
//           gap:40px;align-items:center;
//           padding:clamp(60px,8vh,100px) 0 clamp(60px,8vh,100px);
//         }
//         .hero-h1{
//           font-size:clamp(56px,8.5vw,120px);
//           font-weight:800;line-height:0.94;
//           letter-spacing:-3px;color:var(--black);
//           margin-bottom:32px;
//         }
//         .hero-p{
//           font-size:clamp(16px,1.4vw,20px);color:#2A2A2A;
//           line-height:1.6;max-width:520px;margin-bottom:32px;font-weight:400;
//         }
//         .hero-btns{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
//         .btn-hero-black{
//           display:inline-flex;align-items:center;gap:8px;
//           padding:14px 28px;border-radius:999px;
//           background:var(--black);color:#fff;
//           font-size:16px;font-weight:700;border:none;cursor:pointer;
//           text-decoration:none;transition:all .22s var(--ease);
//           box-shadow:0 4px 16px rgba(0,0,0,.2);
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//         }
//         .btn-hero-black:hover{background:#222;transform:scale(1.04);box-shadow:0 8px 28px rgba(0,0,0,.28)}
//         .btn-hero-black:active{transform:scale(.98)}
//         .btn-hero-ghost{
//           display:inline-flex;align-items:center;gap:8px;
//           padding:14px 28px;border-radius:999px;
//           background:rgba(255,255,255,0.6);color:var(--black);
//           font-size:16px;font-weight:600;
//           border:1px solid rgba(0,0,0,.12);cursor:pointer;
//           text-decoration:none;backdrop-filter:blur(8px);
//           transition:all .22s var(--ease);
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//         }
//         .btn-hero-ghost:hover{background:rgba(255,255,255,0.85)}

//         /* LOGOS */
//         .logos-sec{
//           padding:48px var(--px);border-bottom:1px solid var(--border);
//         }
//         .logos-in{max-width:var(--max);margin:0 auto}
//         .logos-label{font-size:12px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:1.8px;margin-bottom:20px}
//         .logos-row{display:flex;gap:clamp(20px,4vw,56px);flex-wrap:wrap;align-items:center}
//         .logo-item{font-size:14px;font-weight:700;color:#C0C0C0;transition:color .2s;cursor:default;letter-spacing:.02em}
//         .logo-item:hover{color:var(--black)}

//         /* PAGE-WIDE SECTIONS */
//         .sec{padding:clamp(72px,9vw,120px) var(--px)}
//         .sec-in{max-width:var(--max);margin:0 auto}

//         /* SECTION HEADER */
//         .sec-lbl{font-size:12px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;display:block}
//         .sec-h{
//           font-size:clamp(36px,5vw,72px);font-weight:800;
//           color:var(--black);line-height:0.96;letter-spacing:-2px;
//           margin-bottom:20px;max-width:860px;
//         }
//         .sec-p{font-size:17px;color:var(--muted);line-height:1.65;max-width:560px;margin-bottom:52px}

//         /* CARDS GRID */
//         .cg{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
//         .sc{
//           border:1px solid var(--border);border-radius:20px;
//           overflow:hidden;background:#fff;
//           transition:transform .35s var(--ease),box-shadow .35s var(--ease),border-color .25s;
//           cursor:default;
//         }
//         .sc:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.08);border-color:#ccc}
//         .sc-color{height:180px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
//         .sc-num-bg{font-size:120px;font-weight:900;color:rgba(0,0,0,.06);position:absolute;right:-10px;bottom:-20px;line-height:1;letter-spacing:-4px;user-select:none}
//         .sc-body{padding:28px 28px 24px}
//         .sc-sub{font-size:12px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px}
//         .sc-t{font-size:clamp(20px,1.8vw,26px);font-weight:800;color:var(--black);margin-bottom:10px;line-height:1.2;letter-spacing:-.5px}
//         .sc-d{font-size:14px;color:var(--muted);line-height:1.65;margin-bottom:20px}
//         .sc-a{
//           display:inline-flex;align-items:center;gap:6px;
//           padding:9px 20px;border-radius:999px;
//           background:var(--black);color:#fff;
//           font-size:13px;font-weight:700;text-decoration:none;
//           transition:all .2s var(--ease);
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//         }
//         .sc-a:hover{background:#333;transform:scale(1.03)}

//         /* BLUE SECTION (Patreon's blue gradient sections) */
//         .blue-sec{
//           background:linear-gradient(160deg,#b8cce8 0%,#a8c4e4 50%,#b0cce8 100%);
//           padding:clamp(72px,9vw,120px) var(--px);
//         }
//         .blue-sec .sec-h{color:var(--black)}
//         .blue-sec .sec-p{color:#333}

//         /* FEATURE SPLIT */
//         .feat-split{
//           display:grid;grid-template-columns:auto 1fr;
//           gap:clamp(40px,6vw,80px);align-items:center;
//         }
//         .feat-text-h{
//           font-size:clamp(36px,5vw,72px);font-weight:800;
//           color:var(--black);line-height:0.96;letter-spacing:-2px;margin-bottom:28px;
//         }
//         .feat-text-p{font-size:17px;color:#333;line-height:1.65;margin-bottom:36px;max-width:520px}
//         .feat-cols{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:48px}
//         .feat-col-h{font-size:20px;font-weight:800;color:var(--black);letter-spacing:-.3px;margin-bottom:10px}
//         .feat-col-p{font-size:15px;color:#444;line-height:1.65}
//         .btn-pill-black{
//           display:inline-flex;align-items:center;gap:8px;
//           padding:14px 28px;border-radius:999px;
//           background:var(--black);color:#fff;
//           font-size:15px;font-weight:700;border:none;cursor:pointer;
//           text-decoration:none;transition:all .2s var(--ease);
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//           box-shadow:0 3px 12px rgba(0,0,0,.18);
//         }
//         .btn-pill-black:hover{background:#222;transform:scale(1.04);box-shadow:0 6px 22px rgba(0,0,0,.28)}

//         /* STATS */
//         .st-row{
//           display:grid;grid-template-columns:repeat(4,1fr);
//           border:1px solid var(--border);border-radius:20px;
//           overflow:hidden;background:#fff;
//         }
//         .st-c{padding:clamp(32px,3.5vw,48px) clamp(24px,3vw,40px);position:relative}
//         .st-c:not(:last-child)::after{content:'';position:absolute;right:0;top:16%;height:68%;width:1px;background:var(--border)}
//         .st-v{
//           font-size:clamp(44px,5vw,68px);font-weight:800;
//           color:var(--black);line-height:1;letter-spacing:-2px;margin-bottom:8px;
//         }
//         .st-l{font-size:14px;color:var(--muted);font-weight:500}

//         /* APPROACH - list style */
//         .ap-list{margin-top:56px}
//         .ap-row{
//           display:grid;grid-template-columns:64px 1fr 1fr;
//           gap:32px;padding:36px 0;
//           border-top:1px solid var(--border);
//           transition:background .15s;
//         }
//         .ap-row:last-child{border-bottom:1px solid var(--border)}
//         .ap-row:hover{background:rgba(0,0,0,.016)}
//         .ap-n{font-size:15px;font-weight:700;color:#ccc;padding-top:3px}
//         .ap-t{font-size:clamp(18px,1.6vw,22px);font-weight:800;color:var(--black);line-height:1.25;letter-spacing:-.3px}
//         .ap-d{font-size:14.5px;color:var(--muted);line-height:1.65}

//         /* CTA (dark full section like Patreon's final CTA with big image) */
//         .cta-sec{
//           position:relative;overflow:hidden;min-height:400px;
//           display:flex;align-items:center;
//           background:var(--black);
//         }
//         .cta-bg-img{
//           position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
//           opacity:.25;filter:grayscale(30%);
//         }
//         .cta-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(10,10,10,.85) 0%,rgba(10,10,10,.4) 60%,transparent 100%)}
//         .cta-content{position:relative;z-index:1;padding:clamp(72px,9vw,120px) var(--px);max-width:var(--max);margin:0 auto;width:100%}
//         .cta-h{font-size:clamp(40px,5.5vw,80px);font-weight:800;color:#fff;line-height:.96;letter-spacing:-2px;margin-bottom:24px}
//         .cta-p{font-size:18px;color:rgba(255,255,255,.6);max-width:500px;line-height:1.6;margin-bottom:36px}
//         .cta-btns{display:flex;gap:12px;flex-wrap:wrap}
//         .btn-cta-white{
//           display:inline-flex;align-items:center;gap:8px;
//           padding:14px 28px;border-radius:999px;
//           background:#fff;color:var(--black);
//           font-size:16px;font-weight:700;border:none;cursor:pointer;
//           text-decoration:none;transition:all .22s var(--ease);
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//         }
//         .btn-cta-white:hover{background:#eee;transform:scale(1.04)}
//         .btn-cta-outline{
//           display:inline-flex;align-items:center;gap:8px;
//           padding:14px 28px;border-radius:999px;
//           background:transparent;color:#fff;
//           font-size:16px;font-weight:600;
//           border:1.5px solid rgba(255,255,255,.3);cursor:pointer;
//           text-decoration:none;transition:all .22s var(--ease);
//           font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
//         }
//         .btn-cta-outline:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.5)}

//         /* FOOTER */
//         .ft{background:var(--black);padding:clamp(64px,7vw,100px) var(--px) 40px;border-top:1px solid #1a1a1a}
//         .ft-in{max-width:var(--max);margin:0 auto}
//         .ft-g{display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr 1fr;gap:clamp(24px,4vw,64px);margin-bottom:64px}
//         .ft-brand-p{font-size:14px;color:rgba(255,255,255,.35);line-height:1.7;max-width:280px;margin-top:16px}
//         .ft-h{font-size:12px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:1.8px;margin-bottom:20px}
//         .ft-ls{display:flex;flex-direction:column;gap:12px}
//         .ft-a{color:rgba(255,255,255,.55);text-decoration:none;font-size:14.5px;font-weight:400;transition:color .15s}
//         .ft-a:hover{color:#fff}
//         .ft-bot{border-top:1px solid rgba(255,255,255,.08);padding-top:32px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;font-size:13px;color:rgba(255,255,255,.25)}
//         .ft-bot-ls{display:flex;gap:24px}
//         .ft-bot-a{color:rgba(255,255,255,.25);text-decoration:none;transition:color .15s}
//         .ft-bot-a:hover{color:rgba(255,255,255,.6)}

//         /* PAGE IN */
//         .pin{animation:pin .8s cubic-bezier(.22,1,.36,1) both}
//         @keyframes pin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

//         /* RESPONSIVE */
//         @media(max-width:1100px){
//           .nl{display:none}
//           .btn-login{display:none}
//           .mob-btn{display:flex!important}
//           .hero-in{grid-template-columns:1fr;text-align:left}
//           .cg{grid-template-columns:1fr}
//           .st-row{grid-template-columns:1fr 1fr}
//           .st-c:nth-child(2)::after{display:none}
//           .ap-row{grid-template-columns:52px 1fr}
//           .ap-d{display:none}
//           .feat-split{grid-template-columns:1fr}
//           .ft-g{grid-template-columns:1fr 1fr}
//           .feat-cols{grid-template-columns:1fr}
//         }
//         @media(max-width:680px){
//           .st-row{grid-template-columns:1fr 1fr}
//           .ft-g{grid-template-columns:1fr 1fr}
//           .ap-row{grid-template-columns:1fr}
//           .ap-n{display:none}
//           .feat-cols{grid-template-columns:1fr}
//         }
//       `}</style>

//       {/* ── NAV ─────────────────────────────────────────────────── */}
//       <nav className={`nav${scrolled?" up":""}`}>
//         <div className="ni">
//           <SypraLogo />

//           <div className="nl">
//             {NAV.map(item=>(
//               <div key={item.label} className="ni-item" onMouseEnter={()=>hov(item.label)} onMouseLeave={lv}>
//                 <button className={`nb${activeNav===item.label?" pill-active":""}`}>
//                   {item.label} {activeNav===item.label?null:<Chev/>}
//                 </button>
//                 <div className={`dd${openDd===item.label?" on":""}`}>
//                   {item.items.map(s=><a href="#" key={s} className="dda">{s}</a>)}
//                 </div>
//               </div>
//             ))}
//             <div className="ni-item">
//               <button className="nb" style={{ background:"#fff", border:"1px solid #ddd", borderRadius:999, padding:"0 18px", color:"#0A0A0A" }}>
//                 Updates
//               </button>
//             </div>
//           </div>

//           <div className="nr">
//             <button className="btn-search">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
//               Find a Client
//             </button>
//             <button className="btn-login">Log in</button>
//             <button className="btn-start">Get Started</button>
//             <button className="mob-btn" onClick={()=>setMob(true)}><MenuIco/></button>
//           </div>
//         </div>
//       </nav>

//       {/* MOBILE DRAWER */}
//       <div className={`mob-drawer${mob?" on":""}`}>
//         <div className="mob-top">
//           <SypraLogo/>
//           <button className="mob-close" onClick={()=>setMob(false)}><XIco/></button>
//         </div>
//         {NAV.map(item=><a href="#" key={item.label} className="mob-link" onClick={()=>setMob(false)}>{item.label}</a>)}
//         <div style={{marginTop:32,display:"flex",flexDirection:"column",gap:10}}>
//           <button className="btn-login" style={{padding:"14px 28px",fontSize:16,borderRadius:999,textAlign:"center"}}>Log in</button>
//           <button className="btn-start" style={{padding:"14px 28px",fontSize:16,borderRadius:999,textAlign:"center"}}>Get Started</button>
//         </div>
//       </div>

//       {/* ── HERO ─────────────────────────────────────────────────── */}
//       <section className="hero pin">
//         <div className="hero-in">
//           <div>
//             <h1 className="hero-h1">
//               Engineering.<br/>
//               Clients.<br/>
//               Nothing in<br/>
//               between.
//             </h1>
//             <p className="hero-p">
//               Sypra gives your business a direct line to world-class engineering talent, with no middlemen or gatekeepers in the way.
//             </p>
//             <div className="hero-btns">
//               <a href="#" className="btn-hero-black">Get started <ArrR s={16}/></a>
//               <a href="#" className="btn-hero-ghost">See how it works</a>
//             </div>
//           </div>
//           <div style={{ paddingTop:20 }}>
//             <PhoneMockup/>
//           </div>
//         </div>
//       </section>

//       {/* ── LOGOS ───────────────────────────────────────────────── */}
//       <div className="logos-sec">
//         <div className="logos-in">
//           <div className="logos-label">Certified technology partners</div>
//           <div className="logos-row">
//             {LOGOS.map(l=><div key={l} className="logo-item">{l}</div>)}
//           </div>
//         </div>
//       </div>

//       {/* ── CAPABILITIES ─────────────────────────────────────────── */}
//       <section className="sec">
//         <div className="sec-in">
//           <div ref={r("cap")} style={a("cap")}>
//             <span className="sec-lbl">Technical Capabilities</span>
//             <h2 className="sec-h">Architected for reality.<br/>Built for scale.</h2>
//             <p className="sec-p">We engineer reliable, high-performance systems so your internal teams can focus on driving business strategy, not managing technical debt.</p>
//           </div>
//           <div className="cg">
//             {SERVICES.map((s,i)=>(
//               <div ref={r(`sc${i}`)} key={s.id} className="sc" style={a(`sc${i}`,i*.08)}>
//                 <div className="sc-color" style={{ background:s.color }}>
//                   <div style={{ textAlign:"center" }}>
//                     <div style={{ fontSize:48, fontWeight:900, color:"rgba(0,0,0,.55)", letterSpacing:"-2px", lineHeight:1 }}>{s.id}</div>
//                     <div style={{ fontSize:13, fontWeight:600, color:"rgba(0,0,0,.35)", marginTop:4 }}>{s.sub}</div>
//                   </div>
//                   <div className="sc-num-bg">{s.id}</div>
//                 </div>
//                 <div className="sc-body">
//                   <div className="sc-sub">{s.sub}</div>
//                   <h3 className="sc-t">{s.name}</h3>
//                   <p className="sc-d">{s.detail}</p>
//                   <a href="#" className="sc-a">Learn more <ArrR s={13}/></a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TURNING PASSIONS / BLUE SECTION ─────────────────────── */}
//       <section className="blue-sec">
//         <div className="sec-in">
//           <div ref={r("bs")} style={a("bs")}>
//             <div className="feat-split">
//               <div style={{ maxWidth:560 }}>
//                 <span className="sec-lbl" style={{ color:"#555" }}>Our Methodology</span>
//                 <h2 className="feat-text-h">Turning ambitions<br/>into businesses</h2>
//                 <p className="feat-text-p">
//                   Sypra gives you a direct line to enterprise-grade engineering. Build faster, scale smarter, and own every line of your codebase.
//                 </p>
//               </div>
//               <div style={{ alignSelf:"flex-end" }}>
//                 {/* Small phone-style card */}
//                 <div style={{ background:"#fff", borderRadius:24, padding:28, minWidth:280, boxShadow:"0 16px 48px rgba(0,0,0,.12)" }}>
//                   <div style={{ fontSize:12, fontWeight:700, color:"#22C55E", marginBottom:4 }}>● 99.9% Uptime</div>
//                   <div style={{ fontSize:32, fontWeight:800, color:"#0A0A0A", letterSpacing:"-1px", lineHeight:1, marginBottom:4 }}>300+</div>
//                   <div style={{ fontSize:13, color:"#888", marginBottom:20 }}>Enterprise deployments</div>
//                   {STATS.map(s=>(
//                     <div key={s.l} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderTop:"1px solid #F0F0F0" }}>
//                       <span style={{ fontSize:13, color:"#444", fontWeight:500 }}>{s.l}</span>
//                       <span style={{ fontSize:14, fontWeight:800, color:"#0A0A0A" }}>{s.v}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="feat-cols" style={{ marginTop:64 }}>
//               {[
//                 { h:"More ways to deliver", p:"Build lasting solutions outside the typical agency model, with delivery streams ranging from cloud migration to ongoing managed operations.", cta:"Explore capabilities" },
//                 { h:"Unlock growth", p:"Sypra isn't just for technical delivery — it's for professional growth too. Get in-depth analytics about your projects and tap into our growing partner network.", cta:"See our approach" },
//               ].map((col,i)=>(
//                 <div key={i}>
//                   <h3 className="feat-col-h">{col.h}</h3>
//                   <p className="feat-col-p" style={{ marginBottom:20 }}>{col.p}</p>
//                   <a href="#" className="btn-pill-black">{col.cta} <ArrR s={14}/></a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── STATS ────────────────────────────────────────────────── */}
//       <section className="sec">
//         <div className="sec-in">
//           <div ref={r("st")} style={a("st")}>
//             <span className="sec-lbl">Track Record</span>
//             <h2 className="sec-h">Proven at the<br/>enterprise level.</h2>
//           </div>
//           <div ref={r("str")} style={a("str",.1)}>
//             <div className="st-row">
//               {STATS.map(s=>(
//                 <div className="st-c" key={s.l}>
//                   <div className="st-v">{s.v}</div>
//                   <div className="st-l">{s.l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── APPROACH ─────────────────────────────────────────────── */}
//       <section className="sec" style={{ paddingTop:0 }}>
//         <div className="sec-in">
//           <div ref={r("ap")} style={a("ap")}>
//             <span className="sec-lbl">Why Sypra</span>
//             <h2 className="sec-h">A better way to<br/>build software.</h2>
//             <p className="sec-p">We operate as a seamless extension of your organization, prioritizing clear communication, rigorous testing, and measurable business impact.</p>
//           </div>
//           <div className="ap-list">
//             {APPROACH.map((w,i)=>(
//               <div ref={r(`ar${i}`)} key={w.n} className="ap-row" style={a(`ar${i}`,i*.07)}>
//                 <div className="ap-n">{w.n}</div>
//                 <div className="ap-t">{w.h}</div>
//                 <div className="ap-d">{w.b}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA (dark with background image like Patreon) ─────────── */}
//       <div className="cta-sec">
//         <img
//           src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
//           alt="Office"
//           className="cta-bg-img"
//         />
//         <div className="cta-overlay"/>
//         <div className="cta-content">
//           <div ref={r("cta")} style={a("cta")}>
//             <h2 className="cta-h">Ready to upgrade<br/>your tech foundation?</h2>
//             <p className="cta-p">Schedule a technical consultation with our senior architects. No sales pressure — just a clear conversation about what you need.</p>
//             <div className="cta-btns">
//               <a href="#" className="btn-cta-white">Get started <ArrR s={16}/></a>
//               <a href="#" className="btn-cta-outline">Already a client? Log in</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── FOOTER ───────────────────────────────────────────────── */}
//       <footer className="ft">
//         <div className="ft-in">
//           <div className="ft-g">
//             <div>
//               <SypraLogo dark />
//               <p className="ft-brand-p">Sypra partners with ambitious organizations to design, build, and operate resilient technology solutions at global scale.</p>
//             </div>
//             {FOOTER_COLS.map(col=>(
//               <div key={col.h}>
//                 <div className="ft-h">{col.h}</div>
//                 <div className="ft-ls">{col.links.map(l=><a href="#" key={l} className="ft-a">{l}</a>)}</div>
//               </div>
//             ))}
//           </div>
//           <div className="ft-bot">
//             <div>© 2026 Sypra Infotech. All rights reserved.</div>
//             <div className="ft-bot-ls">
//               <a href="#" className="ft-bot-a">Privacy Policy</a>
//               <a href="#" className="ft-bot-a">Terms of Service</a>
//               <a href="#" className="ft-bot-a">Cookie Policy</a>
//               <a href="#" className="ft-bot-a">Accessibility</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */

const NAV = [
  { label: "Capabilities", items: [
      { t: "Custom Software Engineering", d: "Web, mobile & microservices" },
      { t: "Cloud & DevOps",              d: "AWS, Azure, Google Cloud" },
      { t: "Data & Applied AI",           d: "ML pipelines & automation" },
      { t: "Enterprise Integration",      d: "SAP, Oracle, Workday" },
      { t: "Security & Auditing",         d: "SOC 2 · ISO 27001 ready" },
    ]
  },
  { label: "Features", items: [
      { t: "Delivery Methodology",  d: "Agile-first, milestone driven" },
      { t: "Managed Operations",    d: "24/7 monitoring & runbooks" },
      { t: "Team Augmentation",     d: "Embed senior engineers fast" },
      { t: "SLA Guarantees",        d: "99.9% uptime contractually" },
    ]
  },
  { label: "Pricing", items: [
      { t: "Startup Plan",      d: "From $3,500/mo · MVP to launch" },
      { t: "Growth Plan",       d: "From $8,000/mo · Scale your team" },
      { t: "Enterprise Plan",   d: "Custom · Dedicated squad model" },
      { t: "Custom Engagement", d: "Talk to an architect today" },
    ]
  },
  { label: "Resources", items: [
      { t: "Technical Blog",        d: "Deep-dives from our engineers" },
      { t: "Case Studies",          d: "Real results, real clients" },
      { t: "Architecture Patterns", d: "Open reference designs" },
      { t: "System Status",         d: "Live uptime dashboard" },
    ]
  },
];

const SERVICES = [
  {
    id: "01", tag: "Engineering",
    name: "Custom Software Engineering",
    sub: "From web apps to mobile platforms",
    detail: "We build core business applications, progressive web platforms, and mobile solutions using modern stacks like React, Node.js, and scalable microservices. Every line of code ships with test coverage and architectural docs.",
    color: "#EBF3FF", accent: "#4F7DC9",
    bullets: ["React / Next.js / Node", "iOS & Android native", "Microservices architecture", "CI/CD from day one"],
  },
  {
    id: "02", tag: "Cloud",
    name: "Cloud & Infrastructure",
    sub: "AWS, Azure, Google Cloud",
    detail: "Seamless migration, container orchestration, and resilient infrastructure management across all major cloud providers. We reduce your monthly cloud bill while improving reliability.",
    color: "#FFF3EB", accent: "#D97B3A",
    bullets: ["Kubernetes & Docker", "Terraform IaC", "Cost optimisation audits", "Multi-cloud strategies"],
  },
  {
    id: "03", tag: "AI & Data",
    name: "Data & Applied AI",
    sub: "ML pipelines & automation",
    detail: "Practical machine learning models, predictive pipelines, and automated workflows designed to solve specific operational bottlenecks. No hype — just models that ship to production.",
    color: "#EBFFF0", accent: "#2A9D5C",
    bullets: ["Python · PyTorch · FastAPI", "Real-time data pipelines", "LLM fine-tuning & RAG", "MLOps & model monitoring"],
  },
  {
    id: "04", tag: "Integration",
    name: "Enterprise Integration",
    sub: "SAP, Oracle, Workday",
    detail: "Unifying fragmented data. We handle complex ERP and third-party API integrations to create a single source of truth across your entire organisation.",
    color: "#F3EBFF", accent: "#7C3AED",
    bullets: ["SAP · Oracle · Workday", "REST & GraphQL APIs", "Event-driven architecture", "Data mesh & governance"],
  },
];

const STATS = [
  { v: "10+",   l: "Years in business",       sub: "Founded 2014" },
  { v: "300+",  l: "Enterprise deployments",   sub: "Across 38 countries" },
  { v: "99.9%", l: "SLA uptime guaranteed",    sub: "Contractually backed" },
  { v: "98%",   l: "Client retention rate",    sub: "Industry avg: 72%" },
];

const APPROACH = [
  {
    n: "01",
    h: "Engineering led, not sales led.",
    b: "You speak directly with senior architects who understand the technical reality of your business problem. No account managers reading from a script.",
  },
  {
    n: "02",
    h: "No black boxes.",
    b: "Complete transparency through daily standups, live dashboards, and regular code reviews. You always own your IP — full source access from sprint one.",
  },
  {
    n: "03",
    h: "Priced by outcomes.",
    b: "We don't bill for hours spent staring at screens. We structure engagements around fixed deliverables and measurable business impact.",
  },
  {
    n: "04",
    h: "Day-two support, standard.",
    b: "Launch is just the beginning. Our contracts include proactive monitoring, SLA-backed uptime, and ongoing iterative improvements as your product grows.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Sypra rebuilt our entire data pipeline in 8 weeks. Our analytics team went from waiting 3 days for reports to getting them in real time. The ROI was visible within the first month.",
    name: "Marcus Teel", role: "CTO", company: "Meridian Health Group",
    av: "MT", color: "#4F7DC9",
  },
  {
    quote: "What sets Sypra apart is that they push back. They told us our original architecture wouldn't scale and proposed something better. That kind of honesty is worth more than any SLA.",
    name: "Priya Nair", role: "VP of Engineering", company: "Fynlo Capital",
    av: "PN", color: "#D97B3A",
  },
  {
    quote: "We needed to move fast without breaking compliance. Sypra delivered a SOC 2 compliant infrastructure in 10 weeks. Our audit passed first try.",
    name: "Jonas Berg", role: "Head of Platform", company: "Nordvik Bank",
    av: "JB", color: "#2A9D5C",
  },
  {
    quote: "Our previous vendor delivered code that nobody could maintain. Sypra came in, refactored everything, added 94% test coverage, and handed it back with documentation a junior dev could follow.",
    name: "Sasha Lim", role: "Engineering Manager", company: "Orbit Commerce",
    av: "SL", color: "#7C3AED",
  },
  {
    quote: "They onboarded three senior engineers to our team in four days. No ramp-up time, no handholding. They just started shipping features that actually worked.",
    name: "David Okafor", role: "Founder", company: "Stackwell",
    av: "DO", color: "#C2185B",
  },
  {
    quote: "Sypra's cloud migration saved us $28k per month in AWS costs without touching performance. That's not an estimate — that's the invoice comparison.",
    name: "Elena Marchetti", role: "COO", company: "Venturo Logistics",
    av: "EM", color: "#0097A7",
  },
];

const LOGOS = [
  "SAP Partner", "AWS Advanced", "Microsoft Azure",
  "Google Cloud", "Oracle Certified", "Kubernetes", "Terraform", "HashiCorp",
];

const PLANS = [
  {
    name: "Startup",
    price: "3,500",
    cycle: "/ month",
    desc: "For companies building their first production system or needing a focused engineering sprint.",
    cta: "Start a project",
    style: "ghost",
    features: [
      "1 dedicated senior engineer",
      "Up to 2 services / apps",
      "Weekly architecture review",
      "CI/CD pipeline setup",
      "Slack access to your team",
      "99.9% uptime SLA",
      "30-day notice to scale",
    ],
  },
  {
    name: "Growth",
    price: "8,000",
    cycle: "/ month",
    desc: "For scaling teams that need a full squad — product, backend, infra — without the recruiting overhead.",
    cta: "Start a project",
    style: "primary",
    popular: true,
    features: [
      "Up to 4 engineers + tech lead",
      "Unlimited services & repos",
      "Daily standups & sprint planning",
      "Dedicated infra & DevOps",
      "Quarterly architecture audit",
      "99.95% uptime SLA",
      "Priority Slack & on-call",
      "IP & code fully owned by you",
    ],
  },
  {
    name: "Enterprise",
    price: null,
    cycle: "",
    desc: "Custom-scoped engagements for organisations with complex compliance, multi-region, or transformation needs.",
    cta: "Talk to an architect",
    style: "dark",
    features: [
      "Custom squad size & composition",
      "Dedicated account architect",
      "SOC 2 / ISO 27001 delivery",
      "Multi-region infrastructure",
      "Executive reporting & QBRs",
      "99.99% uptime SLA",
      "Embedded on-site engineers",
      "Custom legal & procurement",
    ],
  },
];

const FOOTER_COLS = [
  { h: "Capabilities", links: ["Custom Software Eng.", "Cloud & Infrastructure", "Data & Applied AI", "Enterprise Integration", "Security & Auditing"] },
  { h: "Company",      links: ["About Sypra", "Leadership", "Careers", "Press", "Contact Us"] },
  { h: "Resources",    links: ["Technical Blog", "Case Studies", "Architecture Guide", "System Status", "Security Docs"] },
  { h: "Legal",        links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security Disclosures", "Accessibility"] },
];

const TECH_STACK = [
  { label: "React",      cat: "Frontend" },
  { label: "Next.js",    cat: "Frontend" },
  { label: "Node.js",    cat: "Backend"  },
  { label: "Python",     cat: "Backend"  },
  { label: "Kubernetes", cat: "Infra"    },
  { label: "Terraform",  cat: "Infra"    },
  { label: "AWS",        cat: "Cloud"    },
  { label: "GCP",        cat: "Cloud"    },
  { label: "Azure",      cat: "Cloud"    },
  { label: "PostgreSQL", cat: "Data"     },
  { label: "Kafka",      cat: "Data"     },
  { label: "PyTorch",    cat: "AI"       },
];

/* ─────────────────────────────────────────────────────────────────
   HOOKS & HELPERS
───────────────────────────────────────────────────────────────── */

function useVis(ref, margin = "-80px") {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); ob.disconnect(); }
    }, { rootMargin: margin });
    ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return vis;
}

function useMultiVis(count) {
  const refs = useRef(Array.from({ length: count }, () => null));
  const [vis, setVis] = useState({});
  useEffect(() => {
    const obs = refs.current.map((el, i) => {
      if (!el) return null;
      const ob = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVis(v => ({ ...v, [i]: true })); ob.disconnect(); }
      }, { rootMargin: "-60px" });
      ob.observe(el);
      return ob;
    });
    return () => obs.forEach(ob => ob && ob.disconnect());
  }, []);
  return [refs, vis];
}

const fade = (on, delay = 0, y = 22) => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateY(0px)" : `translateY(${y}px)`,
  transition: `opacity .6s cubic-bezier(.22,1,.36,1) ${delay}s, transform .6s cubic-bezier(.22,1,.36,1) ${delay}s`,
});

/* ── ICONS ── */
const ArrR = ({ s = 16 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ChevD = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const MenuIco = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);
const XIco = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);
const Chk = ({ c = "#555" }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/* ── LOGO (keep as requested) ── */
function SypraLogo({ dark = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer" }}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="17" fill={dark ? "#fff" : "#0A0A0A"} />
        <text x="17" y="23" textAnchor="middle" fontSize="18" fontWeight="900"
          fill={dark ? "#0A0A0A" : "#fff"}
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
          style={{ userSelect: "none" }}>S</text>
      </svg>
      <span style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.4px", color: dark ? "#fff" : "#0A0A0A" }}>
        Sypra
      </span>
    </div>
  );
}

/* ── DASHBOARD MOCKUP ── */
function DashCard() {
  return (
    <div style={{
      width: 340, background: "#fff", borderRadius: 28,
      boxShadow: "0 40px 100px rgba(0,0,0,.15), 0 0 0 1px rgba(0,0,0,.05)",
      overflow: "hidden", flexShrink: 0,
      fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    }}>
      <div style={{ background: "#111", padding: "16px 20px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", gap: 5 }}>
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <span style={{ fontSize: 12, color: "#555" }}>sypra.io/dashboard</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", animation: "spulse 2s infinite" }} />
          <span style={{ fontSize: 11, color: "#22C55E", fontWeight: 500 }}>Live</span>
        </div>
      </div>

      <div style={{ background: "#111", padding: "0 20px 22px" }}>
        <div style={{ fontSize: 11, color: "#22C55E", fontWeight: 500, marginBottom: 6 }}>Monthly infra savings</div>
        <div style={{ fontSize: 38, fontWeight: 700, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1 }}>$16,414</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)", marginTop: 4, fontWeight: 400 }}>vs. previous vendor · +23% YoY</div>
        <svg width="100%" height="54" viewBox="0 0 300 54" style={{ marginTop: 16, overflow: "visible" }}>
          <defs>
            <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity=".14" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,48 C40,42 70,38 100,32 C130,26 155,20 185,14 C215,8 245,5 300,2 L300,54 L0,54 Z" fill="url(#cg2)" />
          <path d="M0,48 C40,42 70,38 100,32 C130,26 155,20 185,14 C215,8 245,5 300,2"
            fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M0,48 C40,42 70,38 100,32 C130,26 155,20 185,14 C215,8 245,5 300,2"
            fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="300" cy="2" r="4" fill="#fff" />
        </svg>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "#f0f0f0" }}>
        {[
          { l: "Deployments", v: "1,247", ch: "+12%" },
          { l: "Uptime",      v: "99.99%", ch: "SLA ✓" },
          { l: "Latency",     v: "18ms",   ch: "−34%" },
        ].map((m, i) => (
          <div key={i} style={{ background: "#fff", padding: "13px 13px 11px" }}>
            <div style={{ fontSize: 10, color: "#999", fontWeight: 400, marginBottom: 4 }}>{m.l}</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.5px" }}>{m.v}</div>
            <div style={{ fontSize: 11, color: "#22C55E", fontWeight: 400, marginTop: 2 }}>{m.ch}</div>
          </div>
        ))}
      </div>

      {[
        { label: "Q4 2023 · Enterprise", val: "$42,800", up: true,  tag: "Completed" },
        { label: "Q3 2023 · Mid-Market", val: "$36,200", up: true,  tag: "Completed" },
        { label: "Q2 2023 · Startup",    val: "$28,100", up: false, tag: "Closed" },
        { label: "Q1 2023 · Enterprise", val: "$31,600", up: true,  tag: "Completed" },
      ].map((row, i) => (
        <div key={i} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "12px 20px", borderBottom: i < 3 ? "1px solid #F5F5F5" : "none",
        }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#0A0A0A" }}>{row.label}</div>
            <div style={{ fontSize: 11, color: "#aaa", marginTop: 1 }}>{row.tag}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#0A0A0A" }}>{row.val}</span>
            <span style={{ fontSize: 13, color: row.up ? "#22C55E" : "#EF4444" }}>{row.up ? "↑" : "↓"}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── FAQ ITEM ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #EDEDEC" }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", background: "none", border: "none",
        padding: "17px 0", cursor: "pointer",
        fontFamily: "'DM Sans',-apple-system,sans-serif",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        textAlign: "left",
      }}>
        <span style={{ fontSize: 15, fontWeight: 500, color: "#0A0A0A", lineHeight: 1.4 }}>{q}</span>
        <span style={{
          width: 22, height: 22, borderRadius: "50%",
          background: open ? "#0A0A0A" : "#f0f0f0",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, transition: "background .2s, transform .3s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : "#555"} strokeWidth="3" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height .35s cubic-bezier(.22,1,.36,1)" }}>
        <p style={{ fontSize: 14, fontWeight: 400, color: "#666", lineHeight: 1.65, paddingBottom: 18 }}>{a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openDd,   setOpenDd]   = useState(null);
  const [mob,      setMob]      = useState(false);
  const [annual,   setAnnual]   = useState(false);
  const [activeT,  setActiveT]  = useState(0);
  const ddTimer = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveT(p => (p + 1) % TESTIMONIALS.length), 5200);
    return () => clearInterval(t);
  }, []);

  /* Visibility refs */
  const capRef   = useRef(null); const capVis   = useVis(capRef);
  const blueRef  = useRef(null); const blueVis  = useVis(blueRef);
  const stRef    = useRef(null); const stVis    = useVis(stRef);
  const apRef    = useRef(null); const apVis    = useVis(apRef);
  const techRef  = useRef(null); const techVis  = useVis(techRef);
  const testRef  = useRef(null); const testVis  = useVis(testRef);
  const planRef  = useRef(null); const planVis  = useVis(planRef);
  const ctaRef   = useRef(null); const ctaVis   = useVis(ctaRef);
  const ftRef    = useRef(null); const ftVis    = useVis(ftRef);

  const [svcRefs, svcVis]   = useMultiVis(SERVICES.length);
  const [apRefs,  apRVis]   = useMultiVis(APPROACH.length);
  const [planRefs, planRVis] = useMultiVis(PLANS.length);

  const hov = l => { clearTimeout(ddTimer.current); setOpenDd(l); };
  const lv  = ()  => { ddTimer.current = setTimeout(() => setOpenDd(null), 200); };

  return (
    <div style={{ fontFamily: "'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif", background: "#fff", color: "#0A0A0A", overflowX: "hidden" }}>

      {/* ── GLOBAL CSS ─────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        :root {
          --black: #0A0A0A; --text: #1A1A1A; --mid: #555; --muted: #888; --dim: #bbb;
          --border: #E5E5E5; --border2: #EDEDEC; --cream: #FAF9F7;
          --px: clamp(20px,5vw,80px); --max: 1380px;
          --ease: cubic-bezier(.22,1,.36,1); --r: 16px; --r2: 24px;
        }
        ::-webkit-scrollbar { width: 5px; background: #fff; }
        ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 99px; }

        @keyframes spulse { 0%,100% { opacity:1 } 50% { opacity:.35 } }
        @keyframes smarq  { from { transform:translateX(0) } to { transform:translateX(-50%) } }
        @keyframes sfadein { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:translateY(0) } }

        /* ── NAV ── */
        .nav {
          position: sticky; top: 0; z-index: 900; height: 66px;
          transition: background .3s, border-color .3s, box-shadow .3s;
          border-bottom: 1px solid transparent;
        }
        .nav.up {
          background: rgba(255,255,255,.96);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom-color: var(--border);
          box-shadow: 0 1px 0 rgba(0,0,0,.04);
        }
        .nav-in {
          max-width: var(--max); margin: 0 auto;
          padding: 0 var(--px); height: 100%;
          display: flex; align-items: center;
        }
        .nav-links {
          display: flex; align-items: stretch; height: 100%;
          margin: 0 auto 0 36px;
        }
        .nav-item { position: relative; display: flex; align-items: stretch; }
        .nav-btn {
          background: none; border: none; padding: 0 14px; height: 100%;
          display: flex; align-items: center; gap: 5px;
          font-size: 15px; font-weight: 400; color: var(--mid);
          cursor: pointer; white-space: nowrap;
          font-family: 'DM Sans', sans-serif; transition: color .15s;
        }
        .nav-btn:hover { color: var(--black); }
        .nav-btn.act {
          background: var(--black); color: #fff;
          border-radius: 999px; padding: 0 20px; font-weight: 500;
        }
        .dd-mega {
          position: absolute; top: calc(100% + 6px); left: -8px;
          min-width: 260px; background: #fff;
          border: 1px solid var(--border); border-radius: 18px;
          padding: 8px; opacity: 0; pointer-events: none;
          transform: translateY(6px) scale(.97);
          transition: opacity .18s var(--ease), transform .18s var(--ease);
          transform-origin: top left;
          box-shadow: 0 16px 48px rgba(0,0,0,.10);
        }
        .dd-mega.on { opacity: 1; pointer-events: all; transform: translateY(0) scale(1); }
        .dd-row {
          display: block; padding: 10px 12px; border-radius: 10px;
          text-decoration: none; transition: background .12s;
        }
        .dd-row:hover { background: #F7F7F6; }
        .dd-t { font-size: 14px; font-weight: 500; color: var(--text); display: block; }
        .dd-d { font-size: 12px; font-weight: 400; color: var(--muted); margin-top: 1px; display: block; }

        .nav-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; margin-left: auto; }
        .nav-search {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 16px; border-radius: 999px;
          border: 1px solid var(--border); background: #fff;
          font-size: 14px; font-weight: 400; color: var(--muted);
          cursor: pointer; transition: border-color .2s, color .2s;
          font-family: 'DM Sans', sans-serif; white-space: nowrap;
        }
        .nav-search:hover { border-color: #aaa; color: var(--black); }
        .nav-login {
          padding: 9px 20px; border-radius: 999px;
          border: 1px solid var(--border); background: #fff;
          font-size: 14px; font-weight: 400; color: var(--black);
          cursor: pointer; transition: background .15s, border-color .15s;
          font-family: 'DM Sans', sans-serif; white-space: nowrap;
        }
        .nav-login:hover { background: #F5F5F5; border-color: #ccc; }
        .nav-cta {
          display: inline-flex; align-items: center;
          padding: 10px 22px; border-radius: 999px;
          border: none; background: var(--black); color: #fff;
          font-size: 14px; font-weight: 500;
          cursor: pointer; transition: all .2s var(--ease);
          font-family: 'DM Sans', sans-serif; white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,.18); text-decoration: none;
        }
        .nav-cta:hover { background: #222; transform: scale(1.03); }
        .mob-trigger {
          display: none; background: none;
          border: 1px solid var(--border); padding: 7px 8px;
          border-radius: 8px; cursor: pointer; color: var(--black);
          align-items: center; justify-content: center;
        }
        .mob-drawer {
          position: fixed; inset: 0; z-index: 2000; background: #fff;
          padding: 20px var(--px); overflow-y: auto;
          transform: translateX(100%); transition: transform .35s var(--ease);
        }
        .mob-drawer.on { transform: translateX(0); }

        /* ── HERO ── */
        .hero {
          background: linear-gradient(150deg, #C6D9EF 0%, #B8CDE8 25%, #A8C2E4 55%, #B2CDE8 80%, #BDD4EC 100%);
          position: relative; overflow: hidden;
          padding: 0 var(--px); min-height: clamp(500px,80vh,820px);
        }
        .hero-in {
          max-width: var(--max); margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: clamp(40px,5vw,80px); align-items: center;
          padding: clamp(64px,8vh,100px) 0;
        }
        .hero-h1 {
          font-size: clamp(52px,8vw,112px);
          font-weight: 700; line-height: .92;
          letter-spacing: clamp(-2px,-.04em,-3.5px);
          color: var(--black); margin-bottom: 28px;
        }
        .hero-p {
          font-size: clamp(16px,1.3vw,19px); font-weight: 400;
          color: #2D2D2D; line-height: 1.62; max-width: 480px; margin-bottom: 32px;
        }

        /* ── BUTTONS ── */
        .btn-blk {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 14px 26px; border-radius: 999px;
          background: var(--black); color: #fff;
          font-size: 15px; font-weight: 500; border: none; cursor: pointer;
          text-decoration: none; font-family: 'DM Sans', sans-serif;
          transition: all .22s var(--ease);
          box-shadow: 0 4px 16px rgba(0,0,0,.22);
        }
        .btn-blk:hover { background: #222; transform: scale(1.04); box-shadow: 0 8px 28px rgba(0,0,0,.3); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 13px 24px; border-radius: 999px;
          background: rgba(255,255,255,.55); color: var(--black);
          font-size: 15px; font-weight: 400;
          border: 1px solid rgba(0,0,0,.12); cursor: pointer;
          text-decoration: none; font-family: 'DM Sans', sans-serif;
          backdrop-filter: blur(8px); transition: all .2s var(--ease);
        }
        .btn-ghost:hover { background: rgba(255,255,255,.82); }
        .btn-wht {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 14px 26px; border-radius: 999px;
          background: #fff; color: var(--black);
          font-size: 15px; font-weight: 500; border: none; cursor: pointer;
          text-decoration: none; font-family: 'DM Sans', sans-serif;
          transition: all .2s var(--ease);
        }
        .btn-wht:hover { background: #eee; transform: scale(1.04); }
        .btn-owht {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 13px 24px; border-radius: 999px;
          background: transparent; color: rgba(255,255,255,.75);
          font-size: 15px; font-weight: 400;
          border: 1.5px solid rgba(255,255,255,.25); cursor: pointer;
          text-decoration: none; font-family: 'DM Sans', sans-serif;
          transition: all .2s var(--ease);
        }
        .btn-owht:hover { border-color: rgba(255,255,255,.55); color: #fff; background: rgba(255,255,255,.06); }

        /* ── LOGOS ── */
        .logos-bar { padding: 44px var(--px); border-bottom: 1px solid var(--border); background: #fff; }
        .logos-inner { max-width: var(--max); margin: 0 auto; }
        .logos-lbl { font-size: 11px; font-weight: 500; color: var(--dim); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 18px; }
        .logos-row { display: flex; gap: clamp(20px,4vw,52px); flex-wrap: wrap; align-items: center; }
        .logo-item { font-size: 13px; font-weight: 500; color: #C8C8C8; transition: color .2s; cursor: default; }
        .logo-item:hover { color: #555; }

        /* ── SECTIONS ── */
        .sec { padding: clamp(72px,9vw,120px) var(--px); }
        .sec-in { max-width: var(--max); margin: 0 auto; }
        .sec-tag { font-size: 11px; font-weight: 500; color: var(--muted); text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 14px; display: block; }
        .sec-h {
          font-size: clamp(36px,4.8vw,68px); font-weight: 700;
          line-height: .95; letter-spacing: clamp(-1.5px,-.03em,-2px);
          color: var(--black); margin-bottom: 18px;
        }
        .sec-p { font-size: 17px; font-weight: 400; color: var(--mid); line-height: 1.65; max-width: 540px; margin-bottom: 48px; }

        /* ── SERVICE CARDS ── */
        .sc-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; }
        .sc {
          border: 1px solid var(--border2); border-radius: var(--r2);
          overflow: hidden; background: #fff; cursor: default;
          transition: transform .35s var(--ease), box-shadow .35s var(--ease), border-color .2s;
        }
        .sc:hover { transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,0,0,.08); border-color: #d0d0d0; }
        .sc-top { height: 170px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .sc-id { font-size: 110px; font-weight: 800; color: rgba(0,0,0,.05); position: absolute; right: -8px; bottom: -18px; line-height: 1; letter-spacing: -4px; user-select: none; }
        .sc-tag-pill { position: absolute; top: 16px; left: 18px; font-size: 10px; font-weight: 600; color: rgba(0,0,0,.4); text-transform: uppercase; letter-spacing: 1.5px; background: rgba(255,255,255,.7); padding: 4px 10px; border-radius: 999px; backdrop-filter: blur(4px); }
        .sc-body { padding: 26px 28px 24px; }
        .sc-sub { font-size: 11px; font-weight: 500; color: var(--muted); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .sc-t { font-size: clamp(20px,1.7vw,25px); font-weight: 600; color: var(--black); margin-bottom: 10px; line-height: 1.2; letter-spacing: -.4px; }
        .sc-d { font-size: 14px; font-weight: 400; color: var(--mid); line-height: 1.65; margin-bottom: 18px; }
        .sc-blist { list-style: none; display: flex; flex-direction: column; gap: 6px; margin-bottom: 22px; }
        .sc-bi { font-size: 13px; font-weight: 400; color: var(--mid); display: flex; align-items: center; gap: 8px; }
        .sc-a {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 20px; border-radius: 999px;
          background: var(--black); color: #fff;
          font-size: 13px; font-weight: 500; text-decoration: none;
          transition: all .2s var(--ease); font-family: 'DM Sans', sans-serif;
        }
        .sc-a:hover { background: #333; transform: scale(1.03); }

        /* ── BLUE SECTION ── */
        .blue-sec {
          background: linear-gradient(155deg, #C0D4EA 0%, #AEC5E4 45%, #B4CCEC 100%);
          padding: clamp(72px,9vw,120px) var(--px);
        }

        /* ── STATS ── */
        .stats-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          border: 1px solid var(--border); border-radius: var(--r2); overflow: hidden;
        }
        .stat-cell {
          padding: clamp(30px,3.5vw,52px) clamp(22px,2.8vw,40px);
          position: relative; background: #fff;
        }
        .stat-cell:not(:last-child)::after {
          content: ''; position: absolute; right: 0; top: 15%; height: 70%;
          width: 1px; background: var(--border);
        }
        .stat-v { font-size: clamp(44px,4.8vw,66px); font-weight: 700; color: var(--black); line-height: 1; letter-spacing: -2px; margin-bottom: 6px; }
        .stat-l { font-size: 14px; font-weight: 400; color: var(--mid); }
        .stat-sub { font-size: 12px; font-weight: 400; color: var(--dim); margin-top: 4px; }

        /* ── APPROACH ── */
        .ap-row {
          display: grid; grid-template-columns: 60px 1fr 1fr; gap: 28px;
          padding: 32px 0; border-top: 1px solid var(--border); transition: background .12s;
        }
        .ap-row:last-child { border-bottom: 1px solid var(--border); }
        .ap-row:hover { background: rgba(0,0,0,.013); }
        .ap-n { font-size: 13px; font-weight: 400; color: var(--dim); padding-top: 4px; }
        .ap-t { font-size: clamp(17px,1.5vw,21px); font-weight: 600; color: var(--black); line-height: 1.2; letter-spacing: -.3px; }
        .ap-b { font-size: 14px; font-weight: 400; color: var(--mid); line-height: 1.65; }

        /* ── TECH ── */
        .tech-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .tech-pill {
          padding: 8px 16px; border-radius: 999px;
          border: 1px solid var(--border2); background: #fff;
          font-size: 13px; font-weight: 400; color: var(--text);
          display: flex; align-items: center; gap: 8px;
          transition: border-color .18s, background .18s, transform .18s; cursor: default;
        }
        .tech-pill:hover { border-color: #aaa; background: #FAFAFA; transform: translateY(-1px); }
        .tech-cat { font-size: 10px; font-weight: 500; color: var(--dim); text-transform: uppercase; letter-spacing: 1px; }

        /* ── TESTIMONIALS ── */
        .test-main {
          background: #fff; border: 1px solid var(--border2); border-radius: var(--r2);
          padding: clamp(32px,4vw,52px); position: relative; min-height: 180px;
        }
        .test-q { font-size: clamp(17px,1.7vw,22px); font-weight: 400; color: var(--text); line-height: 1.55; letter-spacing: -.1px; font-style: italic; margin-bottom: 28px; }
        .test-name { font-size: 15px; font-weight: 500; color: var(--black); }
        .test-role { font-size: 13px; font-weight: 400; color: var(--muted); margin-top: 1px; }
        .test-dot { width: 7px; height: 7px; border-radius: 50%; cursor: pointer; transition: background .2s, transform .2s; }

        /* ── PRICING ── */
        .plan-card {
          border: 1px solid var(--border2); border-radius: var(--r2);
          padding: 32px; background: #fff; display: flex; flex-direction: column;
          position: relative;
          transition: box-shadow .3s, border-color .3s, transform .3s;
        }
        .plan-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,.07); transform: translateY(-2px); }
        .plan-card.pop { border-color: var(--black); border-width: 2px; box-shadow: 0 0 0 4px rgba(10,10,10,.04), 0 16px 48px rgba(0,0,0,.08); }
        .plan-tag { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; display: inline-block; }
        .plan-price { font-size: 52px; font-weight: 700; letter-spacing: -2px; color: var(--black); line-height: 1; }
        .plan-cycle { font-size: 15px; font-weight: 400; color: var(--muted); }
        .plan-desc { font-size: 14px; font-weight: 400; color: var(--mid); line-height: 1.6; margin: 14px 0 22px; }
        .plan-btn {
          width: 100%; padding: 13px; border-radius: 999px;
          font-size: 14px; font-weight: 500; cursor: pointer;
          font-family: 'DM Sans', sans-serif; transition: all .2s var(--ease);
          border: none; margin-bottom: 22px;
        }
        .pb-ghost { background: #fff; color: var(--black); border: 1.5px solid var(--border) !important; border: none; }
        .pb-ghost:hover { background: #f5f5f5; }
        .pb-solid { background: var(--black); color: #fff; box-shadow: 0 3px 12px rgba(0,0,0,.18); }
        .pb-solid:hover { background: #222; transform: scale(1.02); }
        .plan-feat { font-size: 13.5px; font-weight: 400; color: var(--mid); line-height: 1.5; }

        /* ── CTA DARK ── */
        .cta-sec { position: relative; overflow: hidden; min-height: 440px; display: flex; align-items: center; background: var(--black); }
        .cta-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .2; filter: grayscale(20%); }
        .cta-ov  { position: absolute; inset: 0; background: linear-gradient(to right, rgba(10,10,10,.9) 0%, rgba(10,10,10,.5) 55%, transparent 100%); }
        .cta-body { position: relative; z-index: 1; padding: clamp(72px,9vw,120px) var(--px); max-width: var(--max); margin: 0 auto; width: 100%; }
        .cta-h { font-size: clamp(38px,5vw,76px); font-weight: 700; color: #fff; line-height: .95; letter-spacing: -2px; margin-bottom: 22px; }
        .cta-p { font-size: 17px; font-weight: 400; color: rgba(255,255,255,.55); max-width: 480px; line-height: 1.62; margin-bottom: 32px; }

        /* ── FOOTER ── */
        .ft { background: var(--black); padding: clamp(60px,7vw,96px) var(--px) 40px; }
        .ft-in { max-width: var(--max); margin: 0 auto; }
        .ft-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr; gap: clamp(24px,4vw,60px); margin-bottom: 60px; }
        .ft-brand-p { font-size: 14px; font-weight: 400; color: rgba(255,255,255,.35); line-height: 1.7; max-width: 260px; margin-top: 14px; }
        .ft-h { font-size: 11px; font-weight: 500; color: rgba(255,255,255,.3); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 18px; }
        .ft-links { display: flex; flex-direction: column; gap: 12px; }
        .ft-a { color: rgba(255,255,255,.5); text-decoration: none; font-size: 14px; font-weight: 400; transition: color .15s; }
        .ft-a:hover { color: #fff; }
        .ft-bot { border-top: 1px solid rgba(255,255,255,.07); padding-top: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 13px; font-weight: 400; color: rgba(255,255,255,.25); }
        .ft-bot-ls { display: flex; gap: 22px; }
        .ft-bot-a { color: rgba(255,255,255,.25); text-decoration: none; transition: color .15s; }
        .ft-bot-a:hover { color: rgba(255,255,255,.6); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1060px) {
          .nav-links { display: none; }
          .nav-login { display: none; }
          .mob-trigger { display: flex !important; }
          .hero-in { grid-template-columns: 1fr; }
          .sc-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .stat-cell:nth-child(2)::after { display: none; }
          .ap-row { grid-template-columns: 48px 1fr; }
          .ap-b { display: none; }
          .ft-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 680px) {
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .ft-grid { grid-template-columns: 1fr 1fr; }
          .ap-row { grid-template-columns: 1fr; }
          .ap-n { display: none; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════════════════════ */}
      <nav className={`nav${scrolled ? " up" : ""}`}>
        <div className="nav-in">
          <SypraLogo />

          <div className="nav-links">
            {NAV.map(link => (
              <div key={link.label} className="nav-item"
                onMouseEnter={() => hov(link.label)}
                onMouseLeave={lv}
              >
                <button className={`nav-btn${openDd === link.label ? " act" : ""}`}>
                  {link.label} {openDd === link.label ? null : <ChevD />}
                </button>
                <div className={`dd-mega${openDd === link.label ? " on" : ""}`}>
                  {link.items.map(it => (
                    <a href="#" key={it.t} className="dd-row" onClick={e => e.preventDefault()}>
                      <span className="dd-t">{it.t}</span>
                      <span className="dd-d">{it.d}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="nav-item">
              <button className="nav-btn" style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 999, padding: "0 18px", color: "#0A0A0A", fontWeight: 400 }}>
                Updates
              </button>
            </div>
          </div>

          <div className="nav-right">
            <button className="nav-search">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              Find a project
            </button>
            <button className="nav-login">Log in</button>
            <a href="#" className="nav-cta">Get started</a>
            <button className="mob-trigger" style={{ display: "none" }} onClick={() => setMob(true)}><MenuIco /></button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mob-drawer${mob ? " on" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
          <SypraLogo />
          <button onClick={() => setMob(false)} style={{ background: "none", border: "1px solid #e0e0e0", padding: 7, borderRadius: 8, cursor: "pointer" }}><XIco /></button>
        </div>
        {NAV.map(link => (
          <div key={link.label} style={{ borderBottom: "1px solid #f2f2f2", padding: "16px 0" }}>
            <p style={{ fontSize: 22, fontWeight: 600, color: "#0A0A0A", marginBottom: 10 }}>{link.label}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {link.items.map(it => (
                <a key={it.t} href="#" style={{ fontSize: 15, fontWeight: 400, color: "#666", textDecoration: "none" }}>{it.t}</a>
              ))}
            </div>
          </div>
        ))}
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
          <button className="nav-login" style={{ padding: "13px", borderRadius: 999, fontSize: 15, width: "100%", textAlign: "center" }}>Log in</button>
          <a href="#" className="nav-cta" style={{ padding: "13px", fontSize: 15, justifyContent: "center", borderRadius: 999 }}>Get started</a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="hero" style={{ animation: "sfadein .9s cubic-bezier(.22,1,.36,1) both" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 480, height: 480, background: "rgba(255,255,255,.18)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 360, height: 360, background: "rgba(255,255,255,.1)", borderRadius: "50%", pointerEvents: "none" }} />

        <div className="hero-in">
          <div>
            {/* Live badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,.55)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,.5)", borderRadius: 999,
              padding: "6px 14px", fontSize: 13, fontWeight: 400, color: "#2A2A2A", marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", animation: "spulse 2s infinite" }} />
              Now live — v3.0 with Predictive AI
            </div>

            <h1 className="hero-h1">
              Engineering.<br />
              Clients.<br />
              Nothing in<br />
              between.
            </h1>
            <p className="hero-p">
              Sypra gives your business a direct line to world-class engineering talent. No middlemen, no bloated retainers — just senior engineers who ship.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginBottom: 32 }}>
              <a href="#" className="btn-blk">Get started <ArrR s={15} /></a>
              <a href="#" className="btn-ghost">See how it works</a>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex" }}>
                {["#8BA5C8", "#9BB8D4", "#A8C4DC", "#B0CAE0", "#B8CDE8"].map((c, i) => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: "50%", background: c,
                    border: "2px solid rgba(255,255,255,.7)",
                    marginLeft: i ? -10 : 0, zIndex: 5 - i, position: "relative",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 600, color: "#fff",
                  }}>{String.fromCharCode(65 + i)}</div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 400, color: "#2D2D2D", lineHeight: 1.5 }}>
                <strong style={{ fontWeight: 600 }}>300+ projects</strong> delivered · <strong style={{ fontWeight: 600 }}>4.9/5</strong> rating
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}>
            <DashCard />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LOGOS BAR
      ══════════════════════════════════════════════════════════ */}
      <div className="logos-bar">
        <div className="logos-inner">
          <div className="logos-lbl">Certified technology partnerships</div>
          <div className="logos-row">
            {LOGOS.map(l => <div key={l} className="logo-item">{l}</div>)}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          CAPABILITIES
      ══════════════════════════════════════════════════════════ */}
      <section className="sec" ref={capRef}>
        <div className="sec-in">
          <div style={fade(capVis)}>
            <span className="sec-tag">Technical Capabilities</span>
            <h2 className="sec-h">Architected for reality.<br />Built for scale.</h2>
            <p className="sec-p">We engineer reliable, high-performance systems so your internal teams can focus on driving business strategy — not managing technical debt.</p>
          </div>

          <div className="sc-grid">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="sc" ref={el => svcRefs.current[i] = el} style={fade(svcVis[i], i * .1)}>
                <div className="sc-top" style={{ background: s.color }}>
                  <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: 52, fontWeight: 800, color: "rgba(0,0,0,.45)", letterSpacing: "-2px", lineHeight: 1 }}>{s.id}</div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: "rgba(0,0,0,.3)", marginTop: 4 }}>{s.sub}</div>
                  </div>
                  <div className="sc-id">{s.id}</div>
                  <div className="sc-tag-pill">{s.tag}</div>
                </div>
                <div className="sc-body">
                  <div className="sc-sub">{s.sub}</div>
                  <h3 className="sc-t">{s.name}</h3>
                  <p className="sc-d">{s.detail}</p>
                  <ul className="sc-blist">
                    {s.bullets.map((b, bi) => (
                      <li key={bi} className="sc-bi">
                        <span style={{ color: s.accent, flexShrink: 0 }}><Chk c={s.accent} /></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="sc-a">Learn more <ArrR s={13} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BLUE SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="blue-sec" ref={blueRef}>
        <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
          <div style={fade(blueVis)}>

            {/* Split top */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "flex-start", marginBottom: 60 }}>
              <div>
                <span className="sec-tag" style={{ color: "#4A6080" }}>Our Methodology</span>
                <h2 style={{ fontSize: "clamp(36px,5vw,68px)", fontWeight: 700, lineHeight: ".95", letterSpacing: "-2px", color: "#0A0A0A", marginBottom: 22 }}>
                  Turning ambitions<br />into businesses
                </h2>
                <p style={{ fontSize: 17, fontWeight: 400, color: "#2A2A2A", lineHeight: 1.62, maxWidth: 440, marginBottom: 32 }}>
                  Sypra gives you a direct line to enterprise-grade engineering. Build faster, scale smarter, and own every line of your codebase.
                </p>
                <div style={{ display: "flex", gap: 10 }}>
                  <a href="#" className="btn-blk">Explore capabilities <ArrR s={14} /></a>
                  <a href="#" className="btn-ghost">See our approach</a>
                </div>
              </div>

              {/* Stats mini card */}
              <div style={{ background: "#fff", borderRadius: 22, padding: 28, boxShadow: "0 20px 60px rgba(0,0,0,.10)", maxWidth: 360 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#22C55E", marginBottom: 6 }}>● 99.9% Uptime — Live</div>
                <div style={{ fontSize: 44, fontWeight: 700, color: "#0A0A0A", letterSpacing: "-2px", lineHeight: 1, marginBottom: 4 }}>300+</div>
                <div style={{ fontSize: 14, fontWeight: 400, color: "#888", marginBottom: 22 }}>Enterprise deployments delivered</div>
                {STATS.map(s => (
                  <div key={s.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderTop: "1px solid #F0F0F0" }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 400, color: "#444" }}>{s.l}</div>
                      <div style={{ fontSize: 11, fontWeight: 400, color: "#bbb", marginTop: 1 }}>{s.sub}</div>
                    </div>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.5px" }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two col */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,60px)" }}>
              {[
                { h: "More ways to deliver", p: "Build lasting solutions outside the typical agency model, with delivery streams ranging from cloud migration to ongoing managed operations.", cta: "Explore capabilities" },
                { h: "Unlock growth", p: "Sypra isn't just for technical delivery — it's for professional growth too. Get in-depth analytics about your projects and tap into our growing partner network.", cta: "See our approach" },
              ].map((col, i) => (
                <div key={i}>
                  <h3 style={{ fontSize: "clamp(20px,1.8vw,24px)", fontWeight: 600, color: "#0A0A0A", letterSpacing: "-.3px", marginBottom: 10 }}>{col.h}</h3>
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#333", lineHeight: 1.65, marginBottom: 20 }}>{col.p}</p>
                  <a href="#" style={{
                    display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 22px",
                    borderRadius: 999, background: "#0A0A0A", color: "#fff",
                    fontSize: 14, fontWeight: 500, textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all .2s cubic-bezier(.22,1,.36,1)",
                    boxShadow: "0 3px 12px rgba(0,0,0,.18)",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#222"; e.currentTarget.style.transform = "scale(1.03)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#0A0A0A"; e.currentTarget.style.transform = "scale(1)"; }}
                  >{col.cta} <ArrR s={13} /></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════════ */}
      <section className="sec" ref={stRef}>
        <div className="sec-in">
          <div style={fade(stVis)}>
            <span className="sec-tag">Track Record</span>
            <h2 className="sec-h">Proven at the<br />enterprise level.</h2>
            <p className="sec-p" style={{ marginBottom: 40 }}>Numbers from real client engagements — not marketing estimates.</p>
          </div>
          <div className="stats-grid" style={fade(stVis, .12)}>
            {STATS.map(s => (
              <div key={s.l} className="stat-cell">
                <div className="stat-v">{s.v}</div>
                <div className="stat-l">{s.l}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          APPROACH
      ══════════════════════════════════════════════════════════ */}
      <section className="sec" style={{ paddingTop: 0 }} ref={apRef}>
        <div className="sec-in">
          <div style={fade(apVis)}>
            <span className="sec-tag">Why Sypra</span>
            <h2 className="sec-h">A better way to<br />build software.</h2>
            <p className="sec-p">We operate as a seamless extension of your organisation, prioritising clear communication, rigorous testing, and measurable business impact.</p>
          </div>
          <div>
            {APPROACH.map((w, i) => (
              <div key={w.n} className="ap-row" ref={el => apRefs.current[i] = el} style={fade(apRVis[i], i * .08)}>
                <div className="ap-n">{w.n}</div>
                <div className="ap-t">{w.h}</div>
                <div className="ap-b">{w.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════════════════════════ */}
      <section className="sec" style={{ background: "#FAF9F7", paddingTop: "clamp(60px,7vw,96px)", paddingBottom: "clamp(60px,7vw,96px)" }} ref={techRef}>
        <div className="sec-in">
          <div style={fade(techVis)}>
            <span className="sec-tag">Technology</span>
            <h2 className="sec-h" style={{ marginBottom: 14 }}>We build with the<br />best stack available.</h2>
            <p className="sec-p" style={{ marginBottom: 36 }}>No vendor lock-in, no technology agenda. We pick the right tool for the job and hand you full ownership of the codebase.</p>
          </div>

          <div className="tech-grid" style={fade(techVis, .08)}>
            {TECH_STACK.map((t, i) => (
              <div key={i} className="tech-pill">
                <span>{t.label}</span>
                <span className="tech-cat">{t.cat}</span>
              </div>
            ))}
          </div>

          {/* Process steps */}
          <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, ...fade(techVis, .18) }}>
            {[
              { n: "01", h: "Discovery call",          d: "30-minute architecture conversation. No sales deck. Just a real technical discussion about your problem." },
              { n: "02", h: "Scoped proposal",          d: "A fixed-price proposal with milestones within 48 hours. No vague estimates or hourly billing surprises." },
              { n: "03", h: "Team assembled in 7 days", d: "We match your engagement with the right engineers — no generalists handed off to juniors after signing." },
              { n: "04", h: "Ship & iterate",            d: "First deployable increment in week two. Continuous delivery with weekly stakeholder demos included." },
            ].map((step, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid var(--border2)",
                borderRadius: 18, padding: 22,
                transition: "box-shadow .3s, transform .3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,.07)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: "#bbb", letterSpacing: "1.5px", marginBottom: 10 }}>{step.n}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "#0A0A0A", marginBottom: 8, letterSpacing: "-.2px" }}>{step.h}</h4>
                <p style={{ fontSize: 13.5, fontWeight: 400, color: "#777", lineHeight: 1.6 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════════ */}
      <section className="sec" ref={testRef}>
        <div className="sec-in">
          <div style={fade(testVis)}>
            <span className="sec-tag">Client stories</span>
            <h2 className="sec-h">What engineers<br />actually say.</h2>
            <p className="sec-p" style={{ marginBottom: 32 }}>Real words from engineering leaders who've shipped production systems with Sypra.</p>
          </div>

          {/* Featured */}
          <div className="test-main" style={fade(testVis, .1)}>
            <div style={{ position: "absolute", top: 24, right: 30, fontSize: 80, fontWeight: 700, color: "#f2f2f2", lineHeight: 1, userSelect: "none" }}>"</div>
            <p className="test-q">"{TESTIMONIALS[activeT].quote}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: TESTIMONIALS[activeT].color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 600, color: "#fff",
              }}>{TESTIMONIALS[activeT].av}</div>
              <div>
                <div className="test-name">{TESTIMONIALS[activeT].name}</div>
                <div className="test-role">{TESTIMONIALS[activeT].role} · {TESTIMONIALS[activeT].company}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 5, marginTop: 22 }}>
              {TESTIMONIALS.map((_, i) => (
                <div key={i} className="test-dot"
                  onClick={() => setActiveT(i)}
                  style={{ background: i === activeT ? "#0A0A0A" : "#e0e0e0", transform: i === activeT ? "scale(1.25)" : "scale(1)" }}
                />
              ))}
            </div>
          </div>

          {/* Secondary cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12, marginTop: 12 }}>
            {TESTIMONIALS.filter((_, i) => i !== activeT).slice(0, 3).map((t, i) => (
              <div key={i} style={{
                background: "#FAF9F7", border: "1px solid var(--border2)", borderRadius: 18, padding: 20,
                cursor: "pointer", transition: "background .15s, border-color .15s",
                ...fade(testVis, .14 + i * .07),
              }}
                onClick={() => setActiveT(TESTIMONIALS.indexOf(t))}
                onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#ccc"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#FAF9F7"; e.currentTarget.style.borderColor = "var(--border2)"; }}
              >
                <p style={{ fontSize: 14, fontWeight: 400, color: "#555", lineHeight: 1.65, marginBottom: 14, fontStyle: "italic" }}>
                  "{t.quote.slice(0, 120)}…"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#fff" }}>{t.av}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#0A0A0A" }}>{t.name}</div>
                    <div style={{ fontSize: 11, fontWeight: 400, color: "#aaa" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Marquee */}
          <div style={{ marginTop: 56, overflow: "hidden", ...fade(testVis, .3) }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: "#ccc", textTransform: "uppercase", letterSpacing: "2.5px", textAlign: "center", marginBottom: 16 }}>Used by teams at</div>
            <div style={{ display: "flex", animation: "smarq 24s linear infinite", width: "max-content", gap: 60 }}>
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span key={i} style={{ fontSize: 15, fontWeight: 600, color: "#ccc", whiteSpace: "nowrap" }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════════════════ */}
      <section className="sec" style={{ background: "#FAF9F7" }} ref={planRef}>
        <div className="sec-in">
          <div style={fade(planVis)}>
            <span className="sec-tag">Pricing</span>
            <h2 className="sec-h">Simple pricing.<br />No surprises.</h2>
            <p className="sec-p">All engagements start with a discovery call. Pricing scales with scope — not with the number of Zoom calls.</p>

            {/* Toggle */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "#EDECEA", border: "1px solid #E0DED9", borderRadius: 999, padding: 4, marginBottom: 40 }}>
              {["Monthly", "Annual"].map((lbl, i) => (
                <button key={lbl} onClick={() => setAnnual(i === 1)} style={{
                  padding: "8px 18px", borderRadius: 999, border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, fontWeight: (annual === (i === 1)) ? 500 : 400,
                  background: (annual === (i === 1)) ? "#fff" : "transparent",
                  color: (annual === (i === 1)) ? "#0A0A0A" : "#888",
                  boxShadow: (annual === (i === 1)) ? "0 1px 4px rgba(0,0,0,.07)" : "none",
                  transition: "all .2s", display: "flex", alignItems: "center", gap: 7,
                }}>
                  {lbl}
                  {i === 1 && <span style={{ fontSize: 10, fontWeight: 600, background: annual ? "rgba(0,0,0,.07)" : "transparent", color: annual ? "#444" : "#bbb", padding: "1px 7px", borderRadius: 999, transition: "all .2s" }}>Save 15%</span>}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 16 }}>
            {PLANS.map((plan, i) => (
              <div
                key={i}
                className={`plan-card${plan.popular ? " pop" : ""}`}
                ref={el => planRefs.current[i] = el}
                style={fade(planRVis[i], i * .1)}
              >
                {plan.popular && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                    <span style={{ background: "#0A0A0A", color: "#fff", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", padding: "5px 16px", borderRadius: 999 }}>Most popular</span>
                  </div>
                )}

                <div className="plan-tag" style={{ color: plan.popular ? "#0A0A0A" : "#888" }}>{plan.name}</div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  {plan.price ? (
                    <>
                      <span style={{ fontSize: 13, fontWeight: 400, color: "#888", alignSelf: "flex-start", marginTop: 12 }}>from $</span>
                      <span className="plan-price">
                        {annual && plan.name !== "Enterprise"
                          ? Math.round(parseInt(plan.price.replace(",", "")) * .85).toLocaleString()
                          : plan.price}
                      </span>
                      <span className="plan-cycle">{plan.cycle}</span>
                    </>
                  ) : (
                    <span className="plan-price" style={{ fontSize: 40 }}>Custom</span>
                  )}
                </div>

                <p className="plan-desc">{plan.desc}</p>

                <button className={`plan-btn ${plan.style === "ghost" ? "pb-ghost" : "pb-solid"}`}
                  style={plan.style === "ghost" ? { border: "1.5px solid #e0e0e0" } : {}}
                >
                  {plan.cta}
                </button>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {plan.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                      <span style={{ flexShrink: 0, marginTop: 1 }}><Chk /></span>
                      <span className="plan-feat">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 28, fontSize: 14, fontWeight: 400, color: "#aaa", ...fade(planVis, .4) }}>
            All engagements begin with a free 30-minute discovery call. No commitment required. Questions?{" "}
            <a href="#" style={{ color: "#0A0A0A", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 3 }}>Chat with an architect</a>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════ */}
      <section className="sec" style={{ paddingTop: "clamp(56px,7vw,88px)", paddingBottom: "clamp(56px,7vw,88px)" }}>
        <div className="sec-in">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,64px)", alignItems: "start" }}>
            <div>
              <span className="sec-tag">FAQ</span>
              <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-1.5px", color: "#0A0A0A", lineHeight: ".95", marginBottom: 16 }}>
                Common questions,<br />honest answers.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: "#777", lineHeight: 1.65 }}>
                If it's not here, just book a call. We don't bite and we don't pitch.
              </p>
            </div>
            <div>
              {[
                { q: "Do you work with early-stage startups?",  a: "Yes — about 30% of our work is with startups building their first production system. We scope carefully to fit your budget." },
                { q: "Who actually does the work?",             a: "Senior engineers with 8+ years of experience. No juniors handed off after the sales call." },
                { q: "Do we own the code?",                     a: "100%. All IP is transferred to you on day one. We never retain rights to anything we build for you." },
                { q: "How fast can you start?",                 a: "For most engagements, we can have a team assembled and started within 7 business days of signing." },
                { q: "What if we're not happy?",                a: "We include a two-week satisfaction guarantee on all new engagements. If it's not working, we refund and walk away." },
              ].map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA — DARK
      ══════════════════════════════════════════════════════════ */}
      <div className="cta-sec" ref={ctaRef}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt="Office"
          className="cta-img"
        />
        <div className="cta-ov" />
        <div className="cta-body">
          <div style={fade(ctaVis)}>
            <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: "2.5px", display: "block", marginBottom: 16 }}>Get started</span>
            <h2 className="cta-h">Ready to upgrade<br />your tech foundation?</h2>
            <p className="cta-p">Schedule a technical consultation with our senior architects. No sales pressure — just a clear conversation about what you actually need.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="#" className="btn-wht">Get started <ArrR s={15} /></a>
              <a href="#" className="btn-owht">Already a client? Log in</a>
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: "12px 32px", flexWrap: "wrap" }}>
              {["No upfront commitment", "Senior engineers only", "First sprint in 2 weeks", "IP is always yours"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,.4)" }}>
                  <Chk c="rgba(255,255,255,.35)" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer className="ft" ref={ftRef}>
        <div className="ft-in">
          {/* Newsletter */}
          <div style={{
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: 20,
            padding: "26px 28px", background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.07)", borderRadius: 18, marginBottom: 52,
            ...fade(ftVis),
          }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#fff", marginBottom: 4 }}>The Sypra technical newsletter</div>
              <div style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,.35)" }}>Architecture deep-dives, case studies, and honest engineering takes. Monthly.</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="email" placeholder="you@company.com"
                style={{
                  background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: 999, padding: "10px 18px", fontSize: 14, fontWeight: 400,
                  color: "#fff", fontFamily: "'DM Sans', sans-serif", outline: "none",
                  width: 240, transition: "border-color .2s",
                }}
                onFocus={e => e.currentTarget.style.borderColor = "rgba(255,255,255,.35)"}
                onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,.12)"}
              />
              <button style={{
                background: "#fff", color: "#0A0A0A", padding: "10px 20px",
                borderRadius: 999, border: "none", fontSize: 14, fontWeight: 500,
                cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "background .15s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#eee"}
                onMouseLeave={e => e.currentTarget.style.background = "#fff"}
              >Subscribe</button>
            </div>
          </div>

          {/* Links */}
          <div className="ft-grid" style={fade(ftVis, .1)}>
            <div>
              <SypraLogo dark />
              <p className="ft-brand-p">Sypra partners with ambitious organisations to design, build, and operate resilient technology solutions at global scale.</p>
              <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                {["𝕏", "in", "GH"].map((s, i) => (
                  <a key={i} href="#" style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: "rgba(255,255,255,.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,.4)", fontSize: 11, fontWeight: 600,
                    textDecoration: "none", transition: "all .15s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.15)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.07)"; e.currentTarget.style.color = "rgba(255,255,255,.4)"; }}
                  >{s}</a>
                ))}
              </div>
            </div>
            {FOOTER_COLS.map(col => (
              <div key={col.h}>
                <div className="ft-h">{col.h}</div>
                <div className="ft-links">
                  {col.links.map(l => <a key={l} href="#" className="ft-a">{l}</a>)}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="ft-bot" style={fade(ftVis, .2)}>
            <div>© 2026 Sypra Infotech Pvt. Ltd. All rights reserved.</div>
            <div className="ft-bot-ls">
              <a href="#" className="ft-bot-a">Privacy Policy</a>
              <a href="#" className="ft-bot-a">Terms of Service</a>
              <a href="#" className="ft-bot-a">Cookie Policy</a>
              <a href="#" className="ft-bot-a">Accessibility</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", animation: "spulse 2s infinite" }} />
              <span style={{ fontSize: 12, fontWeight: 400, color: "#22C55E" }}>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}