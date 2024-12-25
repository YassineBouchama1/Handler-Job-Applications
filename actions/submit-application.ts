"use server";

import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import dbConnect from "@/lib/mongodb";
import { Application } from "@/models/Application";
import { uploadToS3 } from "@/lib/s3-operations";
import { DocumentType } from "@/models/Document";
import { serializeDocument } from "@/lib/utils";

export async function submitApplication(formData: FormData) {
  try {
    // Connect to database
    await dbConnect();

    // Handle resume file upload
    const file = formData.get("resume") as File;
    const jobId = formData.get("jobId") as string;

    if (!file) {
      throw new Error("Resume file is required");
    }

    // Upload to S3
    //TODO : i will change this with AWS S3
    const buffer = Buffer.from(await file.arrayBuffer());
    const s3Key = `documents/${DocumentType.RESUME}/${Date.now()}-${file.name}`;
    const s3Url = await uploadToS3(buffer, s3Key, file.type);


    console.log(s3Url);
    // Create application in database
    const application = await Application.create({
      jobId: parseInt(jobId),
      fullName: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      resumeUrl: s3Url,
      coverLetter: formData.get("coverLetter"),
    });

    revalidatePath(`/jobs/${jobId}`);

    return {
      success: true,
      message: "Application submitted successfully!",
      data: serializeDocument(application), // Serialize the application document
    };
  } catch (error) {
    console.error("Application submission error:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to submit application",
    };
  }
}
