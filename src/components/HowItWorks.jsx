// Explains the buying process in simple numbered steps
function HowItWorks() {
  const steps = [
    { number: '1', text: 'Choose what you need.' },
    { number: '2', text: 'Send your request.' },
    { number: '3', text: 'We confirm availability and price.' },
    { number: '4', text: 'Arrange collection or delivery.' },
  ]

  return (
    <section className="px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 text-center mb-10">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold mx-auto mb-3">{step.number}</div>
            <p className="text-gray-700">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
