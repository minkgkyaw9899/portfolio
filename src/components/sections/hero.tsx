"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL, STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroBackground } from "@/components/ui/hero-background";
import { useLanguage } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ROLES_EN = [
  "Fullstack Engineer",
  "Mobile Specialist",
  "React Native Expert",
  "Frontend Developer",
];
const ROLES_MM = [
  "Fullstack Engineer",
  "Mobile ကျွမ်းကျင်သူ",
  "React Native ကျွမ်းကျင်သူ",
  "Frontend Developer",
];

const TypeWriter = ({ words }: { words: string[] }) => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const speed = deleting ? 45 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1800);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((p) => (p + 1) % words.length);
        return;
      }
      setText(
        deleting
          ? word.slice(0, text.length - 1)
          : word.slice(0, text.length + 1),
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);

  return (
    <span className="gradient-text">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="ml-0.5 inline-block w-[2px] bg-accent align-text-bottom"
        style={{ height: "1em" }}
      />
    </span>
  );
};

export const Hero = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // --- GSAP intro timeline ---
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
      )
        .fromTo(
          headlineRef.current,
          { y: 50, opacity: 0, clipPath: "inset(0 100% 0 0)" },
          { y: 0, opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 1.0 },
          "-=0.3",
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          socialsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          imageRef.current,
          { scale: 0.8, opacity: 0, rotateY: 15 },
          {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 1.1,
            ease: "back.out(1.4)",
          },
          "-=0.8",
        )
        .fromTo(
          statsRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.3",
        );

      // Parallax on scroll-out
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        onUpdate: (self) => {
          gsap.to(headlineRef.current, { y: self.progress * 80, ease: "none" });
          gsap.to(imageRef.current, { y: self.progress * -60, ease: "none" });
        },
      });
    },
    { scope: sectionRef },
  );

  const statLabels = [
    t("hero.stats.years"),
    t("hero.stats.projects"),
    t("hero.stats.companies"),
    t("hero.stats.technologies"),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] overflow-hidden pb-8 pt-32"
      id="home"
    >
      {/* Canvas grid background */}
      <HeroBackground />

      {/* Soft amber blobs on top of canvas */}
      {/* <div className="pointer-events-none absolute inset-0 z-0">
        <div className="mesh-gradient-1 absolute -left-60 top-10 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]" />
        <div className="mesh-gradient-2 absolute -right-60 top-40 h-[400px] w-[400px] rounded-full bg-orange-600/6 blur-[120px]" />
        <div className="mesh-gradient-3 absolute bottom-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-amber-500/4 blur-[100px]" />
      </div> */}

      <div className="relative z-10 flex flex-col gap-8 lg:gap-12 lg:flex-row lg:items-center lg:justify-between px-4 sm:px-0">
        {/* Left */}
        <div className="flex-1 space-y-6 sm:space-y-8">
          {/* Badge */}
          <div ref={badgeRef} className="opacity-0">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <TypeWriter words={lang === "mm" ? ROLES_MM : ROLES_EN} />
            </div>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-3xl font-bold leading-tight text-foreground opacity-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            {t("hero.headline1")}{" "}
            <span className="gradient-text">{t("hero.headline2")}</span>
            <br className="hidden sm:block" />
            {t("hero.headline3")}
          </h1>

          {/* Desc */}
          <p
            ref={descRef}
            className="max-w-lg text-base leading-7 text-muted opacity-0 sm:text-lg"
          >
            {t("hero.description")
              .replace("{experience}", PERSONAL.experience)
              .replace("{company}", "Yoma Fleet")}
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4 opacity-0"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
            >
              {t("hero.cta_primary")}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="rounded-xl border border-border bg-surface-elevated/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent/60 hover:bg-accent/5 hover:text-accent"
            >
              {t("hero.cta_secondary")}
            </MagneticButton>
          </div>

          {/* Socials */}
          <div ref={socialsRef} className="flex items-center gap-3 opacity-0">
            {[
              { icon: Github, href: PERSONAL.github, label: "GitHub" },
              { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated/30 text-muted transition-all hover:scale-110 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div
          ref={imageRef}
          className="flex justify-center opacity-0 lg:justify-end"
        >
          <HeroImage />
        </div>
      </div>

      {/* Stats bar */}
      <div ref={statsRef} className="relative z-10 mt-16 opacity-0 lg:mt-20">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="group text-center">
              <p className="text-2xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-3xl lg:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                {statLabels[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroImage = () => {
  const [useFallback, setUseFallback] = useState(false);
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Removed glow aura per user request */}
      <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-black/40 lg:h-80 lg:w-80">
        {useFallback ? (
          <div className="flex h-full w-full items-center justify-center bg-surface-elevated">
            <div className="text-center">
              <div className="text-5xl font-black gradient-text">MK</div>
              <p className="mt-2 text-xs text-muted">Min Kaung Kyaw</p>
            </div>
          </div>
        ) : (
          <Image
            src="/hero.png"
            alt="Min Kaung Kyaw"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width:1024px) 256px,320px"
            onError={() => setUseFallback(true)}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-background/20 via-transparent to-transparent" />
      </div>
      {/* Status badge */}
      <motion.div
        className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-xl border border-border bg-surface-elevated px-3 py-2 shadow-lg"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        <span className="text-xs font-medium text-foreground">Available</span>
      </motion.div>
    </motion.div>
  );
};
