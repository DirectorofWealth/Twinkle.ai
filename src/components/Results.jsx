import Button from "./ui/Button";

export default function Results() {
  return (
    <section className="w-full bg-gray-50 px-6 py-16 mt-4 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Bring Existing Customers
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-gray-500 md:text-sm">
            Designed to capture every customer moment—day or night—without
            needing someone constantly online.
          </p>
        </div>

        {/* Results Cards */}
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">

          {/* 5x Card */}
          <div className="rounded-sm bg-white px-6 py-7">
            <p className="text-[9px] font-medium uppercase text-gray-400">
              Up to
            </p>

            <p className="mt-2 text-4xl font-medium tracking-tight md:text-5xl">
              5x
            </p>

            <p className="mt-2 text-xs text-gray-500">
              faster prompt creation
            </p>
          </div>

          {/* 96% Card */}
          <div className="rounded-sm bg-white px-6 py-7">
            <p className="text-[9px] font-medium uppercase text-gray-400">
              Up to
            </p>

            <p className="mt-2 text-4xl font-medium tracking-tight md:text-5xl">
              96%
            </p>

            <p className="mt-2 text-xs text-gray-500">
              reduction in waiting time on net
            </p>
          </div>

          {/* 2.5x Card */}
          <div className="rounded-sm bg-white px-6 py-7">
            <p className="text-[9px] font-medium uppercase text-gray-400">
              Up to
            </p>

            <p className="mt-2 text-4xl font-medium tracking-tight md:text-5xl">
              2.5x
            </p>

            <p className="mt-2 text-xs text-gray-500">
              higher campaign performance
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}