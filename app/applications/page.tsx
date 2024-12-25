import { getApplications } from "@/actions/get-applications";
import { ApplicationsList } from "./applications-list";


export default async function ApplicationsPage() {
  const { success, data: applications, error } = await getApplications();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Job Applications
        </h1>
        {success ? (
          <ApplicationsList applications={applications} />
        ) : (
          <div className="bg-red-50 text-red-800 p-4 rounded-md">
            {error || "An error occurred while fetching applications."}
          </div>
        )}
      </div>
    </div>
  );
}
