"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { PERSONAL } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLanguage } from "@/lib/i18n";

export const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const schema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    subject: z.string().min(3).max(100),
    message: z.string().min(10).max(2000),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder-muted/50 outline-none transition-all focus:border-accent/50 focus:ring-2 focus:ring-accent/20 hover:border-border/80";
  const errCls = "mt-1.5 text-[11px] font-medium text-red-400";

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.phone"),
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: PERSONAL.phones[0],
      href: `tel:${PERSONAL.phones[0]}`,
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: PERSONAL.address,
      href: undefined,
    },
  ];

  return (
    <section className="section-spacing" id="contact">
      <FadeIn>
        <SectionHeading
          label={t("contact.label")}
          title={t("contact.title")}
          description={t("contact.description")}
        />
      </FadeIn>
      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <FadeIn delay={0.1} className="lg:col-span-3">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cf-name"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    placeholder={t("contact.name_placeholder")}
                    className={inputCls}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className={errCls}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="cf-email"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    placeholder={t("contact.email_placeholder")}
                    className={inputCls}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className={errCls}>{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="cf-subject"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
                >
                  {t("contact.subject")}
                </label>
                <input
                  id="cf-subject"
                  type="text"
                  placeholder={t("contact.subject_placeholder")}
                  className={inputCls}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className={errCls}>{errors.subject.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="cf-message"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="cf-message"
                  rows={5}
                  placeholder={t("contact.message_placeholder")}
                  className={`${inputCls} resize-none`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className={errCls}>{errors.message.message}</p>
                )}
              </div>
              <MagneticButton
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("contact.sending")}
                  </>
                ) : (
                  <>
                    {t("contact.send")}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </MagneticButton>
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {t("contact.success")}
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {t("contact.error")}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </FadeIn>

        {/* Info */}
        <FadeIn delay={0.2} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const Wrap = info.href ? "a" : "div";
              return (
                <FadeIn key={info.label + i} delay={0.3 + i * 0.08}>
                  <Wrap
                    {...(info.href ? { href: info.href } : {})}
                    className="glass-card group flex items-center gap-4 rounded-xl p-5 transition-all hover:border-accent/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
                        {info.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </Wrap>
                </FadeIn>
              );
            })}
            <FadeIn delay={0.55}>
              <div className="glass-card rounded-xl p-5">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
                  {t("contact.find_online")}
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: PERSONAL.github, label: "GitHub" },
                    {
                      icon: Linkedin,
                      href: PERSONAL.linkedin,
                      label: "LinkedIn",
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-muted transition-all hover:border-accent/50 hover:text-accent"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <a
                href={`tel:${PERSONAL.phones[1]}`}
                className="glass-card group flex items-center gap-4 rounded-xl p-5 transition-all hover:border-accent/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent group-hover:border-accent/30 group-hover:bg-accent/10">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
                    {t("contact.alt_phone")}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    {PERSONAL.phones[1]}
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
