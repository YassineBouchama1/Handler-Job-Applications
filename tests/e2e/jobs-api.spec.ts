import request from "supertest";


const BASE_URL = "http://localhost:3000";

describe("Jobs API", () => {

  it("GET /api/jobs - should return a list of jobs", async () => {
    const response = await request(BASE_URL).get("/api/jobs");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeGreaterThan(0);
  });


  it("GET /api/jobs?search=engineer - should return filtered jobs", async () => {
    const response = await request(BASE_URL).get("/api/jobs?search=engineer");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    response.body.forEach((job: any) => {
      expect(
        job.title.toLowerCase().includes("engineer") ||
          job.location.toLowerCase().includes("engineer") ||
          job.desc.toLowerCase().includes("engineer")
      ).toBeTruthy();
    });
  });

 
  it("GET /api/jobs?company=Tech Corp - should return jobs by company", async () => {
    const response = await request(BASE_URL).get("/api/jobs?company=Tech Corp");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    response.body.forEach((job: any) => {
      expect(job.company.toLowerCase()).toBe("tech corp");
    });
  });

 
  it("GET /api/jobs/1 - should return a job with ID 1", async () => {
    const response = await request(BASE_URL).get("/api/jobs/1");
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });


  it("GET /api/jobs/999 - should return 404 if job not found", async () => {
    const response = await request(BASE_URL).get("/api/jobs/999");
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Job not found");
  });
});
