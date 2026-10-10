export default function Hero() {
  return (
    <section className="bg-[#FAF8F6] pt-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8 md:px-16 py-12 max-w-7xl mx-auto">
        
        {/* Left Side: Family/Therapy Image */}
        <div className="relative h-[500px] md:h-[580px] w-full overflow-hidden shadow-sm bg-gray-100">
          <img
            src="/Dr. Maya Reynolds.png"
            alt="Dr. Maya Reynolds"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 15%' }}
          />
        </div>

        {/* Right Side: Content & Typography matching Conejo Valley */}
        <div className="space-y-6">
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-600 font-light">
            ONLINE & IN-PERSON COUNSELING IN SANTA MONICA & ACROSS CA
          </p>

          <h1 className="text-4xl md:text-5xl font-light leading-[1.15] text-[#2C2C4A]">
            Rebuild your foundation on solid ground and finally begin to <span className="italic font-normal text-[#2C2C4A]">thrive</span>.
          </h1>

          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
          </p>

          <div className="pt-2">
            <a 
              href="#contact" 
              className="inline-block border border-[#2C2C4A] text-[#2C2C4A] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#2C2C4A] hover:text-white transition duration-300"
            >
              Book An Appointment
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}