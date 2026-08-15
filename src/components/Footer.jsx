export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
                ✦
              </span>

              <span className="text-sm font-semibold tracking-tight">
                Twinkle.ai
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Plan more with Twinkle AI. Build smarter workflows and automate
              your everyday work.
            </p>
          </div>

         
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-black">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="transition hover:text-black">
                  Platform
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-black">
                  AI Agents
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-black">
                  Automation
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-black">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-black">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="transition hover:text-black">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-black">
                  Customers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-black">
                  Resources
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-black">
              Follow us
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="transition hover:text-black">
                  LinkedIn
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-black">
                  X / Twitter
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-black">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Twinkle.ai. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-black">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
