import { NextResponse } from "next/server";
// import Orders from "@/models/order";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const orderId = uuidv4();

  const user = process.env.EMAIL_USER; // Your admin email address
  const pass = process.env.EMAIL_PASS;
  console.log("user", user);
  console.log("pass", pass);
  const body = await req.json();
  console.log(body.formData);
  const { fullName, phone, email, address, province, city } = body.formData;
  const { id, title, image, discountedPrice, price, color } = body.itemData;
  const finalPrice = price - discountedPrice;

  if (!fullName || !phone || !address || !province || !city) {
    return NextResponse.json(
      {
        message:
          "All the fields are required Except Email and Additional Note Please Enter All the Remaining Fields to place order or contact on Whats'ápp",
      },
      { status: 401 }
    );
  } else {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail", // You can use other services like 'Outlook', 'SendGrid', etc.
        auth: {
          user: process.env.EMAIL_USER, // Your admin email address
          pass: process.env.EMAIL_PASS, // Your admin email password or app-specific password
        },
      });

      let emailContent = `
        <h3>New Order Details:</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Province:</strong> ${province}</p>
        <p><strong>City:</strong> ${city}</p>
<p><strong>Order ID:</strong> ${orderId}</p>
        <h3>item Details:</h3>
        <p><strong>id:</strong> ${id}</p>
        <p><strong>Item Title:</strong> ${title}</p>
        <p><strong>Image:</strong> ${image}</p>
        <p><strong>Price:</strong> ${finalPrice}</p>
        <p><strong>Color:</strong> ${color}</p>
        
      `;
      // console.log(emailContent)
      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: process.env.ADMIN_EMAIL, // Admin's email address
        subject: "New Order Placed!",
        html: emailContent,
      };
      console.log(process.env.EMAIL_USER, process.env.ADMIN_EMAIL);

      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: "Order place Successfullty!", orderId },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Failed to place order Please contact on What's app." },
        { status: 500 }
      );
    }
  }
}
