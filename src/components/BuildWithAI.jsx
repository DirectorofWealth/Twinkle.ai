import Button from "./ui/Button";

export default function BuildWithAI() {
  return (
    <section className="w-full px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
    
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Building with AI
          </p>

          <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-tight text-black md:text-5xl">
            We help people create
            <br />
            and build Using AI
          </h2>

          <div className="mt-10 space-y-3">
          
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs text-gray-400">AI for excellence</p>

              <h3 className="mt-3 text-sm font-medium text-black">
                Set Budgeting using AI
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Think outside the box
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs text-gray-400">Smarter workflows</p>

              <h3 className="mt-3 text-sm font-medium text-black">
                Automate your everyday tasks
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Let AI handle the repetitive work.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs text-gray-400">Better decisions</p>

              <h3 className="mt-3 text-sm font-medium text-black">
                Turn ideas into action
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Build, test and improve with AI.
              </p>
            </div>
          </div>
          <Button>Get Started - It's Free </Button>
          
        </div>

        <div className="relative flex min-h-125 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-sky-200 via-yellow-100 to-orange-300 p-8">
        
          <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-pink-300/70 blur-2xl" />
          <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-blue-400/60 blur-2xl" />
          <div className="absolute bottom-0 right-20 h-40 w-40 rounded-full bg-yellow-300/70 blur-2xl" />

        
          <div className="relative z-10 w-[230px] rounded-[35px] border-[7px] border-black bg-black p-2 shadow-2xl">
         
            <div className="overflow-hidden rounded-[27px] bg-white">
       
              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-[9px] font-semibold">Twinkle</span>

                <div className="h-2 w-2 rounded-full bg-black" />
              </div>

    
              <div className="px-4 pt-4">
                <p className="text-[8px] text-gray-400">Overview</p>

                <h3 className="mt-1 text-xl font-semibold">$8,420.00</h3>
              </div>

            
              <div className="mx-4 mt-5 h-24 rounded-xl bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-100 p-3">
                <div className="flex h-full items-end gap-1">
                  <div className="h-[30%] w-2 rounded-full bg-black/20" />
                  <div className="h-[45%] w-2 rounded-full bg-black/30" />
                  <div className="h-[35%] w-2 rounded-full bg-black/20" />
                  <div className="h-[60%] w-2 rounded-full bg-black/40" />
                  <div className="h-[50%] w-2 rounded-full bg-black/30" />
                  <div className="h-[75%] w-2 rounded-full bg-black/50" />
                  <div className="h-[65%] w-2 rounded-full bg-black/40" />
                  <div className="h-[90%] w-2 rounded-full bg-black" />
                </div>
              </div>

             
              <div className="mx-4 mt-4 rounded-xl bg-gray-100 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[8px] font-medium">AI Assistant</p>

                  <span className="text-[8px] text-green-500">Active</span>
                </div>

                <p className="mt-2 text-[7px] leading-relaxed text-gray-400">
                  Your spending is looking good this month. Keep going!
                </p>
              </div>

              
              <div className="mt-8 flex justify-around border-t border-gray-100 py-4">
                <span className="text-[8px] font-semibold">Home</span>

                <span className="text-[8px] text-gray-400">AI</span>

                <span className="text-[8px] text-gray-400">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
