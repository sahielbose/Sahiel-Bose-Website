const { useState, useEffect, useRef } = React;

// ---------- DATA ----------
const DATA = {
  name: "Sahiel Bose",
  tagline: "UCLA Math + CS '30 | Building Optivia",
  email: "sahielbose@g.ucla.edu",
  phone: "(925) 871-8844",
  github: "github.com/sahielbose",
  linkedin: "www.linkedin.com/in/sahiel-bose/",
  about: [
    "I study Math + CS at UCLA. On the side, I co-founded Optivia, an enterprise AI engineering orchestration platform (patent pending), where I lead the AI architecture: execution graphs, agent fleets, and the decision logic that coordinates them. I'm also a contributor at OpenSwarm.",
    "Also, I'm a Neurotechnology & Machine Learning Researcher at ThinkNeuro, focusing on a project involving real-time machine learning that interfaces with medical sensors to detect opioid overdose events. Alongside that, I've spent the last couple of years collaborating on academic research regarding logical reasoning in LLMs and graph neural networks with mentors at UC Santa Cruz and UC Riverside.",
  ],
  experience: [
    {
      company: "Optivia",
      role: "Co-Founder",
      location: "San Francisco, CA",
      period: "Mar 2026 – Present",
      kind: "Founder · Patent pending",
      short: "Architecting an enterprise AI engineering orchestration platform (patent pending).",
      bullets: [
        "Primary architect of a B2B SaaS platform that turns enterprise software initiatives into dependency-aware human-agent execution graphs, then generates specialized AI agent fleets to execute the AI-suited nodes (patent pending).",
        "Designed the intelligence layer behind it: five-signal work-node scoring, human/AI assignment, critical-path scheduling, cost-aware model routing, and per-agent reflection gates that stop hallucinations from propagating; lead author on the research paper.",
      ],
      stack: ["Anthropic SDK", "Multi-Agent", "Python", "Prompt Routing"],
    },
    {
      company: "OpenSwarm",
      role: "Contributor",
      location: "San Francisco, CA",
      period: "May 2026 – Present",
      kind: "Engineering",
      short: "Building OpenSwarm's agent library, the interactive marketing site, and a full-stack LinkedIn-gated access flow.",
      bullets: [
        "Built the agent data layer for this local-first orchestrator: MCP server connectivity plus a swappable database with two CRM integrations (Admin and User), letting agents read and write structured data across external services.",
        "Rebuilt the landing page into an interactive site in custom anime.js, and shipped a LinkedIn-gated access flow on FastAPI and React, with a five-outcome verification state machine and an authenticated admin panel.",
      ],
      stack: [],
    },
    {
      company: "ThinkNeuro LLC",
      role: "Neurotechnology & Machine Learning Researcher",
      location: "Remote",
      period: "Nov 2024 – Present",
      kind: "Engineering",
      short: "Building a skin-adhered overdose-detection patch: embedded sensors, on-device ML, and the alert app.",
      bullets: [
        "Building a skin-adhered overdose-detection patch on an Arduino Nano ESP32, wiring GSR, pulse-oximeter, and accelerometer sensors into an on-device GRU classifier that catches the biphasic overdose signature in real time (patent in progress).",
        "Engineered the model features, ran FMEA risk analysis across the whole device, built the React Native app that sends live alerts to caregivers and first responders, and am co-authoring an academic paper on overdose detection.",
      ],
      stack: ["React Native", "JavaScript", "ML", "Neurotech"],
    },
    {
      company: "UC Santa Cruz, AIEA Lab",
      role: "AI Researcher",
      location: "Remote",
      period: "Oct 2024 – Apr 2026",
      kind: "Research",
      short: "Researching logical reasoning in LLMs and methods to improve problem-solving.",
      bullets: [
        "Completed a 10-month research onboarding in LLM logic and reasoning, working through symbolic reasoning, logical inference, and AI explainability across Python and Prolog before joining active research.",
        "Built natural-language-to-Prolog pipelines through SWI-Prolog and a from-scratch backward-chaining inference engine, and support ProSLM, the lab's logic-augmented LLM platform.",
      ],
      stack: ["LLMs", "Reasoning", "Prolog", "Python"],
    },
    {
      company: "UC Riverside Research Lab",
      role: "Machine Learning Researcher",
      location: "Remote",
      period: "May 2025 – Jan 2026",
      kind: "Research",
      short: "GNN-based traffic congestion hotspot detection across large-scale road networks.",
      bullets: [
        "Assist a Ph.D. researcher on GNN-based traffic-congestion-hotspot detection across large-scale road networks, applying spatial analytics to heterogeneous, real-time geospatial data.",
        "Trained and benchmarked graph-sampling methods (GraphSAGE, GraphSAINT, ShadowGraph) and analyzed heterogeneous-graph architectures like HiGPT and GRAPES for congestion prediction.",
      ],
      stack: ["GNNs", "Geospatial", "PyTorch"],
    },
  ],
  projects: [
    {
      title: "ClearAuth",
      subtitle: "Multi-Agent Systems · LangChain · SSE",
      period: "Jun '26",
      status: "Autonomous prior authorization",
      description:
        "A clinician pastes a clinical note. Five agents structure it into ICD-10 and CPT codes, check the payer's coverage criteria, assemble the PA packet, audit it for compliance, and, once the physician approves, a browser agent files it on the payer's portal while a CRM dashboard animates the whole journey live.",
      depth: [
        "Five LangChain agents behind one createChatModel() seam (Claude or Gemini), each with a deterministic fallback, so the whole intake-to-submitted flow runs with zero API keys.",
        "Every pipeline step streams live to the CRM over Server-Sent Events and appends a SHA-256 checksummed audit entry.",
      ],
      tags: ["OpenTelemetry", "Webhooks", "Browser Automation", "Schema Validation", "Audit Logging"],
      accent: "oklch(0.66 0.15 258)",
      art: "form",
      repo: "https://github.com/shanayg15/ClearAuth",
    },
    {
      title: "Osteon",
      subtitle: "Agentic AI · AWS Bedrock · Blender · FEA",
      period: "Jun '26",
      status: "Resilient Agents Hackathon",
      description:
        "An AI agent inside Blender that autonomously designs orthopedic implants by iterating parametric geometry against biomechanical stress constraints, built so the design loop never breaks when models, providers, or tools fail.",
      depth: [
        "A closed agentic loop (Localize, Synthesize, Evaluate) generates parametric implant meshes in Blender and iterates them against FEA stress reports until a candidate survives the load profile.",
        "Model calls route through the TrueFoundry AI Gateway to AWS Bedrock with a 3-rung fallback ladder, so every stage returns a schema-valid result even when models or tools fail.",
      ],
      tags: ["AWS Bedrock", "MCP", "FEA", "Blender Scripting", "Flask"],
      accent: "oklch(0.62 0.15 263)",
      art: "mesh",
      repo: "https://github.com/PranavAchar01/osteon",
    },
    {
      title: "HealthFlow",
      subtitle: "Multi-Agent AI · FHIR R4 · Healthcare",
      period: "May '26",
      status: "1st · Scalekit × Apify Hackathon",
      description:
        "A 9-agent pipeline that captures paramedic voice dictation in the field, structures it into FHIR R4 data, runs differential diagnosis, screens drug interactions, and commits physician-approved orders to the EHR in under 60 seconds. Won 1st place.",
      depth: [
        "Won 1st place at the Scalekit × Apify Hackathon: converts a voice transcript into FHIR R4 observations and ICD-10 codes, runs differential diagnosis with confidence scoring, and screens orders for contraindications (catches Warfarin + tPA at 100% in evals).",
        "Two-phase trust boundary: drafts run under a paramedic token; EHR writes execute only under a verified physician token after CRM approval, with a SHA-256 audit chain.",
      ],
      tags: ["LangChain", "Next.js", "Supabase", "SSE", "Speech-to-Text"],
      accent: "oklch(0.59 0.155 268)",
      art: "pipeline",
      repo: "https://github.com/PranavAchar01/HealthFlow-ApifyxScalekit",
    },
    {
      title: "Recourse",
      subtitle: "Multi-Agent Systems · LangChain · Daytona",
      period: "May '26",
      status: "Autonomous appeals",
      description:
        "A 13-agent, two-phase pipeline that reads an institutional denial letter, retrieves the institution's own published rules, catches where the denial contradicts them, drafts a cited appeal, and, after a human approval gate, files it and tracks the deadline.",
      depth: [
        "A deterministic contradiction engine parses the payer's own published policy into a criteria checklist and proves where the denial violates it (5 of 5 caught, zero false appeals in evals).",
        "Deadline and eligibility math run as real code in a Daytona sandbox, never the LLM, and filing falls back from portal to fax automatically.",
      ],
      tags: ["Anthropic API", "Agent Orchestration", "OCR", "PostgreSQL", "Sandboxed Compute"],
      accent: "oklch(0.56 0.16 272)",
      art: "scales",
      repo: "https://github.com/shanayg15/ReCourse",
    },
    {
      title: "SignSpeak",
      subtitle: "Computer Vision · PyTorch · Edge",
      period: "Oct '24 – Mar '25",
      status: "2nd · ACSEF 2025",
      description:
        "A low-cost, wearable ASL translator: a Raspberry Pi device that translates sign language into speech while converting spoken replies into on-screen text, enabling two-way, hands-free conversation between Deaf and hearing users.",
      depth: [
        "Took 2nd place at ACSEF 2025: a fine-tuned MobileNetV2 CNN hits 95% validation accuracy on 36 static signs; a bidirectional LSTM and TCN reach 90% on dynamic gestures after augmenting under 500 clips into 14,000+ samples.",
        "Runs fully offline on a Raspberry Pi 4 via TorchScript and ONNX exports with sub-2-second inference, paired with Vosk speech-to-text for two-way conversation.",
      ],
      tags: ["PyTorch", "MediaPipe", "OpenCV", "ONNX", "Raspberry Pi"],
      accent: "oklch(0.53 0.16 277)",
      art: "matrix",
      repo: "https://github.com/shanayg15/SignSpeak",
    },
  ],
  skills: {
    "Agentic & LLM Systems": ["Multi-Agent Orchestration", "MCP", "LangChain", "Anthropic SDK", "Tool Calling", "Prompt Engineering", "Sandboxed Execution", "Browser Automation"],
    "Machine Learning & Perception": ["PyTorch", "TensorFlow", "ONNX", "Graph Neural Networks", "Quantization", "Feature Engineering", "OpenCV", "MediaPipe"],
    "Full-Stack & Cloud": ["Next.js", "React Native", "FastAPI", "PostgreSQL", "AWS Bedrock", "Real-Time Streaming", "OpenTelemetry", "CI/CD"],
  },
};

// ---------- HOOKS ----------
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    // If already on-screen at mount (above the fold), reveal next tick so the
    // transition still plays but never gets stuck invisible.
    const r = ref.current.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: 0.12, ...options });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

// Scroll-driven parallax — moves element relative to its distance from viewport center.
function useParallax(speed = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const apply = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(center * speed).toFixed(2)}px, 0)`;
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply); } };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [speed]);
  return ref;
}

// Magnetic pull toward the cursor + press-scale feedback — for buttons.
function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(pointer: coarse)').matches) return;
    let pressed = false, x = 0, y = 0;
    const render = () => {
      el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) scale(${pressed ? 0.96 : 1})`;
    };
    const move = (e) => {
      const r = el.getBoundingClientRect();
      x = (e.clientX - (r.left + r.width / 2)) * strength;
      y = (e.clientY - (r.top + r.height / 2)) * strength;
      render();
    };
    const leave = () => { x = 0; y = 0; pressed = false; render(); };
    const down = () => { pressed = true; render(); };
    const up = () => { pressed = false; render(); };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    el.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
      el.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [strength]);
  return ref;
}

// Subtle 3D tilt toward the cursor — for cards.
function useTilt(max = 5) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(pointer: coarse)').matches) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-6px)`;
    };
    const leave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
  }, [max]);
  return ref;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      // At (or within a few px of) the bottom, the last section wins —
      // short final sections can never cross the threshold otherwise.
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) { setActive(ids[ids.length - 1]); return; }
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids.join(',')]);
  return active;
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

// ---------- PRIMITIVES ----------
function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style = {} }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(22px) scale(.99)',
        transition: `opacity 1s cubic-bezier(.19,1,.22,1) ${delay}s, transform 1s cubic-bezier(.19,1,.22,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// Per-character rise from behind a mask — used for the hero name. Plays on mount.
function AnimChars({ text, className = '', startDelay = 0, stagger = 0.035 }) {
  return (
    <span className={`anim-word ${className}`} aria-label={text}>
      {[...text].map((ch, i) => (
        <span className="anim-char" key={i} style={{ animationDelay: `${(startDelay + i * stagger).toFixed(3)}s` }}>{ch}</span>
      ))}
    </span>
  );
}

// Masked line that slides up into view when scrolled to — editorial heading reveal.
function LineReveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <span ref={ref} className={`line-reveal ${className}`}>
      <span
        className="line-reveal-in"
        style={{
          transform: inView ? 'translateY(0)' : 'translateY(108%)',
          transitionDelay: `${delay}s`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

// Magnetic anchor — pulls toward the cursor.
function MagneticLink({ children, ...props }) {
  const ref = useMagnetic(0.4);
  return <a ref={ref} {...props}>{children}</a>;
}

// Counts a number up from 0 when it scrolls into view; passes non-numeric values through.
function CountUp({ value, duration = 1.3 }) {
  const [ref, inView] = useInView();
  const num = parseFloat(value);
  const isNum = !Number.isNaN(num) && /^\d/.test(String(value).trim());
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || !isNum) return;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(num * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);
  return <span ref={ref}>{isNum ? n : value}</span>;
}

function SectionHead({ num, title }) {
  return (
    <Reveal className="section-head">
      <h2 className="section-title"><LineReveal delay={0.08}>{title}</LineReveal></h2>
    </Reveal>
  );
}

// Drifting atmospheric glows tied to scroll depth — connects sections into one space.
function DepthBackdrop() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const apply = () => { el.style.setProperty('--sc', window.scrollY.toFixed(1)); ticking = false; };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply); } };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div ref={ref} className="depth-bg" aria-hidden="true">
      <span className="depth-blob b0" />
      <span className="depth-blob b1" />
      <span className="depth-blob b2" />
      <span className="depth-blob b3" />
    </div>
  );
}

// ---------- TOP NAV ----------
function TopNav({ sections }) {
  const active = useActiveSection(sections.map(s => s.id));
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 20);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  const goTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  };

  return (
    <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
      <div className="topnav-inner">
        <a href="#intro" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="logo-mark">
            <svg viewBox="0 0 64 64" width="32" height="32">
              <rect x="2" y="2" width="60" height="60" rx="16" fill="oklch(0.16 0.04 262)" stroke="oklch(0.68 0.16 260 / 0.28)" strokeWidth="1.25"></rect>
              <text x="32" y="45" textAnchor="middle" fontFamily="var(--serif)" fontSize="34" fill="#f4f3ee">S<tspan fill="oklch(0.72 0.15 258)">B</tspan></text>
            </svg>
          </span>
          <span className="logo-text">
            <span className="logo-name">Sahiel Bose</span>
          </span>
        </a>

        <nav className="topnav-links">
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`}
               className={active === s.id ? 'active' : ''}
               onClick={(e) => { e.preventDefault(); document.getElementById(s.id).scrollIntoView({ behavior: 'smooth' }); }}>
              <span>{s.label}</span>
            </a>
          ))}
        </nav>

        <div className="topnav-cta">
          <a href="assets/SahielBose_Resume.pdf" target="_blank" className="nav-btn">
            Resume
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </a>
          <a href="Deep Dive.html" className="nav-dive" aria-label="Deep Dive" title="Deep Dive">
            Dive
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </a>
          <button className={`nav-burger ${menuOpen ? 'open' : ''}`} aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="topnav-progress" style={{ clipPath: `inset(0 ${(100 - progress * 100).toFixed(2)}% 0 0)` }} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu-links">
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''} onClick={goTo(s.id)}>
              <span>{s.label}</span>
            </a>
          ))}
          <a href="Deep Dive.html" className="mm-deep"><span>Deep Dive</span><span className="arr">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

// ---------- OPTION B: slim chapter rail (keeps the top bar) ----------
function DotRail({ sections }) {
  const active = useActiveSection(sections.map(s => s.id));
  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  };
  return (
    <nav className="dotrail" aria-label="Sections">
      {sections.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} className={`dotrail-item ${active === s.id ? 'active' : ''}`} onClick={go(s.id)}>
          <span className="dotrail-dot" />
          <span className="dotrail-label mono">{String(i + 1).padStart(2, '0')} · {s.label}</span>
        </a>
      ))}
    </nav>
  );
}

// ---------- THEME TOGGLE ----------
function ThemeToggle() {
  const [light, setLight] = useState(() => {
    try { return document.documentElement.getAttribute('data-theme') === 'light'; } catch (e) { return false; }
  });
  const toggle = () => {
    const next = !light;
    setLight(next);
    try {
      if (next) { document.documentElement.setAttribute('data-theme', 'light'); localStorage.setItem('sb-theme', 'light'); }
      else { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('sb-theme', 'dark'); }
    } catch (e) {}
  };
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle light or dark theme" title="Toggle theme">
      {light ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4.2"></circle><path d="M12 3v2M12 19v2M5 12H3M21 12h-2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"></path></svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.5A8.5 8.5 0 1 1 11.5 3a6.5 6.5 0 0 0 9.5 9.5z"></path></svg>
      )}
      <span>{light ? 'Light' : 'Dark'}</span>
    </button>
  );
}

// ---------- LAYOUT TOGGLE (compact / full, front page only) ----------
function LayoutToggle() {
  const [compact, setCompact] = useState(() => {
    try { return document.documentElement.getAttribute('data-layout') === 'compact'; } catch (e) { return false; }
  });
  const toggle = () => {
    const next = !compact;
    setCompact(next);
    try {
      if (next) { document.documentElement.setAttribute('data-layout', 'compact'); localStorage.setItem('sb-layout', 'compact'); }
      else { document.documentElement.removeAttribute('data-layout'); localStorage.setItem('sb-layout', 'full'); }
    } catch (e) {}
  };
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle compact layout" title="Toggle compact layout">
      {compact ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"></rect><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"></rect><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"></rect></svg>
      )}
      <span>{compact ? 'Full view' : 'Compact'}</span>
    </button>
  );
}

// ---------- OPTION C: full left sidebar (replaces the top bar on desktop) ----------
function SideNav({ sections }) {
  const active = useActiveSection(sections.map(s => s.id));
  const progress = useScrollProgress();
  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 28, behavior: 'smooth' });
  };
  return (
    <aside className="sidenav">
      <a href="#intro" className="logo sidenav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <span className="logo-mark">
          <svg viewBox="0 0 64 64" width="32" height="32">
            <rect x="2" y="2" width="60" height="60" rx="16" fill="oklch(0.16 0.04 262)" stroke="oklch(0.68 0.16 260 / 0.28)" strokeWidth="1.25"></rect>
            <text x="32" y="45" textAnchor="middle" fontFamily="var(--serif)" fontSize="34" fill="#f4f3ee">S<tspan fill="oklch(0.72 0.15 258)">B</tspan></text>
          </svg>
        </span>
        <span className="logo-text">
          <span className="logo-name">Sahiel Bose</span>
        </span>
      </a>
      <nav className="sidenav-links">
        {sections.map((s, i) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''} onClick={go(s.id)}>
            <span>{s.label}</span>
          </a>
        ))}
      </nav>
      <div className="sidenav-foot">
        <a href="Deep Dive.html" className="sidenav-deep">Deep Dive<span className="arr">↗</span></a>
      </div>
    </aside>
  );
}

// ---------- HERO ----------
function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el || matchMedia('(pointer: coarse)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', x.toFixed(3));
        el.style.setProperty('--my', y.toFixed(3));
      });
    };
    const reset = () => { el.style.setProperty('--mx', 0); el.style.setProperty('--my', 0); };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', reset);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', reset); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="intro" className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 className="mega">
          <span className="mega-line">
            <AnimChars text="Sahiel" startDelay={0.15} />
            <span className="mega-space"> </span>
            <AnimChars text="Bose" className="mega-italic" startDelay={0.34} />
          </span>
        </h1>

        <Reveal delay={0.3} className="hero-actions">
          <a href="assets/SahielBose_Resume.pdf" target="_blank" className="btn solid">
            <span>Resume</span>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href={`https://${DATA.github}`} target="_blank" rel="noopener noreferrer" className="btn ghost icon" aria-label="GitHub" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          </a>
          <a href={`https://${DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="btn ghost icon" aria-label="LinkedIn" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- EDUCATION ----------
function Education() {
  return (
    <section id="education" className="section">
      <SectionHead num="02" title="Education" />
      <Reveal className="ucla-wrap">
        <div className="ucla-card">
          <div className="ucla-top">
            <div className="ucla-top-left">
              <div className="ucla-name">University of California, Los Angeles</div>
              <div className="ucla-kicker mono">University of California</div>
              <div className="ucla-city">Los Angeles</div>
            </div>
          </div>

          <div className="ucla-body">
            <div className="ucla-degree-row">
              <div>
                <h3>B.S. Mathematics of Computation</h3>
              </div>
              <div className="ucla-years">
                <div className="year-big">2026</div>
                <div className="year-dash">–</div>
                <div className="year-big">2030</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ---------- EXPERIENCE ----------
// Scroll-through timeline: every role is visible in order, no clicking.
// A rail draws itself down the left as you scroll; entries and their
// bullets cascade in as they enter the viewport.
function Experience() {
  const flowRef = useRef(null);
  useEffect(() => {
    const el = flowRef.current;
    if (!el) return;
    let ticking = false;
    const apply = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh * 0.72 - r.top) / r.height, 0), 1);
      el.style.setProperty('--xp-progress', p.toFixed(4));
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply); } };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <section id="experience" className="section">
      <SectionHead num="03" title="Experience" />
      <div className="xp-flow" ref={flowRef}>
        {DATA.experience.map((e, i) => (
          <XpEntry key={e.company + i} x={e} i={i} />
        ))}
      </div>
    </section>
  );
}

function XpEntry({ x, i }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`xp-entry ${inView ? 'in' : ''}`}>
      <article className="xp-card">
        <div className="xp-panel-head">
          <div>
            <h3>{x.role} <span className="at">at</span> <span className="co">{x.company}</span></h3>
          </div>
          <div className="xp-panel-when">
            <div className="xp-panel-period mono">{x.period}</div>
          </div>
        </div>
        <p className="xp-panel-short">{x.short}</p>
        <ul className="xp-panel-bullets xp-flow-bullets">
          {x.bullets.map((b, bi) => (
            <li key={bi} style={{ transitionDelay: inView ? `${0.25 + bi * 0.12}s` : '0s' }}>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

// ---------- PROJECTS ----------
// Editorial rows, newest first. Each row: art panel on one side (alternating),
// deep technical writeup on the other. Reveal: the art blooms in from its side
// while the text lines cascade up — intentionally different from the
// experience timeline.
function Projects() {
  return (
    <section id="work" className="section">
      <SectionHead num="04" title="Projects" />
      <div className="proj-flow">
        {DATA.projects.map((p, i) => (
          <ProjRow key={p.title} p={p} i={i} />
        ))}
      </div>
      <Reveal className="deep-cta">
        <a href="Deep Dive.html">
          <span className="deep-cta-title">Open the deep dive <span className="arr">→</span></span>
        </a>
      </Reveal>
    </section>
  );
}

function ProjRow({ p, i }) {
  const [ref, inView] = useInView();
  return (
    <article ref={ref} className={`proj-row ${i % 2 ? 'rev' : ''} ${inView ? 'in' : ''}`}>
      <div className="proj-row-body">
        <div className="proj-row-titlerow">
          <h3 className="proj-row-title">{p.title}</h3>
          {p.repo && (
            <a className="proj-link" href={p.repo} target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              <span>View source</span>
              <span className="proj-link-arrow">↗</span>
            </a>
          )}
        </div>
        <div className="proj-row-when mono">{p.period}</div>
        <p className="proj-row-desc">{p.description}</p>
        <ul className="proj-row-depth">
          {p.depth.map((d, di) => (
            <li key={di} style={{ transitionDelay: inView ? `${0.35 + di * 0.14}s` : '0s' }}>{d}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// ---------- SKILLS ----------
function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead num="05" title="Skills" />
      <div className="skills-grid">
        {Object.entries(DATA.skills).map(([group, items], i) => (
          <SkillCol key={group} group={group} items={items} i={i} />
        ))}
      </div>
    </section>
  );
}

const SKILL_RAMP = ['oklch(0.62 0.15 266)', 'oklch(0.59 0.155 270)', 'oklch(0.56 0.16 274)', 'oklch(0.53 0.16 278)'];

function SkillCol({ group, items, i }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="skill-col"
      data-in={inView}
      style={{
        '--proj': SKILL_RAMP[i % SKILL_RAMP.length],
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.9s var(--ease-out) ${i * 0.05}s, transform 0.9s var(--ease-out) ${i * 0.05}s`,
      }}
    >
      <div className="skill-col-head">
        <span className="skill-col-title">{group}</span>
      </div>
      <div className="skill-items">
        {items.map((it, idx) => <span key={it} className="skill-chip" style={{ '--i': idx }}>{it}</span>)}
      </div>
    </div>
  );
}

// ---------- CONTACT ----------
function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <section id="contact" className="section contact">
      <Reveal className="contact-big">
        <button onClick={copy} className="big-mail" title="Click to copy">
          <span className="mail-text">{DATA.email}</span>
          <span className="mail-copied mono">{copied ? '✓ copied' : 'copy'}</span>
        </button>
      </Reveal>
      <div className="contact-links">
        <Reveal delay={0.05}>
          <a href={`https://${DATA.github}`} target="_blank">
            <span className="big">GitHub</span>
            <span className="mono arr">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={`https://${DATA.linkedin}`} target="_blank">
            <span className="big">LinkedIn</span>
            <span className="mono arr">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.15}>
          <a href="assets/SahielBose_Resume.pdf" target="_blank">
            <span className="big">Resume</span>
            <span className="mono arr">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <a href={`tel:${DATA.phone.replace(/\D/g, '')}`}>
            <span className="big">{DATA.phone}</span>
            <span className="mono arr">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- TWEAKS ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "navy",
  "serif": "instrument",
  "grain": true,
  "ramp": true,
  "nav": "side"
}/*EDITMODE-END*/;

const ACCENTS = {
  purple: { name: 'Purple', value: 'oklch(0.72 0.18 305)', soft: 'oklch(0.72 0.18 305 / 0.16)' },
  navy:   { name: 'Navy',   value: 'oklch(0.68 0.16 260)', soft: 'oklch(0.68 0.16 260 / 0.16)' },
  amber:  { name: 'Amber',  value: 'oklch(0.78 0.14 70)',  soft: 'oklch(0.78 0.14 70 / 0.14)' },
  rose:   { name: 'Rose',   value: 'oklch(0.75 0.14 20)',  soft: 'oklch(0.75 0.14 20 / 0.14)' },
  sage:   { name: 'Sage',   value: 'oklch(0.78 0.09 150)', soft: 'oklch(0.78 0.09 150 / 0.14)' },
  ice:    { name: 'Ice',    value: 'oklch(0.82 0.08 230)', soft: 'oklch(0.82 0.08 230 / 0.14)' },
  paper:  { name: 'Paper',  value: 'oklch(0.92 0.01 90)',  soft: 'oklch(0.92 0.01 90 / 0.14)' },
};

const SERIFS = {
  instrument: { name: 'Instrument', stack: "'Instrument Serif', Georgia, serif" },
  fraunces:   { name: 'Fraunces',   stack: "'Fraunces', Georgia, serif" },
  playfair:   { name: 'Playfair',   stack: "'Playfair Display', Georgia, serif" },
};

const NAV_MODES = {
  top:  'Top bar',
  rail: 'Top + rail',
  side: 'Sidebar',
};

function TweaksPanel({ tweaks, setTweaks }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setOn(true);
      if (e.data?.type === '__deactivate_edit_mode') setOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const set = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  if (!on) return null;
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <button onClick={() => setOn(false)}>×</button>
      </div>
      <div className="tweaks-row">
        <label className="mono">Navigation</label>
        <div className="seg">
          {Object.entries(NAV_MODES).map(([k, n]) => (
            <button key={k} className={(tweaks.nav || 'top') === k ? 'seg-btn active' : 'seg-btn'} onClick={() => set({ nav: k })}>
              {n}
            </button>
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <label className="mono">Accent</label>
        <div className="swatches">
          {Object.entries(ACCENTS).map(([k, a]) => (
            <button key={k} className={tweaks.accent === k ? 'sw active' : 'sw'} onClick={() => set({ accent: k })} style={{ background: a.value }} title={a.name} />
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <label className="mono">Display font</label>
        <div className="seg">
          {Object.entries(SERIFS).map(([k, s]) => (
            <button key={k} className={tweaks.serif === k ? 'seg-btn active' : 'seg-btn'} onClick={() => set({ serif: k })}>
              {s.name}
            </button>
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <label className="mono">Depth ramp</label>
        <button className={tweaks.ramp !== false ? 'toggle on' : 'toggle'} onClick={() => set({ ramp: tweaks.ramp === false })}>
          <span />
        </button>
      </div>
      <div className="tweaks-row">
        <label className="mono">Film grain</label>
        <button className={tweaks.grain ? 'toggle on' : 'toggle'} onClick={() => set({ grain: !tweaks.grain })}>
          <span />
        </button>
      </div>
    </div>
  );
}

// ---------- APP ----------
function App() {
  const [tweaks, setTweaks] = useState(window.__tweaks || TWEAK_DEFAULTS);
  useEffect(() => {
    const a = ACCENTS[tweaks.accent] || ACCENTS.navy;
    const s = SERIFS[tweaks.serif] || SERIFS.instrument;
    document.documentElement.style.setProperty('--accent', a.value);
    document.documentElement.style.setProperty('--accent-soft', a.soft);
    document.documentElement.style.setProperty('--serif', s.stack);
    document.documentElement.dataset.grain = tweaks.grain ? '1' : '0';
    document.documentElement.dataset.ramp = tweaks.ramp === false ? '0' : '1';
  }, [tweaks]);

  const sections = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const navMode = tweaks.nav || 'top';
  return (
    <div className={`app nav-${navMode}`}>
      <div className="grain-layer" />
      <DepthBackdrop />
      <TopNav sections={sections} />
      {navMode === 'rail' && <DotRail sections={sections} />}
      {navMode === 'side' && <SideNav sections={sections} />}
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
