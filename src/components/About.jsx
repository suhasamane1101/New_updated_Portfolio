import { motion } from "framer-motion";
import { useInView } from "../hooks";
import { personal, education } from "../data/portfolio";

function RevealDiv({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay }} style={style}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "5rem 3rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg1)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "260px 1fr 280px", gap: "4rem", alignItems: "start" }} className="about-grid">

        {/* Info cards */}
        <RevealDiv>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {[
              { label: "Location", val: `${personal.location} 🇩🇪` },
              { label: "Email",    val: personal.email },
              { label: "Portfolio",val: personal.portfolio },
              { label: "GitHub",   val: personal.github },
            ].map(({ label, val }) => (
              <div key={label} style={{
                padding: "1.1rem 1.3rem", background: "var(--bg2)",
                border: "1px solid var(--border)", borderRadius: 12,
                transition: "border-color 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor="var(--border2)"}
              onMouseLeave={e => e.currentTarget.style.borderColor="var(--border)"}
              >
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem", color: "var(--text3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{label}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text)", fontWeight: 500, wordBreak: "break-all" }}>{val}</div>
              </div>
            ))}
          </div>
        </RevealDiv>

        {/* Bio */}
        <RevealDiv delay={0.1}>
          <p style={{ fontSize: "1.15rem", color: "var(--text2)", lineHeight: 1.9, fontWeight: 300 }}>
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>Aspiring Data Scientist</strong> with hands-on experience in Machine Learning, Deep Learning, and Generative AI. Skilled in{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>Python, NLP</strong>, and building scalable data-driven applications, with a focus on solving real-world problems using intelligent systems. Currently pursuing{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>MSc Computer Science at Karlsruhe Institute of Technology (KIT), Germany</strong>.
          </p>
        </RevealDiv>

        {/* Education */}
        <RevealDiv delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {education.map((edu) => (
              <div key={edu.id} style={{
                padding: "1.25rem 1.5rem", background: "var(--bg2)",
                border: "1px solid var(--border)", borderRadius: 12,
                position: "relative", overflow: "hidden",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor="var(--border2)"}
              onMouseLeave={e => e.currentTarget.style.borderColor="var(--border)"}
              >
                {/* Top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--accent), var(--accent2))", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }}
                  className="edu-line" />
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "var(--text)", letterSpacing: "0.02em", marginBottom: "0.3rem" }}>{edu.degree}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text2)" }}>{edu.institution}</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.6rem", alignItems: "center" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)" }}>{edu.period}</span>
                  {edu.gpa && <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--accent)" }}>{edu.gpa}</span>}
                  {edu.current && <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--accent3)" }}>Current</span>}
                </div>
              </div>
            ))}
          </div>
        </RevealDiv>
      </div>

      <style>{`
        @media(max-width:1100px){ .about-grid{ grid-template-columns:1fr 1fr!important; } }
        @media(max-width:700px) { .about-grid{ grid-template-columns:1fr!important; padding:0!important; } #about{padding:3.5rem 1.25rem!important;} }
        div:hover > .edu-line { transform: scaleX(1)!important; }
      `}</style>
    </section>
  );
}
