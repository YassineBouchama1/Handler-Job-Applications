import mongoose, { Schema, Document } from 'mongoose';

// Define document types and their statuses
export enum DocumentType {
    RESUME = 'resume',
    COVER_LETTER = 'coverLetter'
}

// Define allowed file types
const ALLOWED_FILE_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

export interface IDocument extends Document {
    _id: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    fileName: string;
    fileSize: number;
    fileType: string;
    documentType: DocumentType;
    s3Key: string;
    s3Url: string;
    updatedAt: Date;
    createdAt: Date;


}

const DocumentSchema: Schema = new Schema({
    applicationId: {
        type: Schema.Types.ObjectId,
        ref: 'Application',
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
    documentType: {
        type: String,
        enum: Object.values(DocumentType),
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
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});



// Index for faster queries
DocumentSchema.index({ userId: 1, documentType: 1 });

// Make sure to use the same model name in both places
const DocumentModel = mongoose.models?.Document || mongoose.model<IDocument>('Document', DocumentSchema);

export default DocumentModel;