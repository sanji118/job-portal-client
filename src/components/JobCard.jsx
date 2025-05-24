
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();


  return (
    <div className="border rounded-lg shadow p-6 bg-white">
      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Job Type:</strong> {job.jobType}</p>
      <p><strong>Category:</strong> {job.category}</p>
      <p><strong>Deadline:</strong> {job.applicationDeadline}</p>
      <p>
        <strong>Salary Range:</strong> {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
      </p>
      <button
        onClick={() => navigate(`/jobs/${job._id}`)}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Details
      </button>
    </div>
  );
}
