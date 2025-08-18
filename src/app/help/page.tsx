// app/page/help.tsx
import React from 'react'

export default function HelpPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-12 space-y-12">
      
      {/* Intro Section */}
      <div className="bg-white shadow-lg rounded-lg p-10 md:p-16 space-y-6 ">
        <h1 className="text-5xl pl-48 md:text-4xl font-extrabold text-gray-900">
          Help Center
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Welcome to our Help Center! We are here to assist you with any questions or concerns you may have while shopping with us. Whether you need help with orders, account management, or product inquiries, this page provides all the information you need to navigate our platform with ease.
        </p>
      </div>

      {/* Placing and Managing Orders */}
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Placing and Managing Orders</h2>
        <p className="text-gray-700 leading-relaxed">
          Placing an order is simple and secure. Browse our product categories, add items to your cart, and proceed to checkout. Once your order is placed, you can track its status through your account under the {"My Orders"} section. If you need to modify or cancel your order, please contact us as soon as possible for assistance.
        </p>
      </div>

      {/* Shipping and Returns */}
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Shipping and Returns</h2>
        <p className="text-gray-700 leading-relaxed">
          We offer a variety of shipping options to suit your needs, including standard and express delivery. For detailed shipping costs and delivery timelines, visit our Shipping Policy page. If you are not satisfied with your purchase, our hassle-free return process allows you to initiate a return within the specified timeframe. Check our Returns Policy for more details.
        </p>
      </div>

      {/* Account and Support */}
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Account and Support</h2>
        <p className="text-gray-700 leading-relaxed">
          Managing your account is easy. Log in to update your personal information, payment methods, and saved addresses. If you encounter any issues or need further assistance, our customer support team is available via email, live chat, or phone.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-white shadow-lg rounded-lg p-10 text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">Contact Our Support Team</h2>
        <p className="text-gray-700">Email: support@shopnext.com</p>
        <p className="text-gray-700">Phone: +880 1234 567890</p>
        <p className="text-gray-700">Live Chat: Available on the website for instant assistance</p>
      </div>
    </div>
  )
}
