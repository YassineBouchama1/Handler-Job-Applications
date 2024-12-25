"use server";


import dbConnect from "@/lib/mongodb";
import { Application } from "@/models/Application";

export async function getApplications() {
  try {
    await dbConnect();
    const applications = await Application.find().sort({ createdAt: -1 });
    return { success: true, data: applications };
  } catch (error) {
    console.error("Error fetching applications:", error);
    return { success: false, error: "Failed to fetch applications" };
  }
}
