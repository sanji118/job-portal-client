import { useLoaderData } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import JobCard from "../components/JobCard";


export default function HomePage() {
  const data = useLoaderData();

  
  const jobs = data.filter(job => job.status === "active");


  return (
    <main className="p-5 md:p-8 lg:p-14">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />

      <section className="py-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Available Jobs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs?.length === 0 ? (
            <p className="text-center text-gray-600 col-span-2">No available jobs at the moment.</p>
          ) : (
            jobs?.map((job, i) => <JobCard key={i} job={job} />)
          )}
        </div>
      </section>
    </main>
  );
}
