"use client"
import { ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Back to Top Button */}
      <div className="w-full">
        <button
          className="bg-gray-800 w-full py-2 flex items-center justify-center text-sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to top
        </button>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto text-sm">
          <div>
            <h3 className="font-bold mb-2">Get to Know Us</h3>
            <ul className="space-y-1">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Make Money with Us</h3>
            <ul className="space-y-1">
              <li><Link href="/sell">Sell Products</Link></li>
              <li><Link href="/affiliate">Affiliate Program</Link></li>
              <li><Link href="/advertise">Advertise</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="space-y-1">
              <li><Link href="/shipping">Shipping Info</Link></li>
              <li><Link href="/returns">Returns</Link></li>
              <li><Link href="/help">Customer Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6 text-center text-sm space-y-2">
          <div className="flex justify-center items-center gap-3">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span>ShopNext</span>
          </div>

          <div className="flex justify-center gap-3">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/help">Help</Link>
          </div>

          <p className="text-gray-400">© 2025 ShopNext. All rights reserved.</p>
          <p className="text-gray-500">Rangpur, Bangladesh | +880123456789</p>
        </div>
      </div>
    </footer>
  )
}
