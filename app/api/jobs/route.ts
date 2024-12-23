import { JobsData } from "@/dummydata/jobs";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("search")?.toLowerCase() || "";
  const company = searchParams.get("company")?.toLowerCase() || "";

  let filteredJobs = [...JobsData];

  if (company) {
    filteredJobs = filteredJobs.filter(
      (job) => job.company.toLowerCase() === company
    );
  }

  if (query) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.desc.toLowerCase().includes(query)
    );
  }

  console.log(filteredJobs);
  return NextResponse.json(filteredJobs);
}
