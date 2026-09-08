import { useState } from 'react' // hook to store toggle state
import { whatsappNumber } from '../config' // business WhatsApp number for inquiries

// Site-wide navigation bar with logo, links, and WhatsApp CTA
function Navbar() {
  // Tracks whether the mobile menu is open or closed. Starts closed.
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      {/* Top row: logo, desktop links, WhatsApp button, mobile menu button */}
      <div className="flex items-center justify-between">
        
        {/* Business name, acts as the logo for now */}
        <span className="text-xl font-bold text-green-700">
          Umar Farouk Farms
        </span>

        {/* Desktop nav links. Hidden below the md breakpoint, shown from md up */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <a href="/">Home</a>
          <a href="/livestock">Livestock</a>
          <a href="/services">Farm Services</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        {/* WhatsApp button, same visibility rule as desktop links */}
        
        <a href={`https://wa.me/${whatsappNumber}`} className="hidden md:inline-block bg-green-700 text-white px-4 py-2 rounded font-medium">
        Chat on WhatsApp
        </a>

        {/* Menu button, only visible below md. Clicking flips menuOpen true/false */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 font-medium"
        >
          Menu
        </button>
      </div>

      {/* Mobile dropdown menu. Only exists in the page when menuOpen is true */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700">
          <a href="/">Home</a>
          <a href="/livestock">Livestock</a>
          <a href="/services">Farm Services</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          {/* WhatsApp button repeated here since desktop one is hidden on mobile */}
          
            <a href= {`https://wa.me/${whatsappNumber}`}  className="bg-green-700 text-white px-4 py-2 rounded font-medium text-center">
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar