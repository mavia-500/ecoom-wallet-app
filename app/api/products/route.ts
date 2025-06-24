import dbConnect from "@/config/db";
import Products from "@/models/products";
import { NextResponse } from "next/server";
// import { POST } from "../admin/route";

export const POST = async (req: Request) => {
  try {
    const {
      name,
      description,
      category,
    //   images,
      color,
      price,
      discountedPrice,
    } = await req.json();
console.log(req.json())
    if (!name && !description && !category  && !color && !price) {
      return NextResponse.json(
        { message: "all the fields are required" },
        { status: 401 }
      );
    }
    if (discountedPrice > price) {
      return NextResponse.json(
        { message: "Discounted price must be less than actual price" },
        { status: 402 }
      );
    }

    await dbConnect();
    try {
      const product = await Products.create({
        name,
        description,
        category,
        // images,
        color,
        price,
        discountedPrice,
      });

      return NextResponse.json(
        {message:'product created successfully'},
        {status:200}
      )
    } catch (error:any) {
console.log("error occured while connecting")
    }
  } catch (error:any) {
    console.log(error)
  }
};