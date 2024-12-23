import { getJobById } from "@/actions/jobs";

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJobById(parseInt(params.id));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <div className="mt-4">
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
        <p className="mt-4">{job.desc}</p>
      </div>
    </div>
  );
}
