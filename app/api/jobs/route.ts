import { JobsData } from "@/dummydata/jobs";
import { NextResponse } from "next/server";

/**
 * @openapi
 * /api/jobs:
 *   get:
 *     summary: Retrieve a list of jobs filtered by search query and company.
 *     description: Returns a list of jobs that match the provided search query and company filter.
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: A search term to filter jobs by title, location, or description.
 *       - in: query
 *         name: company
 *         schema:
 *           type: string
 *         description: A company name to filter jobs by.
 *     responses:
 *       200:
 *         description: A list of filtered jobs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "1"
 *                   title:
 *                     type: string
 *                     example: "Software Engineer"
 *                   company:
 *                     type: string
 *                     example: "Tech Corp"
 *                   location:
 *                     type: string
 *                     example: "Remote"
 *                   desc:
 *                     type: string
 *                     example: "We are looking for a skilled software engineer..."
 *                   salary:
 *                     type: string
 *                     example: "$100,000 - $120,000"
 *                   postedAt:
 *                     type: string
 *                     example: "2023-10-01"
 */

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
