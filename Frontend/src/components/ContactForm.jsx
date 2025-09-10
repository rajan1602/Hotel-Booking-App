// import React, { useState } from "react";

// function ContactForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const FORM_ENDPOINT = "https://formspree.io/f/xqadwnzv"; // replace with your Formspree URL

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(""); 
//     setSuccess("");

//     try {
//       const response = await fetch(FORM_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         setSuccess("Message sent successfully!");
//         setForm({ name: "", email: "", subject: "", message: "" });
//       } else {
//         setError("Failed to send message.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("An error occurred while sending your message.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto my-12">
//       <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded-lg"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded-lg"
//           required
//         />
//         <input
//           type="text"
//           name="subject"
//           placeholder="Subject"
//           value={form.subject}
//           onChange={handleChange}
//           className="w-full p-2 border rounded-lg"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Message"
//           value={form.message}
//           onChange={handleChange}
//           className="w-full p-2 border rounded-lg"
//           rows="5"
//           required
//         />
//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">{success}</p>}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </div>
//   );
// }

// // module.exports = ContactForm;
// export default ContactForm;





import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const FORM_ENDPOINT = "https://formspree.io/f/xqadwnzv"; // replace with your Formspree URL

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setError("⚠️ An error occurred while sending your message.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Left Section */}
        <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Hotels?</h2>
          <ul className="space-y-3 mb-6 text-lg">
            <li>✨ Luxury rooms with modern design</li>
            <li>🍽️ World-class dining experience</li>
            <li>🏊 Infinity pool & spa facilities</li>
            <li>🌍 Beautiful locations across India</li>
            <li>🛎️ 24/7 customer support</li>
          </ul>
          <img
            src="https://origin-staticv2.sonyliv.com/videoasset_images/hotel_transylvania_sep_landscape_thumb.jpg"
            alt="Hotel animation"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section (Contact Form) */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
