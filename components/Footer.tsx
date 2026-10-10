export default function Footer() {
  return (
    <footer id="contact" className="px-8 md:px-16 py-16 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Dr. Maya Reynolds, PsyD</h3>
          <p className="text-gray-600 text-sm">Providing compassionate in-person and telehealth therapy across California.</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-purple-900">About</a></li>
            <li><a href="#specialties" className="hover:text-purple-900">Specialties</a></li>
            <li><a href="#office" className="hover:text-purple-900">Our Office</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Contact Info</h3>
          <p className="text-gray-600 text-sm">Santa Monica, CA 90401</p>
          <p className="text-gray-600 text-sm mt-2">In-person & Virtual Sessions Available</p>
        </div>
      </div>
    </footer>
  );
}