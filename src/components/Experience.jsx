import { motion } from "framer-motion";
import { useInView } from "../hooks";
import { experience } from "../data/portfolio";

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

function ExpItem({ item, index }) {
  const [ref, inView] = useInView();
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay: index * 0.1 }}
      style={{
        display: "grid", gridTemplateColumns: "180px 1fr",
        gap: "3rem", padding: "3rem 0 3rem 3rem",
        borderBottom: "1px solid var(--border)",
        position: "relative",
      }} className="exp-item-grid"
    >
      {/* Timeline dot */}
      <div style={{
        position: "absolute", left: -5, top: "3.5rem",
        width: 10, height: 10, borderRadius: "50%",
        background: "var(--bg)", border: "2px solid var(--accent)",
        boxShadow: "0 0 16px var(--glow)",
        transition: "background 0.3s",
      }} className="exp-dot" />

      {/* Meta */}
      <div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--accent)", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{item.period}</div>
        <div style={{ fontSize: "0.84rem", color: "var(--text2)", marginBottom: "0.3rem" }}>{item.company}</div>
        <div style={{ fontSize: "0.76rem", color: "var(--text3)" }}>{item.location}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.25rem" }}>
          {item.tags.map((t) => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem",
              padding: "3px 10px", borderRadius: 40,
              background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text2)",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.45rem", color: "var(--text)", letterSpacing: "-0.01em", marginBottom: "1.25rem", lineHeight: 1.2 }}>{item.role}</div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {item.points.map((p, i) => (
            <li key={i} style={{ fontSize: "0.9rem", color: "var(--text2)", lineHeight: 1.7, paddingLeft: "1.4rem", position: "relative", fontWeight: 300 }}>
              <span style={{ position: "absolute", left: 0, top: "0.7em", width: 5, height: 1, background: "var(--accent2)", display: "block" }} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg1)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "7rem 3rem" }}>
        <SectionLabel num="02 — Experience" title="Work History" />
        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, var(--accent), var(--border), transparent)" }} />
          {experience.map((item, i) => <ExpItem key={item.id} item={item} index={i} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:700px){ .exp-item-grid{grid-template-columns:1fr!important;padding-left:2rem!important;gap:1rem!important;} #experience > div{padding:4rem 1.25rem!important;} }
        .exp-item-grid:hover .exp-dot { background: var(--accent)!important; }
      `}</style>
    </section>
  );
}
