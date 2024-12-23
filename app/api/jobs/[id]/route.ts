import { JobsData } from "@/dummydata/jobs";
import { NextResponse } from "next/server";


export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const job = JobsData.find((job) => job.id === id);

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  return NextResponse.json(job);
}
