import { Paperclip, ArrowUp, Sparkles } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section id="product" className="w-full bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 px-6 py-16 sm:px-12 sm:py-24">

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur sm:left-8 sm:top-8">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
            AI agent
          </div>

          <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-4 shadow-2xl">
            <input
              type="text"
              readOnly
              value="Draft a follow-up email to yesterday's leads"
              className="w-full border-0 bg-transparent text-sm text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-0"
            />
            <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
              >
                <Paperclip className="h-3.5 w-3.5" />
                Attach
              </button>
              <button
                type="button"
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white transition-colors hover:bg-neutral-700"
              >
                <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500">
          See how it works in our{" "}
          <a href="#demo" className="font-medium text-neutral-900 underline underline-offset-4">
            2-minute product tour
          </a>
          .
        </p>
      </div>
    </section>
  );
}