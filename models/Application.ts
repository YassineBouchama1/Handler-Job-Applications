import mongoose, { Schema, Document } from 'mongoose';




export enum ApplicationStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected'
}




//  interface name and properties
export interface IApplication extends Document {
    _id: mongoose.Types.ObjectId;
    email: string;
    name: string;
    status: ApplicationStatus;
    updatedAt: Date;
    createdAt: Date;

}


const ApplicationSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    status: { 
        type: String,
        enum: Object.values(ApplicationStatus),
        required: true
    },


}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Index for faster queries
ApplicationSchema.index({ userId: 1, applicationType: 1 });


const ApplicationModel = mongoose.models?.Application || mongoose.model<IApplication>('Application', ApplicationSchema);

export default ApplicationModel;