import { getJobById } from "@/actions/jobs";
import { JobOfferDetails } from "@/features/JobDetails/components/JobDetails";
import { ApplicationForm } from "@/features/JobDetails/components/JobForm";

import { notFound } from "next/navigation";

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJobById(parseInt(params.id));

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center space-x-4">
            <div className="h-16 w-16 rounded-lg bg-white p-2 shadow-sm">
              <img
                src={job.image}
                alt={`${job.company} logo`}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
              <p className="text-lg text-gray-600">{job.company}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <JobOfferDetails job={job} />
            </div>
            <div className="lg:col-span-1">
              <ApplicationForm job={job} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
