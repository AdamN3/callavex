"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("submitting");

    // Simulate a successful submit for now.
    setTimeout(() => {
      setFormState("success");
      (event.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] md:items-start">
      <div className="space-y-6">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Contact
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Tell us about your business and missed calls.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Fill this out and we&apos;ll reach out with a quick plan for how
            Callavex can plug into your existing phone setup. No pressure, no
            hard sell.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-200"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Jane Smith"
                className="h-10 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-50 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="businessName"
                className="text-xs font-medium text-slate-200"
              >
                Business name
              </label>
              <input
                id="businessName"
                name="businessName"
                required
                placeholder="Smith Plumbing & Heating"
                className="h-10 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-50 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="text-xs font-medium text-slate-200"
              >
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(555) 123-4567"
                className="h-10 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-50 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@business.com"
                className="h-10 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-50 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="missedCalls"
              className="text-xs font-medium text-slate-200"
            >
              Roughly how many calls do you miss in a typical week?
            </label>
            <input
              id="missedCalls"
              name="missedCalls"
              placeholder="e.g. 5–10 missed calls each week"
              className="h-10 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-50 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2"
            />
          </div>

          <button
            type="submit"
            disabled={formState === "submitting"}
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {formState === "submitting"
              ? "Sending..."
              : "Submit and schedule a quick intro"}
          </button>

          {formState === "success" && (
            <p className="text-xs text-emerald-200">
              Thanks for reaching out — we&apos;ll get in touch shortly to walk
              you through next steps and your 3-day free trial.
            </p>
          )}
          {formState === "error" && (
            <p className="text-xs text-red-300">
              Something went wrong sending your info. Please try again in a
              moment.
            </p>
          )}

          <p className="text-[11px] text-slate-500">
            We&apos;ll only use this information to contact you about setting up
            Callavex for your business.
          </p>
        </form>
      </div>

      <aside className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6">
        <h2 className="text-sm font-semibold text-slate-50">
          What happens after you submit
        </h2>
        <ol className="space-y-3 text-sm text-slate-300">
          <li>
            <span className="font-semibold text-emerald-300">1.</span> We review
            your details and make sure we&apos;re a fit.
          </li>
          <li>
            <span className="font-semibold text-emerald-300">2.</span> We hop on
            a quick call to understand your services, pricing, and call volume.
          </li>
          <li>
            <span className="font-semibold text-emerald-300">3.</span> We set up
            your greeting, questions, and calendar connection.
          </li>
          <li>
            <span className="font-semibold text-emerald-300">4.</span> You run a
            3-day free trial and see how many jobs we save.
          </li>
        </ol>

        <p className="pt-2 text-xs text-slate-400">
          Prefer to talk first? Once you submit, we&apos;ll share a direct
          number you can call or text.
        </p>
      </aside>
    </section>
  );
}

