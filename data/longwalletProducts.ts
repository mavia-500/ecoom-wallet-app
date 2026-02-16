import { generateReviews, Review } from "./reviews";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
  reviews: Review[];
}

const longwalletProducts: Product[] = [
  {
    id: 1,
    title: "Leather Long Wallet",
    description:
      "Premium leather wallet with  and multiple card slots.Cash Comkpartment. Easy to carry. Elegent Look. Most Attractive Personality maker",
    image: [
      "/assets/longwallet/Gemini_Generated_Image_7pywpy7pywpy7pyw (1).webp",
      "/assets/longwallet/Gemini_Generated_Image_kq5az0kq5az0kq5a.webp",
    ],
    color: "Brown",
    price: 2700,
    discountedPrice: 300,
    reviews: generateReviews(1, "longwallet"),
  },
  {
    id: 2,
    title: "Attractive Leather Wallet",
    description:
      "Sleek design with quick-access card slot and cash compartment. Beautiful Look. Easy to Carry. 100% Leather. Best for use",
    image: [
      "/assets/longwallet/Gemini_Generated_Image_u1tyxfu1tyxfu1ty.webp",
      "/assets/longwallet/Gemini_Generated_Image_hllx88hllx88hllx.webp",
    ],
    color: "Black",
    price: 1500,
    discountedPrice: 50,
    reviews: generateReviews(2, "longwallet"),
  },
  {
    id: 2,
    title: "Original Leather Wallet",
    description:
      "Sleek design with quick-access card slot and cash compartment. Beautiful Look. Easy to Carry. 100% Leather. Best for use. Top to Bottom Lether ",
    image: [
      "/assets/longwallet/Gemini_Generated_Image_qp8oiqp8oiqp8oiq.webp",
      "/assets/longwallet/Gemini_Generated_Image_r2ddlgr2ddlgr2dd.webp",
    ],
    color: "Brown",
    price: 2900,
    discountedPrice: 300,
    reviews: generateReviews(3, "longwallet"),
  },
];

export default longwalletProducts;
