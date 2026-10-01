"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe,
  Layers3,
  Mail,
  Menu,
  Server,
  Smartphone,
  Terminal,
  X,
} from "lucide-react";

const EMAIL = "happinesslethabo13@gmail.com";

const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}&su=${encodeURIComponent("Portfolio Enquiry")}`;

const CV_REQUEST_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}&su=${encodeURIComponent("CV Request")}&body=${encodeURIComponent(
  `Hi Lethabo,

I came across your portfolio and would like to request a copy of your CV.

Kind regards,`
)}`;

const projects = [
  {
    number: "01",
    title: "Dev Solution",
    category: "DIGITAL SOLUTIONS PLATFORM",
    description:
      "A technology business focused on websites, web applications, APIs, payment integrations and practical digital solutions for businesses.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Supabase",
      "GitHub",
    ],
    url: "https://www.devsolution.co.za",
  },
  {
    number: "02",
    title: "MetroFibre App Prototype",
    category: "UI / UX • APP PROTOTYPE",
    description:
      "A mobile application prototype created as a concept for MetroFibre, exploring a more accessible digital experience for customers.",
    technologies: [
      "Figma",
      "UI/UX",
      "Prototyping",
      "Mobile Design",
      "User Experience",
    ],
    url: "https://www.figma.com/proto/jWlxrerxVaYSXbtAW3H00U/MetroFibre-App-Prototype?node-id=1-3&p=f&t=J56fLcJx47eAtBoR-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Git",
  "GitHub",
  "SQL",
  "PostgreSQL",
  "Supabase",
];

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web experiences built with performance, usability and maintainability in mind.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Web Applications",
    description:
      "Interactive applications that turn business requirements into practical digital products.",
  },
  {
    icon: Server,
    number: "03",
    title: "APIs & Integrations",
    description:
      "Backend integrations and REST APIs that allow systems, services and applications to communicate.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Digital Solutions",
    description:
      "Technology solutions focused on solving real problems rather than simply adding technology.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      {/* NAVIGATION */}
      <header className="site-header">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            LB<span>.</span>
          </a>

          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href={CV_REQUEST_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cv"
              onClick={closeMenu}
            >
              Request CV
              <ArrowUpRight size={16} />
            </a>
          </nav>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <div className="hero-profile">
              <div className="profile-image-wrap">
                <img
                  src="/images/me.jpeg"
                  alt="Lethabo Baloyi"
                  className="profile-image"
                />
              </div>

              <div className="profile-info">
                <strong>LETHABO BALOYI</strong>
                <span>FULL-STACK DEVELOPER</span>
              </div>
            </div>

            <h1>
              I BUILD
              <br />
              <span>DIGITAL</span>
              <br />
              SOLUTIONS.
            </h1>

            <p className="hero-description">
              Full-stack developer focused on building modern web applications,
              business systems and practical digital experiences that solve
              real problems.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                Explore my work
                <ArrowUpRight size={18} />
              </a>

              <a
                href={CV_REQUEST_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Request My CV
                <ArrowUpRight size={18} />
              </a>

              <a
                href={GMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Let&apos;s connect
                <Mail size={18} />
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span>BASED IN</span>
                <strong>JOHANNESBURG, SA</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>FULL-STACK DEVELOPMENT</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="window-title">developer.ts</span>

                <Terminal size={15} />
              </div>

              <div className="code-content">
                <div>
                  <span className="code-number">01</span>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span>{" "}
                  <span className="white">=</span>
                </div>

                <div className="indent">
                  <span className="white">{"{"}</span>
                </div>

                <div className="indent-2">
                  <span className="green">name</span>
                  <span className="white">:</span>{" "}
                  <span className="yellow">&quot;Lethabo Baloyi&quot;</span>
                  <span className="white">,</span>
                </div>

                <div className="indent-2">
                  <span className="green">role</span>
                  <span className="white">:</span>{" "}
                  <span className="yellow">
                    &quot;Full-Stack Developer&quot;
                  </span>
                  <span className="white">,</span>
                </div>

                <div className="indent-2">
                  <span className="green">stack</span>
                  <span className="white">:</span>{" "}
                  <span className="white">[</span>
                </div>

                <div className="indent-3">
                  <span className="yellow">&quot;React&quot;</span>
                  <span className="white">,</span>
                </div>

                <div className="indent-3">
                  <span className="yellow">&quot;Next.js&quot;</span>
                  <span className="white">,</span>
                </div>

                <div className="indent-3">
                  <span className="yellow">&quot;TypeScript&quot;</span>
                  <span className="white">,</span>
                </div>

                <div className="indent-3">
                  <span className="yellow">&quot;Node.js&quot;</span>
                </div>

                <div className="indent-2">
                  <span className="white">]</span>
                  <span className="white">,</span>
                </div>

                <div className="indent-2">
                  <span className="green">mindset</span>
                  <span className="white">:</span>{" "}
                  <span className="yellow">
                    &quot;Build. Learn. Improve.&quot;
                  </span>
                </div>

                <div className="indent">
                  <span className="white">{"}"}</span>
                </div>

                <div className="code-cursor">▋</div>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              <Code2 size={18} />
              <div>
                <span>CODE</span>
                <strong>BUILD</strong>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <Layers3 size={18} />
              <div>
                <span>IDEAS</span>
                <strong>TO PRODUCTS</strong>
              </div>
            </div>

            <div className="hero-number">01</div>
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={17} />
        </a>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>FULL-STACK DEVELOPMENT</span>
          <i>✦</i>
          <span>WEB APPLICATIONS</span>
          <i>✦</i>
          <span>APIs &amp; INTEGRATIONS</span>
          <i>✦</i>
          <span>DIGITAL SOLUTIONS</span>
          <i>✦</i>
          <span>FULL-STACK DEVELOPMENT</span>
          <i>✦</i>
          <span>WEB APPLICATIONS</span>
          <i>✦</i>
          <span>APIs &amp; INTEGRATIONS</span>
          <i>✦</i>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <span className="section-number">01</span>
          <span className="section-label">ABOUT ME</span>
        </div>

        <div className="about-grid">
          <div className="about-title">
            <p className="small-label">THE DEVELOPER</p>

            <h2>
              TECHNOLOGY
              <br />
              WITH <span>PURPOSE.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="large-text">
              I&apos;m Lethabo, a developer who enjoys turning ideas,
              requirements and problems into working digital products.
            </p>

            <p>
              My focus is full-stack development, with experience across
              frontend interfaces, backend logic, APIs, databases and business
              solutions.
            </p>

            <p>
              I&apos;m continuously building, learning and improving, with a
              strong interest in software engineering and creating technology
              that people can actually use.
            </p>

            <div className="about-facts">
              <div>
                <strong>01</strong>
                <span>BUILDING</span>
              </div>

              <div>
                <strong>02</strong>
                <span>LEARNING</span>
              </div>

              <div>
                <strong>03</strong>
                <span>PROBLEM SOLVING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="section-heading">
          <span className="section-number">02</span>
          <span className="section-label">WHAT I BUILD</span>
        </div>

        <div className="section-intro">
          <h2>
            FROM IDEA
            <br />
            TO <span>INTERFACE.</span>
          </h2>

          <p>
            I work across the stack to create useful, responsive and
            maintainable digital experiences.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-line" />
              </article>
            );
          })}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section work-section">
        <div className="section-heading">
          <span className="section-number">03</span>
          <span className="section-label">SELECTED WORK</span>
        </div>

        <div className="section-intro work-intro">
          <h2>
            WORK THAT
            <br />
            <span>DOES SOMETHING.</span>
          </h2>

          <p>
            A selection of development and product design work built around
            practical digital experiences.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <div className="project-heading">
                  <div>
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight />
                  </a>
                </div>

                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <span className="section-number">04</span>
          <span className="section-label">TECHNICAL TOOLKIT</span>
        </div>

        <div className="skills-grid">
          <div className="skills-copy">
            <p className="small-label">THE STACK</p>

            <h2>
              TOOLS I USE
              <br />
              TO <span>BUILD.</span>
            </h2>

            <p>
              A growing technical toolkit built through projects, practical
              development and continuous learning.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE — RESTORED */}
      <section id="experience" className="section experience-section">
        <div className="section-heading">
          <span className="section-number">05</span>
          <span className="section-label">EXPERIENCE</span>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-year">2025 — PRESENT</div>

            <div className="experience-content">
              <span>FOUNDER &amp; DEVELOPER</span>
              <h3>Dev Solution</h3>

              <p>
                Building digital solutions including websites, web
                applications, APIs, payment integrations and business-focused
                technology solutions.
              </p>

              <div className="experience-tags">
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>APIs</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-year">2025</div>

            <div className="experience-content">
              <span>SOFTWARE DEVELOPMENT PROGRAMME</span>
              <h3>FNB App Academy</h3>

              <p>
                Completed the FNB App Academy programme, strengthening
                practical software development, application-building and
                problem-solving skills.
              </p>

              <div className="experience-tags">
                <span>95.56%</span>
                <span>Software Development</span>
                <span>App Development</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-year">2024 — 2025</div>

            <div className="experience-content">
              <span>YES4YOUTH • SALES ADMINISTRATOR</span>
              <h3>MetroFibre</h3>

              <p>
                Worked in a business environment across administrative and
                operational processes, while gaining exposure to systems,
                reporting, customer processes and technology-driven workflows.
                Managed administrative operations, stakeholder communication, 
                and commission reporting for internal teams and partners. Maintained data accuracy, 
                resolved support queries (including portal access and account management), and contributed to platform updates using HTML, CSS, JavaScript, Angular, PHP, and .NET.
              </p>

              <div className="experience-tags">
                <span>Administration</span>
                <span>Power BI</span>
                <span>Systems</span>
                <span>Operations</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section credentials-section">
        <div className="section-heading">
          <span className="section-number">06</span>
          <span className="section-label">CREDENTIALS</span>
        </div>

        <div className="credentials-grid">
          <article className="credential-card">
            <span>01</span>
            <h3>FNB App Academy</h3>
            <p>2025 Certification</p>
            <strong>95.56%</strong>
          </article>

          <article className="credential-card">
            <span>02</span>
            <h3>ITIL Foundation</h3>
            <p>Alison</p>
            <strong>IT SERVICE MANAGEMENT</strong>
          </article>

          <article className="credential-card">
            <span>03</span>
            <h3>Software Engineering</h3>
            <p>Continuous Learning</p>
            <strong>BUILD • LEARN • IMPROVE</strong>
          </article>
        </div>
      </section>

      {/* YELLOW CTA — RESTORED */}
      <section id="contact" className="connect-section">
        <div className="connect-inner">
          <div className="connect-label">
            <span>06</span>
            <span>LET&apos;S CONNECT</span>
          </div>

          <div className="connect-main">
            <h2>
              HAVE AN IDEA?
              <br />
              <span>LET&apos;S BUILD IT.</span>
            </h2>

            <p>
              Have a project, opportunity or idea you&apos;d like to discuss?
              Let&apos;s turn it into something real.
            </p>

            <div className="connect-actions">
              <a
                href={GMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-button"
              >
                Start a conversation
                <Mail size={19} />
              </a>

              <a
                href={CV_REQUEST_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link"
              >
                Request My CV
                <ArrowUpRight size={17} />
              </a>
            </div>

            <a
              href={GMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-email"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* PREVIOUS FOOTER */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              LB<span>.</span>
            </a>

            <p>
              Building digital solutions with code, curiosity and purpose.
            </p>
          </div>

          <div className="footer-navigation">
            <span>NAVIGATION</span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <span>CONTACT</span>

            <a
              href={GMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMAIL}
            </a>

            <a
              href={CV_REQUEST_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request CV
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LETHABO BALOYI</span>

          <span>DESIGNED &amp; BUILT WITH DEV MOTIVATION</span>

          <a href="#home">
            BACK TO TOP
            <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}