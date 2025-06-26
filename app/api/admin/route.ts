import { NextResponse } from "next/server";
import dbConnect from "@/config/db";
import Admin from "@/models/admin";
import jwt from "jsonwebtoken"; // Import jsonwebtoken

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    await dbConnect(); // Establish database connection
    //
    try {
      const admin = await Admin.findOne({ email });
     
      const isPasswordValid = admin.password === password; 
      if (!isPasswordValid) {
        return NextResponse.json(
          { error: "Please Enter the correct password" },
          { status: 401 } // Unauthorized
        );
      }

    //   return NextResponse.json(
    //     {
    //       message: "login successfull",
    //     },
    //     { status: 200 }
    //   );

    const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Store this in an environment variable! 
    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: "admin" }, //
      JWT_SECRET,
      { expiresIn: "3h" }
    );

    return NextResponse.json(
      {
        message: "Login successful",
        token: token, // Send the token back to the client
        admin: {
          id: admin._id,
          email: admin.email,
          // You might want to send other non-sensitive admin details
        },
      },
      { status: 200 }
    );
    } catch (dbError) {
      console.error("Database query error during sign-in:", dbError);
      return NextResponse.json(
        { error: "Internal server error during authentication" },
        { status: 500 } // Internal Server Error
      );
    }
    // --- End: Mongoose/MongoDB integration placeholder ---
  } catch (error) {
    // Handle errors in parsing the request body (e.g., if it's not valid JSON)
    console.error("Error parsing request body:", error);
    return NextResponse.json(
      { error: "Invalid request body format" },
      { status: 400 } // Bad Request
    );
  }
}
