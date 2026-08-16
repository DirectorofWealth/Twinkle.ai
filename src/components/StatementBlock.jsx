import Badge from "./ui/Badge";


export default function StatementBlock() {
    return (
      <section className="w-full px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
  
          {/* Section Label */}
          <Badge className="mb-8 shadow">
            <span className="h-1.5 w-1.5 rounded-sm bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>

            About Custom Kit
      </Badge>
  
          {/* Main Statement */}
          <p className="text-[38px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[48px] lg:text-[54px]">
  
            <span className="text-black">
              Twinkle makes sure every call is acknowledged,
            </span>{" "}
  
            <span className="text-gray-300">
              even outside
            </span>{" "}
  
            <span className="text-black">
            regular hours. By capturing customer details
            </span>{" "}
  
            <span className="text-gray-300">
              when no one 
            </span>{" "}

            <span className="text-black">
              is available
            </span>
  
          </p>
  
        </div>
      </section>
    );
  }