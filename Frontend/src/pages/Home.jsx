// import React, { useState } from "react";
// import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer"; 


// export default function Home() {
//   const [form, setForm] = useState({
//     location: "",
//     checkIn: "",
//     checkOut: "",
//     guests: 1,
//   });

//   const [cart, setCart] = useState([]);
//   const [bookings, setBookings] = useState([]);

//   const rooms = [ { id: 1, name: "Luxury Suite", location: "Goa, India", price: 4500, rating: 4.8, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", }, { id: 2, name: "Beach View Room", location: "Kerala, India", price: 3200, rating: 4.6, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", }, { id: 3, name: "Mountain Retreat", location: "Manali, India", price: 2800, rating: 4.7, image: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=", }, { id: 4, name: "City View Deluxe", location: "Mumbai, India", price: 4000, rating: 4.5, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80", }, { id: 5, name: "Poolside Villa", location: "Jaipur, India", price: 5200, rating: 4.9, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", }, { id: 6, name: "Budget Friendly Stay", location: "Pune, India", price: 1800, rating: 4.3, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80", }, { id: 7, name: "Royal Palace Room", location: "Udaipur, India", price: 6000, rating: 4.9, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", }, { id: 8, name: "Cozy Cottage", location: "Shimla, India", price: 2500, rating: 4.4, image: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D", }, { id: 9, name: "Desert Camp", location: "Jaisalmer, India", price: 3000, rating: 4.6, image: "https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?semt=ais_hybrid&w=740&q=80", }, { id: 10, name: "Luxury Tent", location: "Ranthambore, India", price: 3500, rating: 4.5, image: "https://www.gybevents.in/images/services/hotel.jpg", }, { id: 11, name: "Lake View Resort", location: "Nainital, India", price: 4200, rating: 4.7, image: "https://www.shutterstock.com/image-photo/luxury-modern-hotel-building-beautiful-260nw-2487687115.jpg", }, { id: 12, name: "Skyline Apartment", location: "Bangalore, India", price: 3800, rating: 4.6, image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80", }, ];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     alert(
//       `Searching hotels in ${form.location}, Check-in: ${form.checkIn}, Check-out: ${form.checkOut}, Guests: ${form.guests}`
//     );
//   };

//   const addToCart = (room) => {
//     if (!cart.find((r) => r.id === room.id)) {
//       setCart([...cart, room]);
//     } else {
//       alert("Room already in cart");
//     }
//   };

//   const removeFromCart = (roomId) => {
//     setCart(cart.filter((r) => r.id !== roomId));
//   };

//   const confirmBooking = () => {
//     if (cart.length === 0) return alert("Cart is empty!");
//     const newBookings = cart.map((room) => ({
//       ...room,
//       checkIn: form.checkIn,
//       checkOut: form.checkOut,
//       guests: form.guests,
//       bookingId: Date.now() + Math.random(),
//     }));
//     setBookings([...bookings, ...newBookings]);
//     setCart([]);
//   };

//   const cancelBooking = (bookingId) => {
//     setBookings(bookings.filter((b) => b.bookingId !== bookingId));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div
//         className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRFNtufYx_oU-UYKJ0wJ-V15Rsc6sF0Fuxg&s')",
//         }}
//       >
//         <div className="relative z-10 text-center text-black px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Find your perfect stay
//           </h1>
//           <p className="text-lg mb-8">Search and book hotels effortlessly</p>

//           {/* Search Form */}
//           <form
//             onSubmit={handleSearch}
//             className="bg-white rounded-2xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto"
//           >
//             <input
//               type="text"
//               name="location"
//               placeholder="Where are you going?"
//               className="p-3 border rounded-xl w-full"
//               value={form.location}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="date"
//               name="checkIn"
//               className="p-3 border rounded-xl w-full"
//               value={form.checkIn}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="date"
//               name="checkOut"
//               className="p-3 border rounded-xl w-full"
//               value={form.checkOut}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="number"
//               name="guests"
//               min="1"
//               placeholder="Guests"
//               className="p-3 border rounded-xl w-full"
//               value={form.guests}
//               onChange={handleChange}
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full"
//             >
//               🔍 Search
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Rooms Section */}
//       <div className="max-w-6xl mx-auto py-12 px-6">
//         <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {rooms.map((room) => (
//             <div
//               key={room.id}
//               className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
//             >
//               <img
//                 src={room.image}
//                 alt={room.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{room.name}</h3>
//                 <p className="text-gray-500">{room.location}</p>
//                 <p className="mt-2 font-bold">₹{room.price}/night</p>
//                 <p className="text-yellow-500">⭐ {room.rating}</p>
//                 <button
//                   onClick={() => addToCart(room)}
//                   className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cart Sidebar */}
//       {cart.length > 0 && (
//         <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto z-50">
//           <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//           {cart.map((room) => (
//             <div key={room.id} className="mb-4 border-b pb-2">
//               <h3 className="font-semibold">{room.name}</h3>
//               <p>₹{room.price}/night</p>
//               <button
//                 onClick={() => removeFromCart(room.id)}
//                 className="text-red-500 text-sm hover:underline"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             onClick={confirmBooking}
//             className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Confirm All Bookings
//           </button>
//         </div>
//       )}

//       {/* Bookings List  */}
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
//         <section id="contact" className="py-12 bg-gray-50">
//         <ContactForm />
//       </section>
//       <div className="max-w-6xl mx-auto p-6">
//         {/* <h1 className="text-3xl font-bold mb-6">Available Hotels</h1> */}
//         {/* hotel grid + booking modal here */}
//       </div>
//       <Footer />   {/* ✅ add footer */}
//     </div>
//   );
// }



import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  const [form, setForm] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [cart, setCart] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  const FORM_ENDPOINT = "https://formspree.io/f/xqadwnzv"; // ✅ your Formspree link

  const rooms = [
    { id: 1, name: "Luxury Suite", location: "Goa, India", price: 4500, rating: 4.8, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Beach View Room", location: "Kerala, India", price: 3200, rating: 4.6, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Mountain Retreat", location: "Manali, India", price: 2800, rating: 4.7, image: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" },
    { id: 4, name: "City View Deluxe", location: "Mumbai, India", price: 4000, rating: 4.5, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Poolside Villa", location: "Jaipur, India", price: 5200, rating: 4.9, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Budget Friendly Stay", location: "Pune, India", price: 1800, rating: 4.3, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" },
    { id: 7, name: "Royal Palace Room", location: "Udaipur, India", price: 6000, rating: 4.9, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Cozy Cottage", location: "Shimla, India", price: 2500, rating: 4.4, image: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000" },
    { id: 9, name: "Desert Camp", location: "Jaisalmer, India", price: 3000, rating: 4.6, image: "https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?w=740" },
    { id: 10, name: "Luxury Tent", location: "Ranthambore, India", price: 3500, rating: 4.5, image: "https://www.gybevents.in/images/services/hotel.jpg" },
    { id: 11, name: "Lake View Resort", location: "Nainital, India", price: 4200, rating: 4.7, image: "https://www.shutterstock.com/image-photo/luxury-modern-hotel-building-beautiful-260nw-2487687115.jpg" },
    { id: 12, name: "Skyline Apartment", location: "Bangalore, India", price: 3800, rating: 4.6, image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80" },
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching hotels in ${form.location}, Check-in: ${form.checkIn}, Check-out: ${form.checkOut}, Guests: ${form.guests}`);
  };

  const addToCart = (room) => {
    if (!cart.find((r) => r.id === room.id)) {
      setCart([...cart, room]);
    } else {
      alert("Room already in cart");
    }
  };

  const removeFromCart = (roomId) => setCart(cart.filter((r) => r.id !== roomId));

  const confirmBooking = () => {
    if (cart.length === 0) return alert("Cart is empty!");
    setShowPayment(true); // ✅ open payment modal before confirming
  };

  const processPaymentAndConfirm = async () => {
    const newBookings = cart.map((room) => ({
      ...room,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      bookingId: Date.now() + Math.random(),
    }));

    setBookings([...bookings, ...newBookings]);

    // ✅ send booking confirmation email
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "Booking Confirmation",
          message: `New booking confirmed:\n\n${newBookings
            .map(
              (b) =>
                `${b.name} (${b.location}) | ₹${b.price}/night\nCheck-in: ${b.checkIn} | Check-out: ${b.checkOut} | Guests: ${b.guests}`
            )
            .join("\n\n")}`,
        }),
      });
      alert("Booking confirmed and email sent!");
    } catch (err) {
      console.error("Email error:", err);
      alert("Booking saved, but failed to send email.");
    }

    setCart([]);
    setShowPayment(false);
  };

  const cancelBooking = (bookingId) => setBookings(bookings.filter((b) => b.bookingId !== bookingId));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3rU4L69hcVaxiXSe56pNZ3U2f0NYOAGTpHwXID87cj_4_Bm6BifMwyc8Wumb50LnkTg&usqp=CAU')",
        }}
      >
        <div className="relative z-10 text-center text-black px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find your perfect stay</h1>
          <p className="text-lg mb-8">Search and book hotels effortlessly</p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto"
          >
            <input type="text" name="location" placeholder="Where are you going?" className="p-3 border rounded-xl w-full" value={form.location} onChange={handleChange} required />
            <input type="date" name="checkIn" className="p-3 border rounded-xl w-full" value={form.checkIn} onChange={handleChange} required />
            <input type="date" name="checkOut" className="p-3 border rounded-xl w-full" value={form.checkOut} onChange={handleChange} required />
            <input type="number" name="guests" min="1" placeholder="Guests" className="p-3 border rounded-xl w-full" value={form.guests} onChange={handleChange} />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full">
              🔍 Search
            </button>
          </form>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{room.name}</h3>
                <p className="text-gray-500">{room.location}</p>
                <p className="mt-2 font-bold">₹{room.price}/night</p>
                <p className="text-yellow-500">⭐ {room.rating}</p>
                <button onClick={() => addToCart(room)} className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto z-50">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cart.map((room) => (
            <div key={room.id} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{room.name}</h3>
              <p>₹{room.price}/night</p>
              <button onClick={() => removeFromCart(room.id)} className="text-red-500 text-sm hover:underline">
                Remove
              </button>
            </div>
          ))}
          <button onClick={confirmBooking} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Confirm All Bookings
          </button>
        </div>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            <p className="mb-4">Total: ₹{cart.reduce((sum, r) => sum + r.price, 0)}</p>
            <button onClick={processPaymentAndConfirm} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Pay & Confirm
            </button>
            <button onClick={() => setShowPayment(false)} className="mt-2 w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Bookings List */}
      {bookings.length > 0 && (
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookings.map((b) => (
              <div key={b.bookingId} className="bg-white rounded-2xl shadow-md overflow-hidden p-4">
                <h3 className="text-lg font-semibold">{b.name}</h3>
                <p className="text-gray-500">{b.location}</p>
                <p>₹{b.price}/night</p>
                <p>
                  Check-in: {b.checkIn} | Check-out: {b.checkOut} <br /> Guests: {b.guests}
                </p>
                <button onClick={() => cancelBooking(b.bookingId)} className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                  Cancel Booking
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Form + Footer */}
      <section id="contact" className="py-12 bg-gray-50">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
