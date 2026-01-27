import { assets } from "../assets/asset";

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Images */}
        <div className="relative w-full h-[380px]">
          <img
            src={assets.about4}
            alt="Wedding moment"
            className="absolute bottom-0 left-0 w-[80%]"
          />
          <img
            src={assets.about2}
            alt="Lifestyle shoot"
            className="absolute top-0 right-0 w-[80%] z-10"
          />
        </div>

        {/* Right Content */}
        <div>
  <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-wide font-['Cinzel']">
    About Us
  </h2>

  <p className="text-gray-600 leading-relaxed mb-4 text-lg font-light font-['Playfair_Display']">
    We believe every story deserves to be told beautifully. From timeless
    wedding moments to joyful lifestyle memories, we capture emotions
    that last forever.
  </p>

  <p className="text-gray-600 leading-relaxed text-lg font-light font-['Playfair_Display']">
    Our passion lies in blending creativity with authenticity, ensuring
    every frame reflects love, happiness, and real connections.
  </p>
</div>


      </div>
    </section>
  );
};

export default AboutUs;
