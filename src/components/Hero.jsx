import { motion } from "framer-motion";
import { useTypewriter } from "../hooks";
import { personal } from "../data/portfolio";
import ParticleCanvas from "./ParticleCanvas";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  const role = useTypewriter(personal.roles);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 3rem 5rem",
      paddingTop: 80,
      position: "relative", overflow: "hidden",
    }}>
      <ParticleCanvas />

      {/* Giant background letters */}
      <div aria-hidden style={{
        position: "absolute", right: "-0.02em", bottom: "-0.05em",
        fontFamily: "'Syne',sans-serif", fontWeight: 800,
        fontSize: "clamp(16rem,32vw,40rem)",
        lineHeight: 1, letterSpacing: "-0.04em",
        color: "transparent",
        WebkitTextStroke: "1px rgba(255,255,255,0.03)",
        pointerEvents: "none", userSelect: "none", zIndex: 0,
      }}>
        SA
      </div>

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1400, width: "100%", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr auto",
        gap: "3rem", alignItems: "flex-end",
      }} className="hero-grid">

        {/* LEFT */}
        <div>
          {/* Status pill */}
          <motion.div {...fadeUp(0.1)} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(74,244,184,0.08)", border: "1px solid rgba(74,244,184,0.2)",
            borderRadius: 40, padding: "6px 16px",
            fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem",
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--accent3)", marginBottom: "2.5rem",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent3)", boxShadow: "0 0 8px var(--accent3)", animation: "breathe 2s ease-in-out infinite" }} />
            Available · MSc CS @ KIT, Germany · 2026
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.25)} style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: "clamp(2.8rem,7.5vw,7rem)",
            lineHeight: 0.9, letterSpacing: "-0.03em",
            color: "var(--text)", marginBottom: "0.2em",
          }}>
            {personal.firstName}
            <br />
            <span style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {personal.lastName}
            </span>
          </motion.h1>

          {/* Role typewriter */}
         <motion.div {...fadeUp(0.4)} style={{
            display: "flex", alignItems: "center", gap: 12,
            fontFamily: "'Bricolage Grotesque',sans-serif",
            fontSize: "clamp(0.85rem,2vw,1.35rem)", color: "var(--text2)",
            fontWeight: 300, marginBottom: "2.5rem",
            flexWrap: "wrap", rowGap: 6,
          }}>
            <span style={{ color: "var(--text)", fontWeight: 500, minWidth: 0 }}>{role}</span>
            <span style={{ color: "var(--accent)", opacity: 0.8, animation: "blink 1s step-end infinite" }}>|</span>
            <span style={{ color: "var(--text3)" }}>·</span>
            <span>AI Engineer</span>
            <span style={{ color: "var(--text3)" }}>·</span>
            <span>ML Researcher</span>
          </motion.div>

          {/* Description */}
          <motion.p {...fadeUp(0.55)} style={{
            maxWidth: 580, fontSize: "1rem", color: "var(--text2)",
            lineHeight: 1.85, fontWeight: 300, marginBottom: "3rem",
          }}>
            {personal.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.7)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "var(--accent)", color: "var(--bg)",
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem",
              fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "14px 30px", borderRadius: 60,
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 40px rgba(232,255,71,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="var(--accent)"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
            >
              View Projects →
            </a>
            <a href={personal.cvUrl} target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--text2)", padding: "14px 30px", borderRadius: 60,
              border: "1px solid var(--border2)", transition: "all 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color="var(--text)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.3)"; e.currentTarget.style.background="var(--surface)"; }}
            onMouseLeave={e => { e.currentTarget.style.color="var(--text2)"; e.currentTarget.style.borderColor="var(--border2)"; e.currentTarget.style.background="transparent"; }}
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT — socials */}
        <motion.div {...fadeUp(0.9)} style={{
          display: "flex", flexDirection: "column", gap: "0.9rem",
          alignItems: "flex-end",
        }} className="hero-socials">
          {[
            { label: "GitHub",   href: personal.githubUrl },
            { label: "LinkedIn", href: personal.linkedinUrl },
            { label: "Email",    href: `mailto:${personal.email}` },
          ].map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem",
              color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase",
              transition: "color 0.2s", display: "flex", alignItems: "center", gap: 8,
            }}
            onMouseEnter={e => e.currentTarget.style.color="var(--text)"}
            onMouseLeave={e => e.currentTarget.style.color="var(--text3)"}
            >
              {s.label} ↗
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{
        position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.55rem", color: "var(--text3)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, var(--accent), transparent)", animation: "scrollDown 2.5s ease-in-out infinite" }} />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1;}50%{opacity:0;} }
        @keyframes breathe { 0%,100%{opacity:1;box-shadow:0 0 8px var(--accent3);}50%{opacity:0.5;box-shadow:0 0 20px var(--accent3);} }
        @keyframes scrollDown { 0%{transform:scaleY(0);transform-origin:top;}40%{transform:scaleY(1);transform-origin:top;}60%{transform:scaleY(1);transform-origin:bottom;}100%{transform:scaleY(0);transform-origin:bottom;} }
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important;}
          .hero-socials{align-items:flex-start!important;flex-direction:row!important;flex-wrap:wrap;gap:0.75rem!important;}
        }
        @media(max-width:600px){
          #hero{padding:1rem!important;padding-top:80px!important;padding-bottom:4rem!important;}
          .hero-grid{gap:1.5rem!important;}
        }
        @media(max-width:400px){
          #hero{padding:0.75rem!important;padding-top:76px!important;}
        }
      `}</style>
    </section>
  );
}
