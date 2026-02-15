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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928347/Gemini_Generated_Image_7pywpy7pywpy7pyw_lpwfxi.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928347/Gemini_Generated_Image_kq5az0kq5az0kq5a_cexwim.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928347/Gemini_Generated_Image_7pywpy7pywpy7pyw_1_ynsgcn.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928348/Gemini_Generated_Image_y029djy029djy029_tkwaqz.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928348/Gemini_Generated_Image_u1tyxfu1tyxfu1ty_z16hr4.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928348/IMG_20250427_224015_533_cj4ekz.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928465/Gemini_Generated_Image_hllx88hllx88hllx_tphmsq.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928466/Gemini_Generated_Image_l82ljxl82ljxl82l_ivbhs8.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928348/Gemini_Generated_Image_qp8oiqp8oiqp8oiq_xgkrgr.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928347/Gemini_Generated_Image_ihzjunihzjunihzj_fttyax.webp",
    ],
    color: "Brown",
    price: 2900,
    discountedPrice: 300,
    reviews: generateReviews(3, "longwallet"),
  },
];

export default longwalletProducts;
