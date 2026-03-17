export default function PricingPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
          Pricing
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Simple, flat pricing built for small trades businesses.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          No confusing tiers. No long contracts. One clear setup, then a fair
          monthly to keep your AI receptionist answering every call.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)] md:items-start">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/50 bg-gradient-to-b from-emerald-600/20 via-slate-950 to-slate-950 p-6 shadow-[0_20px_80px_rgba(16,185,129,0.35)] md:p-8">
          <div className="absolute inset-x-10 top-0 h-40 bg-emerald-500/10 blur-3xl" />
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
              Most popular with solo and small crews
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-50">
                Callavex AI Receptionist
              </h2>
              <p className="text-sm text-slate-300">
                Everything you need to stop losing jobs to missed calls and
                voicemails.
              </p>
            </div>

            <div className="space-y-4 rounded-xl border border-slate-800/80 bg-slate-950/80 p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-slate-300">
                  One-time setup
                </span>
                <span className="text-3xl font-semibold text-slate-50">
                  $250
                </span>
              </div>
              <p className="text-xs text-slate-400">
                We configure your greeting, questions, and booking flow to match
                how your business runs.
              </p>
            </div>

            <div className="space-y-4 rounded-xl border border-slate-800/80 bg-slate-950/80 p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-slate-300">
                  Ongoing service
                </span>
                <span className="text-3xl font-semibold text-slate-50">
                  $75
                </span>
                <span className="text-sm text-slate-400">/ month</span>
              </div>
              <p className="text-xs text-slate-400">
                24/7 answering, lead capture, and appointment booking. Cancel
                any time.
              </p>
            </div>

            <div className="space-y-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
              <p className="text-sm font-semibold text-emerald-200">
                3-day free trial included
              </p>
              <p className="text-xs text-emerald-100">
                We set everything up. You send your calls. If you don&apos;t see
                the value, walk away before your first payment with no hard
                feelings.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Get started in under 15 minutes
            </a>

            <p className="text-[11px] text-slate-500">
              Typical customers win back multiple missed-job fees in their first
              month alone.
            </p>
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 md:p-7">
          <h3 className="text-sm font-semibold text-slate-50">
            What&apos;s included
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>• Custom call script built for your trade and service area</li>
            <li>• 24/7 AI answering with your business name and tone</li>
            <li>• Lead details sent instantly by text and/or email</li>
            <li>• Option to book jobs straight into your calendar</li>
            <li>• Updates as your services, pricing, or seasons change</li>
          </ul>

          <h3 className="pt-2 text-sm font-semibold text-slate-50">
            Why it pays for itself
          </h3>
          <p className="text-sm text-slate-300">
            Missing even{" "}
            <span className="font-semibold text-emerald-300">
              one average job each month
            </span>{" "}
            usually costs far more than $75. Callavex keeps those calls on your
            schedule instead of your competitor&apos;s.
          </p>

          <div className="grid gap-3 text-xs text-slate-400 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
              <p className="font-semibold text-slate-200">No long contracts</p>
              <p className="mt-1">
                Month-to-month. If it&apos;s not working for you, you&apos;re
                free to stop.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
              <p className="font-semibold text-slate-200">
                Built for small teams
              </p>
              <p className="mt-1">
                Whether you&apos;re solo or running two trucks, pricing stays
                simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

