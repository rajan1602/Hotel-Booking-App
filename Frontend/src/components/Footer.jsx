import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold mb-3">HotelBooking</h2>
          <p className="text-gray-400 text-sm">
            Your trusted platform to find the best hotels across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/bookings" className="hover:text-white">My Bookings</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">📍 New Delhi, India</p>
          <p className="text-gray-300 text-sm">📞 +91 98765 43210</p>
          <p className="text-gray-300 text-sm">✉️ support@hotelbooking.com</p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} HotelBooking. All rights reserved.
      </div>
    </footer>
  );
}
