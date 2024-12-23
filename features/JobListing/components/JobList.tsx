import { Job } from "@/types/jobs";
import { JobCard } from "./JobCard";

interface JobsProps {
  jobs: Job[];
}

export default function Jobs({ jobs }: JobsProps) {
  return (
    <div className="flex gap-10 justify-center flex-wrap items-center py-10">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
