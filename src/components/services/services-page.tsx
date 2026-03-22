"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";

const topCards = [
  {
    title: "24/7 call answering",
    body: "Day or night, weekday or weekend – we answer with your business name and a professional script tuned to how you talk to customers.",
    bullets: [
      "No more voicemails piling up",
      "Consistent, polite greeting every time",
      "Handles emergencies, estimates, and questions",
    ],
  },
  {
    title: "Lead capture that feels human",
    body: "We ask the same key questions your best office person would: who, where, what\u2019s wrong, and how urgent it is.",
    bullets: [
      "Name, phone, address, and contact preferences",
      "Job type and brief description",
      "Flags high-value and urgent jobs",
    ],
  },
  {
    title: "Appointment booking & call outcomes",
    body: "We can book jobs straight into your calendar or send you a summary so you just tap to confirm.",
    bullets: [
      "Calendar integration or manual handoff",
      "Text/email recap after every call",
      "Clear status: booked, quote requested, follow-up needed",
    ],
  },
];

const bottomCards = [
  {
    title: "Designed for real-world field work",
    body: "You\u2019re not sitting at a desk. You\u2019re crawling through crawlspaces, replacing panels, and driving between jobs. We keep your phone ringing with booked work while you stay hands-on.",
  },
  {
    title: "Professional, trustworthy communication",
    body: "Callers hear a calm, confident voice that represents your brand well. We\u2019re here so that when you send this site to a homeowner, they feel taken care of before they even meet you.",
  },
];

export function ServicesPageContent() {
  return (
    <section className="space-y-10">
      <Reveal>
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Services
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Everything a receptionist does, without the overhead.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Callavex is a always-on receptionist built specifically for local
            service businesses. We pick up every call, capture every lead, and
            book more work into your schedule.
          </p>
        </header>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {topCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.08,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 320, damping: 24 },
            }}
            className="group space-y-3 rounded-2xl border border-slate-800/90 bg-slate-950/60 p-5 shadow-[0_16px_48px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-emerald-500/30"
          >
            <div className="h-1 w-10 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-80 transition group-hover:w-14" />
            <h2 className="text-sm font-semibold text-slate-50">{card.title}</h2>
            <p className="text-sm text-slate-300">{card.body}</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-400">
              {card.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {bottomCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-950/80 to-slate-900/40 p-5 backdrop-blur"
          >
            <h2 className="text-sm font-semibold text-slate-50">{card.title}</h2>
            <p className="text-sm text-slate-300">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
