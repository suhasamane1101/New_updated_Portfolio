const items = [
  "Data Science","Machine Learning","Generative AI","Deep Learning",
  "NLP","Computer Vision","LLMs","RAG Systems","MLOps","KIT Germany",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: "var(--accent)", padding: "0.85rem 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ display: "flex", animation: "marquee 22s linear infinite", whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.85rem",
            color: "var(--bg)", letterSpacing: "0.05em", textTransform: "uppercase",
            padding: "0 2.5rem", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: "2.5rem",
          }}>
            {item}
            <span style={{ opacity: 0.35 }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}`}</style>
    </div>
  );
}
