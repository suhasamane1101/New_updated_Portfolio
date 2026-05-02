import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, animId;
    const particles = [];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x       = Math.random() * W;
        this.y       = Math.random() * H;
        this.size    = Math.random() * 1.5 + 0.3;
        this.speedX  = (Math.random() - 0.5) * 0.25;
        this.speedY  = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.35 + 0.05;
        this.life    = 0;
        this.maxLife = Math.random() * 400 + 200;
      }
      update() {
        this.x += this.speedX; this.y += this.speedY; this.life++;
        if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        const fade = Math.min(this.life / 60, 1) * Math.min((this.maxLife - this.life) / 60, 1);
        ctx.globalAlpha = this.opacity * fade;
        ctx.fillStyle = "#e8ff47";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.globalAlpha = (1 - dist / 100) * 0.05;
            ctx.strokeStyle = "#e8ff47";
            ctx.lineWidth   = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      drawConnections();
      particles.forEach((p) => { p.update(); p.draw(); });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
    />
  );
}
