'use client';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FAF8F6] py-20 px-8 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

        {/* LEFT COLUMN: Text Info & FAQs */}
        <div className="md:col-span-6 space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#2C2C4A] leading-[1.15]">
            Start Your Healing Journey Today.
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
            Taking the first step can feel like the hardest part. Fill out the form to schedule your initial consultation or ask any questions about working together.
          </p>

          <div className="pt-6 border-t border-gray-200 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.18em] font-medium text-[#2C2C4A]">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-3 text-xs text-gray-600 font-light leading-relaxed">
              <div>
                <p className="font-medium text-gray-800">Do you take insurance?</p>
                <p>Yes, I am in-network with Anthem, Aetna, and provide superbills for out-of-network reimbursement.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">What are the session fees?</p>
                <p>$200–$250 per 50-minute session. Sliding scale slots are available upon inquiry.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Where is the office located?</p>
                <p>123th Street 45 W, Santa Monica, CA 90401 (Online telehealth sessions also available across California).</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Clean Contact Form */}
        <div className="md:col-span-6 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-light text-[#2C2C4A] mb-2">
            Request an Appointment
          </h3>
          <p className="text-xs text-gray-500 font-light mb-6">
            Fill in your details below and I will get back to you within 24 hours.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full border border-gray-200 rounded-full px-5 py-3 text-xs focus:outline-none focus:border-[#2C2C4A] transition"
              />
            </div>

            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full border border-gray-200 rounded-full px-5 py-3 text-xs focus:outline-none focus:border-[#2C2C4A] transition"
              />
            </div>

            <div>
              <textarea 
                placeholder="What are you looking for help with? (e.g. Anxiety, Trauma, Burnout)" 
                rows={4}
                className="w-full border border-gray-200 rounded-2xl px-5 py-3 text-xs focus:outline-none focus:border-[#2C2C4A] transition resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#2C2C4A] text-white rounded-full py-3.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-black transition duration-300"
            >
              Request Appointment
            </button>

            <p className="text-[10px] text-center text-gray-400 font-light pt-2">
              🔒 100% Confidential • Free 15-Minute Phone Consultation
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}