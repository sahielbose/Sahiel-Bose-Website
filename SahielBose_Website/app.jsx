const { useState, useEffect, useRef } = React;

// ---------- DATA ----------
const DATA = {
  name: "Sahiel Bose",
  tagline: "UCLA Stats & DS '30. Building agentic AI at Optivia and neurotech at ThinkNeuro.",
  email: "sahielbose@gmail.com",
  phone: "(925) 871-8844",
  github: "github.com/sahielbose",
  linkedin: "linkedin.com/in/sahiel-bose",
  about: [
    "I study Statistics and Data Science at UCLA. On the side, I co-founded Optivia, an agentic AI workflow, and serve as its Chief Technology Officer, where I oversee and lead the logic, AI architecture, and multi-agent pipelines behind our patent-pending platform.",
    "I also intern at ThinkNeuro, focused on real-time machine learning that interfaces directly with medical sensors to detect opioid overdose events as they happen. Alongside that, I've spent the last couple of years researching logical reasoning in LLMs and graph neural networks at UC Santa Cruz and UC Riverside.",
  ],
  experience: [
    {
      company: "Optivia",
      role: "Co-Founder & CTO",
      location: "Dublin, CA",
      period: "Mar 2025 – Present",
      kind: "Founder · Patent pending",
      short: "Leading architecture for a patent-pending agentic AI platform: multi-agent pipelines, prompt routing, decision logic.",
      bullets: [
        "Lead design & development of AI agents for the Optivia prototype as primary architect of its core intelligence, agentic workflows, and decision-making logic, and lead the patent filing covering the system.",
        "Designed the mathematical modeling and algorithmic logic behind a multi-agent pipeline: prompt routing, complexity scoring, model selection, prompt engineering.",
        "Built a framework that intercepts user inputs, dynamically enriches prompts with targeted clarifying questions, and activates Claude Code commands via multi-agent systems + the Anthropic SDK, and serve as lead author on the research paper documenting it.",
      ],
      stack: ["Anthropic SDK", "Multi-Agent", "Python", "Prompt Routing"],
    },
    {
      company: "ThinkNeuro LLC",
      role: "Software Engineering Intern",
      location: "Dublin, CA",
      period: "Nov 2024 – Present",
      kind: "Engineering",
      short: "Shipping a React Native neuroscience app + ML models for opioid-overdose prediction.",
      bullets: [
        "Contributed to the research and development of a patent-pending opioid overdose detection device, focusing on continuous physiological signal monitoring to identify overdose events in real time.",
        "Focused on synthetic data generation connected directly to our medical sensors, training and benchmarking logistic regression, LSTM, and GRU models on the streams to improve real-time overdose detection.",
        "Designed and implemented a machine learning model to optimize data processing and analysis, reducing noise and improving detection accuracy, while co-authoring an academic paper and literature review on opioid overdose trends and detection methodologies.",
      ],
      stack: ["React Native", "JavaScript", "ML", "Neurotech"],
    },
    {
      company: "UC Santa Cruz · AIEA Lab",
      role: "Research Intern",
      location: "Santa Cruz, CA",
      period: "Oct 2024 – Apr 2026",
      kind: "Research",
      short: "Researching logical reasoning in LLMs and methods to improve problem-solving.",
      bullets: [
        "Completed a 10-month undergraduate onboarding program at the Artificial Intelligence Explainability and Accountability (AIEA) Lab at UC Santa Cruz, engaging in a structured series of LLM and Logic research tasks covering symbolic reasoning, logical inference, and AI explainability across Python and Prolog.",
        "Set up and integrated the OpenAI API to run large language model experiments, building and querying Prolog knowledge bases using SWI-Prolog and pyswip, and developing pipelines to translate natural language queries into symbolic logic and back into readable output.",
        "Researched and analyzed advanced topics in AI reasoning including the LOGIC-LM framework and deontic logic, studying their applications in legal AI, autonomous agent constraints, and AI ethics, while implementing a backward chaining inference engine for First Order Logic from scratch in Python and committing all work to GitHub.",
      ],
      stack: ["LLMs", "Reasoning", "Prolog", "Python"],
    },
    {
      company: "UC Riverside Research Lab",
      role: "Research Intern",
      location: "Riverside, CA",
      period: "May 2025 – Jan 2026",
      kind: "Research",
      short: "GNN-based traffic congestion hotspot detection across large-scale road networks.",
      bullets: [
        "Assisted a Ph.D. student at UC Riverside on a Graph Neural Network (GNN)-based research project focused on detecting traffic congestion hotspots in large-scale road networks using AI and spatial data analytics.",
        "Conducted literature reviews across multiple research cycles, sourcing and evaluating over 15 papers on hotspot detection, graph machine learning models, and GNN training techniques including GraphSAGE, GraphSAINT, and ShadowGraph.",
        "Analyzed advanced GNN architectures including HiGPT, HMSG, and GRAPES, assessing their applicability to heterogeneous road network datasets and contributing to model development and optimization strategies for spatial data.",
      ],
      stack: ["GNNs", "Geospatial", "PyTorch"],
    },
  ],
  projects: [
    {
      title: "Opioid Overdose Prediction Device",
      subtitle: "Neurotech × Machine Learning",
      period: "'24 – Now",
      status: "Patent + copyright in progress",
      description:
        "A patent-pending neurotechnology device that monitors continuous physiological signals to detect opioid overdose events in real time. Co-developing the ML model that filters noise and improves detection accuracy, plus the React Native companion app for live alerts to patients and first responders.",
      tags: ["ML", "Neurotech", "Hardware"],
      accent: "purple",
    },
    {
      title: "ProSLM",
      subtitle: "LLM Systems · Deployment",
      period: "'25",
      status: "UC Santa Cruz",
      description:
        "A research platform out of the AIEA Lab at UC Santa Cruz exploring symbolic-logic-augmented small language models. Supporting the website hosting and integration layer that connects the lab's research components into a unified, deployable system.",
      tags: ["LLMs", "Deployment", "Infra"],
      accent: "blue",
    },
    {
      title: "HotSpot Detection with GNNs",
      subtitle: "Graph Neural Networks · Geospatial AI",
      period: "'25 – '26",
      status: "UC Riverside",
      description:
        "Graph Neural Network models that surface traffic congestion hotspots from large-scale, real-time geospatial road network data. Benchmarked architectures like GraphSAGE, GraphSAINT, and HiGPT across heterogeneous datasets to validate transport-network performance.",
      tags: ["GNNs", "Geospatial", "Python"],
      accent: "green",
    },
    {
      title: "ASL Recognition System",
      subtitle: "CNNs · LSTMs · Raspberry Pi",
      period: "'24 – '25",
      status: "2nd · ACSEF",
      description:
        "An AI-powered American Sign Language recognition system designed to bridge communication for Deaf and hard-of-hearing users. Co-led architecture and trained CNN + LSTM models running on a Raspberry Pi for real-time, on-device inference.",
      tags: ["CV", "Edge", "LSTM"],
      accent: "amber",
    },
  ],
  skills: {
    "AI / ML": ["Logical Reasoning", "Deep Learning", "Neural Networks", "Agentic Workflows", "Prompt Engineering", "Multi-Agent Systems", "Model Training", "AI Agents", "Prompt Routing", "Computer Vision"],
    "Frameworks": ["TensorFlow", "PyTorch", "Keras", "React Native", "n8n", "Anthropic SDK", "MCP"],
    "Models": ["CNNs", "RNNs", "GNNs", "GANs", "LLMs", "NLP", "KNN"],
    "Languages": ["Python", "Java", "Prolog"],
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
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: 0.12, ...options });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
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
        transform: inView ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}s, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

function SectionHead({ num, title, kicker }) {
  return (
    <Reveal className="section-head">
      <div className="section-meta">
        <span className="section-num mono">{num}</span>
        <span className="section-line" />
        <span className="section-kicker mono">{kicker}</span>
      </div>
      <h2 className="section-title">{title}</h2>
    </Reveal>
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
            Résumé
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
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: false });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="intro" className="hero">
      <div className="hero-bg">
        <div className="hero-glow" />
      </div>

      <div className="hero-content">
        <Reveal className="hero-eyebrow">
          <span className="eyebrow-tag mono">
            <span className="pulse" />
            Open to summer 2026 · research & engineering
          </span>
          <span className="eyebrow-loc mono">Los Angeles ↔ Bay Area · {time} PT</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mega">
            <span className="mega-line">Sahiel <span className="mega-italic">Bose</span></span>
          </h1>
        </Reveal>

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
            <div className="hero-stat-num">2</div>
            <div className="hero-stat-lbl mono">concurrent roles</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">UCLA</div>
            <div className="hero-stat-lbl mono">Statistics and Data Science</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">2</div>
            <div className="hero-stat-lbl mono">patents in progress</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">3</div>
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
            <a href={`https://${DATA.github}`} target="_blank"><span>GitHub</span><svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></a>
            <a href={`https://${DATA.linkedin}`} target="_blank"><span>LinkedIn</span><svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></a>
            <a href={`mailto:${DATA.email}`}><span>Email</span><svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></a>
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
                <h3>B.S. Statistics and Data Science</h3>
              </div>
              <div className="ucla-years">
                <div className="year-big">2026</div>
                <div className="year-dash">–</div>
                <div className="year-big">2030</div>
              </div>
            </div>

            <div className="ucla-meta">
              <div>
                <div className="mono tag">College</div>
                <div>Letters &amp; Science</div>
              </div>
              <div>
                <div className="mono tag">Location</div>
                <div>Los Angeles, CA</div>
              </div>
              <div>
                <div className="mono tag">Class of</div>
                <div>2030</div>
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

        <div className="xp-panel" key={active}>
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
          <div className="xp-panel-stack">
            {x.stack.map(s => <span key={s} className="stack-chip mono">{s}</span>)}
          </div>
        </div>
      </Reveal>
    </section>
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
            <article className="proj-card" style={{ '--proj': PROJECT_ACCENTS[p.accent] }}>
              <div className="proj-card-top">
                <span className="proj-num mono">PROJECT · 0{i + 1}</span>
                <span className="proj-period mono">{p.period}</span>
              </div>
              <div className="proj-art">
                <ProjArt kind={p.accent} />
              </div>
              <div className="proj-card-body">
                <div className="proj-sub mono">{p.subtitle}</div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="chip mono">{t}</span>)}
                </div>
                <div className="proj-foot">
                  <span className="proj-status mono">{p.status}</span>
                  <span className="proj-arrow">↗</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjArt({ kind }) {
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
          <Reveal key={group} delay={i * 0.05} className="skill-col">
            <div className="skill-col-head">
              <span className="mono">0{i + 1}</span>
              <span className="skill-col-title">{group}</span>
              <span className="skill-col-count mono">{items.length}</span>
            </div>
            <div className="skill-items">
              {items.map(it => <span key={it} className="skill-chip">{it}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
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
