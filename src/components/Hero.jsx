import Badge from "./ui/Badge";
import Button from "./ui/Button";

function Hero(){
    return(
        <>
        <div className="min-h-screen flex flex-col justify-center p-4 text-center">
            
            <div className="flex justify-center">
                <Badge>
                <span className="h-1.5 w-1.5 rounded-sm bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>

                <span className="font-bold">4.9 Rating over 12,850 Reviews</span>
                </Badge>
            </div>
        
            <h2 className="text-3xl md:text-7xl font-calbri max-w-2xl mx-auto leading-tight">Plan more with Twinkle AI</h2>
            <p className="mt-6">Projects remeber. Agent think. Automations execute.</p>
            
                <div className="flex justify-center gap-5 mt-6">
                    <Button >Get started for free</Button>
                    <Button className="bg-white! text-black! outline-1! outline-gray-700!">Download APP</Button>
                    
                </div>
        </div>
        </>
    )
}
export default Hero