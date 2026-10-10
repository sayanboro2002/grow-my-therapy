export default function About() {
  return (
    <section id="about" className="bg-[#FAF8F6] py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Text Content (Takes 7 columns on desktop) */}
        <div className="md:col-span-7 space-y-8">
          <h2 className="text-3xl md:text-5xl font-light leading-[1.2] text-[#2C2C4A]">
            You’re holding onto hope that life can be better than it is right now.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600 font-light leading-relaxed">
            <div>
              <p className="uppercase text-xs tracking-widest text-gray-500 font-medium mb-3">
                AT DR. MAYA REYNOLDS PSYCHOLOGY
              </p>
              <p>
                We want to make that hope a reality. Whether you're an adult seeking personal growth, looking to work through trauma, or navigating burnout, we provide a compassionate and safe space to help you navigate all of life's ups and downs.
              </p>
            </div>

            <div>
              <p className="mt-7 sm:mt-0">
                First and foremost, we believe what you're going through is real, valid, and worthy of support. Our practice offers clients in the Santa Monica area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Ocean/Calm Aesthetic Image (Takes 5 columns on desktop) */}
        <div className="md:col-span-5">
          <div className="h-[450px] md:h-[550px] w-full overflow-hidden shadow-sm bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000"
              alt="Calm ocean beach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}