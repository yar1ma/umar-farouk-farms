// Contact section: CTA text and WhatsApp button, main conversion point of the page
function Contact() {
  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Looking for livestock?</h2>
      <p className="text-gray-600 mb-8">Tell us what you need and we will help you find the right animal.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" className="bg-green-700 text-white px-6 py-3 rounded font-medium">Request Livestock</a>
        <a href="#" className="border border-green-700 text-green-700 px-6 py-3 rounded font-medium">Chat on WhatsApp</a>
      </div>
    </section>
  )
}

export default Contact