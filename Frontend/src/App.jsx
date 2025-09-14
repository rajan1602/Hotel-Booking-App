// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import PropertyDetail from "./pages/PropertyDetail";
// import Login from "./pages/Login";
// import React from "react";
// import Signup from "./pages/Signup";
// import Bookings from "./pages/Bookings";   // ✅ new
// import About from "./pages/About";         // ✅ new
// import Contact from "./pages/Contact";     // ✅ new

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/property/:id" element={<PropertyDetail />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import PropertyDetail from "./pages/PropertyDetail";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import React from "react";
// import Bookings from "./pages/Bookings";   // ✅ new
// import About from "./pages/About";         // ✅ new
// import Contact from "./pages/Contact";     // ✅ new

// function Layout({ children }) {
//   const location = useLocation();
//   const hideNavbar = ["/login", "/register"].includes(location.pathname);

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       {children}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       < Navbar />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/property/:id" element={<PropertyDetail />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Signup />} />
//           <Route path="/bookings" element={<Bookings />} />   {/* ✅ */}
//         <Route path="/about" element={<About />} />         {/* ✅ */}
//         <Route path="/contact" element={<Contact />} />     {/* ✅ */}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React from "react";
import Bookings from "./pages/Bookings";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Layout handles showing Navbar only when needed
function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

// ProtectedRoute wrapper
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default route: if logged in → Home, else → Login */}
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />

          <Route path="/property/:id" element={
            <ProtectedRoute>
              <PropertyDetail />
            </ProtectedRoute>
          } />

          <Route path="/bookings" element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth routes (no Navbar) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />

          {/* Catch all unknown routes → redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

