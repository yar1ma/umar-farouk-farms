// Displays one livestock listing as a card. Receives the animal's data as a prop.
function LivestockCard({ animal }) {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <img src={animal.image} alt={`${animal.type} - ${animal.breed}`} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{animal.type} — {animal.breed}</h3>
        <p className="text-sm text-gray-600 mb-2">{animal.location} · {animal.age} · {animal.sex}</p>
        <p className="text-gray-600 mb-3">{animal.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-700 font-medium">{animal.price}</span>
          <a href="#" className="text-sm text-green-700 underline">View Details</a>
        </div>
      </div>
    </div>
  )
}

export default LivestockCard