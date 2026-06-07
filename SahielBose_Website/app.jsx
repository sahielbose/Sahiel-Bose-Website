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
    "I study Math + CS at UCLA. On the side, I co-founded Optivia, an agentic AI workflow, where I oversee and lead the logic, AI architecture, and multi-agent pipelines behind our patent-pending platform. I'm also a contributor at OpenSwarm.",
    "Also, I'm a Neurotechnology & Machine Learning Researcher at ThinkNeuro, focusing on a project involving real-time machine learning that interfaces with medical sensors to detect opioid overdose events. Alongside that, I've spent the last couple of years collaborating on academic research regarding logical reasoning in LLMs and graph neural networks with mentors at UC Santa Cruz and UC Riverside.",
  ],
  experience: [
    {
      company: "Optivia",
      role: "Co-Founder",
      location: "San Francisco, CA",
      period: "Mar 2026 – Present",
      kind: "Founder · Patent pending",
      short: "Leading architecture for a patent-pending agentic AI platform: multi-agent pipelines, prompt routing, decision logic.",
      bullets: [
        "Lead design & development of AI agents for the Optivia prototype as primary architect of its core intelligence, agentic workflows, and decision-making logic, architecting a multi-agent pipeline that converts a natural-language prompt into a dependency-graphed fleet of specialized autonomous coding sub-agents, and leading the patent filing covering the system.",
        "Designed the mathematical modeling and algorithmic logic behind the multi-agent pipeline: prompt routing, a five-signal complexity scoring formula, critical-path (CPM) scheduling, model selection, prompt engineering, and a per-agent reflection layer to prevent hallucination propagation (patent pending).",
        "Built a framework that intercepts user inputs, dynamically enriches prompts with targeted clarifying questions, and activates Claude Code commands via multi-agent systems + the Anthropic SDK, serving as lead author on the research paper documenting it, all driving Optivia's long-term vision of enabling highly technical, long-running enterprise projects to be executed by personalized, cost-efficient agents built for better accuracy, lower cost, and detailed functionality.",
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
        "Built an OpenSwarm library integrating MCP server connectivity and an adjustable database layer supporting two CRM integrations, Admin and User, enabling agents to read/write structured data across external services directly from the OpenSwarm environment.",
        "Redesigned the OpenSwarm landing page from a blank slate into a dimensional, interactive site using anime.js with custom animations including staggered agent-node physics, SVG motion-path connections, and a scroll-driven interactive hero.",
        "Designed and built a full-stack LinkedIn-gated form on FastAPI + React/Vite/MUI; engineered a 5-outcome state machine with LinkedIn comment verification, per-comment one-time-use redemption, profile URL normalization, OTC-authenticated admin panel, and multi-route gate management with DB-swappable in-memory stores.",
      ],
      stack: [],
    },
    {
      company: "ThinkNeuro LLC",
      role: "Neurotechnology & Machine Learning Researcher",
      location: "Remote",
      period: "Nov 2024 – Present",
      kind: "Engineering",
      short: "Shipping a React Native neuroscience app + ML models for opioid-overdose prediction.",
      bullets: [
        "Contributed to the research and development of a patent-pending opioid overdose detection device, focusing on continuous physiological signal monitoring to identify overdose events in real time, and engineering domain-specific features that capture the biphasic overdose signature while conducting FMEA-style risk analysis to guide hardware\u2013software integration.",
        "Focused on synthetic data generation connected directly to our medical sensors, building and benchmarking three classifiers (logistic regression, LSTM, and GRU) on a 721K-sample physiological dataset, with the GRU selected for on-device inference via TFLite INT8 quantization to improve real-time overdose detection.",
        "Designed and implemented a machine learning model to optimize data processing and analysis, reducing noise and improving detection accuracy, while co-authoring an academic paper and literature review on opioid overdose trends and detection methodologies.",
      ],
      stack: ["React Native", "JavaScript", "ML", "Neurotech"],
    },
    {
      company: "UC Santa Cruz · AIEA Lab",
      role: "AI Researcher",
      location: "Remote",
      period: "Oct 2024 – Apr 2026",
      kind: "Research",
      short: "Researching logical reasoning in LLMs and methods to improve problem-solving.",
      bullets: [
        "Completed a 10-month undergraduate onboarding program at the Artificial Intelligence Explainability and Accountability (AIEA) Lab at UC Santa Cruz, engaging in a structured series of LLM and Logic research tasks covering symbolic reasoning, logical inference, and AI explainability across Python and Prolog; after a couple of years in the lab, now collaborating on academic research regarding logical reasoning in LLMs and methods to improve their problem-solving.",
        "Set up and integrated the OpenAI API to run large language model experiments, building and querying Prolog knowledge bases using SWI-Prolog and pyswip, and developing pipelines to translate natural language queries into symbolic logic and back into readable output.",
        "Researched and analyzed advanced topics in AI reasoning including the LOGIC-LM framework and deontic logic, studying their applications in legal AI, autonomous agent constraints, and AI ethics, while implementing a backward chaining inference engine for First Order Logic from scratch in Python and committing all work to GitHub.",
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
        "Assisted a Ph.D. student at UC Riverside on a Graph Neural Network (GNN)-based research project focused on detecting traffic congestion hotspots in large-scale road networks using AI and spatial data analytics on heterogeneous, real-time datasets.",
        "Conducted literature reviews across multiple research cycles, sourcing and evaluating over 15 papers on hotspot detection, graph machine learning models, and GNN training techniques including GraphSAGE, GraphSAINT, and ShadowGraph, then training and benchmarking these sampling methods on large road-network graphs.",
        "Analyzed advanced GNN architectures including HiGPT, HMSG, and GRAPES, assessing their applicability to heterogeneous road network datasets and contributing to model development and optimization strategies for spatial data and congestion prediction.",
      ],
      stack: ["GNNs", "Geospatial", "PyTorch"],
    },
  ],
  projects: [
    {
      title: "HealthFlow",
      subtitle: "Multi-Agent AI · Next.js",
      period: "May '26",
      status: "1st · Scalekit × Apify Hackathon",
      description:
        "A 9-agent TypeScript/Next.js system that converts paramedic voice input into structured FHIR R4 data, runs AI-driven differential diagnoses, and commits physician-approved orders to the EHR in under 60 seconds. Won 1st place, with Apify-powered drug-interaction screening and a SHA-256 immutable audit trail.",
      tags: ["Multi-Agent", "Next.js", "Healthcare"],
      accent: "oklch(0.64 0.15 250)",
      art: "pipeline",
      repo: "https://github.com/PranavAchar01/HealthFlow-ApifyxScalekit",
    },
    {
      title: "Recourse",
      subtitle: "Multi-Agent Systems · LangChain",
      period: "May '26",
      status: "Autonomous appeals",
      description:
        "A 13-agent, two-phase pipeline that reads an institutional denial letter, retrieves the institution's own published rules, catches where the denial contradicts them, drafts a cited appeal, and, after a human approval gate, files it and tracks the deadline. Runs end-to-end on deterministic mocks with zero API keys.",
      tags: ["LangChain", "TypeScript", "Agents"],
      accent: "oklch(0.55 0.17 262)",
      art: "scales",
      repo: "https://github.com/shanayg15/ReCourse",
    },
    {
      title: "ClearAuth",
      subtitle: "Multi-Agent Systems · TypeScript",
      period: "Jun '26",
      status: "Prior authorization",
      description:
        "An autonomous prior-authorization agent: a clinician pastes a note and the pipeline structures it into ICD-10 / CPT codes, checks payer coverage criteria, assembles the PA packet, runs a compliance audit, and, once the physician approves, submits via a browser agent while streaming the whole journey live to a CRM dashboard.",
      tags: ["LangChain", "SSE", "Healthcare"],
      accent: "oklch(0.71 0.12 236)",
      art: "form",
      repo: "https://github.com/shanayg15/ClearAuth",
    },
    {
      title: "Osteon",
      subtitle: "Agentic AI · Blender · FEA",
      period: "Jun '26",
      status: "Resilient Agents Hackathon",
      description:
        "An AI agent inside Blender that autonomously designs orthopedic implants by iterating geometry against biomechanical stress constraints. Built around a resilient agent loop where every model, tool, and provider call degrades gracefully through a 3-rung fallback ladder so the design loop always returns a valid result.",
      tags: ["Bedrock", "Blender", "Guardrails"],
      accent: "oklch(0.50 0.16 271)",
      art: "mesh",
      repo: "https://github.com/PranavAchar01/osteon",
    },
    {
      title: "Opioid Overdose Prediction Device",
      subtitle: "Neurotech × Machine Learning",
      period: "Nov '24",
      status: "Patent + copyright in progress",
      description:
        "A patent-pending neurotechnology device that monitors continuous physiological signals to detect opioid overdose events in real time. Co-developing the ML model that filters noise and improves detection accuracy, plus the React Native companion app for live alerts to patients and first responders.",
      tags: ["ML", "Neurotech", "Hardware"],
      accent: "oklch(0.66 0.14 245)",
      art: "ecg",
    },
    {
      title: "ProSLM",
      subtitle: "LLM Systems · Deployment",
      period: "Jun '25 – Jan '26",
      status: "UC Santa Cruz",
      description:
        "A research platform out of the AIEA Lab at UC Santa Cruz exploring symbolic-logic-augmented small language models. Supporting the website hosting and integration layer that connects the lab's research components into a unified, deployable system.",
      tags: ["LLMs", "Deployment", "Infra"],
      accent: "oklch(0.58 0.16 257)",
      art: "logic",
    },
    {
      title: "HotSpot Detection with GNNs",
      subtitle: "Graph Neural Networks · Geospatial AI",
      period: "May '25 – Jan '26",
      status: "UC Riverside",
      description:
        "Graph Neural Network models that surface traffic congestion hotspots from large-scale, real-time geospatial road network data. Benchmarked architectures like GraphSAGE, GraphSAINT, and HiGPT across heterogeneous datasets to validate transport-network performance.",
      tags: ["GNNs", "Geospatial", "Python"],
      accent: "oklch(0.74 0.11 230)",
      art: "graph",
    },
    {
      title: "ASL Recognition System",
      subtitle: "CNNs · LSTMs · Raspberry Pi",
      period: "Oct '24 – Mar '25",
      status: "2nd · ACSEF",
      description:
        "An AI-powered American Sign Language recognition system designed to bridge communication for Deaf and hard-of-hearing users. Co-led architecture and trained CNN + LSTM models running on a Raspberry Pi for real-time, on-device inference.",
      tags: ["CV", "Edge", "LSTM"],
      accent: "oklch(0.52 0.15 266)",
      art: "matrix",
    },
  ],
  skills: {
    "AI Techniques": ["Agentic Workflows", "Multi-Agent Systems", "Transfer Learning", "Reinforcement Learning", "Model Optimization", "Logical Reasoning", "Sequence Modeling"],
    "Frameworks & Libraries": ["TensorFlow", "PyTorch", "Keras", "React Native", "Next.js", "MCP"],
    "AI Models & Applications": ["Graph Neural Networks", "Large Language Models", "Computer Vision", "AI Agents"],
  },
};

const PROJECT_ACCENTS = {
  purple: 'oklch(0.68 0.16 260)',  // same as site accent
  blue:   'oklch(0.50 0.18 268)',  // deep navy
  green:  'oklch(0.80 0.11 245)',  // slightly lighter blue
  amber:  'oklch(0.70 0.16 248)',  // medium azure blue
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

function SectionHead({ num, title, kicker }) {
  return (
    <Reveal className="section-head">
      <div className="section-meta">
        <span className="section-num mono">{num}</span>
        <span className="section-line" />
        <span className="section-kicker mono">{kicker}</span>
      </div>
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
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 20);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  return (
    <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
      <div className="topnav-inner">
        <a href="#intro" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="logo-mark">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <circle cx="16" cy="16" r="15.2" fill="#0e0e14" stroke="currentColor" strokeWidth="1.1"/>
              <text x="16" y="22" textAnchor="middle"
                    fontFamily="var(--serif)"
                    fontSize="18" fontStyle="italic"
                    fill="currentColor"
                    letterSpacing="-0.5">SB</text>
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
              <span className="nav-num mono">{String(i + 1).padStart(2, '0')}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </nav>

        <div className="topnav-cta">
          <a href="assets/SahielBose_Resume.pdf" target="_blank" className="nav-btn">
            Resume
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </a>
        </div>
      </div>
      <div className="topnav-progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
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
      <div className="hero-bg">
        <div className="hero-glow-wrap"><div className="hero-glow" /></div>
      </div>

      <div className="hero-content">
        <h1 className="mega">
          <span className="mega-line">
            <AnimChars text="Sahiel" startDelay={0.15} />
            <span className="mega-space"> </span>
            <AnimChars text="Bose" className="mega-italic" startDelay={0.34} />
          </span>
        </h1>

        <Reveal delay={0.2}>
          <p className="hero-lede">{DATA.tagline}</p>
        </Reveal>

        <Reveal delay={0.3} className="hero-actions">
          <a href="#work" className="btn primary" onClick={(e) => { e.preventDefault(); document.getElementById('work').scrollIntoView({ behavior: 'smooth' }); }}>
            <span>Selected work</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href={`mailto:${DATA.email}`} className="btn ghost">
            <span>Get in touch</span>
          </a>
        </Reveal>

        <Reveal delay={0.4} className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num"><CountUp value="3" /></div>
            <div className="hero-stat-lbl mono">concurrent roles</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">UCLA</div>
            <div className="hero-stat-lbl mono">Math + CS</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num"><CountUp value="2" /></div>
            <div className="hero-stat-lbl mono">patents in progress</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num"><CountUp value="3" /></div>
            <div className="hero-stat-lbl mono">ongoing research papers</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- ABOUT ----------
function About() {
  return (
    <section id="about" className="section">
      <SectionHead num="01" title="About" kicker="A short introduction" />
      <div className="about-grid single">
        <div className="about-copy">
          {DATA.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}><p>{p}</p></Reveal>
          ))}
          <Reveal delay={0.15} className="about-links">
            <a href={`https://${DATA.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            </a>
            <a href={`https://${DATA.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href={`mailto:${DATA.email}`} aria-label="Email" title="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6l9 6 9-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- EDUCATION ----------
function Education() {
  return (
    <section id="education" className="section">
      <SectionHead num="02" title="Education" kicker="Where I'm studying" />
      <Reveal className="ucla-wrap">
        <div className="ucla-card">
          <div className="ucla-top">
            <div className="ucla-top-left">
              <div className="ucla-kicker mono">University of California</div>
              <div className="ucla-city">Los Angeles</div>
              <div className="ucla-pennant">
                <span>U</span><span>C</span><span>L</span><span>A</span>
              </div>
            </div>
          </div>

          <div className="ucla-body">
            <div className="ucla-degree-row">
              <div>
                <div className="mono tag">Degree</div>
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
function Experience() {
  const [active, setActive] = useState(0);
  const x = DATA.experience[active];
  const measureRef = useRef(null);
  const [minH, setMinH] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (!measureRef.current) return;
      let max = 0;
      measureRef.current.querySelectorAll('.xp-panel').forEach((el) => {
        max = Math.max(max, el.offsetHeight);
      });
      setMinH(max);
    };
    measure();
    const t = setTimeout(measure, 350); // re-measure once fonts settle
    window.addEventListener('resize', measure);
    return () => { clearTimeout(t); window.removeEventListener('resize', measure); };
  }, []);
  return (
    <section id="experience" className="section">
      <SectionHead num="03" title="Experience" kicker="Where I've been building" />
      <Reveal className="xp-layout">
        <div className="xp-tabs" role="tablist">
          {DATA.experience.map((e, i) => (
            <button
              key={e.company}
              className={`xp-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="xp-tab-num mono">0{i + 1}</span>
              <span className="xp-tab-body">
                <span className="xp-tab-company">{e.company}</span>
                <span className="xp-tab-role mono">{e.role}</span>
              </span>
              <span className="xp-tab-period mono">{e.period}</span>
              <span className="xp-tab-arrow">→</span>
            </button>
          ))}
        </div>

        <div className="xp-panel-wrap">
          <div className="xp-panel" key={active} style={minH ? { minHeight: minH } : undefined}>
            <XpPanelInner x={x} />
          </div>
          {/* Hidden copies of every panel — used only to measure the tallest so
              switching tabs never shifts the rest of the page. */}
          <div className="xp-measure" ref={measureRef} aria-hidden="true">
            {DATA.experience.map((e, i) => (
              <div className="xp-panel" key={i}><XpPanelInner x={e} /></div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function XpPanelInner({ x }) {
  return (
    <React.Fragment>
      <div className="xp-panel-head">
        <div>
          <div className="mono tag">{x.kind} · {x.location}</div>
          <h3>{x.role} <span className="at">at</span> <span className="co">{x.company}</span></h3>
        </div>
        <div className="xp-panel-period mono">{x.period}</div>
      </div>
      <p className="xp-panel-short">{x.short}</p>
      <ul className="xp-panel-bullets">
        {x.bullets.map((b, bi) => (
          <li key={bi} style={{ animationDelay: `${bi * 0.08}s` }}>
            <span className="bullet-idx mono">{String(bi + 1).padStart(2, '0')}</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

// ---------- PROJECTS ----------
function Projects() {
  return (
    <section id="work" className="section">
      <SectionHead num="04" title="Selected work" kicker="Projects & research" />
      <div className="proj-grid">
        {DATA.projects.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <TiltCard p={p} i={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TiltCard({ p, i }) {
  const tiltRef = useTilt(5);
  const artRef = useParallax(0.05);
  return (
    <article ref={tiltRef} className="proj-card has-tilt" style={{ '--proj': p.accent }}>
      <div className="proj-card-top">
        <span className="proj-num mono">PROJECT · 0{i + 1}</span>
        <span className="proj-period mono">{p.period}</span>
      </div>
      <div className="proj-art">
        <div ref={artRef} className="proj-art-inner">
          <ProjArt art={p.art} />
        </div>
      </div>
      <div className="proj-card-body">
        <div className="proj-sub mono">{p.subtitle}</div>
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-desc">{p.description}</p>
        {p.repo && (
          <a className="proj-link" href={p.repo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            <span>View source</span>
            <span className="proj-link-arrow">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

function ProjArt({ art }) {
  // Project-specific generative SVG art
  // 1 · HealthFlow — agent pipeline turning a voice signal into records
  if (art === 'pipeline') {
    const nodes = [60, 130, 200, 270, 340];
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        {Array.from({ length: 60 }).map((_, i) => {
          const x = 8 + i * 0.7;
          const a = Math.sin(i * 0.5) * Math.exp(-Math.abs(i - 25) / 14) * 26;
          return <rect key={i} x={x} y={100 - Math.abs(a)} width="1.4" height={Math.abs(a) * 2 || 1} rx="0.7" fill="currentColor" opacity="0.5" />;
        })}
        <line x1="50" y1="100" x2="350" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        {nodes.map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="100" r="9" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.85" />
            <circle cx={x} cy="100" r="3.4" fill="currentColor" />
            {i < nodes.length - 1 && <path d={`M ${x + 13} 95 l 6 5 l -6 5`} fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />}
          </g>
        ))}
      </svg>
    );
  }
  // 2 · Recourse — scales of justice (appeals / contradiction)
  if (art === 'scales') {
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        <line x1="200" y1="40" x2="200" y2="150" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        <line x1="120" y1="60" x2="280" y2="60" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <circle cx="200" cy="40" r="4" fill="currentColor" />
        {[120, 280].map((x, i) => (
          <g key={i} opacity={i === 0 ? 0.9 : 0.55}>
            <line x1={x} y1="60" x2={x - 26} y2="105" stroke="currentColor" strokeWidth="0.8" />
            <line x1={x} y1="60" x2={x + 26} y2="105" stroke="currentColor" strokeWidth="0.8" />
            <path d={`M ${x - 28} 105 A 28 16 0 0 0 ${x + 28} 105`} fill="none" stroke="currentColor" strokeWidth="1.3" />
          </g>
        ))}
        <line x1="160" y1="150" x2="240" y2="150" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        <path d="M 188 168 l 12 0 m -6 -6 l 0 12" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
      </svg>
    );
  }
  // 3 · ClearAuth — a form / document with a checkmark (prior-auth packet)
  if (art === 'form') {
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        <rect x="135" y="32" width="130" height="136" rx="8" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.7" />
        {[0, 1, 2, 3, 4].map((r) => (
          <line key={r} x1="152" y1={56 + r * 20} x2={r === 4 ? 210 : 248} y2={56 + r * 20} stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity={0.28 + r * 0.04} />
        ))}
        <circle cx="232" cy="140" r="18" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
        <path d="M 224 140 l 6 6 l 11 -13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // 4 · Osteon — isometric wireframe lattice (implant geometry)
  if (art === 'mesh') {
    const pts = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) {
      pts.push({ x: 110 + c * 45 + r * 22, y: 60 + r * 38, r, c });
    }
    const at = (rr, cc) => pts.find(p => p.r === rr && p.c === cc);
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        {pts.map((p, i) => {
          const right = at(p.r, p.c + 1);
          const down = at(p.r + 1, p.c);
          return (
            <g key={i}>
              {right && <line x1={p.x} y1={p.y} x2={right.x} y2={right.y} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />}
              {down && <line x1={p.x} y1={p.y} x2={down.x} y2={down.y} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />}
            </g>
          );
        })}
        {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill="currentColor" opacity="0.85" />)}
      </svg>
    );
  }
  // 5 · Opioid device — ECG / vital-signs waveform
  if (art === 'ecg') {
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        <path d="M 20 100 H 130 l 10 -8 l 14 16 l 12 -64 l 16 96 l 12 -40 H 250 l 10 -10 l 14 20 l 12 -10 H 380"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        <line x1="20" y1="100" x2="380" y2="100" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 5" opacity="0.25" />
      </svg>
    );
  }
  // 6 · ProSLM — symbolic-logic tree (logic-augmented LLM)
  if (art === 'logic') {
    const root = { x: 200, y: 42 };
    const mid = [{ x: 130, y: 110 }, { x: 270, y: 110 }];
    const leaf = [{ x: 95, y: 168 }, { x: 165, y: 168 }, { x: 235, y: 168 }, { x: 305, y: 168 }];
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        {mid.map((m, i) => <line key={i} x1={root.x} y1={root.y} x2={m.x} y2={m.y} stroke="currentColor" strokeWidth="1" opacity="0.45" />)}
        {leaf.map((l, i) => <line key={i} x1={mid[i < 2 ? 0 : 1].x} y1={mid[0].y} x2={l.x} y2={l.y} stroke="currentColor" strokeWidth="1" opacity="0.45" />)}
        {[root, ...mid].map((n, i) => <circle key={i} cx={n.x} cy={n.y} r="6" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.9" />)}
        {[root, ...mid].map((n, i) => <circle key={`d${i}`} cx={n.x} cy={n.y} r="2.4" fill="currentColor" />)}
        {leaf.map((l, i) => <rect key={i} x={l.x - 5} y={l.y - 5} width="10" height="10" rx="2" fill="currentColor" opacity="0.8" />)}
      </svg>
    );
  }
  // 7 · HotSpot GNN — road-network graph
  if (art === 'graph') {
    const nodes = Array.from({ length: 16 }).map((_, i) => ({
      x: 50 + (i % 4) * 100 + ((i * 37) % 23) - 11,
      y: 45 + Math.floor(i / 4) * 42 + ((i * 53) % 19) - 9,
    }));
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        {nodes.map((n, i) => nodes.slice(i + 1).map((m, j) => {
          const d = Math.hypot(m.x - n.x, m.y - n.y);
          if (d < 105) return <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="currentColor" strokeWidth="0.7" opacity="0.3" />;
          return null;
        }))}
        {nodes.map((n, i) => <circle key={i} cx={n.x} cy={n.y} r={i % 5 === 0 ? 5.5 : 3.4} fill="currentColor" opacity={i % 5 === 0 ? 1 : 0.7} />)}
      </svg>
    );
  }
  // 8 · ASL — CNN feature-map heatmap grid
  if (art === 'matrix') {
    const cols = 12, rows = 6, cell = 26;
    const ox = (400 - cols * cell) / 2, oy = (200 - rows * cell) / 2;
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        {Array.from({ length: rows * cols }).map((_, i) => {
          const c = i % cols, r = Math.floor(i / cols);
          const v = Math.abs(Math.sin(c * 0.7 + r * 0.9) * Math.cos(r * 0.6 - c * 0.3));
          return <rect key={i} x={ox + c * cell + 1} y={oy + r * cell + 1} width={cell - 2} height={cell - 2} rx="3" fill="currentColor" opacity={0.08 + v * 0.8} />;
        })}
      </svg>
    );
  }
  // fallback
  return (
    <svg viewBox="0 0 400 200" className="proj-svg">
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={200} cy={100} r={10 + i * 14} fill="none" stroke="currentColor" strokeWidth="0.8" opacity={0.6 - i * 0.07} />
      ))}
      <circle cx="200" cy="100" r="6" fill="currentColor" />
    </svg>
  );
}

function ProjArtOld({ kind }) {
  // Abstract generative-feeling SVG art per project
  if (kind === 'purple') {
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        {Array.from({ length: 50 }).map((_, i) => {
          const x = 20 + (i % 10) * 36;
          const y = 40 + Math.floor(i / 10) * 28;
          const h = 4 + Math.abs(Math.sin(i * 0.8)) * 60;
          return <rect key={i} x={x} y={y - h/2 + 80} width="3" height={h} fill="currentColor" opacity={0.4 + (i % 5) * 0.12} />;
        })}
      </svg>
    );
  }
  if (kind === 'blue') {
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i}
            d={`M 0 ${120 + i * 6} Q 100 ${60 + i * 10} 200 ${120 + i * 6} T 400 ${120 + i * 6}`}
            fill="none" stroke="currentColor" strokeWidth="1" opacity={0.3 + i * 0.1} />
        ))}
      </svg>
    );
  }
  if (kind === 'green') {
    const nodes = Array.from({ length: 14 }).map((_, i) => ({
      x: 40 + (i % 7) * 50, y: 50 + Math.floor(i / 7) * 80
    }));
    return (
      <svg viewBox="0 0 400 200" className="proj-svg">
        {nodes.map((n, i) => nodes.slice(i + 1).map((m, j) => {
          const d = Math.hypot(m.x - n.x, m.y - n.y);
          if (d < 90) return <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="currentColor" strokeWidth="0.8" opacity="0.35" />;
          return null;
        }))}
        {nodes.map((n, i) => <circle key={i} cx={n.x} cy={n.y} r="4" fill="currentColor" opacity="0.9" />)}
      </svg>
    );
  }
  // amber
  return (
    <svg viewBox="0 0 400 200" className="proj-svg">
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={200} cy={100} r={10 + i * 14} fill="none" stroke="currentColor" strokeWidth="0.8" opacity={0.6 - i * 0.07} />
      ))}
      <circle cx="200" cy="100" r="6" fill="currentColor" />
    </svg>
  );
}

// ---------- SKILLS ----------
function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead num="05" title="Toolkit" kicker="Technical skills" />
      <div className="skills-grid">
        {Object.entries(DATA.skills).map(([group, items], i) => (
          <SkillCol key={group} group={group} items={items} i={i} />
        ))}
      </div>
    </section>
  );
}

function SkillCol({ group, items, i }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="skill-col"
      data-in={inView}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.9s var(--ease-out) ${i * 0.05}s, transform 0.9s var(--ease-out) ${i * 0.05}s`,
      }}
    >
      <div className="skill-col-head">
        <span className="mono">0{i + 1}</span>
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
      <Reveal className="section-head">
        <div className="section-meta">
          <span className="section-num mono">06</span>
          <span className="section-line" />
          <span className="section-kicker mono">Contact</span>
        </div>
      </Reveal>
      <Reveal className="contact-big">
        <button onClick={copy} className="big-mail" title="Click to copy">
          {DATA.email}
          <span className="mail-copied mono">{copied ? '✓ copied' : 'copy'}</span>
        </button>
      </Reveal>
      <div className="contact-links">
        <Reveal delay={0.05}>
          <a href={`https://${DATA.github}`} target="_blank">
            <span className="mono label">01 / Code</span>
            <span className="big">GitHub</span>
            <span className="mono arr">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={`https://${DATA.linkedin}`} target="_blank">
            <span className="mono label">02 / Network</span>
            <span className="big">LinkedIn</span>
            <span className="mono arr">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.15}>
          <a href="assets/SahielBose_Resume.pdf" target="_blank">
            <span className="mono label">03 / Résumé</span>
            <span className="big">PDF</span>
            <span className="mono arr">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <a href={`tel:${DATA.phone.replace(/\D/g, '')}`}>
            <span className="mono label">04 / Direct</span>
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
  "grain": true
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
  }, [tweaks]);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Toolkit' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="app">
      <div className="grain-layer" />
      <DepthBackdrop />
      <TopNav sections={sections} />
      <main>
        <Hero />
        <About />
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
