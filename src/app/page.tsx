export default function Home() {
  return (
    <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
      <div className="space-y-8">
        <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
          Never lose another job to a missed call
        </p>
        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            AI receptionists that answers every call for you.
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg">
            Callavex picks up when you can&apos;t — nights, weekends, and when
            you&apos;re under a house or up on a ladder. We answer, qualify the
            lead, and book the job directly into your calendar.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
          >
            Start your 3-day free trial
          </a>
          <div className="text-xs text-slate-400 sm:text-sm">
            <p>No contracts. No long setup. Just more booked jobs.</p>
          </div>
        </div>

        <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Built for trades
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Plumbers, electricians, HVAC, and contractors who can&apos;t be
              stuck to a phone.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              24/7 coverage
            </p>
            <p className="mt-2 text-sm text-slate-200">
              We answer after-hours, weekends, and when your office is slammed.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              More booked jobs
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Every missed call is a job your competitor can win. We stop that.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-emerald-500/40 bg-slate-950/80 p-6 shadow-[0_18px_70px_rgba(16,185,129,0.25)]">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
          What your callers experience
        </p>
        <div className="space-y-3 text-sm text-slate-200">
          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
              1
            </span>
            <div>
              <p className="font-medium text-slate-50">We answer quickly.</p>
              <p className="text-xs text-slate-400">
                Professional greeting with your business name in a few rings.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
              2
            </span>
            <div>
              <p className="font-medium text-slate-50">
                We capture every detail.
              </p>
              <p className="text-xs text-slate-400">
                Name, phone, address, job type, urgency, and any notes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
              3
            </span>
            <div>
              <p className="font-medium text-slate-50">
                We book or send you the lead.
              </p>
              <p className="text-xs text-slate-400">
                Appointment added to your calendar, plus instant text/email
                summary.
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          You stay in the field. We make sure every ring turns into a
          conversation — not a voicemail.
        </p>
      </div>
    </section>
  );
}
