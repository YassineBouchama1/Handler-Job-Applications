export async function getJobById(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch job");
  return response.json();
}



export async function getJobs(search?: string, company?: string) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (company) params.set("company", company);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs?${params}`,
    {
      next: { revalidate: 0 },
    }
  );
  return res.json();
}