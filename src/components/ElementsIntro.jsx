import React from "react";

const ElementsIntro = () => {
  return (
  <section className="w-full bg-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Vertical Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-black/30 to-transparent" />

        {/* Left Column */}
        <div className="text-center md:text-left pr-0 md:pr-12 tracking-wide font-['Cinzel']">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span className="text-orange-500">The Best</span>
            <span className="block text-gray-900">
              Photoshoot Location in India
            </span>
          </h1>
           <div className="mt-8">
          <button className="px-10 py-4 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-400 transition-all duration-300 shadow-xl">
            Book Now
          </button>
        </div>

          <div className="mt-2 h-1 w-16 bg-orange-500 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Right Column */}
        <div className="text-[15px] md:text-base leading-relaxed pl-0 md:pl-12 text-gray-600 font-light tracking-wide">

  <p className="mb-7">
    <span className="font-bold text-gray-600 tracking-wider">
      Elements
    </span>{" "}
    is the best curated photoshoot location, with a strong
    presence across Bangalore, Chennai, Hyderabad, and Coimbatore. Each space
    is thoughtfully designed to deliver a complete, immersive visual experience.
  </p>

  <p className="mb-7 text-gray-700">
    From <span className="italic">Moroccan domes</span> and{" "}
    <span className="italic">European doors</span> to{" "}
    <span className="italic">Indian pillars</span> and{" "}
    <span className="italic">Rajasthani jharokhas</span>, every backdrop is crafted
    to elevate the frame — creating moments that feel timeless, intentional,
    and cinematic.
  </p>

  <p className="text-gray-700 tracking-wider">
    With spacious changing rooms, ample parking, and modern amenities,
    Elements blends comfort with creativity — making it India’s most refined
    photoshoot destination.
  </p>

</div>


      </div>
    </div>
  </section>
);

};

export default ElementsIntro;
