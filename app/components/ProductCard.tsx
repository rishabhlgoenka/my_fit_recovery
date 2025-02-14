import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
  isSelected: boolean
  onToggle: () => void
}

export default function ProductCard({ product, isSelected, onToggle }: ProductCardProps) {
  return (
    <div className={`border rounded-lg p-4 ${isSelected ? "border-blue-500" : ""}`}>
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={200}
        height={200}
        className="mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={onToggle}
        className={`w-full py-2 rounded ${isSelected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
      >
        {isSelected ? "Remove" : "Add to Kit"}
      </button>
    </div>
  )
}

