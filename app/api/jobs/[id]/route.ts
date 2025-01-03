import { JobsData } from "@/dummydata/jobs";
import { NextResponse } from "next/server";

/**
 * @openapi
 * /api/jobs/{id}:
 *   get:
 *     summary: Retrieve a specific job by its ID.
 *     description: Returns a single job object that matches the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the job to retrieve.
 *     responses:
 *       200:
 *         description: A job object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 title:
 *                   type: string
 *                   example: "Software Engineer"
 *                 company:
 *                   type: string
 *                   example: "Tech Corp"
 *                 location:
 *                   type: string
 *                   example: "Remote"
 *                 desc:
 *                   type: string
 *                   example: "We are looking for a skilled software engineer..."
 *                 salary:
 *                   type: string
 *                   example: "$100,000 - $120,000"
 *                 postedAt:
 *                   type: string
 *                   example: "2023-10-01"
 *       404:
 *         description: Job not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Job not found"
 */

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
