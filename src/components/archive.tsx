"use client";

import { sitePath } from "@/lib/site-path";
import Image from "@/components/asset-image";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Menu,
  X,
  RefreshCw,
} from "lucide-react";
import { LazyMotion, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { characterPortraits } from "@/data/portraits";
import { forms, pad, artPath } from "@/data/forms";
const loadFeatures = () =>
  import("./motion-features").then((mod) => mod.default);
const links = [
  { href: "#character", label: "Character" },
  { href: "#story", label: "Their Story" },
  { href: "#breathing", label: "The Breathing" },
  { href: "#forms", label: "Twelve Forms" },
  { href: "#gallery", label: "Gallery" },
];
export function SiteNav({
  character = "yoon",
}: {
  character?: "yoon" | "kuba";
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="desktop-nav" aria-label="Main navigation">
        {[
          ...links,
          {
            href: sitePath(character === "yoon" ? "/kuba/" : "/"),
            label: character === "yoon" ? "Kuba ↗" : "Yoon ↗",
          },
        ].map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a href="#forms" className="nav-explore" aria-label="Explore the forms">
          <ArrowUpRightIcon />
        </a>
      </nav>
      <Button
        variant="ghost"
        size="icon-lg"
        className="mobile-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        hidden={!open}
        aria-label="Mobile navigation"
      >
        {[
          ...links,
          {
            href: sitePath(character === "yoon" ? "/kuba/" : "/"),
            label: character === "yoon" ? "Kuba ↗" : "Yoon ↗",
          },
        ].map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
            <ArrowUpRightIcon />
          </a>
        ))}
      </nav>
    </>
  );
}
function ArrowUpRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}
type ArtworkProps = {
  src: string;
  original?: string;
  alternate?: string;
  alt: string;
  title: string;
  priority?: boolean;
  variant?: string;
};
export function Artwork({
  src,
  alternate,
  original,
  alt,
  title,
  priority = false,
  variant = "portrait",
}: ArtworkProps) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const [previewAlternate, setPreviewAlternate] = useState(false);
  const [alternateReady, setAlternateReady] = useState(false);
  const showAlternate = previewAlternate && alternateReady;
  const originalSrc = original || src;
  const images = alternate ? [originalSrc, alternate] : [originalSrc];
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setIndex(0);
      }}
    >
      <LazyMotion features={loadFeatures} strict>
        <m.div
          className={`artwork artwork-${variant}${showAlternate ? " is-alternate" : ""}`}
          whileHover={reduced ? undefined : { y: -5 }}
          transition={{ duration: 0.4 }}
        >
          <DialogTrigger
            className="art-trigger"
            onClick={() => setIndex(showAlternate ? 1 : 0)}
            aria-label={`View full artwork: ${title}`}
          >
            <Image
              src={src}
              className="primary-art"
              alt={alt}
              fill
              sizes={
                variant === "hero"
                  ? "(max-width: 700px) 100vw, 58vw"
                  : variant === "plate"
                    ? "(max-width: 900px) 90vw, 52vw"
                    : variant === "scene"
                      ? "88vw"
                      : variant === "closing"
                        ? "(max-width: 700px) 160vw, 80vw"
                        : variant === "character"
                          ? "(max-width: 700px) 150vw, 80vw"
                          : "(max-width: 700px) 85vw, 42vw"
              }
              preload={priority}
            />
            {alternate ? (
              <Image
                src={alternate}
                alt={`Character illustration of ${title}`}
                fill
                sizes="(max-width: 900px) 90vw, 52vw"
                className="alternate-art"
                onLoad={() => setAlternateReady(true)}
              />
            ) : null}
            <span className="expand-icon">
              <Expand size={16} aria-hidden="true" />
              <span className="sr-only">Expand artwork</span>
            </span>
          </DialogTrigger>
          {alternate ? (
            <button
              className="art-switch"
              type="button"
              aria-label={
                previewAlternate
                  ? "Show movement plate"
                  : "Show character illustration"
              }
              aria-pressed={previewAlternate}
              onClick={() => setPreviewAlternate((v) => !v)}
            >
              <RefreshCw size={13} aria-hidden="true" />
              <span>
                {previewAlternate ? "Movement plate" : "Character study"}
              </span>
            </button>
          ) : null}
        </m.div>
      </LazyMotion>
      <DialogContent className="art-viewer">
        <div className="viewer-heading">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {index === 0
              ? "Original illustration"
              : "Alternate character artwork"}
            {alternate ? ` · ${index + 1} of 2` : ""}
          </DialogDescription>
        </div>
        <div className="viewer-image">
          <Image
            key={images[index]}
            src={images[index]}
            alt={index === 0 ? alt : `Alternate illustration of ${title}`}
            fill
            sizes="95vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="viewer-footer">
          <span>Full composition · Original proportions</span>
          {alternate ? (
            <div className="viewer-controls">
              <Button
                variant="outline"
                size="icon"
                aria-label="Previous artwork"
                onClick={() => setIndex((index + 1) % 2)}
              >
                <ArrowLeft />
              </Button>
              <span aria-live="polite">{index + 1} / 2</span>
              <Button
                variant="outline"
                size="icon"
                aria-label="Next artwork"
                onClick={() => setIndex((index + 1) % 2)}
              >
                <ArrowRight />
              </Button>
            </div>
          ) : (
            <span>Escape to close</span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
export type GalleryItem = {
  src: string;
  title: string;
  label: string;
  alt: string;
};
export function Gallery({ items }: { items?: GalleryItem[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const move = (direction: number) => {
    const el = rail.current;
    if (el)
      el.scrollBy({
        left:
          direction *
          ((el.firstElementChild?.getBoundingClientRect().width ||
            el.clientWidth) +
            parseFloat(getComputedStyle(el).gap || "0")),
        behavior: reduced ? "instant" : "smooth",
      });
  };
  return (
    <>
      <div className="gallery-toolbar">
        <span>Character portraits & twelve form studies</span>
        <div>
          <Button
            variant="outline"
            size="icon-lg"
            aria-label="Previous gallery illustrations"
            onClick={() => move(-1)}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            aria-label="Next gallery illustrations"
            onClick={() => move(1)}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div
        className="gallery-rail"
        ref={rail}
        tabIndex={0}
        role="region"
        aria-label="Alternate artwork gallery; scroll horizontally to explore all twelve forms"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            move(e.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        {items ? (
          items.map((p) => (
            <figure key={p.src}>
              <Artwork src={p.src} alt={p.alt} title={p.title} />
              <figcaption>
                <span>{p.label}</span>
                <h3>{p.title}</h3>
                <small>Kuba · The Polish Hashira</small>
              </figcaption>
            </figure>
          ))
        ) : (
          <>
            {characterPortraits.map((p) => (
              <figure key={p.src}>
                <Artwork src={p.src} alt={p.alt} title={`Yoon — ${p.title}`} />
                <figcaption>
                  <span>{p.label}</span>
                  <h3>{p.title}</h3>
                  <small>Yoon · The Korean Hashira</small>
                </figcaption>
              </figure>
            ))}
            <figure>
              <Artwork
                src="/art/yoon.webp"
                alt="The original full portrait of Yoon with yellow freesias and her ornamental katana"
                title="Yoon — original character portrait"
              />
              <figcaption>
                <span>Main illustration</span>
                <h3>Yoon</h3>
                <small>The Korean Hashira</small>
              </figcaption>
            </figure>
            {[
              forms[7],
              forms[4],
              ...forms.filter((f) => ![8, 5].includes(f.number)),
            ].map((f) => (
              <figure key={f.number}>
                <Artwork
                  src={artPath(f.number, "art")}
                  alt={`Yoon performing ${f.name} — ${f.title}, alternate character illustration`}
                  title={`Form ${pad(f.number)} — ${f.name}: ${f.title}`}
                />
                <figcaption>
                  <span>
                    {pad(f.number)} / {f.name}
                  </span>
                  <h3>{f.title}</h3>
                  <small>
                    Alternate artwork
                    {f.number === 5 ? " · Golden star study" : ""}
                  </small>
                </figcaption>
              </figure>
            ))}
          </>
        )}
      </div>
    </>
  );
}
