// src/components/NewsletterSection.jsx
import React from "react";

export default function NewsletterSection() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
      <p className="mb-6 max-w-lg mx-auto">
        Subscribe to our newsletter and never miss new job opportunities.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-l-lg px-4 py-3 w-full max-w-sm text-gray-900 bg-white border-r-2  focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-white text-purple-700 font-semibold px-6 rounded-r-lg hover:bg-purple-100 transition"
        >
          Subscribe
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}
