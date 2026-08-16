import Button from "./ui/Button";


export default function AgentCTA() {
    return (
      <section className="w-full px-6 pb-24 md:px-10">
        <div
          className="
            mx-auto mt-2 flex max-w-3xl flex-col
            items-center gap-5
            rounded-lg shadow-sm
            px-5 py-4
            text-center
            md:flex-row md:items-center md:px-8
            md:text-left
            transition-transform duration-800 ease-out
               hover:-translate-x-1
               hover:scale-105
          "
        >
          {/* Avatar Group */}
          <div className="flex shrink-0 items-center justify-center">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
  
            <div className="-ml-3 h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
  
            <div className="-ml-3 h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
  
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-medium leading-tight text-black">
              Get your AI Agent.
            </p>
  
            <p className="mt-1 text-sm leading-tight text-gray-500">
              Customise in a single click
            </p>
          </div>
  
          {/* CTA Button */}
          
          <Button>
          Get Your Agent
          </Button>

        </div>
      </section>
    );
  }