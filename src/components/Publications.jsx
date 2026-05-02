import { motion } from "framer-motion";
import { useInView } from "../hooks";
import { publications } from "../data/portfolio";

function SectionLabel({ num, title }) {
  const [ref, inView] = useInView();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", flexShrink: 0 }}>{num}</span>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem,5vw,3.5rem)", color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1, wordBreak: "break-word" }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, var(--border2), transparent)", flexShrink: 1, minWidth: 0 }} />
    </motion.div>
  );
}

export default function Publications() {
  return (
    <section id="publications" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "7rem 3rem" }}>
        <SectionLabel num="05 — Research" title="Publications" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="pub-grid">
          {publications.map((pub, i) => {
            const [ref, inView] = useInView();
            return (
              <motion.div key={pub.id} ref={ref}
                initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay: i * 0.1 }}
                style={{
                  padding: "2rem", background: "var(--bg2)",
                  border: "1px solid var(--border)", borderRadius: 16,
                  position: "relative", overflow: "hidden",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onHoverStart={e => {}}
                whileHover={{ borderColor: "var(--border2)", y: -3 }}
              >
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--accent2)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {pub.subtitle}
                </div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1.3, marginBottom: "0.5rem" }}>
                  {pub.title}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.63rem", color: "var(--text3)", marginBottom: "1rem" }}>
                  {pub.subtitle}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text2)", lineHeight: 1.7, fontWeight: 300 }}>
                  {pub.description}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--text3)" }}>{pub.date}</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {pub.tech.map((t) => (
                      <span key={t} style={{
                        fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem",
                        padding: "2px 8px", borderRadius: 40,
                        background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text3)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:700px){ .pub-grid{grid-template-columns:1fr!important;} }`}</style>
    </section>
  );
}