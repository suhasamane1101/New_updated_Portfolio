import { useState, useEffect } from "react";
import { useScrollProgress } from "../hooks";
import { personal } from "../data/portfolio";

const links = [
  { label: "About",      href: "#about"        },
  { label: "Experience", href: "#experience"   },
  { label: "Projects",   href: "#projects"     },
  { label: "Skills",     href: "#skills"       },
  { label: "Contact",    href: "#contact"      },
];

export default function Navbar() {
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener("scroll", close, { passive: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [menuOpen]);

  return (
    <>
      {/* Scroll progress */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: 2, zIndex: 800,
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        transition: "width 0.1s linear",
      }} />

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 700,
        height: 64,
        padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled || menuOpen ? "rgba(8,8,8,0.95)" : "rgba(8,8,8,0.4)",
        backdropFilter: "blur(24px) saturate(180%)",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        transition: "background 0.4s, border-color 0.4s",
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.04em" }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: "var(--accent)",
            boxShadow: "0 0 12px var(--accent)",
            animation: "breathe 3s ease-in-out infinite",
          }} />
          {personal.name}
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "0.2rem" }} className="nav-links-hide">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--text2)", padding: "6px 14px", borderRadius: 40,
              transition: "color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "var(--surface)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.background = "transparent"; }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Desktop CTA */}
          <a href={personal.cvUrl} target="_blank" rel="noreferrer" className="nav-resume-btn" style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--bg)", background: "var(--accent)",
            padding: "9px 22px", borderRadius: 40, fontWeight: 500,
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(232,255,71,0.28)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
          >
            Resume ↗
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              display: "none", flexDirection: "column", justifyContent: "center",
              alignItems: "center", gap: 5,
              width: 40, height: 40, background: "transparent", border: "none",
              cursor: "pointer", padding: 8,
            }}
          >
            <span style={{
              display: "block", width: 22, height: 2,
              background: "var(--text)",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              transition: "transform 0.3s",
            }} />
            <span style={{
              display: "block", width: 22, height: 2,
              background: "var(--text)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }} />
            <span style={{
              display: "block", width: 22, height: 2,
              background: "var(--text)",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              transition: "transform 0.3s",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className="mobile-menu" style={{
        position: "fixed", top: 64, left: 0, right: 0, zIndex: 690,
        background: "rgba(8,8,8,0.97)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border)",
        padding: menuOpen ? "1.5rem 2rem" : "0 2rem",
        maxHeight: menuOpen ? 400 : 0,
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), padding 0.3s",
        display: "none",
      }}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--text2)", padding: "0.9rem 0",
              borderBottom: i < links.length - 1 ? "1px solid var(--border)" : "none",
              transition: "color 0.2s",
            }}
            onTouchStart={e => e.currentTarget.style.color="var(--accent)"}
            onTouchEnd={e => e.currentTarget.style.color="var(--text2)"}
          >
            {l.label}
          </a>
        ))}
        <a href={personal.cvUrl} target="_blank" rel="noreferrer" style={{
          display: "inline-flex", marginTop: "1.25rem",
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--bg)", background: "var(--accent)",
          padding: "10px 24px", borderRadius: 40, fontWeight: 500,
        }}>
          Resume ↗
        </a>
      </div>

      <style>{`
        @keyframes breathe {
          0%,100% { opacity:1; box-shadow: 0 0 8px var(--accent); }
          50%      { opacity:0.5; box-shadow: 0 0 20px var(--accent); }
        }
        @media(max-width:768px){
          .nav-links-hide{ display:none !important; }
          .nav-resume-btn{ display:none !important; }
          .hamburger-btn{ display:flex !important; }
          .mobile-menu{ display:block !important; }
        }
        @media(hover:none){
          a, button { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
