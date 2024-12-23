/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import Document, { DocumentType } from "@/models/Document";
import dbConnect from "@/lib/mongodb";
import { s3Client } from "@/lib/aws-config";
import { uploadToS3 } from "@/lib/s3-operations";



// async function uploadToS3(file: Buffer, key: string, contentType: string) {
//     const command = new PutObjectCommand({
//         Bucket: process.env.S3_BUCKET_NAME!,
//         Key: key,
//         Body: file,
//         ContentType: contentType,
//     });

//     await s3Client.send(command);
//     return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
// }



// POST handler
export async function POST(request: Request) {
    try {
        await dbConnect();




        const formData = await request.formData();
        const file = formData.get("file") as File;
        const documentType = DocumentType.RESUME;
        // const documentType = formData.get("documentType") as DocumentType;
        const documentName = formData.get("documentName") as string;
        const applicationId = formData.get("applicationId") as string;




        if (!file || !documentType || !documentName || !applicationId) {
            return NextResponse.json(
                { error: "File and document type & name and applicationId are required" },
                { status: 400 }
            );
        }

        if (!Object.values(DocumentType).includes(documentType)) {
            return NextResponse.json(
                { error: "Invalid document type" },
                { status: 400 }
            );
        }


    

      

        // Validate file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json(
                { error: "File size exceeds 5MB limit" },
                { status: 400 }
            );
        }


        // Upload to S3
        const buffer = Buffer.from(await file.arrayBuffer());
        const s3Key = `documents/${documentType}/${applicationId}/${Date.now()}-${file.name}`;
        const s3Url = await uploadToS3(buffer, s3Key, file.type);



        // Create document
        const document = await Document.create({
            applicationId: applicationId,
            fileName: documentName, 
            fileSize: file.size,
            fileType: file.type,
            documentType,
            s3Key,
            s3Url,
            
        });



       // return pdf link
        return NextResponse.json({ ...document.toObject(), s3Url }, { status: 201 });
    } catch (error) {
        console.error("POST Document Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
