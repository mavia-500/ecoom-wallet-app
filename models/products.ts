import mongoose, { models,Schema ,Document,model} from "mongoose";

export interface Iproduct extends Document {
    name:string,
    description: string,
    category: string,
    images: [],
    color: string,
    price: number,
    discountedPrice: number,

}
const productsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter the Title please"],
  },
  description: {
    type: String,
    required: [true, "Enter the description please"],
  },
  category: {
    type: String,
    required: [true, "Enter the category please"],
  },
  images: {
    // required: true,
  },
  color: {
    type: String,
    required: [true],
  },
  price: {
    type: String,
    required: true,
  },
  discountedPrice: {
    type: String,
  },
});

const Products=models.products || model<Iproduct>('products',productsSchema)

export default Products