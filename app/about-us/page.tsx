import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <Image src="/placeholder.svg" alt="Our Team" width={800} height={400} className="rounded-lg shadow-lg mb-6" />
      <p className="text-lg mb-4">
        At Recovery Kit, we're passionate about helping athletes of all levels achieve their best performance through
        proper recovery. Our team consists of sports scientists, physical therapists, and athletes who understand the
        importance of recovery in any training regimen.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-4">
        Our mission is to provide personalized, high-quality recovery solutions that are accessible to everyone. We
        believe that with the right tools and knowledge, anyone can improve their athletic performance and reduce the
        risk of injuries.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
      <p className="text-lg mb-4">
        We combine cutting-edge AI technology with expert knowledge to create customized recovery kits that address the
        unique needs of each athlete. By continuously researching and incorporating the latest advancements in sports
        science, we ensure that our products remain at the forefront of athletic recovery.
      </p>
    </div>
  )
}

