import {supportWhatsappNumber} from "../config"

// Footer: business name, quick links, contact placeholders, copyright
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">Umar Farouk Farms</h3>
          <p className="text-sm">Livestock Sales</p>
          <p className="text-sm">Livestock Sourcing</p>
          <p className="text-sm">Farm Services</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Phone: coming soon</p>
          <p className="text-sm">Location: coming soon</p>
          <a href={`https://wa.me/${supportWhatsappNumber}`} className="text-sm underline">Website help</a>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <p className="text-sm">Facebook: coming soon</p>
          <p className="text-sm">Instagram: coming soon</p>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-10">© 2026 Umar Farouk Farms. All rights reserved.</p>
    </footer>
  )
}

export default Footer