import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Recovery Kit
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-product">About Product</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/order">Order</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

