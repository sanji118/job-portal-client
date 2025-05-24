import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search, Filter, SortAsc } from "lucide-react";
import JobCard from "../components/JobCard";

const AllJobs = () => {
  const data = useLoaderData(); // data is an array of job objects
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setFilteredJobs(data.filter(job => job.status === "active"));
    setLoading(false);
  }, [data]);

  const handleSearch = () => {
    let jobs = data.filter(job => job.status === "active");

    // Search by title
    if (searchQuery) {
      jobs = jobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Filter by Job Type
    if (jobTypeFilter) {
      jobs = jobs.filter(job => job.jobType.toLowerCase() === jobTypeFilter.toLowerCase());
    }

    // Filter by Experience
    if (experienceFilter) {
      jobs = jobs.filter(job => (job.experienceLevel || "").toLowerCase() === experienceFilter.toLowerCase());
    }

    // Filter by Salary
    if (salaryMin) {
      jobs = jobs.filter(job => job.salaryRange.min >= Number(salaryMin));
    }
    if (salaryMax) {
      jobs = jobs.filter(job => job.salaryRange.max <= Number(salaryMax));
    }

    // Sort by deadline
    jobs.sort((a, b) => {
      const dateA = new Date(a.applicationDeadline);
      const dateB = new Date(b.applicationDeadline);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredJobs(jobs);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery, jobTypeFilter, experienceFilter, salaryMin, salaryMax, sortOrder]);

  if (loading) return <p className="text-center mt-8">Loading jobs...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Job Posts</h1>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title"
          className="border p-2 col-span-1 md:col-span-2"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <select className="border p-2" value={jobTypeFilter} onChange={e => setJobTypeFilter(e.target.value)}>
          <option value="">All Job Types</option>
          <option value="fullTime">Full-Time</option>
          <option value="part-Time">Part-Time</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select className="border p-2" value={experienceFilter} onChange={e => setExperienceFilter(e.target.value)}>
          <option value="">All Experience</option>
          <option value="entry">Entry</option>
          <option value="internship">Internship</option>
          <option value="junior">Junior</option>
          <option value="midlevel">Midlevel</option>
          <option value="senior">Senior</option>
        </select>
        <input
          type="number"
          placeholder="Min Salary"
          className="border p-2"
          value={salaryMin}
          onChange={e => setSalaryMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Salary"
          className="border p-2"
          value={salaryMax}
          onChange={e => setSalaryMax(e.target.value)}
        />
        <button className="border p-2 flex items-center gap-2" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          <SortAsc /> {sortOrder === "asc" ? "Deadline Asc" : "Deadline Desc"}
        </button>
      </div>

      {/* Job Cards */}
      {filteredJobs.length === 0 ? (
        <p className="text-center text-red-500 font-bold">No Jobs Available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map(job => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJobs;
