"use client";

import { motion } from "framer-motion";
import { Button3DLink } from "@/components/ui/button-3d";
import { Reveal, RevealScale } from "@/components/animations/reveal";

const easeCurve = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: easeCurve },
  }),
};

const stepVariants = {
  hidden: { opacity: 0, x: 16 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 + i * 0.1, duration: 0.4, ease: easeCurve },
  }),
};

const features = [
  {
    title: "Built for trades",
    body: "Plumbers, electricians, HVAC, and contractors who can\u2019t be stuck to a phone.",
    k: "trades",
  },
  {
    title: "24/7 coverage",
    body: "We answer after-hours, weekends, and when your office is slammed.",
    k: "247",
  },
  {
    title: "More booked jobs",
    body: "Every missed call is a job your competitor can win. We stop that.",
    k: "jobs",
  },
];

const steps = [
  {
    n: "1",
    title: "We answer quickly.",
    sub: "Professional greeting with your business name in a few rings.",
  },
  {
    n: "2",
    title: "We capture every detail.",
    sub: "Name, phone, address, job type, urgency, and any notes.",
  },
  {
    n: "3",
    title: "We book or send you the lead.",
    sub: "Appointment added to your calendar, plus instant text/email summary.",
  },
];

export function HomePage() {
  return (
    <section className="grid min-w-0 gap-10 md:grid-cols-[3fr,2fr] md:items-center">
      <div className="space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300"
        >
          <motion.span
            className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.35, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          Never lose another job to a missed call
        </motion.p>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
          >
            AI receptionists that{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              answer every call
            </span>{" "}
            for you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg"
          >
            Callavex picks up when you can&apos;t — nights, weekends, and when
            you&apos;re under a house or up on a ladder. We answer, qualify the
            lead, and book the job directly into your calendar.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button3DLink href="/contact" size="md" className="max-w-full">
            Start your 3-day free trial
          </Button3DLink>
          <motion.div
            className="text-xs text-slate-400 sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <p>No contracts. No long setup. Just more booked jobs.</p>
          </motion.div>
        </motion.div>

        <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.k}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-32px" }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 320, damping: 22 },
              }}
              className="rounded-xl border border-slate-800/90 bg-slate-900/55 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-shadow hover:border-emerald-500/25 hover:shadow-[0_16px_48px_rgba(16,185,129,0.12)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {f.title}
              </p>
              <p className="mt-2 text-sm text-slate-200">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <RevealScale delay={0.08}>
        <motion.div
          className="relative space-y-4 overflow-hidden rounded-2xl border border-emerald-500/35 bg-slate-950/80 p-6 shadow-[0_18px_70px_rgba(16,185,129,0.25)]"
          animate={{
            boxShadow: [
              "0 18px 70px rgba(16,185,129,0.22)",
              "0 22px 90px rgba(16,185,129,0.35)",
              "0 18px 70px rgba(16,185,129,0.22)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

          <p className="relative text-xs font-semibold uppercase tracking-wide text-emerald-300">
            What your callers experience
          </p>
          <div className="relative space-y-3 text-sm text-slate-200">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-start gap-3 rounded-xl border border-slate-800/90 bg-slate-900/75 p-3 backdrop-blur-sm"
              >
                <motion.span
                  className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30"
                  whileHover={{ scale: 1.1, rotate: 4 }}
                >
                  {s.n}
                </motion.span>
                <div>
                  <p className="font-medium text-slate-50">{s.title}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="relative text-xs text-slate-500">
              You stay in the field. We make sure every ring turns into a
              conversation — not a voicemail.
            </p>
          </Reveal>
        </motion.div>
      </RevealScale>
    </section>
  );
}
