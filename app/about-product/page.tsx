import Image from "next/image"

export default function AboutProduct() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Our Recovery Kits</h1>
      <Image
        src="/placeholder.svg"
        alt="Recovery Kit Components"
        width={800}
        height={400}
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg mb-4">
        Our customizable recovery kits are designed to help athletes of all levels recover faster and perform better.
        Each kit is tailored to your specific needs, sport, and injuries.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personalized selection of recovery tools</li>
        <li>AI-powered recommendations based on your sport and injuries</li>
        <li>High-quality, durable materials</li>
        <li>Compact and portable design</li>
        <li>Easy-to-follow instructions for each tool</li>
      </ul>
      <p className="text-lg">
        Whether you're a professional athlete or a weekend warrior, our recovery kits will help you stay in top form and
        prevent injuries.
      </p>
    </div>
  )
}

