// import { Link } from "react-router-dom";
// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold text-blue-600">HotelBooking</Link>
//       <div className="space-x-4">
//         <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
//         <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//           Sign Up
//         </Link>
//       </div>
//     </nav>
//   );
// }



// import { Link, useNavigate } from "react-router-dom";
// import React from "react";

// export default function Navbar() {
//   const token = localStorage.getItem("token");
//   const user = localStorage.getItem("user"); // store user email/id in localStorage when login/signup
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
//       {/* Left - Logo */}
//       <Link to="/" className="text-2xl font-bold text-blue-600">
//         HotelBooking
//       </Link>

//       {/* Middle - Menu */}
//       <div className="space-x-6 hidden md:flex">
//         <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
//         <Link to="/bookings" className="text-gray-700 hover:text-blue-600">Bookings</Link>
//         <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
//         <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
//       </div>

//       {/* Right - User */}
//       <div>
//         {token ? (
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-700 font-semibold">{user}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </div>
//         ) : null}
//       </div>
//     </nav>
//   );
// }


// import { Link, useNavigate } from "react-router-dom";
// import React from "react";

// export default function Navbar() {
//   const token = localStorage.getItem("token");
//   const user = localStorage.getItem("user");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center fixed w-full top-0 z-50">
//       {/* Left - Logo */}
//       <Link to="/" className="text-2xl font-bold text-blue-600">
//         HotelBooking
//       </Link>

//       {/* Middle - Menu */}
//       <div className="space-x-6 hidden md:flex">
//         <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
//         <Link to="/bookings" className="text-gray-700 hover:text-blue-600">Bookings</Link>
//         <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
//         <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
//       </div>

//       {/* Right - User */}
//       <div>
//         {token && (
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-700 font-semibold">{user}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }


import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user"); // You can store id, name, or email here
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Left - Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        HotelBooking
      </Link>

      {/* Middle - Menu */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/bookings" className="text-gray-700 hover:text-blue-600">Bookings</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
      </div>

      {/* Right - User */}
      <div>
        {token && (
          <div className="flex items-center space-x-4">
            

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
