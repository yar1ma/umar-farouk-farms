import { useState } from 'react'

// Inquiry form: collects customer details, no backend yet, just local state
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    animalType: '',
    quantity: '',
    location: '',
    details: '',
  })

  // Updates one field in formData whenever the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Runs when the form is submitted, currently just logs the data
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 text-center mb-8">Send an Inquiry</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" required />
          <input type="tel" name="phone" placeholder="Phone or WhatsApp number" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" required />
          <input type="text" name="animalType" placeholder="Animal type (e.g. cattle, goat)" value={formData.animalType} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" />
          <input type="text" name="quantity" placeholder="Quantity needed" value={formData.quantity} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" />
          <input type="text" name="location" placeholder="Your location" value={formData.location} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" />
          <textarea name="details" placeholder="Additional details" value={formData.details} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" rows="4" />
          <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded font-medium">Send Inquiry</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm