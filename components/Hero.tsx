import React from 'react';
import { Mail, ArrowDown } from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="pt-24 pb-16 px-4 max-w-6xl mx-auto flex flex-col items-start">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for full-stack & AI roles
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.1]">
        Building modern web apps & <span className="text-emerald-400">intelligent systems</span>.
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
        Full-stack developer focused on end-to-end architectures, RAG pipelines, and deep learning medical vision models.
      </p>

      <div className="flex flex-wrap items-center gap-4 mt-8">
        <a
          href="https://github.com/Brististic"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors text-sm font-medium"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
        <a
          href="mailto:baruabristi1@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors text-sm"
        >
          <Mail size={18} />
          Contact Me
        </a>
      </div>
    </header>
  );
}