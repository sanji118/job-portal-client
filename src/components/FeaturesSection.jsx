
import { Rocket, Search, Briefcase } from "lucide-react";


export default function FeaturesSection() {
  const features = [
    { icon: <Rocket size={48} className="mx-auto mb-4 text-purple-600" />, title: "Fast Application", description: "Apply with one click." },
    { icon: <Search size={48} className="mx-auto mb-4 text-purple-600" />, title: "Smart Search", description: "Jobs tailored to you." },
    { icon: <Briefcase size={48} className="mx-auto mb-4 text-purple-600" />, title: "Verified Employers", description: "Trusted companies." },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
          >
            {icon}
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
