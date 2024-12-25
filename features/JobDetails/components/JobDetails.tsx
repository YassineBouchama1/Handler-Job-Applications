import { Job } from "@/types/jobs";
import { BiMapPin } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { LuBuilding2 } from "react-icons/lu";

interface JobOfferDetailsProps {
  job: Job;
}

export function JobOfferDetails({ job }: JobOfferDetailsProps) {



  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-6 text-gray-500">
          <div className="flex items-center space-x-2">
            <CgLock className="h-5 w-5" />
            <span>Posted {job.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiMapPin className="h-5 w-5" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LuBuilding2 className="h-5 w-5" />
            <span>{job.company}</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Job Description</h2>
        <p className="text-gray-600 leading-relaxed">{job.desc}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Requirements</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>5+ years of experience in {job.title} role</li>
          <li>Strong knowledge of modern web technologies</li>
          <li>Excellent problem-solving skills</li>
          <li>Great communication and team collaboration</li>
          <li>Bachelor's degree in Computer Science or related field</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Competitive salary",
            "Health insurance",
            "Remote work options",
            "Flexible hours",
            "Professional development",
            "Annual bonus",
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-600"
            >
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
