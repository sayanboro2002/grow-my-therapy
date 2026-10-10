export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F6]/90 backdrop-blur-md border-b border-gray-200/60 transition-all">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-16 py-5">
        
        {/* Brand Name / Logo */}
        <a href="#" className="text-xl md:text-2xl font-light tracking-tight text-[#2C2C4A]">
          Dr. Maya Reynolds, <span className="font-normal">PsyD</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-gray-700">
          <a href="#about" className="hover:text-[#2C2C4A] transition duration-200">
            About
          </a>
          <a href="#specialties" className="hover:text-[#2C2C4A] transition duration-200">
            Specialties
          </a>
          <a href="#office" className="hover:text-[#2C2C4A] transition duration-200">
            Our Office
          </a>
          <a href="#faq" className="hover:text-[#2C2C4A] transition duration-200">
            FAQs
          </a>
          <a 
            href="#contact" 
            className="border border-[#2C2C4A] text-[#2C2C4A] px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#2C2C4A] hover:text-white transition duration-300 ml-2"
          >
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}