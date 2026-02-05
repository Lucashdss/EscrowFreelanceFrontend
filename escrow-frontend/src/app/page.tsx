"use client";

import { useState } from "react";

export default function Home() {
  const [isFreelancerView, setIsFreelancerView] = useState(false);

  return (
    <div
      className={`min-h-screen text-white ${isFreelancerView ? "bg-green-700" : "bg-[#2f3136]"
        }`}
    >
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <p className="text-xl font-bold tracking-tight">EscrowFreelance</p>
        <div className="flex items-center gap-3">
          <a
            href="/account/login"
            className="rounded-full border border-white/70 px-6 py-2 text-sm font-semibold transition hover:bg-white hover:text-[#2f3136]"
          >
            Log in
          </a>
          <a
            href="/account/register"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#2f3136] transition hover:bg-white/90"
          >
            Sign up
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-20 pt-10 text-center md:px-10 md:pt-16">
        <div className="mb-8 inline-flex items-center overflow-hidden rounded-full border border-white/80 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setIsFreelancerView(false)}
            className={`px-5 py-2 transition ${isFreelancerView ? "text-white/90 hover:bg-white/10" : "bg-white text-[#2f3136]"
              }`}
          >
            Clients
          </button>
          <button
            type="button"
            onClick={() => setIsFreelancerView(true)}
            className={`px-5 py-2 transition ${isFreelancerView ? "bg-white text-green-700" : "text-white/90 hover:bg-white/10"
              }`}
          >
            Freelancers
          </button>
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          {isFreelancerView
            ? "be sure that you money is waiting for you"
            : "Pay the way your project needs."}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Secure escrow payments for freelance work. Fund milestones, approve
          deliveries, and release with confidence.
        </p>

        <section className="mt-14 w-full max-w-3xl rounded-[2rem] bg-white p-4 text-left text-[#2f3136] shadow-2xl md:p-6">
          <div className="mb-4 text-center text-3xl font-black">EscrowFreelance</div>
          <div className="grid gap-4 rounded-3xl bg-[#f3f4f6] p-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm text-zinc-500">Step 1</p>
              <p className="mt-2 font-semibold">Create a contract</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm text-zinc-500">Step 2</p>
              <p className="mt-2 font-semibold">Fund your milestone</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm text-zinc-500">Step 3</p>
              <p className="mt-2 font-semibold">Release when approved</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
