export default function JoinAluminiNetwork() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden ">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/gradientBackgrounds/image.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Optional: make sure it covers the section nicely
          backgroundPosition: "center", // Optional: center it perfectly
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 flex flex-col items-center">
          <h2 className=" text-[31px] md:text-5xl lg2:text-7xl font-extrabold text-white">Stay Connected, Give Back, & Grow Together</h2>

          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Join the <span className="text-white"> Canara Engineering College Alumni Association</span> & be part of a thriving network that supports,
            inspires, & uplifts.
          </p>

          <button aria-label="Join the Alumni Network" className="mt-8 bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
            Join the Alumni Network
          </button>
        </div>
      </div>
    </section>
  );
}
