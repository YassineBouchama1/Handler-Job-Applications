import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {


    // This will ensure that the global object has a mongoose property
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache | undefined;
}

// initialize cached with a default value if it doesnt exist
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
    console.log('db connected');

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        }).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

// assign the cached object back to global.mongoose
global.mongoose = cached;

export default dbConnect;



// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI!);
//         console.log(`Successfully connected to mongoDB 🥂`);
//     } catch (error: { message: string }) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };

// export default connectDB;
