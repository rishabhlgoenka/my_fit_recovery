"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import type React from "react" // Added import for React

const products = [
  { id: 1, name: "Foam Roller", price: 29.99 },
  { id: 2, name: "Resistance Bands", price: 19.99 },
  { id: 3, name: "Massage Ball", price: 14.99 },
  { id: 4, name: "Compression Sleeves", price: 24.99 },
  { id: 5, name: "Ice Pack", price: 9.99 },
  { id: 6, name: "Kinesiology Tape", price: 12.99 },
]

export default function Checkout() {
  const searchParams = useSearchParams()
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  useEffect(() => {
    const productIds = searchParams.get("products")
    if (productIds) {
      setSelectedProducts(productIds.split(",").map(Number))
    }
  }, [searchParams])

  const selectedItems = products.filter((product) => selectedProducts.includes(product.id))
  const total = selectedItems.reduce((sum, product) => sum + product.price, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically integrate with a payment processor
    alert("Thank you for your order! (Payment processing would be implemented here)")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-2">
          {selectedItems.map((product) => (
            <li key={product.id} className="flex justify-between">
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="text-xl font-semibold mt-4 pt-4 border-t">Total: ${total.toFixed(2)}</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            Full Name
          </label>
          <input type="text" id="name" required className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" required className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2">
            Shipping Address
          </label>
          <textarea id="address" required className="w-full px-3 py-2 border rounded"></textarea>
        </div>
        <div>
          <label htmlFor="card" className="block mb-2">
            Credit Card Number
          </label>
          <input type="text" id="card" required className="w-full px-3 py-2 border rounded" />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}

