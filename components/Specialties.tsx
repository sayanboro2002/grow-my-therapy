export default function Specialties() {
  const whoWeHelp = [
    {
      title: "Adults & Professionals",
      desc: "Feeling stuck or overwhelmed? I help adults find clarity, build resilience, and move forward with confidence by addressing anxiety, stress, and burnout.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "High-Achievers & Entrepreneurs",
      desc: "Perfectionism and high pressure take a toll. I guide high-performing individuals through imposter syndrome, stress, and work-life balance.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Trauma & EMDR Clients",
      desc: "Process past experiences and complex trauma in a safe, paced environment to regain emotional regulation and a sense of grounding.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const specialties = [
    {
      title: "Anxiety & Panic",
      desc: "Constant worry, physical tension, difficulty sleeping, or a sense that you're always bracing for something to go wrong.",
      points: ["Overthinking & Racing Thoughts", "Social Anxiety & Panic Attacks", "Perfectionism & Control"]
    },
    {
      title: "Trauma & EMDR",
      desc: "Processing past experiences, single-incident or complex trauma, helping you regain safety, control, and hope.",
      points: ["EMDR Therapy", "Childhood & Complex Trauma", "PTSD & Flashbacks"]
    },
    {
      title: "Professional Burnout",
      desc: "Supporting entrepreneurs, creatives, and professionals dealing with perfectionism and high internal pressure.",
      points: ["High-Functioning Burnout", "Imposter Syndrome", "Work-Life Imbalance"]
    },
    {
      title: "Relationships & Boundaries",
      desc: "Navigating interpersonal patterns, communication challenges, and building deeper connections.",
      points: ["People-Pleasing Patterns", "Setting Healthy Boundaries", "Attachment & Codependency"]
    }
  ];

  return (
    <section id="specialties" className="bg-[#FAF8F6] py-20 border-t border-gray-100">
      
      {/* 1. WHO WE HELP SECTION (Original Conejo 3-Column Image Grid) */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 mb-24">
        <h2 className="text-3xl md:text-4xl font-light text-[#2C2C4A] mb-12">
          Who we <span className="italic font-normal">help</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whoWeHelp.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="h-[320px] w-full overflow-hidden shadow-sm bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-[#2C2C4A]">{item.title}</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. OUR SPECIALTIES INCLUDE SECTION (Original Conejo Grid Layout) */}
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-2">
            HOW I CAN HELP
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2C4A]">
            Our specialties <span className="italic font-normal">include...</span>
          </h2>
          <p className="text-gray-600 text-sm font-light mt-2 max-w-2xl">
            You don't need a diagnosis to deserve support. If you're resonating with any of these, you're in the right place.
          </p>
        </div>

        {/* 2x2 Grid with Clean Minimalist Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {specialties.map((item) => (
            <div key={item.title} className="space-y-3 pt-4 border-t border-gray-200">
              <h3 className="text-2xl font-light text-[#2C2C4A]">{item.title}</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
              
              <ul className="pt-2 space-y-1.5">
                {item.points.map((p) => (
                  <li key={p} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="text-gray-400">✓</span> {p}
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a href="#contact" className="inline-block text-xs uppercase tracking-[0.15em] text-[#2C2C4A] border-b border-[#2C2C4A] pb-0.5 hover:opacity-70 transition">
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-20 bg-[#2C2C4A] text-white p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-light">Not sure if this is the right fit?</h3>
          <p className="text-gray-300 text-sm font-light mt-2">
            Book a free 15-minute consultation. No pressure, just a warm conversation to see if we align.
          </p>
          <a href="#contact" className="inline-block border border-white text-white px-8 py-3 mt-6 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-[#2C2C4A] transition duration-300">
            Book Free Consult
          </a>
        </div>
      </div>

    </section>
  );
}