"use client"

import { useState } from "react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import type React from "react" // Added import for React

interface RecommendationFormProps {
  onRecommendations: (recommendations: string[]) => void
}

export default function RecommendationForm({ onRecommendations }: RecommendationFormProps) {
  const [sport, setSport] = useState("")
  const [injury, setInjury] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `Given the sport "${sport}" and injury "${injury}", recommend 3 recovery tools for an athlete's recovery kit. Provide the recommendations as a comma-separated list.`,
      })

      const recommendations = text.split(",").map((item) => item.trim())
      onRecommendations(recommendations)
    } catch (error) {
      console.error("Error generating recommendations:", error)
      onRecommendations(["Foam Roller", "Resistance Bands", "Ice Pack"])
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="sport" className="block mb-2">
          Sport:
        </label>
        <input
          type="text"
          id="sport"
          value={sport}
          onChange={(e) => setSport(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="injury" className="block mb-2">
          Injury (if any):
        </label>
        <input
          type="text"
          id="injury"
          value={injury}
          onChange={(e) => setInjury(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        disabled={loading}
      >
        {loading ? "Generating..." : "Get Recommendations"}
      </button>
    </form>
  )
}

