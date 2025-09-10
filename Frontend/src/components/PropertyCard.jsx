import { Link } from "react-router-dom";
import React from "react";

export default function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property._id}`} className="block group">
      <div className="relative">
        <img
          src={property.images[0]?.url || "https://via.placeholder.com/400"}
          alt={property.title}
          className="w-full h-56 object-cover rounded-2xl group-hover:opacity-90 transition"
        />
        <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm shadow">
          ₹{property.pricePerNight}/night
        </div>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{property.title}</h3>
      <p className="text-gray-500 text-sm">{property.address?.city}, {property.address?.country}</p>
    </Link>
  );
}
