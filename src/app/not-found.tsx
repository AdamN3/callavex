import Link from "next/link";
import { Button3DLink } from "@/components/ui/button-3d";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
        404
      </p>
      <h1 className="max-w-md text-balance text-2xl font-semibold text-slate-50">
        This page couldn&apos;t be found.
      </h1>
      <p className="max-w-md text-sm text-slate-400">
        The link may be wrong or the page was moved. Head back to Callavex home.
      </p>
      <Button3DLink href="/" size="md">
        Back to home
      </Button3DLink>
      <Link
        href="/contact"
        className="text-sm text-slate-500 underline-offset-4 hover:text-emerald-400 hover:underline"
      >
        Contact us
      </Link>
    </div>
  );
}
