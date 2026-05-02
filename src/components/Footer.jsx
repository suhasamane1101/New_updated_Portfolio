import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg)", borderTop: "1px solid var(--border)",
      padding: "2rem 3rem",
      display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
    }}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text2)" }}>
        {personal.name} · Data Scientist & AI Engineer
      </div>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--text3)", letterSpacing: "0.06em" }}>
        Karlsruhe, Germany · {personal.email}
      </div>
    </footer>
  );
}
