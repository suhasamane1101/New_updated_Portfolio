import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks";
import { projects } from "../data/portfolio";

function SectionLabel({ num, title }) {
  const [ref, inView] = useInView();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{num}</span>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1 }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, var(--border2), transparent)" }} />
    </motion.div>
  );
}

function ProjectCard({ project, index, colSpan = 4 }) {
  const [ref, inView] = useInView();
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay: (index % 3) * 0.08 }}
      style={{ gridColumn: `span ${colSpan}` }}
      className="bento-col"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={{
          padding: "2rem", background: "var(--bg2)",
          border: `1px solid ${project.featured ? "rgba(232,255,71,0.15)" : "var(--border)"}`,
          borderRadius: 16,
          position: "relative", overflow: "hidden",
          height: "100%", display: "flex", flexDirection: "column",
          cursor: "none",
          transition: "border-color 0.4s, transform 0.4s, box-shadow 0.4s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "var(--border2)";
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.6)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = project.featured ? "rgba(232,255,71,0.15)" : "var(--border)";
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Spotlight glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(232,255,71,0.04), transparent 60%)`,
        }} />

        {/* Featured top line */}
        {project.featured && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />
        )}

        {/* Card header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noreferrer" style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem",
                color: "var(--text3)", padding: "4px 10px", border: "1px solid var(--border)",
                borderRadius: 40, transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color="var(--accent)"; e.currentTarget.style.borderColor="rgba(232,255,71,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.color="var(--text3)"; e.currentTarget.style.borderColor="var(--border)"; }}
              >Code ↗</a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem",
                color: "var(--text3)", padding: "4px 10px", border: "1px solid var(--border)",
                borderRadius: 40, transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color="var(--accent3)"; e.currentTarget.style.borderColor="rgba(74,244,184,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.color="var(--text3)"; e.currentTarget.style.borderColor="var(--border)"; }}
              >Live ↗</a>
            )}
          </div>
        </div>

        {/* Badge */}
        {project.featured && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem",
            color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "0.75rem", position: "relative", zIndex: 1,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
            Featured Project
          </div>
        )}

        {/* Title */}
        <div style={{
          fontFamily: "'Syne',sans-serif", fontWeight: 700,
          fontSize: colSpan >= 7 ? "1.55rem" : "1.1rem",
          color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1.2,
          marginBottom: "0.4rem", position: "relative", zIndex: 1,
        }}>
          {project.title}
        </div>

        {/* Subtitle */}
        <div style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem",
          color: "var(--accent2)", letterSpacing: "0.06em",
          marginBottom: "0.9rem", position: "relative", zIndex: 1,
        }}>
          {project.subtitle}
        </div>

        {/* Description */}
        <p style={{
          fontSize: "0.84rem", color: "var(--text2)", lineHeight: 1.7,
          fontWeight: 300, flex: 1, position: "relative", zIndex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.5rem", position: "relative", zIndex: 1 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem",
              padding: "3px 10px", borderRadius: 40,
              background: "var(--surface)", border: "1px solid var(--border)",
              color: "var(--text3)", letterSpacing: "0.04em",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Bento layout: row 1 = large(7) + small(5), row 2 = 3x4, row 3 = small(4)+small(4)+small(4) but we only have 6 projects
const spanMap = [7, 5, 4, 4, 4, 12];

export default function Projects() {
  return (
    <section id="projects" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "7rem 3rem" }}>
        <SectionLabel num="03 — Projects" title="Selected Work" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1rem" }} className="bento-grid">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.id} project={proj} index={i} colSpan={spanMap[i] || 4} />
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){ .bento-col{ grid-column:span 6!important; } }
        @media(max-width:700px) { .bento-col{ grid-column:span 12!important; } #projects > div{padding:4rem 1.25rem!important;} }
      `}</style>
    </section>
  );
}
