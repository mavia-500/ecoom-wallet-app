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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928445/Gemini_Generated_Image_ao448yao448yao44_z3n7tj.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928463/WhatsAppImage2025-04-04at9.11.55AM_wxsxzw.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928444/Gemini_Generated_Image_4301ll4301ll4301_lkx1ft.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928448/Gemini_Generated_Image_nrs5acnrs5acnrs5_dvhfqg.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928443/Gemini_Generated_Image_3g4hf3g4hf3g4hf3_sarcxo.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928524/Gemini_Generated_Image_yy72gkyy72gkyy72_gw6d9d.webp",
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
    image: [
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928519/15_byiuhw.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928522/18_saak2f.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928521/17_szzdkx.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928518/14_wcqc86.webp",
    ],
    color: "Grennish Brown",
    price: 3000,
    discountedPrice: 250,
    reviews: generateReviews(3, "trifold"),
  },
];

export default trifoldProducts;
