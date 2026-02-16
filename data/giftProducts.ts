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

const giftProducts: Product[] = [
  {
    id: 1,
    title: "Gift Leather  Wallet & Key Chain",
    description:
      "Premium leather wallet  and multiple card slots. Key Chain in laether. Best For your Loved ones.Unforgetabble for your loved Ones",
    image: ["/assets/gifts/11.webp", "/assets/gifts/10.webp"],
    color: "Black",
    price: 2600,
    discountedPrice: 400,
    reviews: generateReviews(1, "gift"),
  },
  {
    id: 2,
    title: "Gift For Specail Ones ",
    description:
      "Premium leather wallet one Long Wallet, One medium Wallet, One Card Holde, One Key Chain and multiple card slots. Key Chain in laether. Best For your Loved ones.Unforgetabble for your loved Ones",
    image: [
      "/assets/gifts/IMG_20250501_115818_987.webp",
      "/assets/gifts/IMG_20250501_115800_747.webp",
      "/assets/gifts/IMG_20250501_115709_050.webp",
    ],
    color: "Black",
    price: 5000,
    discountedPrice: 500,
    reviews: generateReviews(2, "gift"),
  },
];

export default giftProducts;
