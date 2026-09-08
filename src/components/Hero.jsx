import { whatsappNumber } from "../config"

// Hero section: first thing visitors see, main message and call-to-action buttons
function Hero() {
  return (
    <section className="px-6 py-16 bg-gray-50 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">Quality Livestock. Reliable Farm Services.</h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">Umar Farouk Farms connects customers with quality livestock and practical farm services across Ghana.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/livestock" className="bg-green-700 text-white px-6 py-3 rounded font-medium">Browse Livestock</a>
        <a href={`https://wa.me/${whatsappNumber}`} className="border border-green-700 text-green-700 px-6 py-3 rounded font-medium">Talk to Us</a>
      </div>
    </section>
  )
}

export default Hero