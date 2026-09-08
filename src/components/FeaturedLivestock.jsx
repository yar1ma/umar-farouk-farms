import livestock from '../data/livestock'
import LivestockCard from './LivestockCard'

// Section that displays a grid of livestock cards using the mock data
function FeaturedLivestock() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 text-center mb-10">Featured Livestock</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {livestock.map((animal) => (
          <LivestockCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedLivestock