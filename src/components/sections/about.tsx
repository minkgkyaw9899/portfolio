"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code2, Smartphone, Globe, Database } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

const languages = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "C#",
  "Python",
  "Golang",
  "HTML",
  "CSS",
];

export const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useGSAP(
    () => {
      if (!textRef.current) return;
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const skills = [
    {
      icon: Smartphone,
      title: t("about.skills.mobile_title"),
      description: t("about.skills.mobile_desc"),
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/20",
    },
    {
      icon: Globe,
      title: t("about.skills.frontend_title"),
      description: t("about.skills.frontend_desc"),
      color: "from-accent/20 to-amber-500/20",
      border: "border-accent/20",
    },
    {
      icon: Database,
      title: t("about.skills.backend_title"),
      description: t("about.skills.backend_desc"),
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/20",
    },
    {
      icon: Code2,
      title: t("about.skills.fullstack_title"),
      description: t("about.skills.fullstack_desc"),
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/20",
    },
  ];

  return (
    <section ref={sectionRef} className="section-spacing" id="about">
      <FadeIn>
        <SectionHeading
          label={t("about.label")}
          title={t("about.title")}
          description={t("about.description")}
        />
      </FadeIn>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Bio */}
        <div className="lg:col-span-3">
          <FadeIn delay={0.1}>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <p
                ref={textRef}
                className="text-sm leading-7 text-muted sm:text-base sm:leading-8"
              >
                {t("about.bio")}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Languages */}
        <div className="lg:col-span-2">
          <FadeIn delay={0.2}>
            <div className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                {t("about.languages_title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <motion.span
                    key={lang}
                    className="rounded-lg border border-border bg-surface-elevated/50 px-4 py-2 text-sm font-medium text-foreground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + i * 0.06,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <FadeIn key={skill.title} delay={0.1 + i * 0.1}>
              <motion.div
                className={`group relative h-full overflow-hidden rounded-2xl border ${skill.border} bg-surface/40 p-6 transition-colors hover:bg-surface/60`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 transition-opacity group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-xs leading-5 text-muted">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};
