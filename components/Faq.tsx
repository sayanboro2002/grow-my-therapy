"use client";
import { useState } from "react";

const Faqs = [
  {
    q: "Where are you located?",
    a: "My office is located at 123th Street 45 W, Santa Monica, CA 90401. I also offer secure, HIPAA-compliant online therapy across the entire state of California."
  },
  {
    q: "How does online therapy work?",
    a: "We meet over a secure video platform. It offers the same warm, confidential care as an in-person session, from the comfort and privacy of your own space."
  },
  {
    q: "What are your fees and what insurance do you take?",
    a: "Sessions are $200–$250 per 50-minute appointment. While I am an out-of-network provider, I provide detailed monthly superbills for you to submit to your insurance company for potential reimbursement."
  },
  {
    q: "What can I expect during my first appointment?",
    a: "The initial session is focused on helping you feel safe and comfortable. We will discuss what brings you to therapy, your background, and your personal goals for our work together."
  },
  {
    q: "What if I need support outside of session hours?",
    a: "You can reach out via email, and I respond within 24 business hours on weekdays. For immediate mental health emergencies, please call or text 988 or go to the nearest emergency room."
  }
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#FAF8F6] py-24 px-8 md:px-16 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading */}
        <div className="md:col-span-5 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
            QUESTIONS & ANSWERS
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#2C2C4A]">
            Have <span className="italic font-normal">Questions?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed pt-2">
            Here are some of the most common questions about starting therapy, session logistics, and working together.
          </p>
          <p className="text-xs text-gray-500 font-light pt-2">
            If you don't see your question listed here, feel free to{" "}
            <a href="#contact" className="underline text-[#2C2C4A] font-medium hover:opacity-75 transition">
              reach out directly.
            </a>
          </p>
        </div>

        {/* Right Column: Interactive Accordion Grid */}
        <div className="md:col-span-7 border-t border-gray-200">
          {Faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-200 py-5 transition-all">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between items-center w-full text-left focus:outline-none group"
              >
                <span className="text-base md:text-lg font-light text-[#2C2C4A] group-hover:opacity-70 transition">
                  {item.q}
                </span>
                <span className="text-xl font-light text-[#2C2C4A] ml-4">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <p className="mt-3 text-xs md:text-sm text-gray-600 font-light leading-relaxed pr-6 animate-fadeIn">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}