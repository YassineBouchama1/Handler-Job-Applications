"use server";

import dbConnect from "@/lib/mongodb";
import { Application } from "@/models/Application";
import { revalidatePath } from "next/cache";

export async function updateApplicationStatus(id: string, status: string) {
  try {
    await dbConnect();
    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    revalidatePath("/applications");
    return { success: true, data: updatedApplication };
  } catch (error) {
    console.error("Error updating application status:", error);
    return { success: false, error: "Failed to update application status" };
  }
}
