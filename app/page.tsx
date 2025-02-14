import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Custom Recovery Kits for Athletes</h1>
      <Image src="/placeholder.svg" alt="Recovery Kit" width={600} height={400} className="rounded-lg shadow-lg mb-8" />
      <p className="text-xl mb-8 text-center max-w-2xl">
        Tailored recovery solutions for every athlete. Get personalized recommendations based on your sport and needs.
      </p>
      <Link
        href="/order"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Customize Your Kit
      </Link>
    </div>
  )
}

