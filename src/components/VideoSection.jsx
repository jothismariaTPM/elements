import { assets } from "../assets/asset";

const videos = [
  { id: "kBgmBTE1YNo", title: "Pre Wedding Shoot at Photo Paradise" },
  { id: "sjL3vaIWy3A", title: "One of the Best Pre Wedding Shoots" },
  { id: "jJg_v8Z7y2E", title: "Pre Wedding Shoot by Photo Paradise" },
];

export default function VideoSection() {
  return (
    <section className="relative py-20 px-6 mt-21 bg-black overflow-hidden">
      
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ backgroundImage: `url(${assets.image9})` }}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wide font-['Cinzel'] mb-14">
          <span className="text-orange-500">PRE-WEDDING</span> & OTHERS VIDEOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-xl overflow-hidden shadow-2xl bg-black"
            >
              <iframe
                className="w-full h-[220px] md:h-[260px]"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button className="px-10 py-3 rounded-md bg-transparent text-white hover:bg-white hover:text-black border border-white transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
