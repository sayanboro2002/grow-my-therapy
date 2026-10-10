import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact"
import Faq from "@/components/Faq"

export default function Home() {
  return (
    <main className="bg-[#FAF8F6] text-[#4A3B5C] font-sans min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Office />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
}