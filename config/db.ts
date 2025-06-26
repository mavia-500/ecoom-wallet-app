// 

// yaCOao3y3TKCkS8Z

import mongoose from 'mongoose';

const MONGODB_URI: string  = process.env.MONGO_URI || "";


if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}


async function dbConnect() {
    if (cached.conn) {
      return cached.conn;
    }
    if (!cached.promise) {
      const opts = {
        bufferCommands: false, // Disables Mongoose's buffering of commands until connection is established
      };
  
      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        console.log('connected successfully')
        return mongoose;
      });
    }
    cached.conn = await cached.promise;
    return cached.conn;
  }
  
  export default dbConnect;