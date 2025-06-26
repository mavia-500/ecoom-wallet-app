import mongoose, { model, models,Document } from "mongoose";
import { Schema } from "mongoose";

interface formdata extends Document {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    province: string;
    city: string;
    notes: string;
  }


const orderSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter Your Name please"],
  },
  email: {
    type: String,
  },

  phone: {
    type: String,
    required: [
      true,
      "Enter the phone Number Please to contact you if any problem in delivery",
    ],
  },
  address: {
    type: String,
    required: [true, "Adress is required for delivery"],
  },

  province: {
    type: String,
    required: [true, "Province is required for delivery"],
  },

  city: {
    type: String,
    required: [true, "city is required for delivery"],
  },

  notes: {
    type: String,
  },
});

const Orders=models.order || model<formdata>('orders',orderSchema)

export default Orders
