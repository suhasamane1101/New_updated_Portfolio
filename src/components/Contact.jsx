import { motion } from "framer-motion";
import { useInView } from "../hooks";
import { personal, languages } from "../data/portfolio";

function SectionLabel({ num, title }) {
  const [ref, inView] = useInView();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{num}</span>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1 }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, var(--border2), transparent)" }} />
    </motion.div>
  );
}

function LangBar({ lang, delay }) {
  const [ref, inView] = useInView();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
        <span style={{ fontSize: "0.88rem", color: "var(--text)", fontWeight: 500 }}>{lang.name}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)" }}>{lang.level}</span>
      </div>
      <div style={{ height: 3, background: "var(--surface)", borderRadius: 2, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${lang.pct}%` } : {}}
          transition={{ duration: 1.6, ease: [0.16,1,0.3,1], delay: delay + 0.2 }}
          style={{ height: "100%", background: "linear-gradient(90deg, var(--accent3), var(--accent))", borderRadius: 2 }}
        />
      </div>
    </motion.div>
  );
}

function ContactRow({ label, value, href }) {
  return (
    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.1rem 0", borderBottom: "1px solid var(--border)",
      transition: "padding-left 0.25s",
    }}
    onMouseEnter={e => { e.currentTarget.style.paddingLeft = "0.5rem"; }}
    onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0"; }}
    >
      <div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
        <div style={{ fontSize: "0.88rem", color: "var(--text)", marginTop: "0.2rem", transition: "color 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.color="var(--accent)"}
          onMouseLeave={e => e.currentTarget.style.color="var(--text)"}
        >{value}</div>
      </div>
      <span style={{ fontSize: "1.1rem", color: "var(--text3)", transition: "all 0.25s", transform: "rotate(-45deg)" }}
        onMouseEnter={e => { e.currentTarget.style.color="var(--accent)"; e.currentTarget.style.transform="rotate(-45deg) translate(3px,-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.color="var(--text3)"; e.currentTarget.style.transform="rotate(-45deg)"; }}
      >↗</span>
    </a>
  );
}

export default function Contact() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <section id="contact" style={{ background: "var(--bg1)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "7rem 3rem" }}>
        <SectionLabel num="06 — Contact" title="Let's Connect" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="contact-grid">

          {/* Left */}
          <motion.div ref={ref} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
            <div style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 800,
              fontSize: "clamp(2.2rem,5vw,4rem)",
              lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--text)",
              marginBottom: "2.5rem",
            }}>
              Let's<br />Build<br />
              <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Together
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--text2)", lineHeight: 1.85, fontWeight: 300, marginBottom: "2.5rem" }}>
              {personal.tagline}
            </p>

            {/* Lang bars */}
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Languages Spoken
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {languages.map((lang, i) => <LangBar key={lang.name} lang={lang} delay={i * 0.08} />)}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div ref={ref2} initial={{ opacity: 0, y: 36 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay: 0.15 }}>
            <ContactRow label="Email"    value={personal.email}    href={`mailto:${personal.email}`} />
            <ContactRow label="LinkedIn" value={`/in/${personal.linkedin}`} href={personal.linkedinUrl} />
            <ContactRow label="GitHub"   value={`/${personal.github}`}      href={personal.githubUrl} />
            <ContactRow label="Portfolio" value={personal.portfolio} href={`https://${personal.portfolio}`} />
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:800px){ .contact-grid{grid-template-columns:1fr!important;gap:3rem!important;} }
        @media(max-width:600px){ #contact > div { padding: 4rem 1.25rem !important; } }
      `}</style>
    </section>
  );
}
