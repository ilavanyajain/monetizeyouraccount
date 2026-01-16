"use client";

import { useActionState } from "react";
import { submitApplication } from "../actions";

const initialState = {
  status: "idle",
  message: "",
};

export function ApplicationForm() {
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);

  if (state.status === "success") {
    return (
      <div className="mt-4 rounded-2xl border border-green-900/30 bg-green-950/10 p-8 text-center sm:rounded-3xl">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-zinc-100">
          Profile Received
        </h3>
        <p className="mt-2 text-sm text-zinc-400">
          We'll review your account and be in touch within 24 hours if you qualify.
        </p>
      </div>
    );
  }

  return (
    <section
      id="apply"
      className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:rounded-3xl sm:p-6 md:p-8"
    >
      <div className="md:flex md:items-start md:justify-between md:gap-8">
        <div className="mb-6 space-y-2 md:mb-0 md:max-w-md">
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl text-zinc-50">
            Apply for access
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            Share your details below. We'll analyze your engagement quality and
            send you a personalized rate card.
          </p>
        </div>

        <form action={formAction} className="flex w-full flex-col gap-4 md:max-w-sm">
          <div className="space-y-1">
            <label htmlFor="handle" className="text-xs font-medium text-zinc-300">
              Twitter/X Handle
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-zinc-500 text-sm">@</span>
              <input
                id="handle"
                name="handle"
                required
                type="text"
                placeholder="username"
                className="w-full rounded-lg border border-zinc-800 bg-black/50 py-2 pl-7 pr-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-zinc-300">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-800 bg-black/50 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
            />
          </div>

          {state.status === "error" && (
            <p className="text-xs text-red-400">{state.message}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 w-full rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? "Submitting..." : "Request Invite"}
          </button>
          
          <p className="text-center text-[10px] text-zinc-500">
            No obligation. We value your privacy.
          </p>
        </form>
      </div>
    </section>
  );
}
