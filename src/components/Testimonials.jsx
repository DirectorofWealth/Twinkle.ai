import testimonialBG from "../assets/testimonial-bg.jpg";
import profileImage from "../assets/wealth_profile_640x640.png";
import Badge from "./ui/Badge";
// import LogoStrip from "./LogoStrip";
import Button from "./ui/Button";


export default function Testimonials() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden">

        <div>
            <Badge className="mb-8 shadow">
            <span className="h-1.5 w-1.5 rounded-sm bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                Testimonials
            </Badge>
        </div>
      
      {/* Background Image */}
      <img
        src={testimonialBG}
        alt="Testimonial Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
        <div className="absolute inset-0 bg-black/10 w-full"></div>
      {/* Dark/soft overlay for readability */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-6xl flex-col justify-between px-6 py-8 md:px-10 md:py-10">

        {/* Quote */}
        <div className="max-w-md">
          <p className="text-sm font-medium leading-5 text-white md:text-base">
            “Twinkle has made us more available to our customers.
            Now we have the scale to offer 24/7 support to
            customers across all of our markets.”
          </p>
        </div>

        {/* Customer Information */}
        <div className="flex items-center justify-center gap-4 md:justify-center">

          {/* Customer Image */}
          <div className="h-20 w-20 overflow-hidden bg-gray-200">
            <img
              src={profileImage}
              alt="Customer"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Customer Details */}
          <div className="text-white">
            <p className="text-sm font-medium">
              Favor Ezinne
            </p>

            <p className="text-xs text-white/70">
              Executive Director
            </p>

            <p className="text-xs text-white/70">
              Customer Experience
            </p>
          </div>
        </div>

        {/* Case Study Button */}
        <div className="flex justify-end">
          <Button className="!bg-white !px-4 !py-2 !text-[10px] !text-black shadow-none">
            View case study
          </Button>
        </div>

      </div>
      
    </section>
  );
}