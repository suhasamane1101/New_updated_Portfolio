import { motion } from "framer-motion";
import { useInView } from "../hooks";
import { skills, certifications } from "../data/portfolio";

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

function Pill({ label }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem",
      padding: "5px 14px", borderRadius: 40,
      background: "var(--surface)", border: "1px solid var(--border)",
      color: "var(--text2)", transition: "all 0.2s", cursor: "default",
    }}
    onMouseEnter={e => { e.currentTarget.style.background="rgba(232,255,71,0.08)"; e.currentTarget.style.borderColor="rgba(232,255,71,0.25)"; e.currentTarget.style.color="var(--accent)"; }}
    onMouseLeave={e => { e.currentTarget.style.background="var(--surface)"; e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text2)"; }}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <section id="skills" style={{ background: "var(--bg1)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "7rem 3rem" }}>
        <SectionLabel num="04 — Skills" title="Tech Stack" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }} className="skills-layout">

          {/* Left */}
          <motion.div ref={ref} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
            <p style={{ fontSize: "1rem", color: "var(--text2)", lineHeight: 1.85, fontWeight: 300, marginBottom: "2.5rem" }}>
              A full-stack AI engineering toolkit spanning from raw data wrangling to production-grade ML systems and GenAI applications.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {certifications.map((cert) => (
                <div key={cert.name} style={{
                  padding: "1rem 1.25rem",
                  background: "var(--bg2)", border: "1px solid var(--border)",
                  borderRadius: 10, borderLeft: "3px solid var(--accent3)",
                }}>
                  <div style={{ fontSize: "0.82rem", color: "var(--text)", fontWeight: 500, lineHeight: 1.4 }}>{cert.name}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--text3)", marginTop: "0.35rem" }}>
                    {cert.issuer} · {cert.date}{cert.note ? ` · ${cert.note}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — skills table */}
          <motion.div ref={ref2} initial={{ opacity: 0, y: 36 }} animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay: 0.1 }}>
            {skills.map((group, i) => (
              <div key={group.category} style={{
                display: "grid", gridTemplateColumns: "150px 1fr",
                gap: "1.5rem", alignItems: "center",
                padding: "1rem 0",
                borderBottom: i === skills.length - 1 ? "none" : "1px solid var(--border)",
                borderTop: i === 0 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  {group.category}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {group.items.map((item) => <Pill key={item} label={item} />)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ .skills-layout{grid-template-columns:1fr!important;} } @media(max-width:600px){ #skills .section-wrap{padding:4rem 1.5rem;} }`}</style>
    </section>
  );
}
