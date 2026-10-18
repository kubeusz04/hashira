"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { forms, pad } from "@/data/forms";

export function WaterAtmosphere({
  variant = "water",
}: {
  variant?: "water" | "petals";
}) {
  return (
    <div className={`ambient-layer ambient-${variant}`} aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <span
          className={`drifting-petal petal-${i % 3}`}
          key={i}
          style={
            {
              "--petal-x": `${(i * 37 + 11) % 100}%`,
              "--petal-y": `${(i * 19 + 7) % 86}%`,
              "--petal-delay": `${-i * 2.3}s`,
              "--petal-duration": `${16 + (i % 5) * 3}s`,
              "--petal-size": `${6 + (i % 4) * 2}px`,
            } as CSSProperties
          }
        />
      ))}
      <svg
        className="flowing-ribbon"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke="currentColor">
          <path d="M-50 220C180 50 320 360 580 170S980 20 1260 160" />
          <path d="M-50 235C180 65 340 375 590 185S990 35 1260 175" />
          <path d="M-50 250C200 80 360 390 610 200S1010 50 1260 190" />
        </g>
      </svg>
      <div className="surface-ripples">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

export function ArchiveExperience() {
  const progress = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    let frame = 0;
    const draw = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - innerHeight;
      const value = distance > 0 ? scrollY / distance : 0;
      if (progress.current)
        progress.current.style.transform = `scaleX(${Math.min(1, Math.max(0, value))})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    schedule();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      resize.disconnect();
    };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motionPaused = String(paused);
    return () => {
      delete document.documentElement.dataset.motionPaused;
    };
  }, [paused]);
  useEffect(() => {
    const layers = document.querySelectorAll<HTMLElement>(".ambient-layer");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          (entry.target as HTMLElement).dataset.active = String(
            entry.isIntersecting,
          );
        }),
      { rootMargin: "100px" },
    );
    layers.forEach((el) => observer.observe(el));
    const visibility = () => {
      document.documentElement.dataset.pageHidden = String(document.hidden);
    };
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      delete document.documentElement.dataset.pageHidden;
    };
  }, []);
  useEffect(() => {
    if (reduced || paused) return;
    const animations: Animation[] = [];
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (!el.dataset.revealed) {
            el.dataset.revealed = "true";
            const index = Number(el.dataset.revealOrder || 0);
            animations.push(
              el.animate(
                [
                  { opacity: 0, transform: "translateY(30px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 900,
                  delay: Math.min(index, 4) * 85,
                  easing: "cubic-bezier(.2,.7,.2,1)",
                  fill: "both",
                },
              ),
            );
          }
          reveal.unobserve(el);
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll<HTMLElement>(
        ".hero-copy > *, .character-copy > *, .story-heading > *, .story-panorama, .story-chapter > *, .duet-heading > *, .duet-copy > *, .detail-strip figure, .philosophy > *, .principles article, .forms-heading > *, .form-copy > *, .form-art, .gallery-heading > *, .gallery-rail, .closing-copy > *",
      )
      .forEach((el, i) => {
        el.dataset.revealOrder = String(i % 3);
        reveal.observe(el);
      });
    const hero = document.querySelector<HTMLElement>(".hero");
    const water = document.querySelector<HTMLElement>(".breathing");
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const render = () => {
      frame = 0;
      if (!matchMedia("(min-width: 901px) and (pointer: fine)").matches) return;
      if (hero) {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty(
          "--hero-depth",
          `${Math.min(55, Math.max(0, -r.top * 0.09))}px`,
        );
        hero.style.setProperty("--pointer-x", `${pointerX}px`);
        hero.style.setProperty("--pointer-y", `${pointerY}px`);
      }
      if (water) {
        const r = water.getBoundingClientRect();
        water.style.setProperty(
          "--water-depth",
          `${Math.min(30, Math.max(-30, r.top * 0.035))}px`,
        );
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const pointer = (e: PointerEvent) => {
      pointerX = (e.clientX / innerWidth - 0.5) * 16;
      pointerY = (e.clientY / innerHeight - 0.5) * 10;
      schedule();
    };
    const reset = () => {
      pointerX = 0;
      pointerY = 0;
      schedule();
    };
    hero?.addEventListener("pointermove", pointer, { passive: true });
    hero?.addEventListener("pointerleave", reset);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    schedule();
    return () => {
      reveal.disconnect();
      animations.forEach((a) => a.cancel());
      cancelAnimationFrame(frame);
      hero?.removeEventListener("pointermove", pointer);
      hero?.removeEventListener("pointerleave", reset);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      hero?.style.removeProperty("--hero-depth");
      hero?.style.removeProperty("--pointer-x");
      hero?.style.removeProperty("--pointer-y");
      water?.style.removeProperty("--water-depth");
    };
  }, [reduced, paused]);
  return (
    <>
      <div className="reading-progress" aria-hidden="true">
        <div ref={progress} />
      </div>
      <button
        className="motion-control"
        type="button"
        aria-label={paused ? "Resume animation" : "Pause animation"}
        aria-pressed={paused}
        onClick={() => setPaused((v) => !v)}
      >
        {paused ? (
          <Play size={15} aria-hidden="true" />
        ) : (
          <Pause size={15} aria-hidden="true" />
        )}
        <span>{paused ? "Resume motion" : "Pause motion"}</span>
      </button>
    </>
  );
}

export function FormNavigation({
  entries = forms,
}: {
  entries?: typeof forms;
}) {
  const [active, setActive] = useState(1);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current)
          setActive(Number((current.target as HTMLElement).dataset.form));
      },
      {
        rootMargin: "-15% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );
    document
      .querySelectorAll(".form-row")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="form-nav" aria-label="Jump to a form">
      <span>The forms</span>
      <div>
        {entries.map((f) => (
          <a
            href={`#form-${pad(f.number)}`}
            key={f.number}
            aria-label={`Form ${f.number}: ${f.name} — ${f.title}`}
            aria-current={active === f.number ? "location" : undefined}
            onClick={() => setActive(f.number)}
          >
            {pad(f.number)}
            <i aria-hidden="true" />
          </a>
        ))}
      </div>
      <span className="current-form-name" aria-hidden="true">
        {entries[active - 1].name}
      </span>
    </nav>
  );
}
