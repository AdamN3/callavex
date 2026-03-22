"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import { Button3D } from "@/components/ui/button-3d";

type FormState = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "h-10 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-50 outline-none ring-emerald-500/40 placeholder:text-slate-500 transition focus:border-emerald-500 focus:ring-2";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("submitting");

    setTimeout(() => {
      setFormState("success");
      (event.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] md:items-start">
      <div className="space-y-6">
        <Reveal>
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
        </Reveal>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 rounded-2xl border border-slate-800/90 bg-slate-950/75 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { id: "name", label: "Your name", placeholder: "Jane Smith", type: "text" },
              {
                id: "businessName",
                label: "Business name",
                placeholder: "Smith Plumbing & Heating",
                type: "text",
              },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06, duration: 0.35 }}
                className="space-y-1.5"
              >
                <label
                  htmlFor={field.id}
                  className="text-xs font-medium text-slate-200"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  required
                  type={field.type}
                  placeholder={field.placeholder}
                  className={fieldClass}
                />
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                id: "phone",
                label: "Phone number",
                placeholder: "(555) 123-4567",
                type: "tel",
              },
              {
                id: "email",
                label: "Email",
                placeholder: "you@business.com",
                type: "email",
              },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.35 }}
                className="space-y-1.5"
              >
                <label
                  htmlFor={field.id}
                  className="text-xs font-medium text-slate-200"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  required
                  type={field.type}
                  placeholder={field.placeholder}
                  className={fieldClass}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.35 }}
            className="space-y-1.5"
          >
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
              className={fieldClass}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.35 }}
          >
            <Button3D
              type="submit"
              disabled={formState === "submitting"}
              size="lg"
              fullWidth
            >
              {formState === "submitting"
                ? "Sending..."
                : "Submit and schedule a quick intro"}
            </Button3D>
          </motion.div>

          <AnimatePresence mode="wait">
            {formState === "success" && (
              <motion.p
                key="ok"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs text-emerald-200"
              >
                Thanks for reaching out — we&apos;ll get in touch shortly to walk
                you through next steps and your 3-day free trial.
              </motion.p>
            )}
            {formState === "error" && (
              <motion.p
                key="err"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-red-300"
              >
                Something went wrong sending your info. Please try again in a
                moment.
              </motion.p>
            )}
          </AnimatePresence>

          <p className="text-[11px] text-slate-500">
            We&apos;ll only use this information to contact you about setting up
            Callavex for your business.
          </p>
        </motion.form>
      </div>

      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4 rounded-2xl border border-slate-800/90 bg-slate-950/65 p-5 backdrop-blur md:p-6"
      >
        <h2 className="text-sm font-semibold text-slate-50">
          What happens after you submit
        </h2>
        <ol className="space-y-3 text-sm text-slate-300">
          {[
            "We review your details and make sure we're a fit.",
            "We hop on a quick call to understand your services, pricing, and call volume.",
            "We set up your greeting, questions, and calendar connection.",
            "You run a 3-day free trial and see how many jobs we save.",
          ].map((text, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
              className="flex gap-2"
            >
              <span className="font-semibold text-emerald-300">{i + 1}.</span>
              <span>{text}</span>
            </motion.li>
          ))}
        </ol>

        <p className="pt-2 text-xs text-slate-400">
          Prefer to talk first? Once you submit, we&apos;ll share a direct number
          you can call or text.
        </p>
      </motion.aside>
    </section>
  );
}
