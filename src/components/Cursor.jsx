import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  // Don't render on touch devices
  const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  if (isTouch) return null;

  useEffect(() => {
    const onMove = (e) => {
      setVisible(true);
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    const targets = document.querySelectorAll("a, button, [data-hover]");
    targets.forEach((el) => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });

    const mo = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      mo.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none", mixBlendMode: "difference" }}>
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          width: hovering ? 0 : 8,
          height: hovering ? 0 : 8,
          borderRadius: "50%",
          background: "var(--accent)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "absolute",
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "var(--accent)" : "rgba(232,255,71,0.5)"}`,
          transition: "width 0.35s var(--ease), height 0.35s var(--ease), border-color 0.2s",
        }}
      />
    </div>
  );
}
