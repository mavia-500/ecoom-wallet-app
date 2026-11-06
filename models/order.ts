import mongoose, { model, models, Document } from "mongoose";
import { Schema } from "mongoose";

interface OrderItem {
  id?: number | string;
  title: string;
  color?: string;
  qty: number;
  unit: number;
  lineTotal: number;
}

export interface OrderDocument extends Document {
  orderId: string;
  fullName: string;
  phone: string;
  address: string;
  province: string;
  city: string;
  notes?: string;
  items: OrderItem[];
  subtotal: number;
  delivery: number;
  total: number;
  emailed: boolean;
}

const orderSchema = new Schema(
  {
    orderId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    notes: { type: String },
    items: { type: Array, default: [] },
    subtotal: { type: Number, required: true },
    delivery: { type: Number, required: true },
    total: { type: Number, required: true },
    emailed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Orders = models.orders || model<OrderDocument>("orders", orderSchema);

export default Orders;
