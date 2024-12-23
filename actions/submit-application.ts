"use server";

import { revalidatePath } from "next/cache";

export async function submitApplication(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Here you would typically save the application to a database
  // and handle the file upload

  // For demonstration, we'll just log the form data
  console.log("Application submitted:", Object.fromEntries(formData));

  // Revalidate the page to show the success message
  revalidatePath("/job-offer");

  return { success: true, message: "Application submitted successfully!" };
}
