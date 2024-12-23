import mongoose, { Schema, Document } from 'mongoose';




export enum ApplicationType {
    JOB_APPLICATION = 'jobApplication',
    INTERVIEW_FEEDBACK = 'interviewFeedback'
}

//  interface name and properties
export interface IApplication extends Document {
    _id: mongoose.Types.ObjectId;
    email: string;
    name: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    applicationType: ApplicationType; 
    s3Key: string;
    s3Url: string;

}

// Change the schema name and fields
const ApplicationSchema: Schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    fileSize: {
        type: Number,
        required: true
    },
    fileType: {
        type: String,
        required: true,
        enum: ALLOWED_FILE_TYPES
    },
    applicationType: { // Change from documentType
        type: String,
        enum: Object.values(ApplicationType),
        required: true
    },
    s3Key: {
        type: String,
        required: true,
        unique: true
    },
    s3Url: {
        type: String,
        required: true
    },
    isDefault: {
        type: Boolean,
        default: false
    },
    timesUsed: {
        type: Number,
        default: 0
    },
    lastUsed: {
        type: Date
    },
    positionApplied: { // New field
        type: String,
        required: true
    },
    companyName: { // New field
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Index for faster queries
ApplicationSchema.index({ userId: 1, applicationType: 1 });

// Update model name
const ApplicationModel = mongoose.models?.Application || mongoose.model<IApplication>('Application', ApplicationSchema);

export default ApplicationModel;