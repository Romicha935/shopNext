// app/customer-service/page.tsx
import Link from "next/link";

export default function CustomerServicePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center sm:text-5xl">
          Customer Service
        </h1>

        {/* Intro Section */}
<div className="bg-white  p-10 md:px-16 space-y-6 ">
  <h1 className="text-5xl md:text-4xl font-extrabold text-gray-900">
Welcome to <span className="text-yellow-600">ShopNext</span> Customer Service
  </h1>
  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
    At <span className="font-semibold">ShopNext</span>, we believe shopping should be seamless and enjoyable.
    Our dedicated customer service team is here to ensure your questions are answered quickly and efficiently.
  </p>
  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
    Need help with orders, product information, returns, or tracking? We have got you covered. Our goal is to make your experience as smooth as possible.
  </p>
  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
    Reach out to us anytime through email, phone, or live chat, and we  will respond promptly. Your satisfaction is our top priority!
  </p>



        {/* Contact Info Box */}
        <div className=" bg-white  p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Email:</span> <a href="mailto:support@shopnext.com" className="text-blue-600 hover:underline">support@shopnext.com</a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +880 1234 567 890
            </li>
            <li>
              <span className="font-semibold">Live Chat:</span> Available on our website for instant assistance
            </li>
          </ul>

          <div className="mt-6 text-gray-700">
            <p>
              We also provide helpful resources such as <Link href="/page/order-tracking" className="text-blue-600 hover:underline">order tracking</Link>, product guides, and FAQs to assist you with common inquiries. Your satisfaction is our priority, and we’re here to resolve any issues quickly and efficiently.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
