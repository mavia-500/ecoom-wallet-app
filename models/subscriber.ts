import { model, models, Schema, Document } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  createdAt: Date;
}

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

const Subscriber =
  models.Subscriber || model<ISubscriber>("Subscriber", subscriberSchema);

export default Subscriber;
