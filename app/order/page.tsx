import { useState } from "react"
import Link from "next/link"
import RecommendationForm from "../components/RecommendationForm"
import ProductCard from "../components/ProductCard"

const products = [
  { id: 1, name: "Foam Roller", price: 29.99, image: "/placeholder.svg" },
  { id: 2, name: "Resistance Bands", price: 19.99, image: "/placeholder.svg" },
  { id: 3, name: "Massage Ball", price: 14.99, image: "/placeholder.svg" },
  { id: 4, name: "Compression Sleeves", price: 24.99, image: "/placeholder.svg" },
  { id: 5, name: "Ice Pack", price: 9.99, image: "/placeholder.svg" },
  { id: 6, name: "Kinesiology Tape", price: 12.99, image: "/placeholder.svg" },
]

export default function Order() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [recommendations, setRecommendations] = useState<string[]>([])

  const handleProductToggle = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleRecommendations = (newRecommendations: string[]) => {
    setRecommendations(newRecommendations)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Customize Your Recovery Kit</h1>
      <RecommendationForm onRecommendations={handleRecommendations} />
      {recommendations.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Recommended Tools:</h2>
          <ul className="list-disc list-inside">
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProducts.includes(product.id)}
            onToggle={() => handleProductToggle(product.id)}
          />
        ))}
      </div>
      <div className="text-right">
        <Link
          href={{
            pathname: "/checkout",
            query: { products: selectedProducts.join(",") },
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}

