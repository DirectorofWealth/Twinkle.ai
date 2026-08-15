function Testimonial(){
    return(
        <>
        <section class="px-4 pt-10">

    <div class="relative mx-auto h-[450px] max-w-[1300px] overflow-hidden rounded-[30px]
                bg-gradient-to-br from-green-300 via-blue-300 to-green-500">

      
      <div class="absolute -bottom-32 -left-10 h-80 w-80 rounded-full
                  bg-purple-300/70 blur-3xl"></div>

      <div class="absolute -right-10 -top-20 h-80 w-80 rounded-full
                  bg-blue-200/60 blur-3xl"></div>

      <div class="absolute bottom-[-100px] right-40 h-80 w-80 rounded-full
                  bg-yellow-200/50 blur-3xl"></div>


     
      <div class="absolute left-10 top-10 flex items-center gap-3 text-white">
        <div class="flex h-12 w-12 items-center justify-center rounded-full
                    bg-white/30 text-xl">
          
        </div>
        <span class="text-lg">AI Agents</span>
      </div>


      
      <div class="absolute left-1/2 top-1/2 w-[90%] max-w-[600px]
                  -translate-x-1/2 -translate-y-1/2">

        <div class="rounded-2xl bg-white p-5 shadow-xl">

          <div class="text-gray-600">
            ✦
            <span class="ml-2" text-bold>
              Generate a workout planner for beginners...
            </span>
          </div>

          <div class="mt-8 flex items-center justify-between">

            <div class="flex items-center gap-3 text-gray-400">
              <span class="flex h-8 w-8 items-center justify-center
                           rounded-md bg-gray-100 text-xl">+</span>
              <span>Add Attachments</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="text-gray-500"></span>

              <button class="flex h-10 w-10 items-center justify-center
                             rounded-full bg-black text-white">
                ↑
              </button>
            </div>

          </div>
        </div>

        <p class="mt-6 text-center text-white/80">
          Don't want to wait?
          Try the early <u> AI Beta</u>
          today.
        </p>

      </div>
    </div>
  </section>

        </>
    )
}
export default Testimonial;