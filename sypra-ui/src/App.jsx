import { useState, useEffect, useRef } from "react";

/* ── DATA ─────────────────────────────────────────────────────── */
const NAV = [
  { label: "Capabilities", items: ["Custom Software Engineering", "Cloud & DevOps", "Data & Applied AI", "Enterprise Integration", "Security & Auditing"] },
  { label: "Features",     items: ["Delivery Methodology", "Managed Operations", "Team Augmentation", "SLA Guarantees"] },
  { label: "Pricing",      items: ["Startup Plan", "Growth Plan", "Enterprise Plan", "Custom Engagement"] },
  { label: "Resources",    items: ["Technical Blog", "Case Studies", "Architecture Patterns", "System Status"] },
];

const SERVICES = [
  { id:"01", name:"Custom Software Engineering", sub:"From web apps to mobile platforms", detail:"We build core business applications, progressive web platforms, and mobile solutions using modern stacks like React, Node.js, and scalable microservices.", color:"#EBF3FF" },
  { id:"02", name:"Cloud & Infrastructure",       sub:"AWS, Azure, Google Cloud",          detail:"Seamless migration, container orchestration, and resilient infrastructure management across all major cloud providers.", color:"#FFF3EB" },
  { id:"03", name:"Data & Applied AI",            sub:"ML pipelines & automation",          detail:"Practical machine learning models, predictive pipelines, and automated workflows designed to solve specific operational bottlenecks.", color:"#EBFFF0" },
  { id:"04", name:"Enterprise Integration",       sub:"SAP, Oracle, Workday",               detail:"Unifying fragmented data. We handle complex ERP and third-party API integrations to create a single source of truth.", color:"#F3EBFF" },
];

const APPROACH = [
  { n:"01", h:"Engineering led, not sales led.",  b:"You speak directly with senior architects who understand the technical reality of your business problem." },
  { n:"02", h:"No black boxes.",                   b:"Complete transparency through daily standups, live dashboards, and regular code reviews. You always own your IP." },
  { n:"03", h:"Priced by outcomes.",               b:"We don't bill for hours spent staring at screens. We structure engagements around fixed deliverables and measurable business impact." },
  { n:"04", h:"Day-two support standard.",          b:"Launch is just the beginning. Our contracts include proactive monitoring, SLA-backed uptime, and ongoing iterative improvements." },
];

const STATS = [
  { v:"10+",   l:"Years in business" },
  { v:"300+",  l:"Enterprise deployments" },
  { v:"99.9%", l:"SLA uptime guaranteed" },
  { v:"98%",   l:"Client retention rate" },
];

const LOGOS = ["SAP Partner","AWS Advanced","Microsoft Azure","Google Cloud","Oracle Certified","Kubernetes","Terraform"];

const FOOTER_COLS = [
  { h:"Capabilities", links:["Custom Software Eng.","Cloud & Infrastructure","Data & Applied AI","Enterprise Integration","Security & Auditing"] },
  { h:"Company",      links:["About Sypra","Leadership","Careers","Press","Contact Us"] },
  { h:"Resources",    links:["Technical Blog","Case Studies","Architecture Guide","System Status","Security Docs"] },
  { h:"Legal",        links:["Privacy Policy","Terms of Service","Cookie Policy","Security Disclosures","Accessibility"] },
];

/* ── PATREON P LOGO (exact style) ────────────────────────────── */
function SypraLogo({ dark = false }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8, textDecoration:"none", cursor:"pointer" }}>
      {/* "P"-style blob logo like Patreon */}
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="17" fill={dark ? "#fff" : "#0A0A0A"} />
        <text x="17" y="23" textAnchor="middle" fontSize="18" fontWeight="900"
          fill={dark ? "#0A0A0A" : "#fff"}
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
          style={{ userSelect:"none" }}>S</text>
      </svg>
      <span style={{
        fontSize:20, fontWeight:700, letterSpacing:"-0.5px",
        color: dark ? "#fff" : "#0A0A0A",
        fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
      }}>Sypra</span>
    </div>
  );
}

/* ── PHONE MOCKUP (shows dashboard card) ────────────────────── */
function PhoneMockup() {
  return (
    <div style={{
      width:320, background:"#fff", borderRadius:32,
      boxShadow:"0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
      overflow:"hidden", flexShrink:0,
    }}>
      {/* Phone top bar */}
      <div style={{ background:"#0A0A0A", padding:"18px 20px 14px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ fontSize:14, fontWeight:600, color:"#fff" }}>Dashboard</div>
        <div style={{ display:"flex", gap:6 }}>
          {["#555","#555","#888"].map((c,i)=><div key={i} style={{ width:8,height:8,borderRadius:"50%",background:c }}/>)}
        </div>
      </div>
      {/* Status card */}
      <div style={{ background:"#0A0A0A", padding:"0 20px 20px" }}>
        <div style={{ fontSize:12, color:"#22C55E", fontWeight:600, marginBottom:4 }}>● Live deployments</div>
        <div style={{ fontSize:34, fontWeight:800, color:"#fff", letterSpacing:"-1px" }}>$16,414</div>
        <div style={{ fontSize:12, color:"rgba(255,255,255,.4)", marginTop:2 }}>Monthly infrastructure savings</div>
        {/* Mini chart */}
        <svg width="100%" height="60" viewBox="0 0 280 60" style={{ marginTop:12 }}>
          <polyline points="0,50 40,40 80,42 120,30 160,28 200,18 240,14 280,8"
            fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="3,3"/>
          <polyline points="0,50 40,40 80,42 120,30 160,28 200,18 240,14 280,8"
            fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="280" cy="8" r="4" fill="#fff"/>
        </svg>
      </div>
      {/* Deployments list */}
      <div style={{ padding:"0 0 4px" }}>
        {[
          { label:"Q4 2023 · Enterprise", val:"$42,800", up:true },
          { label:"Q3 2023 · Mid-Market",  val:"$36,200", up:true },
          { label:"Q2 2023 · Startup",     val:"$28,100", up:false },
          { label:"Q1 2023 · Enterprise",  val:"$31,600", up:true },
        ].map((row,i)=>(
          <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"13px 20px", borderBottom:"1px solid #F2F2F2" }}>
            <div>
              <div style={{ fontSize:13, fontWeight:500, color:"#0A0A0A" }}>{row.label}</div>
              <div style={{ fontSize:11, color:"#888", marginTop:1 }}>Completed</div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ fontSize:14, fontWeight:700, color:"#0A0A0A" }}>{row.val}</span>
              <span style={{ fontSize:12, color: row.up ? "#22C55E":"#EF4444" }}>{row.up?"↑":"↓"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CHEVRON ─────────────────────────────────────────────────── */
const Chev = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
);
const ArrR = ({s=16}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const MenuIco = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
);
const XIco = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
);

/* ── APP ─────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled]   = useState(false);
  const [openDd,   setOpenDd]     = useState(null);
  const [mob,      setMob]        = useState(false);
  const [vis,      setVis]        = useState({});
  const [activeNav, setActiveNav] = useState(null);
  const ddTimer = useRef(null);
  const refs    = useRef({});

  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY > 10);
    window.addEventListener("scroll",fn,{passive:true});
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  useEffect(()=>{
    const ob = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) setVis(v=>({...v,[e.target.dataset.k]:true})); });
    },{threshold:0.1});
    Object.values(refs.current).forEach(el=>el&&ob.observe(el));
    return ()=>ob.disconnect();
  },[]);

  const r = k => el => { if(el){ refs.current[k]=el; el.dataset.k=k; } };
  const a = (k,d=0,axis="Y") => ({
    opacity: vis[k]?1:0,
    transform: vis[k]?"translate(0,0)":`translate${axis}(${axis==="Y"?"28px":"−20px"})`,
    transition:`opacity .65s cubic-bezier(.22,1,.36,1) ${d}s, transform .65s cubic-bezier(.22,1,.36,1) ${d}s`,
  });

  const hov = l => { clearTimeout(ddTimer.current); setOpenDd(l); setActiveNav(l); };
  const lv  = ()  => { ddTimer.current = setTimeout(()=>{ setOpenDd(null); setActiveNav(null); }, 180); };

  // ── RENDER
  return (
    <div style={{ fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif", background:"#fff", color:"#0A0A0A", overflowX:"hidden" }}>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        :root{
          --black:#0A0A0A; --blue-hero:#B8CDE8; --blue-mid:#A0BCE0;
          --border:#E5E5E5; --muted:#767676; --px:clamp(18px,4.5vw,72px);
          --max:1440px; --ease:cubic-bezier(.22,1,.36,1);
        }
        ::-webkit-scrollbar{width:5px;background:#fff}
        ::-webkit-scrollbar-thumb{background:#ddd;border-radius:99px}

        /* NAV */
        .nav{
          position:sticky;top:0;z-index:1000;
          background:#fff;
          border-bottom:1px solid transparent;
          transition:border-color .25s, box-shadow .25s;
        }
        .nav.up{ border-bottom-color:var(--border); box-shadow:0 1px 0 rgba(0,0,0,.04); }
        .ni{ max-width:var(--max);margin:0 auto;padding:0 var(--px);height:66px;display:flex;align-items:center;gap:0 }

        /* Nav links */
        .nl{ display:flex;align-items:stretch;height:100%;margin-right:auto;margin-left:40px }
        .ni-item{ position:relative;display:flex;align-items:stretch }
        .nb{
          background:none;border:none;padding:0 14px;
          font-size:15px;font-weight:500;color:var(--muted);
          cursor:pointer;display:flex;align-items:center;gap:5px;
          transition:color .18s; white-space:nowrap;
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
        }
        .nb:hover,.nb.active{color:var(--black)}
        /* Patreon-style pill active state */
        .nb.pill-active{
          background:var(--black);color:#fff;
          border-radius:999px;padding:0 18px;
          transition:background .2s,color .2s;
        }

        /* Dropdown */
        .dd{
          position:absolute;top:calc(100% + 4px);left:0;
          min-width:220px;background:#fff;
          border:1px solid var(--border);border-radius:12px;padding:6px;
          box-shadow:0 12px 40px rgba(0,0,0,.10),0 2px 6px rgba(0,0,0,.04);
          opacity:0;pointer-events:none;
          transform:translateY(4px) scale(.98);
          transition:all .18s var(--ease);transform-origin:top left;
        }
        .dd.on{opacity:1;pointer-events:all;transform:translateY(0) scale(1)}
        .dda{
          display:block;padding:9px 14px;
          font-size:14px;font-weight:400;color:#333;
          text-decoration:none;border-radius:8px;
          transition:background .12s,color .12s;
        }
        .dda:hover{background:#F5F5F5;color:var(--black)}

        /* Nav right */
        .nr{display:flex;align-items:center;gap:10px}
        .btn-search{
          display:flex;align-items:center;gap:8px;
          padding:8px 18px;border-radius:999px;
          border:1px solid var(--border);background:#fff;
          font-size:14px;font-weight:400;color:var(--muted);
          cursor:pointer;transition:border-color .2s,color .2s;
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
          white-space:nowrap;
        }
        .btn-search:hover{border-color:#999;color:var(--black)}
        .btn-login{
          padding:9px 20px;border-radius:999px;
          border:1px solid var(--border);background:#fff;
          font-size:15px;font-weight:500;color:var(--black);
          cursor:pointer;transition:all .18s var(--ease);white-space:nowrap;
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
        }
        .btn-login:hover{background:#F5F5F5;border-color:#ccc}
        .btn-start{
          padding:10px 22px;border-radius:999px;
          border:none;background:var(--black);color:#fff;
          font-size:15px;font-weight:700;
          cursor:pointer;transition:all .2s var(--ease);white-space:nowrap;
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
          box-shadow:0 2px 8px rgba(0,0,0,.15);
        }
        .btn-start:hover{background:#222;transform:scale(1.03);box-shadow:0 4px 16px rgba(0,0,0,.22)}
        .btn-start:active{transform:scale(.98)}
        .mob-btn{
          display:none!important;background:none;border:1px solid var(--border);
          padding:7px;border-radius:8px;cursor:pointer;color:var(--black);
          align-items:center;justify-content:center;
        }

        /* MOBILE DRAWER */
        .mob-drawer{
          position:fixed;inset:0;z-index:2000;background:#fff;
          padding:20px var(--px);overflow-y:auto;
          transform:translateX(100%);transition:transform .36s var(--ease);
        }
        .mob-drawer.on{transform:translateX(0)}
        .mob-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:40px}
        .mob-close{background:none;border:1px solid var(--border);padding:7px;border-radius:8px;cursor:pointer;color:var(--black)}
        .mob-link{
          display:block;padding:18px 0;
          font-size:24px;font-weight:700;color:var(--black);
          text-decoration:none;border-bottom:1px solid var(--border);
          transition:color .18s;
        }
        .mob-link:hover{color:var(--muted)}

        /* HERO */
        .hero{
          background:linear-gradient(160deg,#c8d8f0 0%,#b0c8e8 30%,#a8c0e4 60%,#b8ccec 100%);
          padding:0 var(--px);min-height:580px;position:relative;overflow:hidden;
        }
        .hero-in{
          max-width:var(--max);margin:0 auto;
          display:grid;grid-template-columns:1fr auto;
          gap:40px;align-items:center;
          padding:clamp(60px,8vh,100px) 0 clamp(60px,8vh,100px);
        }
        .hero-h1{
          font-size:clamp(56px,8.5vw,120px);
          font-weight:800;line-height:0.94;
          letter-spacing:-3px;color:var(--black);
          margin-bottom:32px;
        }
        .hero-p{
          font-size:clamp(16px,1.4vw,20px);color:#2A2A2A;
          line-height:1.6;max-width:520px;margin-bottom:32px;font-weight:400;
        }
        .hero-btns{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
        .btn-hero-black{
          display:inline-flex;align-items:center;gap:8px;
          padding:14px 28px;border-radius:999px;
          background:var(--black);color:#fff;
          font-size:16px;font-weight:700;border:none;cursor:pointer;
          text-decoration:none;transition:all .22s var(--ease);
          box-shadow:0 4px 16px rgba(0,0,0,.2);
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
        }
        .btn-hero-black:hover{background:#222;transform:scale(1.04);box-shadow:0 8px 28px rgba(0,0,0,.28)}
        .btn-hero-black:active{transform:scale(.98)}
        .btn-hero-ghost{
          display:inline-flex;align-items:center;gap:8px;
          padding:14px 28px;border-radius:999px;
          background:rgba(255,255,255,0.6);color:var(--black);
          font-size:16px;font-weight:600;
          border:1px solid rgba(0,0,0,.12);cursor:pointer;
          text-decoration:none;backdrop-filter:blur(8px);
          transition:all .22s var(--ease);
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
        }
        .btn-hero-ghost:hover{background:rgba(255,255,255,0.85)}

        /* LOGOS */
        .logos-sec{
          padding:48px var(--px);border-bottom:1px solid var(--border);
        }
        .logos-in{max-width:var(--max);margin:0 auto}
        .logos-label{font-size:12px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:1.8px;margin-bottom:20px}
        .logos-row{display:flex;gap:clamp(20px,4vw,56px);flex-wrap:wrap;align-items:center}
        .logo-item{font-size:14px;font-weight:700;color:#C0C0C0;transition:color .2s;cursor:default;letter-spacing:.02em}
        .logo-item:hover{color:var(--black)}

        /* PAGE-WIDE SECTIONS */
        .sec{padding:clamp(72px,9vw,120px) var(--px)}
        .sec-in{max-width:var(--max);margin:0 auto}

        /* SECTION HEADER */
        .sec-lbl{font-size:12px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;display:block}
        .sec-h{
          font-size:clamp(36px,5vw,72px);font-weight:800;
          color:var(--black);line-height:0.96;letter-spacing:-2px;
          margin-bottom:20px;max-width:860px;
        }
        .sec-p{font-size:17px;color:var(--muted);line-height:1.65;max-width:560px;margin-bottom:52px}

        /* CARDS GRID */
        .cg{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
        .sc{
          border:1px solid var(--border);border-radius:20px;
          overflow:hidden;background:#fff;
          transition:transform .35s var(--ease),box-shadow .35s var(--ease),border-color .25s;
          cursor:default;
        }
        .sc:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.08);border-color:#ccc}
        .sc-color{height:180px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .sc-num-bg{font-size:120px;font-weight:900;color:rgba(0,0,0,.06);position:absolute;right:-10px;bottom:-20px;line-height:1;letter-spacing:-4px;user-select:none}
        .sc-body{padding:28px 28px 24px}
        .sc-sub{font-size:12px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px}
        .sc-t{font-size:clamp(20px,1.8vw,26px);font-weight:800;color:var(--black);margin-bottom:10px;line-height:1.2;letter-spacing:-.5px}
        .sc-d{font-size:14px;color:var(--muted);line-height:1.65;margin-bottom:20px}
        .sc-a{
          display:inline-flex;align-items:center;gap:6px;
          padding:9px 20px;border-radius:999px;
          background:var(--black);color:#fff;
          font-size:13px;font-weight:700;text-decoration:none;
          transition:all .2s var(--ease);
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
        }
        .sc-a:hover{background:#333;transform:scale(1.03)}

        /* BLUE SECTION (Patreon's blue gradient sections) */
        .blue-sec{
          background:linear-gradient(160deg,#b8cce8 0%,#a8c4e4 50%,#b0cce8 100%);
          padding:clamp(72px,9vw,120px) var(--px);
        }
        .blue-sec .sec-h{color:var(--black)}
        .blue-sec .sec-p{color:#333}

        /* FEATURE SPLIT */
        .feat-split{
          display:grid;grid-template-columns:auto 1fr;
          gap:clamp(40px,6vw,80px);align-items:center;
        }
        .feat-text-h{
          font-size:clamp(36px,5vw,72px);font-weight:800;
          color:var(--black);line-height:0.96;letter-spacing:-2px;margin-bottom:28px;
        }
        .feat-text-p{font-size:17px;color:#333;line-height:1.65;margin-bottom:36px;max-width:520px}
        .feat-cols{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:48px}
        .feat-col-h{font-size:20px;font-weight:800;color:var(--black);letter-spacing:-.3px;margin-bottom:10px}
        .feat-col-p{font-size:15px;color:#444;line-height:1.65}
        .btn-pill-black{
          display:inline-flex;align-items:center;gap:8px;
          padding:14px 28px;border-radius:999px;
          background:var(--black);color:#fff;
          font-size:15px;font-weight:700;border:none;cursor:pointer;
          text-decoration:none;transition:all .2s var(--ease);
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
          box-shadow:0 3px 12px rgba(0,0,0,.18);
        }
        .btn-pill-black:hover{background:#222;transform:scale(1.04);box-shadow:0 6px 22px rgba(0,0,0,.28)}

        /* STATS */
        .st-row{
          display:grid;grid-template-columns:repeat(4,1fr);
          border:1px solid var(--border);border-radius:20px;
          overflow:hidden;background:#fff;
        }
        .st-c{padding:clamp(32px,3.5vw,48px) clamp(24px,3vw,40px);position:relative}
        .st-c:not(:last-child)::after{content:'';position:absolute;right:0;top:16%;height:68%;width:1px;background:var(--border)}
        .st-v{
          font-size:clamp(44px,5vw,68px);font-weight:800;
          color:var(--black);line-height:1;letter-spacing:-2px;margin-bottom:8px;
        }
        .st-l{font-size:14px;color:var(--muted);font-weight:500}

        /* APPROACH - list style */
        .ap-list{margin-top:56px}
        .ap-row{
          display:grid;grid-template-columns:64px 1fr 1fr;
          gap:32px;padding:36px 0;
          border-top:1px solid var(--border);
          transition:background .15s;
        }
        .ap-row:last-child{border-bottom:1px solid var(--border)}
        .ap-row:hover{background:rgba(0,0,0,.016)}
        .ap-n{font-size:15px;font-weight:700;color:#ccc;padding-top:3px}
        .ap-t{font-size:clamp(18px,1.6vw,22px);font-weight:800;color:var(--black);line-height:1.25;letter-spacing:-.3px}
        .ap-d{font-size:14.5px;color:var(--muted);line-height:1.65}

        /* CTA (dark full section like Patreon's final CTA with big image) */
        .cta-sec{
          position:relative;overflow:hidden;min-height:400px;
          display:flex;align-items:center;
          background:var(--black);
        }
        .cta-bg-img{
          position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
          opacity:.25;filter:grayscale(30%);
        }
        .cta-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(10,10,10,.85) 0%,rgba(10,10,10,.4) 60%,transparent 100%)}
        .cta-content{position:relative;z-index:1;padding:clamp(72px,9vw,120px) var(--px);max-width:var(--max);margin:0 auto;width:100%}
        .cta-h{font-size:clamp(40px,5.5vw,80px);font-weight:800;color:#fff;line-height:.96;letter-spacing:-2px;margin-bottom:24px}
        .cta-p{font-size:18px;color:rgba(255,255,255,.6);max-width:500px;line-height:1.6;margin-bottom:36px}
        .cta-btns{display:flex;gap:12px;flex-wrap:wrap}
        .btn-cta-white{
          display:inline-flex;align-items:center;gap:8px;
          padding:14px 28px;border-radius:999px;
          background:#fff;color:var(--black);
          font-size:16px;font-weight:700;border:none;cursor:pointer;
          text-decoration:none;transition:all .22s var(--ease);
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
        }
        .btn-cta-white:hover{background:#eee;transform:scale(1.04)}
        .btn-cta-outline{
          display:inline-flex;align-items:center;gap:8px;
          padding:14px 28px;border-radius:999px;
          background:transparent;color:#fff;
          font-size:16px;font-weight:600;
          border:1.5px solid rgba(255,255,255,.3);cursor:pointer;
          text-decoration:none;transition:all .22s var(--ease);
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
        }
        .btn-cta-outline:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.5)}

        /* FOOTER */
        .ft{background:var(--black);padding:clamp(64px,7vw,100px) var(--px) 40px;border-top:1px solid #1a1a1a}
        .ft-in{max-width:var(--max);margin:0 auto}
        .ft-g{display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr 1fr;gap:clamp(24px,4vw,64px);margin-bottom:64px}
        .ft-brand-p{font-size:14px;color:rgba(255,255,255,.35);line-height:1.7;max-width:280px;margin-top:16px}
        .ft-h{font-size:12px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:1.8px;margin-bottom:20px}
        .ft-ls{display:flex;flex-direction:column;gap:12px}
        .ft-a{color:rgba(255,255,255,.55);text-decoration:none;font-size:14.5px;font-weight:400;transition:color .15s}
        .ft-a:hover{color:#fff}
        .ft-bot{border-top:1px solid rgba(255,255,255,.08);padding-top:32px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;font-size:13px;color:rgba(255,255,255,.25)}
        .ft-bot-ls{display:flex;gap:24px}
        .ft-bot-a{color:rgba(255,255,255,.25);text-decoration:none;transition:color .15s}
        .ft-bot-a:hover{color:rgba(255,255,255,.6)}

        /* PAGE IN */
        .pin{animation:pin .8s cubic-bezier(.22,1,.36,1) both}
        @keyframes pin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

        /* RESPONSIVE */
        @media(max-width:1100px){
          .nl{display:none}
          .btn-login{display:none}
          .mob-btn{display:flex!important}
          .hero-in{grid-template-columns:1fr;text-align:left}
          .cg{grid-template-columns:1fr}
          .st-row{grid-template-columns:1fr 1fr}
          .st-c:nth-child(2)::after{display:none}
          .ap-row{grid-template-columns:52px 1fr}
          .ap-d{display:none}
          .feat-split{grid-template-columns:1fr}
          .ft-g{grid-template-columns:1fr 1fr}
          .feat-cols{grid-template-columns:1fr}
        }
        @media(max-width:680px){
          .st-row{grid-template-columns:1fr 1fr}
          .ft-g{grid-template-columns:1fr 1fr}
          .ap-row{grid-template-columns:1fr}
          .ap-n{display:none}
          .feat-cols{grid-template-columns:1fr}
        }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className={`nav${scrolled?" up":""}`}>
        <div className="ni">
          <SypraLogo />

          <div className="nl">
            {NAV.map(item=>(
              <div key={item.label} className="ni-item" onMouseEnter={()=>hov(item.label)} onMouseLeave={lv}>
                <button className={`nb${activeNav===item.label?" pill-active":""}`}>
                  {item.label} {activeNav===item.label?null:<Chev/>}
                </button>
                <div className={`dd${openDd===item.label?" on":""}`}>
                  {item.items.map(s=><a href="#" key={s} className="dda">{s}</a>)}
                </div>
              </div>
            ))}
            <div className="ni-item">
              <button className="nb" style={{ background:"#fff", border:"1px solid #ddd", borderRadius:999, padding:"0 18px", color:"#0A0A0A" }}>
                Updates
              </button>
            </div>
          </div>

          <div className="nr">
            <button className="btn-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              Find a Client
            </button>
            <button className="btn-login">Log in</button>
            <button className="btn-start">Get Started</button>
            <button className="mob-btn" onClick={()=>setMob(true)}><MenuIco/></button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mob-drawer${mob?" on":""}`}>
        <div className="mob-top">
          <SypraLogo/>
          <button className="mob-close" onClick={()=>setMob(false)}><XIco/></button>
        </div>
        {NAV.map(item=><a href="#" key={item.label} className="mob-link" onClick={()=>setMob(false)}>{item.label}</a>)}
        <div style={{marginTop:32,display:"flex",flexDirection:"column",gap:10}}>
          <button className="btn-login" style={{padding:"14px 28px",fontSize:16,borderRadius:999,textAlign:"center"}}>Log in</button>
          <button className="btn-start" style={{padding:"14px 28px",fontSize:16,borderRadius:999,textAlign:"center"}}>Get Started</button>
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero pin">
        <div className="hero-in">
          <div>
            <h1 className="hero-h1">
              Engineering.<br/>
              Clients.<br/>
              Nothing in<br/>
              between.
            </h1>
            <p className="hero-p">
              Sypra gives your business a direct line to world-class engineering talent, with no middlemen or gatekeepers in the way.
            </p>
            <div className="hero-btns">
              <a href="#" className="btn-hero-black">Get started <ArrR s={16}/></a>
              <a href="#" className="btn-hero-ghost">See how it works</a>
            </div>
          </div>
          <div style={{ paddingTop:20 }}>
            <PhoneMockup/>
          </div>
        </div>
      </section>

      {/* ── LOGOS ───────────────────────────────────────────────── */}
      <div className="logos-sec">
        <div className="logos-in">
          <div className="logos-label">Certified technology partners</div>
          <div className="logos-row">
            {LOGOS.map(l=><div key={l} className="logo-item">{l}</div>)}
          </div>
        </div>
      </div>

      {/* ── CAPABILITIES ─────────────────────────────────────────── */}
      <section className="sec">
        <div className="sec-in">
          <div ref={r("cap")} style={a("cap")}>
            <span className="sec-lbl">Technical Capabilities</span>
            <h2 className="sec-h">Architected for reality.<br/>Built for scale.</h2>
            <p className="sec-p">We engineer reliable, high-performance systems so your internal teams can focus on driving business strategy, not managing technical debt.</p>
          </div>
          <div className="cg">
            {SERVICES.map((s,i)=>(
              <div ref={r(`sc${i}`)} key={s.id} className="sc" style={a(`sc${i}`,i*.08)}>
                <div className="sc-color" style={{ background:s.color }}>
                  <div style={{ textAlign:"center" }}>
                    <div style={{ fontSize:48, fontWeight:900, color:"rgba(0,0,0,.55)", letterSpacing:"-2px", lineHeight:1 }}>{s.id}</div>
                    <div style={{ fontSize:13, fontWeight:600, color:"rgba(0,0,0,.35)", marginTop:4 }}>{s.sub}</div>
                  </div>
                  <div className="sc-num-bg">{s.id}</div>
                </div>
                <div className="sc-body">
                  <div className="sc-sub">{s.sub}</div>
                  <h3 className="sc-t">{s.name}</h3>
                  <p className="sc-d">{s.detail}</p>
                  <a href="#" className="sc-a">Learn more <ArrR s={13}/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TURNING PASSIONS / BLUE SECTION ─────────────────────── */}
      <section className="blue-sec">
        <div className="sec-in">
          <div ref={r("bs")} style={a("bs")}>
            <div className="feat-split">
              <div style={{ maxWidth:560 }}>
                <span className="sec-lbl" style={{ color:"#555" }}>Our Methodology</span>
                <h2 className="feat-text-h">Turning ambitions<br/>into businesses</h2>
                <p className="feat-text-p">
                  Sypra gives you a direct line to enterprise-grade engineering. Build faster, scale smarter, and own every line of your codebase.
                </p>
              </div>
              <div style={{ alignSelf:"flex-end" }}>
                {/* Small phone-style card */}
                <div style={{ background:"#fff", borderRadius:24, padding:28, minWidth:280, boxShadow:"0 16px 48px rgba(0,0,0,.12)" }}>
                  <div style={{ fontSize:12, fontWeight:700, color:"#22C55E", marginBottom:4 }}>● 99.9% Uptime</div>
                  <div style={{ fontSize:32, fontWeight:800, color:"#0A0A0A", letterSpacing:"-1px", lineHeight:1, marginBottom:4 }}>300+</div>
                  <div style={{ fontSize:13, color:"#888", marginBottom:20 }}>Enterprise deployments</div>
                  {STATS.map(s=>(
                    <div key={s.l} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderTop:"1px solid #F0F0F0" }}>
                      <span style={{ fontSize:13, color:"#444", fontWeight:500 }}>{s.l}</span>
                      <span style={{ fontSize:14, fontWeight:800, color:"#0A0A0A" }}>{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="feat-cols" style={{ marginTop:64 }}>
              {[
                { h:"More ways to deliver", p:"Build lasting solutions outside the typical agency model, with delivery streams ranging from cloud migration to ongoing managed operations.", cta:"Explore capabilities" },
                { h:"Unlock growth", p:"Sypra isn't just for technical delivery — it's for professional growth too. Get in-depth analytics about your projects and tap into our growing partner network.", cta:"See our approach" },
              ].map((col,i)=>(
                <div key={i}>
                  <h3 className="feat-col-h">{col.h}</h3>
                  <p className="feat-col-p" style={{ marginBottom:20 }}>{col.p}</p>
                  <a href="#" className="btn-pill-black">{col.cta} <ArrR s={14}/></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="sec">
        <div className="sec-in">
          <div ref={r("st")} style={a("st")}>
            <span className="sec-lbl">Track Record</span>
            <h2 className="sec-h">Proven at the<br/>enterprise level.</h2>
          </div>
          <div ref={r("str")} style={a("str",.1)}>
            <div className="st-row">
              {STATS.map(s=>(
                <div className="st-c" key={s.l}>
                  <div className="st-v">{s.v}</div>
                  <div className="st-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ─────────────────────────────────────────────── */}
      <section className="sec" style={{ paddingTop:0 }}>
        <div className="sec-in">
          <div ref={r("ap")} style={a("ap")}>
            <span className="sec-lbl">Why Sypra</span>
            <h2 className="sec-h">A better way to<br/>build software.</h2>
            <p className="sec-p">We operate as a seamless extension of your organization, prioritizing clear communication, rigorous testing, and measurable business impact.</p>
          </div>
          <div className="ap-list">
            {APPROACH.map((w,i)=>(
              <div ref={r(`ar${i}`)} key={w.n} className="ap-row" style={a(`ar${i}`,i*.07)}>
                <div className="ap-n">{w.n}</div>
                <div className="ap-t">{w.h}</div>
                <div className="ap-d">{w.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (dark with background image like Patreon) ─────────── */}
      <div className="cta-sec">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt="Office"
          className="cta-bg-img"
        />
        <div className="cta-overlay"/>
        <div className="cta-content">
          <div ref={r("cta")} style={a("cta")}>
            <h2 className="cta-h">Ready to upgrade<br/>your tech foundation?</h2>
            <p className="cta-p">Schedule a technical consultation with our senior architects. No sales pressure — just a clear conversation about what you need.</p>
            <div className="cta-btns">
              <a href="#" className="btn-cta-white">Get started <ArrR s={16}/></a>
              <a href="#" className="btn-cta-outline">Already a client? Log in</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="ft">
        <div className="ft-in">
          <div className="ft-g">
            <div>
              <SypraLogo dark />
              <p className="ft-brand-p">Sypra partners with ambitious organizations to design, build, and operate resilient technology solutions at global scale.</p>
            </div>
            {FOOTER_COLS.map(col=>(
              <div key={col.h}>
                <div className="ft-h">{col.h}</div>
                <div className="ft-ls">{col.links.map(l=><a href="#" key={l} className="ft-a">{l}</a>)}</div>
              </div>
            ))}
          </div>
          <div className="ft-bot">
            <div>© 2026 Sypra Infotech. All rights reserved.</div>
            <div className="ft-bot-ls">
              <a href="#" className="ft-bot-a">Privacy Policy</a>
              <a href="#" className="ft-bot-a">Terms of Service</a>
              <a href="#" className="ft-bot-a">Cookie Policy</a>
              <a href="#" className="ft-bot-a">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}