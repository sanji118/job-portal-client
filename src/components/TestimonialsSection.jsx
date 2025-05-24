import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";


const testimonials = [
  {
    name: "Sarah K.",
    role: "Frontend Developer",
    quote: "This platform helped me land my dream job in no time!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James L.",
    role: "Data Scientist",
    quote: "A seamless experience from searching to applying.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Amina R.",
    role: "Project Manager",
    quote: "Verified employers gave me confidence.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = React.useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, role, quote, avatar } = testimonials[current];

  return (
    <section className="py-20 px-6 bg-white text-center max-w-3xl mx-auto">
      <h2 className="text-3xl  font-bold mb-12">What Our Users Say</h2>

      <div className="relative bg-gray-100 rounded-xl p-8 shadow-lg">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <p className="italic text-lg mb-4">"{quote}"</p>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{role}</p>

        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
