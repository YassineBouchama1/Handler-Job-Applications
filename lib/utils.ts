import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}



export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));







export const formatDate = (date: Date): string => {
    return format(date, 'dd.MM.yyyy');
};




// this is helper function to safely serialize the MongoDB document
export function serializeDocument(doc: any) {
  const plainObject = JSON.parse(JSON.stringify(doc));
  
  if (plainObject._id) {
    plainObject.id = plainObject._id.toString();
    delete plainObject._id;
  }
  
  // here i remove MongoDB specific fields if they exist
  delete plainObject.__v;
  
  return plainObject;
}