export default function Office() {
  return (
    <section id="office" className="bg-[#FAF8F6] py-28 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
            A CALM SPACE FOR HEALING • SANTA MONICA
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#2C2C4A] leading-[1.15]">
            Our Santa Monica Office: <br />
            <span className="italic font-normal">A Sanctuary for Your Growth</span>
          </h2>
          <p className="text-gray-600 text-base font-light leading-relaxed pt-2">
            My office is a <span className="font-medium text-gray-800">quiet, private space</span> designed to feel calm and grounding, featuring natural light, soft textures, and a comfortable, uncluttered environment.
          </p>
        </div>

        {/* OFFICE IMAGES GRID (Using the drive images provided) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="group relative h-[380px] md:h-[420px] rounded-[24px] overflow-hidden shadow-md bg-gray-100">
            <img 
              src="/office1.jpeg" 
              alt="Therapy Office Interior - Main Seating Area" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            <span className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-widest font-light bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
              Main Consultation Room
            </span>
          </div>

          <div className="group relative h-[380px] md:h-[420px] rounded-[24px] overflow-hidden shadow-md bg-gray-100">
            <img 
              src="/office2.jpeg" 
              alt="Therapy Office Interior - Library and Seating" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            <span className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-widest font-light bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
              Calm & Grounding Environment
            </span>
          </div>
        </div>

        {/* 3 CORE PILLARS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-900 flex items-center justify-center font-bold mb-4 text-sm">
              📍
            </div>
            <h3 className="text-lg font-medium text-[#2C2C4A] mb-2">Location & Privacy</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              <strong className="text-gray-800 font-normal">123th Street 45 W, Santa Monica, CA 90401.</strong> Easy street parking, private entrance, and no crowded waiting room. Your privacy is fully protected.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-900 flex items-center justify-center font-bold mb-4 text-sm">
              🌿
            </div>
            <h3 className="text-lg font-medium text-[#2C2C4A] mb-2">Safety & Comfort</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Designed through a trauma-informed lens. Featuring natural light, soft seating, and a sensory-friendly layout to help your nervous system immediately feel at ease.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-900 flex items-center justify-center font-bold mb-4 text-sm">
              💻
            </div>
            <h3 className="text-lg font-medium text-[#2C2C4A] mb-2">Hybrid Options</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Choose between warm in-person sessions in Santa Monica or secure, HIPAA-compliant telehealth options available across the entire state of California.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}