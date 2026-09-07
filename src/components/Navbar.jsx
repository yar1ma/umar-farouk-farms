// Site-wide navigation bar with logo, links, and WhatsApp CTA
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <span className="text-xl font-bold text-green-700">
        Umar Farouk Farms
      </span>

      <div className="hidden md:flex gap-6 text-gray-700">
        <a href="/">Home</a>
        <a href="/livestock">Livestock</a>
        <a href="/services">Farm Services</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </div>

       <a href="#" className="bg-green-700 text-white px-4 py-2 rounded font-medium">
        Chat on WhatsApp
      </a>
    </nav>
  )
}

export default Navbar