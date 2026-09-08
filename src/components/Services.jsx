// Service categories section: shows the main things the business offers
function Services() {
  const services = [
    { title: 'Livestock Sales', description: 'Buy quality livestock directly from us.' },
    { title: 'Livestock Sourcing', description: 'Tell us what you need, we help you find it.' },
    { title: 'Farm Services', description: 'Practical support for farm operations.' },
  ]

  return (
    <section className="px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 text-center mb-10">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service) => (
          <div key={service.title} className="border border-gray-200 rounded p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services