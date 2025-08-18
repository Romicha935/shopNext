// app/page/about-us.tsx
import React from 'react'

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-12">
      
      {/* Intro Section */}
      <div className="bg-white shadow-lg rounded-lg p-10 md:p-16 space-y-6 ">
        <h1 className="text-5xl md:text-4xl font-extrabold md:pl-48 text-gray-900">
          About <span className="text-yellow-600">ShopNext</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Welcome to <span className="font-semibold">ShopNext</span>, your number one source for electronics, gadgets, and accessories. We are dedicated to giving you the very best products with an emphasis on quality, customer service, and uniqueness.
        </p>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Founded in [Year], ShopNext has come a long way from its beginnings. Our passion for technology and commitment to our customers drove us to start this platform, and we continue to grow every day to meet your needs.
        </p>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please dont hesitate to contact us.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide high-quality electronics and accessories to our customers, backed by excellent customer service and competitive prices. We aim to make online shopping seamless and enjoyable for everyone.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be the most trusted online store for electronics, offering innovative products, transparency, and a customer-centric approach. We aspire to expand globally while maintaining quality and service excellence.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="mt-16 bg-white shadow-lg rounded-lg p-10 text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-700">Email: support@shopnext.com</p>
        <p className="text-gray-700">Phone: +880 1234 567890</p>
        <p className="text-gray-700">Address: Rangpur, Bangladesh</p>
      </div>
    </div>
  )
}
