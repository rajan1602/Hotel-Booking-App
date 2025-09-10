// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../api";
// import React from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       alert("Login successful!");
//       navigate("/");   // 👈 redirect to home
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-xl p-8 w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 rounded-lg mb-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
        
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 rounded-lg mb-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
        
//         <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//           Login
//         </button>

//         {/* 👇 Added link */}
//         <p className="text-center text-sm text-gray-600 mt-4">
//           New user?{" "}
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Sign up here
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import React from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54581.jpg?semt=ais_hybrid&w=740&q=80')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-xl p-8 w-96 relative z-10 animate-fadeIn"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded-lg mb-4 focus:outline-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded-lg mb-4 focus:outline-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          New user?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </form>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
}

