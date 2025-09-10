import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import PropertyGallery from "../components/PropertyGallery";
import BookingForm from "../components/BookingForm";
import React from "react";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    API.get(`/properties/${id}`).then(res => setProperty(res.data));
  }, [id]);

  if (!property) return <p className="p-6">Loading...</p>;

  return (
    <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
        <PropertyGallery images={property.images} />
        <p className="mt-6 text-gray-700">{property.description}</p>
      </div>
      <BookingForm property={property} />
    </div>
  );
}
