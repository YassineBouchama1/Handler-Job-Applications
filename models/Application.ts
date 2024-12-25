import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  jobId: number;
  fullName: string;
  email: string;
  phone?: string;
  resumeUrl: string;
  coverLetter?: string;
  status: "pending" | "reviewed" | "accepted" | "rejected";
  createdAt: Date;
}

const ApplicationSchema = new Schema<IApplication>({
  jobId: { type: Number, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  resumeUrl: { type: String, required: true },
  coverLetter: { type: String },
  status: {
    type: String,
    enum: ["pending", "reviewed", "accepted", "rejected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export const Application =
  mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);
