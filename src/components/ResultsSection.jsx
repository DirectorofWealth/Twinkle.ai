export default function ResultsSection() {
  return (
    <section className="w-full px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
       
        <div className="mb-16 flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-10">
          <span className="text-sm font-semibold tracking-tight text-gray-400">
            Fagron
          </span>

          <span className="text-sm font-semibold tracking-tight text-gray-400">
            Spotify
          </span>

          <span className="text-sm font-semibold tracking-tight text-gray-400">
            ripple
          </span>

          <span className="text-sm font-semibold tracking-tight text-gray-400">
            Yves Rocher
          </span>

          <span className="text-sm font-semibold tracking-tight text-gray-400">
            ROC NATION
          </span>
        </div>

      
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Results
          </p>

          <h2 className="text-4xl font-medium tracking-tight text-black md:text-5xl">
            Bring Existing Customers
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400 md:text-base">
            Designed to capture every customer moment—done right— without
            needing someone constantly online.
          </p>
        </div>

        
        <div className="mt-16 grid grid-cols-1 border-y border-gray-200 md:grid-cols-3">
         
          <div className="px-6 py-10 text-center md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
              Up to
            </p>

            <p className="mt-3 text-5xl font-medium tracking-tight text-black md:text-6xl">
              5x
            </p>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Faster prompt creation
            </p>
          </div>

     
          <div className="border-gray-200 px-6 py-10 text-center md:border-x md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
              Up to
            </p>

            <p className="mt-3 text-5xl font-medium tracking-tight text-black md:text-6xl">
              96%
            </p>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Reduction in waiting time
            </p>
          </div>

          
          <div className="px-6 py-10 text-center md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
              Up to
            </p>

            <p className="mt-3 text-5xl font-medium tracking-tight text-black md:text-6xl">
              2.5x
            </p>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Higher campaign performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
