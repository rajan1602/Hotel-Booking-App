import React, { useEffect, useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      {bookings.length > 0 && (
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookings.map((b) => (
              <div
                key={b.bookingId}
                className="bg-white rounded-2xl shadow-md overflow-hidden p-4"
              >
                <h3 className="text-lg font-semibold">{b.name}</h3>
                <p className="text-gray-500">{b.location}</p>
                <p>₹{b.price}/night</p>
                <p>
                  Check-in: {b.checkIn} | Check-out: {b.checkOut} <br />
                  Guests: {b.guests}
                </p>
                <button
                  onClick={() => cancelBooking(b.bookingId)}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Cancel Booking
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
    </div>
    
  );
}



// import React, { useEffect, useState } from "react";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("bookings")) || [];
//     setBookings(saved);
//   }, []);

//   const cancelBooking = (index) => {
//     const updated = bookings.filter((_, i) => i !== index);
//     setBookings(updated);
//     localStorage.setItem("bookings", JSON.stringify(updated));
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>

//       {bookings.length > 0 && (
//         <div className="max-w-6xl mx-auto py-12 px-6">
//           <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {bookings.map((b) => (
//               <div
//                 key={b.bookingId}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden p-4"
//               >
//                 <h3 className="text-lg font-semibold">{b.name}</h3>
//                 <p className="text-gray-500">{b.location}</p>
//                 <p>₹{b.price}/night</p>
//                 <p>
//                   Check-in: {b.checkIn} | Check-out: {b.checkOut} <br />
//                   Guests: {b.guests}
//                 </p>
//                 <button
//                   onClick={() => cancelBooking(b.bookingId)}
//                   className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                   Cancel Booking
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
