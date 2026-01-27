import React from "react";

const ComingSoon = () => {
  return (
    <div
      className="min-h-screen text-white bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: "url(/src/assets/bg_image.png)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-80"></div>

      {/* Header */}
      <header className="flex justify-between items-center px-[60px] py-[25px] max-md:px-5">
        <div className="text-[18px] font-bold tracking-[2px]">
          COMING SOON
        </div>

        <nav className="space-x-[30px] text-[14px] font-medium">
          <a href="#" className="hover:opacity-80">Home</a>
          <a href="#" className="hover:opacity-80">Contact Us</a>
        </nav>
      </header>

      {/* Main Section */}
      <section className="flex h-[calc(100vh-90px)] px-[100px] font-bold items-center max-md:flex-col max-md:px-5 max-md:text-center">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-[64px] tracking-[10px] leading-tight max-md:text-[48px]">
            <span className="block">WE ARE</span>
            <span className="block">COMING</span>
            <span className="block">SOON!</span>
          </h1>
        </div>

        {/* Right */}
        <div className="flex-1 pl-[60px] border-l border-white/40 max-md:border-l-0 max-md:pl-0 max-md:mt-10">
          <p className="text-[15px] leading-[1.7] mb-[30px] max-w-[420px] mx-auto md:mx-0">
            Exciting things are on the horizon! Our website is launching soon,
            so stay tuned for a world of innovation, inspiration, and endless
            possibilities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-[15px] justify-center md:justify-start">
            {[
              "facebook-f",
              "twitter",
              "google-plus-g",
              "linkedin-in",
            ].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-[36px] h-[36px] border border-white flex items-center justify-center text-[16px] hover:bg-white hover:text-black transition"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
