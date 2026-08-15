export default function StatementBlock() {
    return (
      <section className="w-full px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
  
          {/* Section Label */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 shadow">
            <span className="h-1.5 w-1.5 rounded-sm bg-green-500"></span>
  
            <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-gray-500">
              About Custom Kit
            </span>
          </div>
  
          {/* Main Statement */}
          <p className="text-[38px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[48px] lg:text-[54px]">
  
            <span className="text-black">
              Twinkle makes sure every call is acknowledged,
            </span>{" "}
  
            <span className="text-gray-300">
              even outside regular hours.
            </span>{" "}
  
            <span className="text-gray-300">
              By capturing customer details
            </span>{" "}
  
            <span className="text-black">
              when no one is available
            </span>
  
          </p>
  
        </div>
      </section>
    );
  }