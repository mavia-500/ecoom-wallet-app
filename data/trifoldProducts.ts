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

const trifoldProducts: Product[] = [
  {
    id: 1,
    title: "Coin Pocket Lether Wallet",
    description:
      "8 Card slots. 2 Cash Compartment. 1 Id compartment. 100% Lether. Best for use",
    image: [
      "/assets/trifold/Gemini_Generated_Image_ao448yao448yao44.webp",
      "/assets/trifold/Gemini_Generated_Image_w3y513w3y513w3y5.webp",
    ],
    color: "Navy Blue",
    price: 3000,
    discountedPrice: 200,
    reviews: generateReviews(1, "trifold"),
  },
  {
    id: 2,
    title: "Zipper Leather Wallet",
    description:
      "Ziper Compartment. Card Slots. Cash Compartment. 100% Leather. Best For travelers",
    image: [
      "/assets/trifold/Gemini_Generated_Image_4301ll4301ll4301.webp",
      "/assets/trifold/Gemini_Generated_Image_nrs5acnrs5acnrs5.webp",
    ],
    color: "Brown",
    price: 2700,
    discountedPrice: 200,
    reviews: generateReviews(2, "trifold"),
  },
  {
    id: 3,
    title: "trifold Leather Wallet",
    description:
      "Trifold Wallet. Easy to Carry. Hard Leather. Card Slots. Cash Compartment. Unique Style",
    image: ["/assets/trifold/17.webp", "/assets/trifold/16.webp"],
    color: "Grennish Brown",
    price: 3000,
    discountedPrice: 250,
    reviews: generateReviews(3, "trifold"),
  },
];

export default trifoldProducts;
