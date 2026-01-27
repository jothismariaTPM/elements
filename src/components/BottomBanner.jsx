import React from "react";
import { assets } from "../assets/asset";
const BottomCTABanner = () => {
  return (
    <section
      className="relative w-full h-[420px] flex items-center justify-center text-center py-50 mt-24"
      style={{
        backgroundImage: `url(${assets.image9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Ready to Create <span className="text-orange-500">Timeless Visuals?</span>
        </h2>

        <p className="mt-4 text-gray-300 leading-relaxed">
          Book premium indoor & outdoor shoot locations for pre-wedding,
          commercial, film & television productions.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="px-10 py-4 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-400 transition-all duration-300 shadow-xl">
            Book Your Shoot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BottomCTABanner;
