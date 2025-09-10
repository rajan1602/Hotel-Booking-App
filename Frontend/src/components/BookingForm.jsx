// import { useState } from "react";
// import React from "react";

// export default function BookingForm({ property }) {
//   const [guests, setGuests] = useState(1);

//   return (
//     <div className="sticky top-20 p-6 bg-white rounded-2xl shadow-lg w-full md:w-80">
//       <h2 className="text-xl font-bold">₹{property.pricePerNight} / night</h2>
//       <div className="mt-4 space-y-3">
//         <input type="date" className="w-full border rounded-lg p-2" />
//         <input type="date" className="w-full border rounded-lg p-2" />
//         <input
//           type="number"
//           min="1"
//           max={property.maxGuests}
//           value={guests}
//           onChange={(e) => setGuests(e.target.value)}
//           className="w-full border rounded-lg p-2"
//         />
//         <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//           Reserve
//         </button>
//       </div>
//     </div>
//   );
// }




// frontend/src/components/BookingForm.jsx
// import React, { useState } from "react";
// import axios from "axios";

// export default function BookingForm({ property, onBookingSuccess }) {
//   const [form, setForm] = useState({
//     checkIn: "",
//     checkOut: "",
//     guests: 1,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const token = localStorage.getItem("token");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!token) {
//       return alert("Please login first to make a booking.");
//     }
//     if (!form.checkIn || !form.checkOut) {
//       return setError("Please select check-in and check-out dates.");
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post(
//         "/api/bookings",
//         {
//           propertyId: property._id,
//           checkIn: form.checkIn,
//           checkOut: form.checkOut,
//           guests: form.guests,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setLoading(false);
//       alert("Booking successful!");
//       if (onBookingSuccess) onBookingSuccess(res.data);
//       setForm({ checkIn: "", checkOut: "", guests: 1 });
//     } catch (err) {
//       setLoading(false);
//       console.error(err);
//       setError(err.response?.data?.message || "Booking failed.");
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-center">{property.name}</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1 font-semibold">Check-in</label>
//           <input
//             type="date"
//             name="checkIn"
//             value={form.checkIn}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-semibold">Check-out</label>
//           <input
//             type="date"
//             name="checkOut"
//             value={form.checkOut}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-semibold">Guests</label>
//           <input
//             type="number"
//             name="guests"
//             min="1"
//             value={form.guests}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>

//         {error && <p className="text-red-500">{error}</p>}

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           {loading ? "Booking..." : "Book Now"}
//         </button>
//       </form>
//     </div>
//   );
// }








// import React, { useEffect, useState } from "react";

// export default function BookingForm() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     setBookings(savedBookings);
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
//       {bookings.length === 0 ? (
//         <p className="text-gray-600">You have no bookings yet.</p>
//       ) : (
//         <div className="grid gap-6">
//           {bookings.map((b, i) => (
//             <div
//               key={i}
//               className="p-4 border rounded-lg shadow-md flex justify-between"
//             >
//               <div>
//                 <h3 className="font-bold">{b.name}</h3>
//                 <p>{b.location}</p>
//                 <p>
//                   {b.checkIn} → {b.checkOut}
//                 </p>
//                 <p>Guests: {b.guests}</p>
//               </div>
//               <p className="font-semibold text-blue-600">₹{b.price}/night</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    property: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Replace with your Formspree endpoint
  const FORM_ENDPOINT = "https://formspree.io/f/xqadwnzv";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess("Booking confirmed! A confirmation has been sent to your email.");
        // store user’s booking in localStorage
        const saved = JSON.parse(localStorage.getItem("bookings")) || [];
        localStorage.setItem("bookings", JSON.stringify([...saved, form]));

        setForm({
          name: "",
          email: "",
          property: "",
          checkIn: "",
          checkOut: "",
          guests: 1,
        });
      } else {
        setError("Failed to send booking confirmation.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 space-y-4 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-center">Confirm Your Booking</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <input
        type="text"
        name="property"
        placeholder="Hotel / Room Name"
        value={form.property}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <div className="flex gap-4">
        <input
          type="date"
          name="checkIn"
          value={form.checkIn}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="date"
          name="checkOut"
          value={form.checkOut}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        value={form.guests}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Sending..." : "Confirm Booking"}
      </button>
    </form>
  );
}
