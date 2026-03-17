export default function ServicesPage() {
  return (
    <section className="space-y-10">
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

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <h2 className="text-sm font-semibold text-slate-50">
            24/7 call answering
          </h2>
          <p className="text-sm text-slate-300">
            Day or night, weekday or weekend – we answer with your business
            name and a professional script tuned to how you talk to customers.
          </p>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            <li>• No more voicemails piling up</li>
            <li>• Consistent, polite greeting every time</li>
            <li>• Handles emergencies, estimates, and questions</li>
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <h2 className="text-sm font-semibold text-slate-50">
            Lead capture that feels human
          </h2>
          <p className="text-sm text-slate-300">
            We ask the same key questions your best office person would: who,
            where, what&apos;s wrong, and how urgent it is.
          </p>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            <li>• Name, phone, address, and contact preferences</li>
            <li>• Job type and brief description</li>
            <li>• Flags high-value and urgent jobs</li>
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <h2 className="text-sm font-semibold text-slate-50">
            Appointment booking & call outcomes
          </h2>
          <p className="text-sm text-slate-300">
            We can book jobs straight into your calendar or send you a summary
            so you just tap to confirm.
          </p>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            <li>• Calendar integration or manual handoff</li>
            <li>• Text/email recap after every call</li>
            <li>• Clear status: booked, quote requested, follow-up needed</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <h2 className="text-sm font-semibold text-slate-50">
            Designed for real-world field work
          </h2>
          <p className="text-sm text-slate-300">
            You&apos;re not sitting at a desk. You&apos;re crawling through
            crawlspaces, replacing panels, and driving between jobs. We keep
            your phone ringing with booked work while you stay hands-on.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <h2 className="text-sm font-semibold text-slate-50">
            Professional, trustworthy communication
          </h2>
          <p className="text-sm text-slate-300">
            Callers hear a calm, confident voice that represents your brand
            well. We&apos;re here so that when you send this site to a
            homeowner, they feel taken care of before they even meet you.
          </p>
        </div>
      </div>
    </section>
  );
}

